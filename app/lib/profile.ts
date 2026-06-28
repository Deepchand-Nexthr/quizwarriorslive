import { ProfileData, GuestData, USERNAME_RULES } from "@/components/profile/types";

// ============================================
// EXISTING FUNCTIONS - PRESERVED AS-IS
// ============================================

export function computeLevel(xp: number): number {
  return Math.floor(xp / 1000) + 1;
}

export function getXPForLevel(level: number): number {
  return level * 1000;
}

export function getXPProgress(xp: number): { level: number; nextLevelXP: number; progress: number } {
  const level = computeLevel(xp);
  const nextLevelXP = getXPForLevel(level);
  const prevLevelXP = getXPForLevel(level - 1);
  const progress = ((xp - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100;
  return { level, nextLevelXP, progress };
}

export function getAccuracy(profile: ProfileData): number {
  if (profile.quizzesPlayed === 0) return 0;
  return Math.round((profile.correctAnswers / (profile.quizzesPlayed * 15)) * 100);
}

export function getBestCategory(profile: ProfileData): string {
  if (profile.quizHistory.length === 0) return "—";
  const best = profile.quizHistory.reduce((a, b) =>
    (a.score / a.total > b.score / b.total ? a : b)
  );
  return best.title.replace(" Quiz", "");
}

// ============================================
// NEW FUNCTIONS - ADDED BELOW
// ============================================

// --- Constants ---
const PROFILE_STORAGE_KEY = 'quizwarriors_profile';
const USERNAMES_STORAGE_KEY = 'quizwarriors_usernames';
const GUEST_STORAGE_KEY = 'quizwarriors_guest';

// --- Profile Storage Functions ---

export function getProfile(): ProfileData | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load profile:', error);
  }
  
  return null;
}

export function saveProfile(profile: ProfileData): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
  } catch (error) {
    console.error('Failed to save profile:', error);
  }
}

export function hasProfile(): boolean {
  return getProfile() !== null;
}

// --- Username Functions ---

export function getRegisteredUsernames(): string[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(USERNAMES_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function isUsernameTaken(username: string): boolean {
  const usernames = getRegisteredUsernames();
  return usernames.includes(username.toLowerCase());
}

export function registerUsername(username: string): boolean {
  if (typeof window === 'undefined') return false;
  
  const normalized = username.toLowerCase();
  
  // Validate username format
  if (!USERNAME_RULES.pattern.test(normalized)) {
    return false;
  }
  
  if (normalized.length < USERNAME_RULES.minLength || 
      normalized.length > USERNAME_RULES.maxLength) {
    return false;
  }
  
  // Check if already taken
  if (isUsernameTaken(normalized)) {
    return false;
  }
  
  try {
    const usernames = getRegisteredUsernames();
    usernames.push(normalized);
    localStorage.setItem(USERNAMES_STORAGE_KEY, JSON.stringify(usernames));
    return true;
  } catch (error) {
    console.error('Failed to register username:', error);
    return false;
  }
}

// --- Guest Storage Functions ---

const defaultGuestData: GuestData = {
  xp: 0,
  quizzesPlayed: 0,
  totalScore: 0,
  bestScore: 0,
  lastQuizDate: new Date().toISOString(),
  quizHistory: [],
  migrated: false,
};

export function getGuestProgress(): GuestData {
  if (typeof window === 'undefined') return { ...defaultGuestData };
  
  try {
    const stored = localStorage.getItem(GUEST_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load guest progress:', error);
  }
  
  return { ...defaultGuestData };
}

export function updateGuestProgress(data: Partial<GuestData>): void {
  if (typeof window === 'undefined') return;
  
  try {
    const current = getGuestProgress();
    const updated = {
      ...current,
      ...data,
      lastQuizDate: new Date().toISOString(),
    };
    localStorage.setItem(GUEST_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Failed to update guest progress:', error);
  }
}

export function addGuestQuizResult(
  quizId: string,
  title: string,
  score: number,
  total: number
): void {
  const current = getGuestProgress();
  const accuracy = Math.round((score / total) * 100);
  
  const newEntry = {
    quizId,
    title,
    score,
    total,
    accuracy,
    date: new Date().toISOString(),
  };
  
  const xpEarned = score * 10;
  
  updateGuestProgress({
    xp: current.xp + xpEarned,
    quizzesPlayed: current.quizzesPlayed + 1,
    totalScore: current.totalScore + score,
    bestScore: Math.max(current.bestScore, score),
    quizHistory: [...current.quizHistory, newEntry],
  });
}

export function clearGuestData(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(GUEST_STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear guest data:', error);
  }
}

export function hasGuestData(): boolean {
  const guest = getGuestProgress();
  return guest.quizzesPlayed > 0 || guest.xp > 0;
}

export function isGuestMode(): boolean {
  return !hasProfile();
}

// --- Migration Functions ---

export function migrateGuestToProfile(profile: ProfileData): ProfileData {
  const guest = getGuestProgress();
  
  // Merge guest data into profile
  const migratedProfile: ProfileData = {
    ...profile,
    xp: profile.xp + guest.xp,
    quizzesPlayed: profile.quizzesPlayed + guest.quizzesPlayed,
    // Add guest quiz history to profile history
    quizHistory: [
      ...profile.quizHistory,
      ...guest.quizHistory.map((entry) => ({
        title: entry.title,
        score: entry.score,
        total: entry.total,
        date: entry.date,
      })),
    ],
  };
  
  // Mark guest data as migrated
  updateGuestProgress({ migrated: true });
  
  return migratedProfile;
}