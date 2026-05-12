import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button } from '../ui';

export default function WritingSection({ section, onNext }) {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);

  const writing = section.writing || section.items || {};

  const handleSubmit = () => {
    if (input.trim().length > 0) {
      setSubmitted(true);
    }
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold mb-2">✍️ Quick Writing</h2>
        <p className="text-surface-400">{writing.situation}</p>
      </div>

      <Card className="p-6">
        <div className="mb-4">
          <p className="text-sm text-surface-400 mb-2">Instructions</p>
          <p className="font-medium">{writing.instructions}</p>
        </div>

        {writing.examples && (
          <div className="mb-4 p-3 bg-surface-900/50 rounded-lg">
            <p className="text-xs text-surface-400 mb-1">Example</p>
            <p className="text-sm italic">{writing.examples}</p>
          </div>
        )}

        {!submitted ? (
          <>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write your response here..."
              className="w-full h-32 p-4 bg-surface-900/50 border border-surface-700 rounded-xl text-white placeholder-surface-500 focus:outline-none focus:border-primary-500 resize-none"
            />

            <div className="flex gap-2 mt-4">
              {writing.hints && hintsUsed < writing.hints.length && (
                <Button
                  variant="ghost"
                  onClick={() => setHintsUsed(hintsUsed + 1)}
                  className="flex-1"
                >
                  💡 Hint ({writing.hints.length - hintsUsed} left)
                </Button>
              )}
              <Button
                variant="primary"
                onClick={handleSubmit}
                disabled={input.trim().length === 0}
                className="flex-1"
              >
                Submit
              </Button>
            </div>

            {hintsUsed > 0 && writing.hints && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 p-3 bg-primary-500/10 rounded-lg border border-primary-500/30"
              >
                <p className="text-sm text-primary-400">
                  <span className="font-bold">Hint:</span> {writing.hints[hintsUsed - 1]}
                </p>
              </motion.div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <div className="p-4 bg-success/10 rounded-xl border border-success/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">✨</span>
                <span className="font-bold text-success">AI Feedback</span>
              </div>
              <p className="text-sm">Your writing looks good! Try to vary your sentence structure.</p>
            </div>

            <div className="p-4 bg-surface-900/50 rounded-xl">
              <p className="text-sm text-surface-400 mb-1">Your response:</p>
              <p className="italic">{input}</p>
            </div>
          </motion.div>
        )}
      </Card>

      <Button onClick={handleNext} variant="primary" className="w-full">
        {submitted ? 'Continue →' : 'Skip'}
      </Button>
    </div>
  );
}
