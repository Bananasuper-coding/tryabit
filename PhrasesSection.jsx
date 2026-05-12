import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button } from '../ui';

export default function PhrasesSection({ section, onNext }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState({});

  const phrases = section.items || section.phrases || [];
  const current = phrases[currentIndex];

  const reveal = (index) => {
    setRevealed({ ...revealed, [index]: true });
  };

  const handleNext = () => {
    if (currentIndex < phrases.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onNext();
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold mb-2">💬 Key Phrases</h2>
        <p className="text-surface-400">Swipe through essential expressions</p>
      </div>

      <div className="relative">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <Card className="p-6">
            <div className="text-center mb-6">
              <Badge variant="primary" className="mb-4">
                {currentIndex + 1} / {phrases.length}
              </Badge>
              <h3 className="text-2xl font-bold mb-2">{current.english}</h3>
              <p className="text-lg text-surface-400">[{current.pronunciation}]</p>
              <Badge variant={current.tone === 'casual' ? 'accent' : 'default'} className="mt-2">
                {current.tone || 'neutral'}
              </Badge>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-surface-900/50 rounded-xl">
                <p className="text-sm text-surface-400 mb-1">Meaning</p>
                <p className="font-medium">{current.meaning}</p>
              </div>

              <div className="p-4 bg-surface-900/50 rounded-xl">
                <p className="text-sm text-surface-400 mb-1">Situation</p>
                <p className="text-primary-400">{current.situation}</p>
              </div>

              <div className="p-4 bg-primary-500/10 rounded-xl border border-primary-500/30">
                <p className="text-sm text-primary-400 mb-1">Example</p>
                <p className="italic">{current.example}</p>
              </div>
            </div>

            <Button
              variant="secondary"
              className="w-full mt-4"
              onClick={() => {
                const utterance = new SpeechSynthesisUtterance(current.english);
                utterance.rate = 0.8;
                speechSynthesis.speak(utterance);
              }}
            >
              🔊 Listen
            </Button>
          </Card>
        </motion.div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {phrases.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary-500 w-6' : 'bg-surface-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
