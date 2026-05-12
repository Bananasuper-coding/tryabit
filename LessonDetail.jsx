import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLessonStore } from '../stores/lessonStore';
import { useUserStore } from '../stores/userStore';
import { Card, Button, Badge, ProgressBar, Modal, Confetti } from '../components/ui';
import PhrasesSection from '../components/lesson/PhrasesSection';
import VocabularySection from '../components/lesson/VocabularySection';
import DialogueSection from '../components/lesson/DialogueSection';
import GrammarSection from '../components/lesson/GrammarSection';
import WritingSection from '../components/lesson/WritingSection';
import QuizSection from '../components/lesson/QuizSection';
import DailyMissionSection from '../components/lesson/DailyMissionSection';

export default function LessonDetail() {
  const { weekId, dayId } = useParams();
  const navigate = useNavigate();
  const { getLesson, currentSection, setCurrentSection, nextItem, completeLesson } = useLessonStore();
  const { completeLesson: finishLesson } = useUserStore();
  const [showComplete, setShowComplete] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const lesson = getLesson(weekId, dayId);

  useEffect(() => {
    if (!lesson) {
      navigate('/lessons');
    }
  }, [lesson, navigate]);

  if (!lesson) return null;

  const sections = lesson.sections || [];
  const totalSections = sections.length;
  const progress = ((currentSection + 1) / totalSections) * 100;

  const handleComplete = () => {
    const baseXP = 50;
    const bonusXP = Math.round(progress === 100 ? 20 : progress >= 80 ? 10 : 0);
    const earned = baseXP + bonusXP;
    
    setXpEarned(earned);
    finishLesson(`${weekId}-${dayId}`, earned);
    setShowConfetti(true);
    setShowComplete(true);
  };

  const handleNext = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      handleComplete();
    }
  };

  const renderSection = () => {
    const section = sections[currentSection];
    if (!section) return null;

    const props = { section, onNext: handleNext };

    switch (section.type) {
      case 'phrases':
        return <PhrasesSection {...props} />;
      case 'vocabulary':
        return <VocabularySection {...props} />;
      case 'dialogue':
        return <DialogueSection {...props} />;
      case 'grammar':
        return <GrammarSection {...props} />;
      case 'writing':
        return <WritingSection {...props} />;
      case 'quiz':
        return <QuizSection {...props} />;
      case 'dailyMission':
        return <DailyMissionSection {...props} />;
      default:
        return <div>Unknown section type</div>;
    }
  };

  const sectionIcons = ['💬', '📖', '🗣️', '📝', '✍️', '❓', '🎯'];

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate('/lessons')}
          className="p-2 hover:bg-surface-800 rounded-xl transition-colors"
        >
          ←
        </button>
        <div className="flex-1 mx-4">
          <p className="text-sm text-surface-400 text-center">{lesson.title}</p>
          <ProgressBar value={progress} className="mt-2" size="sm" />
        </div>
        <div className="text-sm font-bold text-primary-400">
          {currentSection + 1}/{totalSections}
        </div>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto hide-scrollbar pb-2">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all ${
              index === currentSection
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                : index < currentSection
                  ? 'bg-success/20 text-success'
                  : 'bg-surface-700 text-surface-400'
            }`}
          >
            {sectionIcons[index % sectionIcons.length]}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>

      <div className="mt-6">
        <Button onClick={handleNext} variant="primary" className="w-full" size="lg">
          {currentSection < totalSections - 1 ? 'Continue →' : 'Complete Lesson ✓'}
        </Button>
      </div>

      <Modal isOpen={showComplete} onClose={() => {
        setShowComplete(false);
        navigate('/lessons');
      }} size="sm">
        <div className="text-center py-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="text-6xl mb-4"
          >
            🎉
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">Lesson Complete!</h2>
          <p className="text-surface-400 mb-4">You earned</p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500/20 rounded-xl text-primary-400 font-bold text-2xl">
            +{xpEarned} XP
          </div>
          <div className="mt-6">
            <Button onClick={() => {
              setShowComplete(false);
              navigate('/lessons');
            }} className="w-full">
              Continue Learning
            </Button>
          </div>
        </div>
      </Modal>

      <Confetti show={showConfetti} onComplete={() => setShowConfetti(false)} />
    </div>
  );
}
