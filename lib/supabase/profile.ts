import { supabase } from './client';
import { ProfileData } from '@/components/profile/types';

export async function createProfile(
  userId: string,
  data: {
    username: string;
    fullName: string;
    country: string;
    avatar: string;
    bio: string;
  }
): Promise<ProfileData> {
  // Check if username is already taken
  const { data: existing, error: checkError } = await supabase
    .from('profiles')
    .select('username')
    .eq('username', data.username.toLowerCase())
    .maybeSingle();

  if (checkError) {
    throw new Error('Failed to check username availability');
  }

  if (existing) {
    throw new Error('Username is already taken');
  }

  // Create profile
  const { data: profile, error } = await supabase
    .from('profiles')
    .insert({
      user_id: userId,
      username: data.username.toLowerCase(),
      display_name: data.fullName,
      country: data.country,
      avatar_url: data.avatar,
      bio: data.bio,
      joined_at: new Date().toISOString(),
      last_login: new Date().toISOString(),
    })
    .select(`
      user_id,
      username,
      display_name,
      country,
      avatar_url,
      bio,
      joined_at,
      last_login
    `)
    .single();

  if (error) {
    throw new Error(`Failed to create profile: ${error.message}`);
  }

  // Also create user_stats entry
  const { error: statsError } = await supabase
    .from('user_stats')
    .insert({
      user_id: userId,
      xp: 0,
      level: 1,
      current_streak: 0,
      longest_streak: 0,
      quizzes_taken: 0,
      questions_answered: 0,
      correct_answers: 0,
      accuracy: 0,
      certificates_earned: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

  if (statsError) {
    // If stats creation fails, delete the profile to maintain consistency
    await supabase.from('profiles').delete().eq('user_id', userId);
    throw new Error(`Failed to create user stats: ${statsError.message}`);
  }

  // Return ProfileData format
  return {
    id: profile.user_id,
    username: profile.username,
    fullName: profile.display_name,
    country: profile.country,
    avatar: profile.avatar_url,
    bio: profile.bio,
    xp: 0,
    streak: 0,
    quizzesPlayed: 0,
    correctAnswers: 0,
    achievements: [],
    badges: [],
    quizHistory: [],
    emailVerified: false,
    isPremium: false,
    createdAt: profile.joined_at,
    lastActiveAt: profile.last_login,
  };
}

export async function checkUsernameAvailability(username: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('profiles')
    .select('username')
    .eq('username', username.toLowerCase())
    .maybeSingle();

  if (error) {
    throw new Error('Failed to check username availability');
  }

  return !data;
}