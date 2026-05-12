import { motion } from 'framer-motion';
import { useUserStore } from '../stores/userStore';
import { Card, Button, Badge, ProgressBar, Avatar } from '../components/ui';
import { Link } from 'react-router-dom';

export default function Profile() {
  const {
    xp, level, streak, longestStreak,
    totalLessonsCompleted, totalGamesPlayed,
    vocabularyMastered, phrasesLearned,
    achievements, settings, weeklyXP, weeklyGoal,
    studyHistory
  } = useUserStore();

  const levelProgress = Math.max(0, Math.min(100, (weeklyXP % 300) / 3));

  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <Avatar size="xl" alt="User" className="mx-auto mb-4" />
        <h1 className="text-2xl font-bold">English Learner</h1>
        <Badge variant="primary" className="mt-2">Level {level}</Badge>
      </motion.div>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold">Level Progress</h2>
          <span className="text-primary-400 font-medium">{xp.toLocaleString()} XP</span>
        </div>
        <ProgressBar value={levelProgress} max={100} size="lg" />
        <p className="text-sm text-surface-400 mt-2 text-center">
          {levelProgress.toFixed(0)}% to Level {level + 1}
        </p>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 text-center">
          <p className="text-3xl mb-1">🔥</p>
          <p className="text-2xl font-bold">{streak}</p>
          <p className="text-xs text-surface-400">Day Streak</p>
          <p className="text-xs text-surface-500 mt-1">Best: {longestStreak}</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-3xl mb-1">📚</p>
          <p className="text-2xl font-bold">{totalLessonsCompleted}</p>
          <p className="text-xs text-surface-400">Lessons</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-3xl mb-1">📖</p>
          <p className="text-2xl font-bold">{vocabularyMastered}</p>
          <p className="text-xs text-surface-400">Words</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-3xl mb-1">💬</p>
          <p className="text-2xl font-bold">{phrasesLearned}</p>
          <p className="text-xs text-surface-400">Phrases</p>
        </Card>
      </div>

      <Card className="p-5">
        <h2 className="font-bold mb-4">🏆 Achievements</h2>
        <div className="flex flex-wrap gap-2">
          {achievements.length > 0 ? (
            achievements.map((ach) => (
              <Badge key={ach} variant="gold">{ach}</Badge>
            ))
          ) : (
            <p className="text-surface-400 text-sm">Complete lessons to unlock achievements!</p>
          )}
        </div>
        <Link to="/achievements">
          <Button variant="ghost" className="w-full mt-4">
            View All Achievements →
          </Button>
        </Link>
      </Card>

      <Card className="p-5">
        <h2 className="font-bold mb-4">📅 Weekly Activity</h2>
        <div className="flex justify-between">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
            const today = new Date().getDay();
            const isToday = (i + 1) % 7 === today;
            const xpToday = studyHistory[Object.keys(studyHistory).find(k => k.includes(`2026-05-${12 - (6 - i)}`))] || 0;
            return (
              <div key={day} className="text-center">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isToday ? 'bg-primary-500 text-white' : 'bg-surface-700'}`}>
                  {xpToday > 0 ? '✓' : ''}
                </div>
                <p className="text-xs text-surface-400 mt-1">{day}</p>
              </div>
            );
          })}
        </div>
      </Card>

      <Card className="p-5">
        <h2 className="font-bold mb-4">⚙️ Settings</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-surface-400">Sound Effects</span>
            <button
              onClick={() => useUserStore.getState().updateSettings({ soundEnabled: !settings.soundEnabled })}
              className={`w-12 h-6 rounded-full transition-colors ${settings.soundEnabled ? 'bg-primary-500' : 'bg-surface-700'}`}
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${settings.soundEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-surface-400">Notifications</span>
            <button
              onClick={() => useUserStore.getState().updateSettings({ notificationsEnabled: !settings.notificationsEnabled })}
              className={`w-12 h-6 rounded-full transition-colors ${settings.notificationsEnabled ? 'bg-primary-500' : 'bg-surface-700'}`}
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${settings.notificationsEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
          </div>
        </div>
      </Card>

      <Button
        variant="danger"
        className="w-full"
        onClick={() => {
          if (confirm('Reset all progress? This cannot be undone.')) {
            useUserStore.getState().reset();
          }
        }}
      >
        Reset Progress
      </Button>
    </div>
  );
}
