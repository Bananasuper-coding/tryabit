import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { lessonsData } from '../data/lessons/lessonsData';
import { useLessonStore } from '../stores/lessonStore';
import { Card, Badge } from '../components/ui';

export default function Lessons() {
  const { isLessonCompleted, getWeekProgress } = useLessonStore();

  const weekColors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500',
    'from-green-500 to-emerald-500',
  ];

  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-2xl font-bold mb-2">
          <span className="gradient-text">Learning Path</span>
        </h1>
        <p className="text-surface-400">Master English in 4 weeks</p>
      </motion.div>

      <div className="space-y-6">
        {lessonsData.map((week, weekIndex) => {
          const progress = getWeekProgress(week.id);
          const completedDays = week.days.filter(d => isLessonCompleted(week.id, d.id)).length;
          const isWeekUnlocked = weekIndex === 0 || getWeekProgress(lessonsData[weekIndex - 1].id) >= 80;

          return (
            <motion.div
              key={week.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: weekIndex * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${weekColors[weekIndex]}`} />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Badge variant={progress >= 100 ? 'success' : 'primary'} className="mb-2">
                        Week {weekIndex + 1}
                      </Badge>
                      <h2 className="text-xl font-bold">{week.title}</h2>
                      <p className="text-sm text-surface-400 mt-1">{week.description}</p>
                    </div>
                    {!isWeekUnlocked && (
                      <div className="text-3xl">🔒</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-surface-400">Progress</span>
                      <span className="font-medium">{completedDays}/{week.days.length} days</span>
                    </div>
                    <div className="h-2 bg-surface-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${weekColors[weekIndex]} rounded-full`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    {week.days.map((day, dayIndex) => {
                      const completed = isLessonCompleted(week.id, day.id);
                      const isToday = false;

                      return (
                        <Link
                          key={day.id}
                          to={day.isReview ? '/weekly-review' : `/lessons/${week.id}/${day.id}`}
                          className={`block p-3 rounded-xl transition-all ${
                            completed
                              ? 'bg-success/10 border border-success/30'
                              : isWeekUnlocked
                                ? 'bg-surface-700/50 hover:bg-surface-700 cursor-pointer'
                                : 'bg-surface-800/50 opacity-50 cursor-not-allowed'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                              completed
                                ? 'bg-success text-white'
                                : day.isReview
                                  ? 'bg-accent-500 text-white'
                                  : 'bg-surface-600 text-surface-300'
                            }`}>
                              {completed ? '✓' : day.isReview ? '🔮' : dayIndex + 1}
                            </div>
                            <div className="flex-1">
                              <p className={`font-medium ${completed ? 'text-success' : ''}`}>{day.title}</p>
                              <p className="text-xs text-surface-400">
                                {day.isReview ? 'Review & Challenge Mode' : '~30 min'}
                              </p>
                            </div>
                            {day.isReview && <Badge variant="accent">BOSS</Badge>}
                            {completed && <Badge variant="success">Done</Badge>}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
