import { useState, useEffect, useCallback } from 'react';
import { GameState, User } from '../types';

const STORAGE_PREFIX = 'arcanaQuest_';
const GAME_STATE_KEY = `${STORAGE_PREFIX}gameState`;

const getInitialState = (): GameState => {
  if (typeof window === 'undefined') {
    return {
      user: null,
      score: 0,
      streakData: { count: 0, lastPlayed: null },
      hints: 3,
    };
  }

  try {
    const savedState = localStorage.getItem(GAME_STATE_KEY);
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (error) {
    console.error('Failed to parse game state from localStorage', error);
  }
  return {
    user: null,
    score: 0,
    streakData: { count: 0, lastPlayed: null },
    hints: 3,
  };
};

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(getInitialState);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState));
    } catch (error) {
      console.error('Failed to save game state to localStorage', error);
    }
  }, [gameState]);

  const loginUser = useCallback((user: User) => {
    setGameState(prev => ({ ...prev, user }));
  }, []);

  const logoutUser = useCallback(() => {
    setGameState(prev => ({ ...prev, user: null }));
  }, []);

  const addScore = useCallback((points: number) => {
    setGameState(prev => ({ ...prev, score: prev.score + points }));
  }, []);

  const useHint = useCallback(() => {
    setGameState(prev => ({ ...prev, hints: Math.max(0, prev.hints - 1) }));
  }, []);

  const addHint = useCallback(() => {
    setGameState(prev => ({ ...prev, hints: prev.hints + 1 }));
  }, []);

  const updateStreak = useCallback(() => {
    setGameState(prev => {
      const today = new Date().toDateString();
      if (prev.streakData.lastPlayed === today) {
        return prev;
      }

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayString = yesterday.toDateString();

      let newCount: number;
      if (prev.streakData.lastPlayed === yesterdayString) {
        newCount = prev.streakData.count + 1;
      } else {
        newCount = 1;
      }

      return {
        ...prev,
        streakData: { count: newCount, lastPlayed: today },
      };
    });
  }, []);

  return {
    ...gameState,
    streak: gameState.streakData.count,
    loginUser,
    logoutUser,
    addScore,
    useHint,
    addHint,
    updateStreak,
  };
};