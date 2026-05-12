import { motion } from 'framer-motion';
import { Card, Button, Badge } from '../ui';

export default function DailyMissionSection({ section, onNext }) {
  const mission = section.mission || section.items || {};

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold mb-2">🎯 Daily Mission</h2>
        <p className="text-surface-400">Complete these challenges to earn bonus XP!</p>
      </div>

      <Card className="p-5 space-y-4">
        {mission.vocabRecap && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-4 bg-surface-900/50 rounded-xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">📚</span>
              <span className="font-bold">Vocabulary Recap</span>
            </div>
            <p className="text-surface-400 text-sm">Review 5 words from today</p>
            <div className="flex gap-2 mt-3">
              {['awesome', 'struggle', 'figure out', 'get used to', 'pick up'].map((word, i) => (
                <Badge key={i} variant="primary">{word}</Badge>
              ))}
            </div>
          </motion.div>
        )}

        {mission.speakingMission && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="p-4 bg-surface-900/50 rounded-xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🎤</span>
              <span className="font-bold">Speaking Mission</span>
            </div>
            <p className="text-surface-400 text-sm">Shadow 3 sentences out loud</p>
            <Button variant="success" className="mt-3 w-full" size="sm">
              Start Speaking
            </Button>
          </motion.div>
        )}

        {mission.mirrorChallenge && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-4 bg-surface-900/50 rounded-xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🪞</span>
              <span className="font-bold">Mirror Challenge</span>
            </div>
            <p className="text-surface-400 text-sm">Look in the mirror and say 3 sentences</p>
          </motion.div>
        )}

        {mission.sentencesToUse && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-4 bg-accent-500/10 rounded-xl border border-accent-500/30"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">💡</span>
              <span className="font-bold text-accent-400">Use Today</span>
            </div>
            <p className="text-sm text-surface-400 mb-2">Try using these phrases today:</p>
            {mission.sentencesToUse.map((sentence, i) => (
              <p key={i} className="italic text-sm mb-1">"{sentence}"</p>
            ))}
          </motion.div>
        )}

        {mission.confidenceTracker !== undefined && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-4 bg-surface-900/50 rounded-xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">📊</span>
              <span className="font-bold">Confidence Level</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Beginner</span>
              <span>Native</span>
            </div>
            <div className="h-3 bg-surface-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-error to-success rounded-full transition-all"
                style={{ width: `${mission.confidenceTracker}%` }}
              />
            </div>
            <p className="text-center text-sm mt-2 font-medium">
              {mission.confidenceTracker >= 80 ? 'Great!' : mission.confidenceTracker >= 50 ? 'Good progress!' : 'Keep practicing!'}
            </p>
          </motion.div>
        )}
      </Card>

      <Button onClick={onNext} variant="primary" className="w-full" size="lg">
        Complete Mission & Earn XP! 🎉
      </Button>
    </div>
  );
}
