import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Badge } from '../ui';

export default function DialogueSection({ section, onNext }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const dialogue = section.dialogue || section.items || [];
  const current = dialogue[currentLine];
  const isLastLine = currentLine === dialogue.length - 1;

  const speakLine = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.7;
    speechSynthesis.speak(utterance);
  };

  const handleNext = () => {
    if (isLastLine) {
      onNext();
    } else {
      setCurrentLine(currentLine + 1);
      setShowTranslation(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold mb-2">🗣️ Listen & Repeat</h2>
        <p className="text-surface-400">{section.situation || 'Practice this conversation'}</p>
      </div>

      <Card className="p-6">
        <div className="mb-6">
          <div className="flex justify-center gap-2 mb-4">
            {dialogue.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentLine(index);
                  setShowTranslation(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentLine ? 'bg-primary-500 w-6' : 'bg-surface-600'
                }`}
              />
            ))}
          </div>

          <motion.div
            key={currentLine}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center"
          >
            <Badge variant={current?.speaker === 'A' ? 'primary' : 'accent'} className="mb-4">
              {current?.speaker === 'A' ? 'Person A' : 'Person B'}
            </Badge>

            <p className="text-2xl font-bold mb-4">{current?.english}</p>

            <Button
              variant="secondary"
              onClick={() => speakLine(current?.english)}
              className="mb-4"
            >
              🔊 Listen
            </Button>

            {showTranslation ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-surface-900/50 rounded-xl"
              >
                <p className="text-surface-400 text-sm mb-1">Translation</p>
                <p className="font-medium">{current?.meaning}</p>
              </motion.div>
            ) : (
              <Button
                variant="ghost"
                onClick={() => setShowTranslation(true)}
                className="w-full"
              >
                Show Translation
              </Button>
            )}
          </motion.div>
        </div>

        <div className="space-y-2">
          <Button
            variant="success"
            onClick={() => {
              speakLine(current?.english);
              setTimeout(() => {
                const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
                recognition.start();
              }, 500);
            }}
            className="w-full"
          >
            🎤 Practice Speaking
          </Button>
        </div>
      </Card>

      <Button onClick={handleNext} variant="primary" className="w-full">
        {isLastLine ? 'Complete Dialogue ✓' : 'Next Line →'}
      </Button>
    </div>
  );
}
