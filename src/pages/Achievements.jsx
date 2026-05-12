import { motion } from 'framer-motion';
import { achievementsData } from '../data/achievements/achievementsData';
import { useUserStore } from '../stores/userStore';
import { Card, Badge } from '../components/ui';

const categoryIcons = {
  streak: '🔥',
  learning: '📚',
  game: '🎮',
  special: '⭐',
  hidden: '❓',
};

const rarityColors = {
  common: 'border-surface-600',
  rare: 'border-blue-500',
  epic: 'border-purple-500',
  legendary: 'border-amber-500',
};

export default function Achievements() {
  const { achievements } = useUserStore();

  const unlockedCount = achievements.length;
  const totalCount = achievementsData.length;

  const groupedAchievements = achievementsData.reduce((acc, ach) => {
    if (!acc[ach.category]) acc[ach.category] = [];
    acc[ach.category].push(ach);
    return acc;
  }, {});

  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-2xl font-bold mb-2">
          <span className="gradient-text">Achievements</span>
        </h1>
        <p className="text-surface-400">
          {unlockedCount} / {totalCount} Unlocked
        </p>
      </motion.div>

      <div className="h-2 bg-surface-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(unlockedCount / totalCount) * 100}%` }}
          transition={{ duration: 0.5 }}
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
        />
      </div>

      {Object.entries(groupedAchievements).map(([category, items]) => (
        <div key={category}>
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <span>{categoryIcons[category]}</span>
            <span className="capitalize">{category}</span>
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {items.map((ach) => {
              const isUnlocked = achievements.includes(ach.id);
              return (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: isUnlocked ? 1.05 : 1 }}
                >
                  <Card
                    className={`p-4 text-center ${
                      isUnlocked ? '' : 'opacity-50 grayscale'
                    } border-2 ${isUnlocked ? rarityColors[ach.rarity] : 'border-transparent'}`}
                  >
                    <div className="text-4xl mb-2">{ach.icon}</div>
                    <h3 className="font-bold text-sm mb-1">{ach.title}</h3>
                    <p className="text-xs text-surface-400 mb-2 line-clamp-2">
                      {ach.description}
                    </p>
                    <Badge variant={ach.rarity === 'legendary' ? 'gold' : ach.rarity === 'epic' ? 'accent' : 'primary'}>
                      +{ach.xpReward} XP
                    </Badge>
                    {isUnlocked && (
                      <div className="absolute top-2 right-2 text-success">✓</div>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
