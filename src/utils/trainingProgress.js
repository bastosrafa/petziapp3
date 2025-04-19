import { Timestamp } from 'firebase/firestore';

export const calculateTrainingProgress = (progressDocs) => {
  if (!progressDocs || progressDocs.length === 0) {
    return {
      completedLessons: 0,
      totalTime: 0,
      currentLevel: 'beginner',
      lastSession: null
    };
  }

  // Calcular lições completadas
  const completedLessons = progressDocs.filter(doc => doc.completed).length;

  // Calcular tempo total
  const totalTime = progressDocs.reduce((total, doc) => {
    return total + (doc.timeSpent || 0);
  }, 0);

  // Determinar nível atual
  let currentLevel = 'beginner';
  if (completedLessons >= 30) {
    currentLevel = 'advanced';
  } else if (completedLessons >= 15) {
    currentLevel = 'intermediate';
  }

  // Encontrar última sessão
  const lastSession = progressDocs.reduce((latest, doc) => {
    if (!latest || (doc.timestamp && doc.timestamp > latest.timestamp)) {
      return doc;
    }
    return latest;
  }, null);

  return {
    completedLessons,
    totalTime,
    currentLevel,
    lastSession
  };
};

export const createProgressData = (userId, moduleId, lessonId, duration = 15) => ({
  userId,
  moduleId,
  lessonId,
  courseId: "9DwWIAtShVCPXyRPSbqF",
  status: "completed",
  completedAt: Timestamp.now(),
  duration
});

export const getUnlockedModules = (completedLessons) => {
  const baseModules = ['startHere'];
  
  if (completedLessons >= 5) {
    baseModules.push('behavior');
  }
  if (completedLessons >= 10) {
    baseModules.push('socialization');
  }
  if (completedLessons >= 15) {
    baseModules.push('hygiene');
  }
  if (completedLessons >= 20) {
    baseModules.push('badhabits');
  }
  if (completedLessons >= 25) {
    baseModules.push('mental');
  }

  return baseModules;
}; 