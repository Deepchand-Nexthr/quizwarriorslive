import { supabase } from './client';
import { GuestData } from '@/components/profile/types';

const GUEST_STORAGE_KEY = 'quizwarrior_guest';

function getGuestData(): GuestData | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(GUEST_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load guest data:', error);
  }

  return null;
}

function saveGuestData(data: GuestData): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(GUEST_STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save guest data:', error);
  }
}

export async function saveQuizResult(
  userId: string | null,
  quizId: string,
  quizTitle: string,
  score: number,
  totalQuestions: number
): Promise<void> {
  const accuracy = Math.round((score / totalQuestions) * 100);
    const xpEarned = score * 10;

  if (!userId) {
    // Guest mode - save to localStorage
    const guestData = getGuestData() || {
      xp: 0,
      quizzesPlayed: 0,
      totalScore: 0,
      bestScore: 0,
      lastQuizDate: new Date().toISOString(),
      quizHistory: [],
      migrated: false,
    };

    const newEntry = {
      quizId,
      title: quizTitle,
      score,
      total: totalQuestions,
      accuracy,
      date: new Date().toISOString(),
    };

    saveGuestData({
      ...guestData,
      xp: guestData.xp + xpEarned,
      quizzesPlayed: guestData.quizzesPlayed + 1,
      totalScore: guestData.totalScore + score,
      bestScore: Math.max(guestData.bestScore, score),
      lastQuizDate: new Date().toISOString(),
      quizHistory: [...guestData.quizHistory, newEntry],
    });

    return;
  }

  // Authenticated user - save to Supabase
  // 1. Insert quiz result
  console.log("Saving Quiz Result...");
  const { error: insertError } = await supabase
    .from('quiz_results')
    .insert({
         user_id: userId,
     player_name: null,
      category_slug: quizId,
      quiz_title: quizTitle,
      score: score,
      total_questions: totalQuestions,
      accuracy: accuracy,
      created_at: new Date().toISOString(),
    });
    console.log("Insert Error:", insertError);

  if (insertError) {
    throw new Error(`Failed to save quiz result: ${insertError.message}`);
  }

  // 2. Get current user_stats
  const { data: currentStats, error: fetchError } = await supabase
    .from('user_stats')
    .select(`
xp,
level,
quizzes_taken,
questions_answered,
correct_answers,
accuracy
`)
    .eq('user_id', userId)
    .single();

  if (fetchError) {
    throw new Error(`Failed to fetch user stats: ${fetchError.message}`);
  }

  // 3. Calculate new stats
  const newQuizzesTaken = (currentStats?.quizzes_taken || 0) + 1;
  const newQuestionsAnswered = (currentStats?.questions_answered || 0) + totalQuestions;
  const newCorrectAnswers = (currentStats?.correct_answers || 0) + score;
  const newXp = (currentStats?.xp || 0) + xpEarned;
  const newLevel = Math.floor(newXp / 1000) + 1;
  const newAccuracy =
  newQuestionsAnswered === 0
    ? 0
    : Math.round((newCorrectAnswers / newQuestionsAnswered) * 100);

  // 4. Update user_stats
  const { error: updateError } = await supabase
    .from('user_stats')
   .update({
  xp: newXp,
  level: newLevel,
  quizzes_taken: newQuizzesTaken,
  questions_answered: newQuestionsAnswered,
  correct_answers: newCorrectAnswers,
  accuracy: newAccuracy,
  updated_at: new Date().toISOString(),
})
    .eq('user_id', userId);
    console.log("Update Error:", updateError);

  if (updateError) {
    throw new Error(`Failed to update user stats: ${updateError.message}`);
  }
}

export async function getAuthenticatedUser(): Promise<string | null> {
  const { data: { user } } = await supabase.auth.getUser();
  return user?.id || null;
}