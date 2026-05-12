import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const INITIAL_STATE = {
  xp: 0,
  level: 1,
  streak: 0,
  longestStreak: 0,
  lastActivityDate: null,
  totalLessonsCompleted: 0,
  totalGamesPlayed: 0,
  totalMinutesLearned: 0,
  currentWeek: 1,
  currentDay: 1,
  completedLessons: [],
  completedGames: [],
  vocabularyMastered: 0,
  phrasesLearned: 0,
  achievements: [],
  dailyGoal: 50,
  weeklyGoal: 300,
  weeklyXP: 0,
  studyHistory: {},
  weakWords: [],
  strongWords: [],
  streakFreezes: 1,
  isPremium: false,
  settings: {
    soundEnabled: true,
    vibrationEnabled: true,
    darkMode: true,
    notificationsEnabled: true,
  },
  dailyMissions: {
    lessons: 0,
    games: 0,
    xpGoal: 50,
    streak: false,
  },
};

const calculateLevel = (xp) => {
  const baseXP = 100;
  const multiplier = 1.5;
  let level = 1;
  let totalRequired = baseXP;
  
  while (xp >= totalRequired) {
    level++;
    totalRequired += Math.floor(baseXP * Math.pow(multiplier, level - 1));
  }
  
  return level;
};

const getXPForLevel = (level) => {
  const baseXP = 100;
  let total = 0;
  for (let i = 1; i < level; i++) {
    total += Math.floor(baseXP * Math.pow(1.5, i - 1));
  }
  return total;
};

const getXPForNextLevel = (level) => {
  return Math.floor(100 * Math.pow(1.5, level - 1));
};

const getProgressToNextLevel = (xp) => {
  const level = calculateLevel(xp);
  const currentLevelXP = getXPForLevel(level);
  const nextLevelXP = getXPForNextLevel(level);
  const progressXP = xp - currentLevelXP;
  return (progressXP / nextLevelXP) * 100;
};

export const useUserStore = create(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,

      initialize: () => {
        const state = get();
        const today = new Date().toDateString();
        const lastActivity = state.lastActivityDate;

        if (lastActivity) {
          const lastDate = new Date(lastActivity);
          const todayDate = new Date(today);
          const diffTime = Math.abs(todayDate - lastDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

          if (diffDays > 1 && state.streak > 0) {
            set({ streak: 0 });
          }
        }
      },

      addXP: (amount, reason = 'lesson') => {
        const state = get();
        const newXP = state.xp + amount;
        const newLevel = calculateLevel(newXP);
        const today = new Date().toISOString().split('T')[0];

        set((state) => ({
          xp: newXP,
          level: newLevel,
          weeklyXP: state.weeklyXP + amount,
          lastActivityDate: new Date().toISOString(),
          studyHistory: {
            ...state.studyHistory,
            [today]: (state.studyHistory[today] || 0) + amount,
          },
        }));

        return { newXP, leveledUp: newLevel > state.level, newLevel };
      },

      updateStreak: () => {
        const state = get();
        const today = new Date().toDateString();
        const lastActivity = state.lastActivityDate;

        if (!lastActivity) {
          set({ streak: 1, longestStreak: 1 });
          return;
        }

        const lastDate = new Date(lastActivity);
        const todayDate = new Date(today);
        const diffTime = todayDate - lastDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
          return;
        } else if (diffDays === 1) {
          const newStreak = state.streak + 1;
          set({
            streak: newStreak,
            longestStreak: Math.max(state.longestStreak, newStreak),
            lastActivityDate: new Date().toISOString(),
          });
        } else {
          if (state.streakFreezes > 0) {
            set({
              streak: 1,
              streakFreezes: state.streakFreezes - 1,
              lastActivityDate: new Date().toISOString(),
            });
          } else {
            set({
              streak: 1,
              lastActivityDate: new Date().toISOString(),
            });
          }
        }
      },

      completeLesson: (lessonId, xpEarned) => {
        const state = get();
        const today = new Date().toISOString().split('T')[0];

        set((state) => ({
          completedLessons: [...new Set([...state.completedLessons, lessonId])],
          totalLessonsCompleted: state.totalLessonsCompleted + 1,
          dailyMissions: {
            ...state.dailyMissions,
            lessons: state.dailyMissions.lessons + 1,
          },
        }));

        get().updateStreak();
        return get().addXP(xpEarned, 'lesson');
      },

      completeGame: (gameId, xpEarned) => {
        const state = get();

        set((state) => ({
          completedGames: [...new Set([...state.completedGames, gameId])],
          totalGamesPlayed: state.totalGamesPlayed + 1,
          dailyMissions: {
            ...state.dailyMissions,
            games: state.dailyMissions.games + 1,
          },
        }));

        return get().addXP(xpEarned, 'game');
      },

      unlockAchievement: (achievementId) => {
        const state = get();
        if (state.achievements.includes(achievementId)) return false;

        set((state) => ({
          achievements: [...state.achievements, achievementId],
        }));

        return true;
      },

      addVocabularyMastered: (count = 1) => {
        set((state) => ({
          vocabularyMastered: state.vocabularyMastered + count,
        }));
      },

      addPhraseLearned: (count = 1) => {
        set((state) => ({
          phrasesLearned: state.phrasesLearned + count,
        }));
      },

      markWordAsWeak: (wordId) => {
        set((state) => ({
          weakWords: [...new Set([...state.weakWords, wordId])],
          strongWords: state.strongWords.filter((id) => id !== wordId),
        }));
      },

      markWordAsStrong: (wordId) => {
        set((state) => ({
          strongWords: [...new Set([...state.strongWords, wordId])],
          weakWords: state.weakWords.filter((id) => id !== wordId),
        }));
      },

      useStreakFreeze: () => {
        const state = get();
        if (state.streakFreezes <= 0) return false;

        set({ streakFreezes: state.streakFreezes - 1 });
        return true;
      },

      resetDailyMissions: () => {
        set({
          dailyMissions: {
            lessons: 0,
            games: 0,
            xpGoal: 50,
            streak: false,
          },
        });
      },

      updateSettings: (newSettings) => {
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        }));
      },

      setCurrentProgress: (week, day) => {
        set({ currentWeek: week, currentDay: day });
      },

      getStats: () => {
        const state = get();
        return {
          xp: state.xp,
          level: state.level,
          streak: state.streak,
          longestStreak: state.longestStreak,
          totalLessonsCompleted: state.totalLessonsCompleted,
          totalGamesPlayed: state.totalGamesPlayed,
          vocabularyMastered: state.vocabularyMastered,
          phrasesLearned: state.phrasesLearned,
          weeklyXP: state.weeklyXP,
          progressToNextLevel: getProgressToNextLevel(state.xp),
          xpForCurrentLevel: getXPForLevel(state.level),
          xpForNextLevel: getXPForNextLevel(state.level),
        };
      },

      reset: () => {
        set(INITIAL_STATE);
      },
    }),
    {
      name: 'lingua-flow-user',
      partialize: (state) => ({
        xp: state.xp,
        level: state.level,
        streak: state.streak,
        longestStreak: state.longestStreak,
        lastActivityDate: state.lastActivityDate,
        totalLessonsCompleted: state.totalLessonsCompleted,
        totalGamesPlayed: state.totalGamesPlayed,
        totalMinutesLearned: state.totalMinutesLearned,
        completedLessons: state.completedLessons,
        completedGames: state.completedGames,
        achievements: state.achievements,
        studyHistory: state.studyHistory,
        weakWords: state.weakWords,
        strongWords: state.strongWords,
        streakFreezes: state.streakFreezes,
        settings: state.settings,
        dailyMissions: state.dailyMissions,
        weeklyXP: state.weeklyXP,
        currentWeek: state.currentWeek,
        currentDay: state.currentDay,
      }),
    }
  )
);

export { getProgressToNextLevel, getXPForLevel, getXPForNextLevel, calculateLevel };
