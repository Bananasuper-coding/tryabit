import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Badge } from '../ui';
import { useLessonStore } from '../../stores/lessonStore';

export default function QuizSection({ section, onNext }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const questions = section.questions || section.items || [];
  const question = questions[currentQuestion];
  const isLast = currentQuestion === questions.length - 1;

  const handleSelect = (answer) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);
    
    const isCorrect = answer === question.correctAnswer;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const handleNext = () => {
    if (isLast) {
      onNext();
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  if (!question) return null;

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold mb-2">❓ Quick Quiz</h2>
        <div className="flex justify-center gap-4 text-sm">
          <Badge variant="primary">{currentQuestion + 1}/{questions.length}</Badge>
          <Badge variant={score.correct >= score.total * 0.7 ? 'success' : 'warning'}>
            Score: {score.correct}/{score.total}
          </Badge>
        </div>
      </div>

      <Card className="p-6">
        <p className="text-lg font-medium mb-6">{question.question}</p>

        {question.type === 'multipleChoice' && question.options && (
          <div className="space-y-3">
            {question.options.map((option, index) => {
              let bgClass = 'bg-surface-700/50 hover:bg-surface-700';
              
              if (showResult) {
                if (option === question.correctAnswer) {
                  bgClass = 'bg-success/20 border border-success text-success';
                } else if (option === selectedAnswer) {
                  bgClass = 'bg-error/20 border border-error text-error';
                }
              } else if (selectedAnswer === option) {
                bgClass = 'bg-primary-500/20 border border-primary-500';
              }

              return (
                <motion.button
                  key={index}
                  while={{ scale: 0.98 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelect(option)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-xl text-left transition-all border ${bgClass}`}
                >
                  <span className="font-medium">{option}</span>
                </motion.button>
              );
            })}
          </div>
        )}

        {question.type === 'fillBlank' && (
          <div>
            <input
              type="text"
              value={selectedAnswer || ''}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={showResult}
              placeholder="Type your answer..."
              className="w-full p-4 bg-surface-900/50 border border-surface-700 rounded-xl text-white placeholder-surface-500 focus:outline-none focus:border-primary-500"
            />
            {showResult && (
              <Button onClick={() => handleSelect(selectedAnswer)} className="mt-3 w-full">
                Check Answer
              </Button>
            )}
          </div>
        )}

        {question.type === 'arrange' && (
          <div className="space-y-3">
            <p className="text-sm text-surface-400">Arrange words to form a correct sentence</p>
            <div className="p-4 bg-surface-900/50 rounded-xl min-h-[60px]">
              <p className="text-surface-400 italic">Drag and arrange words</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['The', 'cat', 'is', 'on', 'table'].map((word, i) => (
                <button
                  key={i}
                  className="px-4 py-2 bg-surface-700 rounded-lg hover:bg-surface-600 transition-colors"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        )}

        {showResult && question.explanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-surface-900/50 rounded-xl"
          >
            <p className="text-sm text-surface-400">Explanation:</p>
            <p className="text-sm mt-1">{question.explanation}</p>
          </motion.div>
        )}
      </Card>

      <Button onClick={handleNext} variant="primary" className="w-full">
        {isLast ? 'Complete Quiz ✓' : 'Next Question →'}
      </Button>
    </div>
  );
}
