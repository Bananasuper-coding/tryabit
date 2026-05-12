import { clsx } from 'clsx';

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getDaysAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export function getStreakStatus(streak) {
  if (streak >= 30) return { emoji: '🔥', text: 'On Fire!', color: 'text-orange-400' };
  if (streak >= 7) return { emoji: '⚡', text: 'Hot Streak!', color: 'text-yellow-400' };
  if (streak >= 3) return { emoji: '💪', text: 'Building Momentum', color: 'text-blue-400' };
  return { emoji: '🌱', text: 'Just Started', color: 'text-green-400' };
}

export function getLevelTitle(level) {
  if (level >= 50) return { title: 'English Master', emoji: '👑' };
  if (level >= 40) return { title: 'Advanced Speaker', emoji: '🏆' };
  if (level >= 30) return { title: 'Upper Intermediate', emoji: '⭐' };
  if (level >= 20) return { title: 'Intermediate', emoji: '🌟' };
  if (level >= 10) return { title: 'Elementary', emoji: '📗' };
  if (level >= 5) return { title: 'Beginner', emoji: '📘' };
  return { title: 'Newcomer', emoji: '👋' };
}

export function getTodayKey() {
  return new Date().toISOString().split('T')[0];
}

export function calculateStudyHeatmap(studyHistory) {
  const heatmap = [];
  const today = new Date();
  
  for (let i = 89; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const key = date.toISOString().split('T')[0];
    const xp = studyHistory[key] || 0;
    
    let level = 'none';
    if (xp >= 100) level = 'max';
    else if (xp >= 50) level = 'high';
    else if (xp >= 25) level = 'medium';
    else if (xp >= 1) level = 'low';
    
    heatmap.push({ date: key, xp, level });
  }
  
  return heatmap;
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

export function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function getXPProgress(xp) {
  const baseXP = 100;
  const multiplier = 1.5;
  let level = 1;
  let totalRequired = baseXP;
  
  while (xp >= totalRequired) {
    level++;
    totalRequired += Math.floor(baseXP * Math.pow(multiplier, level - 1));
  }
  
  const currentLevelXP = totalRequired - Math.floor(baseXP * Math.pow(multiplier, level - 1));
  const nextLevelXP = Math.floor(baseXP * Math.pow(multiplier, level - 1));
  const progressXP = xp - currentLevelXP;
  
  return {
    level,
    currentXP: progressXP,
    requiredXP: nextLevelXP,
    percentage: Math.round((progressXP / nextLevelXP) * 100)
  };
}

export const MOTIVATIONAL_MESSAGES = [
  "You're doing amazing! 🌟",
  "Keep up the great work! 💪",
  "One step at a time! 🚀",
  "You're getting better every day! 📈",
  "Learning is a superpower! 🦸",
  "Small progress is still progress! 🎯",
  "You're building something great! 🏗️",
  "Consistency is key! 🔑",
];

export function getMotivationalMessage() {
  return getRandomItem(MOTIVATIONAL_MESSAGES);
}
