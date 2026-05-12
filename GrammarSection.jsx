import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Badge } from '../ui';

export default function GrammarSection({ section, onNext }) {
  const [showExample, setShowExample] = useState(false);
  const [selectedExample, setSelectedExample] = useState(0);

  const grammar = section.grammar || section.items || {};

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold mb-2">📝 Grammar</h2>
        <p className="text-surface-400">{grammar.title || 'Real Grammar'}</p>
      </div>

      <Card className="p-6 space-y-4">
        <div className="p-4 bg-surface-900/50 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">📖</span>
            <span className="text-sm text-surface-400">Textbook Version</span>
          </div>
          <p className="text-surface-300">{grammar.textbook}</p>
        </div>

        <div className="p-4 bg-primary-500/10 rounded-xl border border-primary-500/30">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">🔥</span>
            <span className="text-sm text-primary-400">Native Version</span>
          </div>
          <p className="font-medium text-primary-300">{grammar.native}</p>
        </div>

        {grammar.formalVsCasual && (
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-surface-800/50 rounded-lg">
              <p className="text-xs text-surface-400 mb-1">Formal</p>
              <p className="text-sm">{grammar.formalVsCasual.formal}</p>
            </div>
            <div className="p-3 bg-accent-500/10 rounded-lg border border-accent-500/30">
              <p className="text-xs text-accent-400 mb-1">Casual</p>
              <p className="text-sm">{grammar.formalVsCasual.casual}</p>
            </div>
          </div>
        )}

        <div className="p-4 bg-warning/10 rounded-xl border border-warning/30">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">⚠️</span>
            <span className="text-sm text-warning">Common Mistakes</span>
          </div>
          <p className="text-sm">{grammar.commonMistakes}</p>
        </div>

        {grammar.examples && grammar.examples.length > 0 && (
          <div className="space-y-2">
            <Button
              variant="ghost"
              onClick={() => setShowExample(!showExample)}
              className="w-full justify-between"
            >
              Examples
              <span>{showExample ? '▲' : '▼'}</span>
            </Button>
            {showExample && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="space-y-2"
              >
                {grammar.examples.map((ex, i) => (
                  <div key={i} className="p-3 bg-surface-900/50 rounded-lg">
                    <p className="italic">{ex}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        )}
      </Card>

      <Button onClick={onNext} variant="primary" className="w-full">
        Continue →
      </Button>
    </div>
  );
}
