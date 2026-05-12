import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { lessonsData } from '../data/lessons/lessonsData';
import { useUserStore } from '../stores/userStore';
import { useLessonStore } from '../stores/lessonStore';
import { Card, Button, Badge, ProgressBar, Confetti } from '../components/ui';

export default function WeeklyReview() {
  const navigate = useNavigate();
  const { currentWeek, addXP, weeklyXP } = useUserStore();
  const { isLessonCompleted } = useLessonStore();
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [score, setScore] = useState(0);
  const [showComplete, setShowComplete] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const weekData = lessonsData[currentWeek - 1] || lessonsData[0];
  const weekLessons = weekData?.days.filter(d => !d.isReview) || [];

  const challenges = [
    { type: 'vocab', title: 'Vocabulary Blitz', questions: 10 },
    { type: 'grammar', title: 'Grammar Challenge', questions: 5 },
    { type: 'listening', title: 'Listening Test', questions: 5 },
    { type: 'speaking', title: 'Speaking Sprint', questions: 5 },
    { type: 'final', title: 'Final Boss', questions: 1 },
  ];

  const current = challenges[currentChallenge];
  const isComplete = currentChallenge >= challenges.length - 1;

  const handleAnswer = (correct) => {
    if (correct) {
      setScore(prev => prev + 10);
    }
  };

  const handleNext = () => {
    if (isComplete) {
      const xpEarned = score + 50;
      addXP(xpEarned);
      setShowConfetti(true);
      setShowComplete(true);
    } else {
      setCurrentChallenge(prev => prev + 1);
    }
  };

  const completedLessons = weekLessons.filter(l => isLessonCompleted(weekData.id, l.id)).length;
  const weekProgress = (completedLessons / weekLessons.length) * 100;

  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <span className="text-5xl mb-4 block">🔮</span>
        <h1 className="text-2xl font-bold mb-2">
          <span className="gradient-text">Weekly Review</span>
        </h1>
        <p className="text-surface-400">Week {currentWeek}: {weekData?.title}</p>
      </motion.div>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold">Week Progress</h2>
          <Badge variant={weekProgress >= 100 ? 'success' : 'primary'}>
            {completedLessons}/{weekLessons.length} Lessons
          </Badge>
        </div>
        <ProgressBar value={weekProgress} />
      </Card>

      {!showComplete ? (
        <>
          <div className="flex justify-center gap-2">
            {challenges.map((ch, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i < currentChallenge
                    ? 'bg-success'
                    : i === currentChallenge
                      ? 'bg-primary-500 w-6'
                      : 'bg-surface-600'
                }`}
              />
            ))}
          </div>

          <Card className="p-6">
            <Badge variant="accent" className="mb-4">
              Challenge {currentChallenge + 1} of {challenges.length}
            </Badge>
            <h2 className="text-xl font-bold mb-4">{current.title}</h2>

            {current.type === 'vocab' && (
              <div className="space-y-3">
                <div className="p-4 bg-surface-900/50 rounded-xl text-center">
                  <p className="text-2xl font-bold">awesome</p>
                  <p className="text-surface-400">/ˈɔː.səm/</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['Amazing', 'Terrible', 'Expensive', 'Small'].map((opt, i) => (
                    <Button
                      key={i}
                      variant="secondary"
                      onClick={() => handleAnswer(opt === 'Amazing')}
                      className="text-sm"
                    >
                      {opt}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {current.type === 'grammar' && (
              <div className="space-y-3">
                <p className="text-lg">Choose the correct sentence:</p>
                {[
                  { text: 'She don't know.', correct: false },
                  { text: "She doesn't know.", correct: true },
                  { text: 'She not know.', correct: false },
                ].map((opt, i) => (
                  <Button
                    key={i}
                    variant="secondary"
                    onClick={() => handleAnswer(opt.correct)}
                    className="w-full text-left"
                  >
                    {opt.text}
                  </Button>
                ))}
              </div>
            )}

            {current.type === 'listening' && (
              <div className="text-center space-y-4">
                <p className="text-surface-400">Listen and choose the correct phrase</p>
                <Button variant="primary" size="lg" onClick={() => {
                  const utterance = new SpeechSynthesisUtterance("I'm really looking forward to it!");
                  utterance.rate = 0.7;
                  speechSynthesis.speak(utterance);
                }}>
                  🔊 Play Audio
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  {["I'm looking forward to it", "I'm looking for it", "I'm looking after it"].map((opt, i) => (
                    <Button key={i} variant="secondary">{opt}</Button>
                  ))}
                </div>
              </div>
            )}

            {current.type === 'speaking' && (
              <div className="text-center space-y-4">
                <p className="text-surface-400">Say this sentence out loud:</p>
                <p className="text-xl font-bold italic">"I can't wait to see you!"</p>
                <Button
                  variant="success"
                  size="lg"
                  onClick={() => {
                    const utterance = new SpeechSynthesisUtterance("I can't wait to see you!");
                    utterance.rate = 0.6;
                    speechSynthesis.speak(utterance);
                  }}
                >
                  🔊 Listen First
                </Button>
                <Button variant="primary" className="w-full">
                  🎤 Record
                </Button>
              </div>
            )}

            {current.type === 'final' && (
              <div className="text-center space-y-4">
                <span className="text-6xl block">👑</span>
                <p className="text-xl font-bold">Final Boss Battle!</p>
                <p className="text-surface-400">Answer 5 questions quickly to win bonus XP!</p>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="success" onClick={() => handleAnswer(true)}>Start!</Button>
                  <Button variant="ghost" onClick={() => handleNext()}>Skip</Button>
                </div>
              </div>
            )}
          </Card>

          <div className="flex justify-between items-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-400">{score}</p>
              <p className="text-xs text-surface-400">Score</p>
            </div>
            <Button variant="primary" onClick={handleNext}>
              {isComplete ? 'Finish Review ✓' : 'Next Challenge →'}
            </Button>
          </div>
        </>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-8"
        >
          <span className="text-6xl mb-4 block">🎉</span>
          <h2 className="text-2xl font-bold mb-2">Review Complete!</h2>
          <p className="text-surface-400 mb-4">You scored</p>
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl">
            <p className="text-4xl font-bold">{score + 50} XP</p>
          </div>
          <Button
            variant="primary"
            className="mt-6"
            onClick={() => navigate('/lessons')}
          >
            Continue Learning
          </Button>
        </motion.div>
      )}

      <Confetti show={showConfetti} onComplete={() => setShowConfetti(false)} />
    </div>
  );
}
