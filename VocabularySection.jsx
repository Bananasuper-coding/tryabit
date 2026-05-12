import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Badge } from '../ui';

export default function VocabularySection({ section, onNext }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState({});

  const words = section.items || section.vocabulary || [];
  const current = words[currentIndex];

  const handleFlip = (index) => {
    setFlipped({ ...flipped, [index]: !flipped[index] });
  };

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onNext();
    }
  };

  const speakWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold mb-2">📖 Vocabulary</h2>
        <p className="text-surface-400">Tap cards to reveal meanings</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {words.map((word, index) => {
          const isFlipped = flipped[index] || index === currentIndex;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="p-4 cursor-pointer transition-all"
                onClick={() => {
                  handleFlip(index);
                  setCurrentIndex(index);
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold">{word.word}</h3>
                      <Badge variant={word.difficulty >= 4 ? 'warning' : word.difficulty >= 2 ? 'primary' : 'success'}>
                        {word.difficulty >= 4 ? 'Hard' : word.difficulty >= 2 ? 'Medium' : 'Easy'}
                      </Badge>
                    </div>
                    <p className="text-surface-400 text-sm">[{word.phonetic}]</p>
                    {isFlipped && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-3 space-y-2"
                      >
                        <p className="font-medium text-primary-400">{word.meaning}</p>
                        <p className="text-sm text-surface-400">
                          <span className="text-success">Collocations:</span> {word.collocations}
                        </p>
                        <div className="p-2 bg-surface-900/50 rounded-lg text-sm">
                          <p className="text-surface-400 mb-1">Example:</p>
                          <p className="italic">{word.formalExample || word.casualExample}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakWord(word.word);
                      }}
                      className="p-2 bg-surface-700 hover:bg-surface-600 rounded-lg transition-colors"
                    >
                      🔊
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <Button onClick={handleNext} variant="primary" className="w-full mt-4">
        {currentIndex < words.length - 1 ? 'Next Word →' : 'Continue →'}
      </Button>
    </div>
  );
}
