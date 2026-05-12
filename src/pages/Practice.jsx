import { useState } from 'react';
import { motion } from 'framer-motion';
import { useUserStore } from '../stores/lessonStore';
import { Card, Button, Badge, Tabs } from '../components/ui';

export default function Practice() {
  const { weakWords, vocabularyMastery = {} } = useUserStore();
  const [activeTab, setActiveTab] = useState('review');

  const reviewWords = weakWords.length > 0 
    ? weakWords 
    : ['awesome', 'struggle', 'figure out', 'get used to', 'pick up', 'hang out', 'get along'];

  const practiceTypes = [
    { id: 'review', label: '📝 Review', description: 'Practice weak words' },
    { id: 'speaking', label: '🎤 Speaking', description: 'Shadowing practice' },
    { id: 'listening', label: '👂 Listening', description: 'Audio comprehension' },
    { id: 'writing', label: '✍️ Writing', description: 'Free writing practice' },
  ];

  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-2xl font-bold mb-2">
          <span className="gradient-text">Practice Mode</span>
        </h1>
        <p className="text-surface-400">Strengthen your skills</p>
      </motion.div>

      <Tabs
        tabs={practiceTypes}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === 'review' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <Card className="p-5">
            <h3 className="font-bold mb-2">Words to Review</h3>
            <p className="text-surface-400 text-sm mb-4">
              {reviewWords.length} words need more practice
            </p>
            <div className="space-y-3">
              {reviewWords.map((word, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between p-3 bg-surface-900/50 rounded-xl"
                >
                  <div>
                    <p className="font-medium">{word}</p>
                    <p className="text-xs text-surface-400">Need more practice</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => {
                    const utterance = new SpeechSynthesisUtterance(word);
                    utterance.rate = 0.8;
                    speechSynthesis.speak(utterance);
                  }}>
                    🔊
                  </Button>
                </motion.div>
              ))}
            </div>
          </Card>

          <Button variant="primary" className="w-full" size="lg">
            Start Review Session 🔄
          </Button>
        </motion.div>
      )}

      {activeTab === 'speaking' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <Card className="p-6 text-center">
            <span className="text-5xl mb-4 block">🎤</span>
            <h3 className="font-bold text-lg mb-2">Shadowing Practice</h3>
            <p className="text-surface-400 mb-4">
              Listen and repeat sentences to improve pronunciation
            </p>
            <div className="p-4 bg-surface-900/50 rounded-xl mb-4">
              <p className="text-lg italic">"I'm really looking forward to it!"</p>
            </div>
            <div className="flex gap-3 justify-center">
              <Button variant="secondary" onClick={() => {
                const utterance = new SpeechSynthesisUtterance("I'm really looking forward to it!");
                utterance.rate = 0.6;
                speechSynthesis.speak(utterance);
              }}>
                🔊 Listen
              </Button>
              <Button variant="success" onClick={() => {
                // Speech recognition would go here
              }}>
                🎤 Record
              </Button>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-3">
            <Card className="p-4 text-center">
              <p className="text-2xl mb-1">📊</p>
              <p className="text-sm font-medium">Accuracy</p>
              <p className="text-xl font-bold text-success">85%</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl mb-1">🔥</p>
              <p className="text-sm font-medium">Streak</p>
              <p className="text-xl font-bold text-primary-400">5</p>
            </Card>
          </div>
        </motion.div>
      )}

      {activeTab === 'listening' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <Card className="p-6 text-center">
            <span className="text-5xl mb-4 block">👂</span>
            <h3 className="font-bold text-lg mb-2">Listening Training</h3>
            <p className="text-surface-400 mb-4">
              Listen carefully and choose the correct answer
            </p>
            <div className="p-6 bg-surface-900/50 rounded-xl mb-4">
              <Button variant="primary" size="lg">
                🔊 Play Audio
              </Button>
            </div>
            <p className="text-sm text-surface-400">
              What did they say?
            </p>
          </Card>
        </motion.div>
      )}

      {activeTab === 'writing' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <Card className="p-5">
            <h3 className="font-bold mb-2">Free Writing</h3>
            <p className="text-surface-400 text-sm mb-4">
              Write about your day or any topic in English
            </p>
            <textarea
              placeholder="Start writing here..."
              className="w-full h-40 p-4 bg-surface-900/50 border border-surface-700 rounded-xl text-white placeholder-surface-500 focus:outline-none focus:border-primary-500 resize-none"
            />
            <div className="flex gap-2 mt-3">
              <Button variant="ghost" className="flex-1">
                💡 Get Suggestions
              </Button>
              <Button variant="primary" className="flex-1">
                Submit
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
