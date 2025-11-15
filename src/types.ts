export interface TarotCard {
  id: number;
  name: string;
  image: string;
  keywords: string[];
  meanings: {
    upright: string;
    reversed: string;
  };
  numerology: number;
  astrology: string;
}

export type QuestionType = 'image_to_name' | 'name_to_keyword' | 'name_to_number' | 'name_to_astro';

export interface Question {
  cardId: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
  type: QuestionType;
  image?: string;
  explanation?: string;
}

export interface User {
  email: string;
}

export interface GameState {
  user: User | null;
  score: number;
  streakData: {
    count: number;
    lastPlayed: string | null; // ISO date string
  };
  hints: number;
}

export enum GamePhase {
  AUTH = 'AUTH',
  DRAW = 'DRAW',
  LEARN = 'LEARN',
  QUIZ = 'QUIZ',
  RESULTS = 'RESULTS',
}