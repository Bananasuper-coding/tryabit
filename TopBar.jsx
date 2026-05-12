import { useUserStore } from '../../stores/userStore';
import { getProgressToNextLevel } from '../../stores/userStore';

export default function TopBar() {
  const { xp, level, streak, weeklyXP, weeklyGoal } = useUserStore();
  const progress = getProgressToNextLevel(xp);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 glass-dark safe-top">
      <div className="max-w-lg mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-bold text-lg shadow-lg">
              L
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-surface-400">Level {level}</p>
              <p className="font-semibold text-sm">{xp.toLocaleString()} XP</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-xl">🔥</span>
              <span className="font-bold text-primary-400">{streak}</span>
            </div>
            <div className="w-20 h-2 bg-surface-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-2">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-surface-400">Weekly Goal</span>
            <span className="text-primary-400 font-medium">{weeklyXP}/{weeklyGoal} XP</span>
          </div>
          <div className="w-full h-1.5 bg-surface-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-success to-primary-500 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((weeklyXP / weeklyGoal) * 100, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
