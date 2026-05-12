import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useUserStore } from '../stores/lessonStore';
import { useLessonStore } from '../stores/lessonStore';
import { lessonsData } from '../data/lessons/lessonsData';
import { Card, Badge, ProgressBar, XPBar } from '../components/ui';

export default function Dashboard() {
  const { xp, level, streak, weeklyXP, weeklyGoal, totalLessonsCompleted, vocabularyMastered, currentWeek, currentDay } = useUserStore();
  const { getOverallProgress, isLessonCompleted } = useLessonStore();
  const overallProgress = getOverallProgress();

  const today = new Date();
  const dayOfWeek = today.getDay();
  const isReviewDay = dayOfWeek === 0;
  const currentWeekData = lessonsData.find(w => w.id === `week-${currentWeek}`) || lessonsData[0];
  const todayLesson = currentWeekData?.days.find(d => d.id === `day-${currentDay}`);

  const dailyXPGoal = 50;
  const todayProgress = Math.min((weeklyXP % dailyXPGoal || weeklyXP) / dailyXPGoal * 100, 100);

  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-2xl font-bold mb-1">
          Welcome back! <span className="gradient-text">Keep going!</span>
        </h1>
        <p className="text-surface-400">You're on a {streak}-day streak! 🔥</p>
      </motion.div>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="level-badge shadow-glow">
              {level}
            </div>
            <div>
              <p className="text-sm text-surface-400">Level {level}</p>
              <p className="font-bold">{xp.toLocaleString()} XP</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-surface-400">Next Level</p>
            <p className="font-semibold text-primary-400">
              {Math.max(0, Math.floor(100 * Math.pow(1.5, level - 1)) - (xp - Math.floor(100 * (level - 1) * 2.5)))} XP
            </p>
          </div>
        </div>
        <XPBar current={weeklyXP % dailyXPGoal || dailyXPGoal} max={dailyXPGoal} />
      </Card>

      <Card className="p-5" glow>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">Daily Goal</h2>
          <Badge variant={todayProgress >= 100 ? 'success' : 'primary'}>
            {todayProgress >= 100 ? '✓ Complete!' : `${Math.round(todayProgress)}%`}
          </Badge>
        </div>
        <Link
          to={isReviewDay ? '/weekly-review' : `/lessons/week-${currentWeek}/day-${currentDay}`}
          className="block"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl font-bold text-lg shadow-lg shadow-primary-500/30"
          >
            {isReviewDay ? '🎯 Weekly Challenge' : `📚 Today's Lesson`}
          </motion.button>
        </Link>
        <p className="text-center text-surface-400 mt-3 text-sm">
          {todayLesson?.title || 'Review Day'}
        </p>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 text-center">
          <p className="text-3xl mb-1">🔥</p>
          <p className="text-2xl font-bold text-primary-400">{streak}</p>
          <p className="text-xs text-surface-400">Day Streak</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-3xl mb-1">📚</p>
          <p className="text-2xl font-bold text-accent-400">{totalLessonsCompleted}</p>
          <p className="text-xs text-surface-400">Lessons Done</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-3xl mb-1">📖</p>
          <p className="text-2xl font-bold text-success">{vocabularyMastered}</p>
          <p className="text-xs text-surface-400">Words Learned</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-3xl mb-1">⭐</p>
          <p className="text-2xl font-bold text-warning">{weeklyXP}</p>
          <p className="text-xs text-surface-400">This Week XP</p>
        </Card>
      </div>

      <Card className="p-5">
        <h2 className="text-lg font-bold mb-4">📅 This Week: {currentWeekData?.title}</h2>
        <div className="space-y-2">
          {currentWeekData?.days.map((day, index) => {
            const completed = isLessonCompleted(`week-${currentWeek}`, day.id);
            const isToday = day.id === `day-${currentDay}`;
            const isReview = day.isReview;

            return (
              <Link
                key={day.id}
                to={isReview ? '/weekly-review' : `/lessons/week-${currentWeek}/${day.id}`}
              >
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                    isToday ? 'bg-primary-500/20 border border-primary-500/30' : 'hover:bg-surface-700/50'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                    completed
                      ? 'bg-success text-white'
                      : isToday
                        ? 'bg-primary-500 text-white'
                        : 'bg-surface-700 text-surface-400'
                  }`}>
                    {completed ? '✓' : index + 1}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${isToday ? 'text-primary-400' : ''}`}>{day.title}</p>
                    <p className="text-xs text-surface-400">{isReview ? 'Review & Challenge' : '30 min'}</p>
                  </div>
                  {isReview && <Badge variant="accent">BOSS</Badge>}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </Card>

      <Card className="p-5">
        <h2 className="text-lg font-bold mb-4">📊 Overall Progress</h2>
        <ProgressBar value={overallProgress.completed} max={overallProgress.total} showLabel size="lg" />
        <p className="text-center text-surface-400 mt-2 text-sm">
          {overallProgress.completed} of {overallProgress.total} lessons completed
        </p>
      </Card>

      <div className="grid grid-cols-3 gap-3">
        <Link to="/practice">
          <Card className="p-4 text-center cursor-pointer hover:border-primary-500/50">
            <span className="text-2xl mb-2 block">🎯</span>
            <p className="text-xs font-medium">Practice</p>
          </Card>
        </Link>
        <Link to="/games">
          <Card className="p-4 text-center cursor-pointer hover:border-accent-500/50">
            <span className="text-2xl mb-2 block">🎮</span>
            <p className="text-xs font-medium">Games</p>
          </Card>
        </Link>
        <Link to="/achievements">
          <Card className="p-4 text-center cursor-pointer hover:border-warning/50">
            <span className="text-2xl mb-2 block">🏆</span>
            <p className="text-xs font-medium">Achievements</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
