import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { lessonsData } from '../data/lessons/lessonsData';

export const useLessonStore = create(
  persist(
    (set, get) => ({
      currentLesson: null,
      currentSection: 0,
      currentItem: 0,
      lessonProgress: {},
      quizAnswers: {},
      speakingScores: {},
      shadowingProgress: {},

      startLesson: (weekId, dayId) => {
        const lesson = get().getLesson(weekId, dayId);
        if (!lesson) return false;

        set({
          currentLesson: { weekId, dayId },
          currentSection: 0,
          currentItem: 0,
          quizAnswers: {},
        });
        return true;
      },

      getLesson: (weekId, dayId) => {
        const week = lessonsData.find((w) => w.id === weekId);
        if (!week) return null;
        return week.days.find((d) => d.id === dayId);
      },

      getWeek: (weekId) => {
        return lessonsData.find((w) => w.id === weekId);
      },

      setCurrentSection: (index) => {
        set({ currentSection: index, currentItem: 0 });
      },

      setCurrentItem: (index) => {
        set({ currentItem: index });
      },

      nextItem: () => {
        const state = get();
        if (!state.currentLesson) return;

        const lesson = get().getLesson(
          state.currentLesson.weekId,
          state.currentLesson.dayId
        );
        if (!lesson) return;

        const sections = lesson.sections;
        const currentSection = sections[state.currentSection];

        if (state.currentItem < currentSection.items.length - 1) {
          set({ currentItem: state.currentItem + 1 });
        } else if (state.currentSection < sections.length - 1) {
          set({
            currentSection: state.currentSection + 1,
            currentItem: 0,
          });
        }
      },

      previousItem: () => {
        const state = get();
        if (state.currentItem > 0) {
          set({ currentItem: state.currentItem - 1 });
        } else if (state.currentSection > 0) {
          set((s) => ({
            currentSection: s.currentSection - 1,
          }));
        }
      },

      saveQuizAnswer: (questionId, answer) => {
        set((state) => ({
          quizAnswers: {
            ...state.quizAnswers,
            [questionId]: answer,
          },
        }));
      },

      saveSpeakingScore: (itemId, score) => {
        set((state) => ({
          speakingScores: {
            ...state.speakingScores,
            [itemId]: score,
          },
        }));
      },

      updateShadowingProgress: (itemId, completed) => {
        set((state) => ({
          shadowingProgress: {
            ...state.shadowingProgress,
            [itemId]: completed,
          },
        }));
      },

      completeLesson: () => {
        const state = get();
        if (!state.currentLesson) return null;

        const lessonKey = `${state.currentLesson.weekId}-${state.currentLesson.dayId}`;
        const score = get().calculateLessonScore();

        set((state) => ({
          lessonProgress: {
            ...state.lessonProgress,
            [lessonKey]: {
              completed: true,
              score,
              completedAt: new Date().toISOString(),
              sectionsCompleted: state.currentSection + 1,
            },
          },
          currentLesson: null,
        }));

        return { lessonKey, score };
      },

      calculateLessonScore: () => {
        const state = get();
        const totalQuestions = Object.keys(state.quizAnswers).length;
        if (totalQuestions === 0) return 100;

        let correct = 0;
        Object.entries(state.quizAnswers).forEach(([questionId, answer]) => {
          if (answer.isCorrect) correct++;
        });

        return Math.round((correct / totalQuestions) * 100);
      },

      isLessonCompleted: (weekId, dayId) => {
        const state = get();
        const lessonKey = `${weekId}-${dayId}`;
        return state.lessonProgress[lessonKey]?.completed || false;
      },

      getLessonProgress: (weekId, dayId) => {
        const state = get();
        const lessonKey = `${weekId}-${dayId}`;
        return state.lessonProgress[lessonKey] || null;
      },

      getWeekProgress: (weekId) => {
        const week = lessonsData.find((w) => w.id === weekId);
        if (!week) return 0;

        let completed = 0;
        week.days.forEach((day) => {
          if (get().isLessonCompleted(weekId, day.id)) {
            completed++;
          }
        });

        return (completed / week.days.length) * 100;
      },

      getOverallProgress: () => {
        const totalLessons = lessonsData.reduce(
          (acc, week) => acc + week.days.length,
          0
        );
        const completedLessons = Object.values(get().lessonProgress).filter(
          (p) => p.completed
        ).length;

        return {
          total: totalLessons,
          completed: completedLessons,
          percentage:
            totalLessons > 0
              ? Math.round((completedLessons / totalLessons) * 100)
              : 0,
        };
      },

      reset: () => {
        set({
          currentLesson: null,
          currentSection: 0,
          currentItem: 0,
          lessonProgress: {},
          quizAnswers: {},
          speakingScores: {},
          shadowingProgress: {},
        });
      },
    }),
    {
      name: 'lingua-flow-lessons',
      partialize: (state) => ({
        lessonProgress: state.lessonProgress,
        speakingScores: state.speakingScores,
        shadowingProgress: state.shadowingProgress,
      }),
    }
  )
);
// Giữ nguyên phần code useLessonStore ở trên, dán thêm đoạn này vào cuối:

export const useUserStore = create((set) => ({
  user: {
    name: "User",
    level: "Intermediate",
    points: 1250,
    streak: 5
  },
  updateUser: (newData) => set((state) => ({ user: { ...state.user, ...newData } }))
}));
