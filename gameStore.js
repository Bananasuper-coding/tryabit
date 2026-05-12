import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { gamesData } from '../data/games/gamesData';

export const useGameStore = create(
  persist(
    (set, get) => ({
      currentGame: null,
      gameState: {},
      highScores: {},
      gamesPlayed: {},
      favoriteGames: [],

      startGame: (gameId) => {
        const game = gamesData.find((g) => g.id === gameId);
        if (!game) return false;

        set({
          currentGame: gameId,
          gameState: game.getInitialState ? game.getInitialState() : {},
        });
        return true;
      },

      getGame: (gameId) => {
        return gamesData.find((g) => g.id === gameId);
      },

      updateGameState: (newState) => {
        set((state) => ({
          gameState: { ...state.gameState, ...newState },
        }));
      },

      setGameState: (newState) => {
        set({ gameState: newState });
      },

      endGame: (score, stats = {}) => {
        const state = get();
        if (!state.currentGame) return null;

        const gameId = state.currentGame;
        const previousHighScore = state.highScores[gameId] || 0;
        const isNewHighScore = score > previousHighScore;

        set((s) => ({
          highScores: {
            ...s.highScores,
            [gameId]: Math.max(s.highScores[gameId] || 0, score),
          },
          gamesPlayed: {
            ...s.gamesPlayed,
            [gameId]: (s.gamesPlayed[gameId] || 0) + 1,
          },
          currentGame: null,
          gameState: {},
        }));

        return {
          gameId,
          score,
          isNewHighScore,
          previousHighScore,
          stats,
        };
      },

      getGameStats: (gameId) => {
        const state = get();
        return {
          highScore: state.highScores[gameId] || 0,
          timesPlayed: state.gamesPlayed[gameId] || 0,
          isFavorite: state.favoriteGames.includes(gameId),
        };
      },

      toggleFavorite: (gameId) => {
        set((state) => ({
          favoriteGames: state.favoriteGames.includes(gameId)
            ? state.favoriteGames.filter((id) => id !== gameId)
            : [...state.favoriteGames, gameId],
        }));
      },

      resetGameState: () => {
        set({ currentGame: null, gameState: {} });
      },

      getLeaderboard: () => {
        const state = get();
        return gamesData
          .map((game) => ({
            ...game,
            highScore: state.highScores[game.id] || 0,
            timesPlayed: state.gamesPlayed[game.id] || 0,
            isFavorite: state.favoriteGames.includes(game.id),
          }))
          .sort((a, b) => b.highScore - a.highScore);
      },

      reset: () => {
        set({
          currentGame: null,
          gameState: {},
          highScores: {},
          gamesPlayed: {},
          favoriteGames: [],
        });
      },
    }),
    {
      name: 'lingua-flow-games',
      partialize: (state) => ({
        highScores: state.highScores,
        gamesPlayed: state.gamesPlayed,
        favoriteGames: state.favoriteGames,
      }),
    }
  )
);
