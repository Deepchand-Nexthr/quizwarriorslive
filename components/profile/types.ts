export interface Achievement {
  id: string;
  name: string;
  icon: string;
  earned: boolean;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
}

export interface QuizHistory {
  title: string;
  score: number;
  total: number;
  date: string;
}

export interface ProfileData {
  id?: string;

  username: string;
  fullName: string;
  country: string;
  avatar: string;
  bio: string;

  xp: number;
  streak: number;
  quizzesPlayed: number;
  correctAnswers: number;

  achievements: Achievement[];
  badges: Badge[];
  quizHistory: QuizHistory[];

  emailVerified?: boolean;
  isPremium?: boolean;
  createdAt?: string;
  lastActiveAt?: string;
}

export interface XPStats {
  level: number;
  currentXP: number;
  nextLevelXP: number;
  progress: number;
}
export interface GuestQuizHistory {
  quizId: string;
  title: string;
  score: number;
  total: number;
  accuracy: number;
  date: string;
}

export interface GuestData {
  xp: number;
  quizzesPlayed: number;
  totalScore: number;
  bestScore: number;
  lastQuizDate: string;
  quizHistory: GuestQuizHistory[];
  migrated: boolean;
}

export const USERNAME_RULES = {
  minLength: 3,
  maxLength: 20,
  pattern: /^[a-zA-Z0-9_]+$/,
};