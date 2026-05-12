import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gamesData } from '../data/games/gamesData';
import { useGameStore } from '../stores/gameStore';
import { Card, Badge } from '../components/ui';

const categoryIcons = {
  vocabulary: '📚',
  listening: '👂',
  speaking: '🎤',
  grammar: '📝',
  memory: '🧠',
  speed: '⚡',
};

const categoryColors = {
  vocabulary: 'from-blue-500 to-cyan-500',
  listening: 'from-purple-500 to-pink-500',
  speaking: 'from-orange-500 to-red-500',
  grammar: 'from-green-500 to-emerald-500',
  memory: 'from-yellow-500 to-amber-500',
  speed: 'from-red-500 to-rose-500',
};

export default function Games() {
  const { highScores, gamesPlayed } = useGameStore();

  const totalXP = Object.values(gamesPlayed).reduce((acc, count) => acc + count * 10, 0);
  const totalGames = Object.values(gamesPlayed).reduce((acc, count) => acc + count, 0);
  const bestScore = Math.max(...Object.values(highScores), 0);

  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-2xl font-bold mb-2">
          <span className="gradient-text">Mini Games</span>
        </h1>
        <p className="text-surface-400">Learn while having fun!</p>
      </motion.div>

      <div className="grid grid-cols-3 gap-3">
        <Card className="p-4 text-center">
          <p className="text-2xl mb-1">🎮</p>
          <p className="text-xl font-bold">{totalGames}</p>
          <p className="text-xs text-surface-400">Played</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl mb-1">⭐</p>
          <p className="text-xl font-bold">{totalXP}</p>
          <p className="text-xs text-surface-400">XP Earned</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl mb-1">🏆</p>
          <p className="text-xl font-bold">{bestScore}</p>
          <p className="text-xs text-surface-400">Best Score</p>
        </Card>
      </div>

      <div className="space-y-4">
        {gamesData.map((game, index) => {
          const score = highScores[game.id] || 0;
          const played = gamesPlayed[game.id] || 0;

          return (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/games/${game.id}`}>
                <Card className="p-4 cursor-pointer hover:border-primary-500/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${categoryColors[game.category]} flex items-center justify-center text-2xl shadow-lg`}>
                      {categoryIcons[game.category]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold">{game.title}</h3>
                        <Badge variant={game.difficulty >= 4 ? 'warning' : game.difficulty >= 2 ? 'primary' : 'success'}>
                          {'⭐'.repeat(game.difficulty)}
                        </Badge>
                      </div>
                      <p className="text-sm text-surface-400">{game.description}</p>
                      <div className="flex gap-3 mt-2">
                        {score > 0 && (
                          <span className="text-xs text-surface-400">
                            Best: <span className="text-primary-400 font-medium">{score}</span>
                          </span>
                        )}
                        {played > 0 && (
                          <span className="text-xs text-surface-400">
                            Played: <span className="text-accent-400 font-medium">{played}</span>
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-2xl">
                      {score > 0 ? '🎯' : '▶️'}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
