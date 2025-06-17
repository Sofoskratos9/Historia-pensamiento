/**
 * Utilidades para la gamificación
 * 
 * Este archivo contiene funciones para manejar la gamificación de la aplicación,
 * incluyendo la asignación de XP, insignias y niveles.
 */

import { badges, levels } from '../data/badges';

/**
 * Calcula el nivel actual del usuario basado en su XP
 * @param {number} xp - Experiencia total del usuario
 * @returns {Object} Objeto con información del nivel actual
 */
export const calculateLevel = (xp) => {
  // Encuentra el nivel más alto que el usuario ha alcanzado
  const currentLevel = levels.filter(level => level.requiredXP <= xp)
    .sort((a, b) => b.requiredXP - a.requiredXP)[0];
  
  // Encuentra el siguiente nivel
  const nextLevelIndex = levels.findIndex(level => level.id === currentLevel.id) + 1;
  const nextLevel = nextLevelIndex < levels.length ? levels[nextLevelIndex] : null;
  
  // Calcula el progreso hacia el siguiente nivel
  let progress = 0;
  if (nextLevel) {
    const xpForCurrentLevel = currentLevel.requiredXP;
    const xpForNextLevel = nextLevel.requiredXP;
    const xpRange = xpForNextLevel - xpForCurrentLevel;
    const userProgressInRange = xp - xpForCurrentLevel;
    progress = Math.floor((userProgressInRange / xpRange) * 100);
  } else {
    progress = 100; // Usuario ha alcanzado el nivel máximo
  }
  
  return {
    current: currentLevel,
    next: nextLevel,
    progress,
    totalXP: xp
  };
};

/**
 * Verifica si el usuario ha ganado nuevas insignias basado en su progreso
 * @param {Object} user - Objeto de usuario
 * @param {Object} progress - Objeto de progreso del usuario
 * @returns {Array} Array de nuevas insignias ganadas
 */
export const checkForNewBadges = (user, progress) => {
  const newBadges = [];
  const userBadgeIds = user.badges.map(badge => badge.id);
  
  // Verifica insignias de sesión completada
  const completedSessions = progress.completedSessions || [];
  const sessionBadges = badges.filter(badge => 
    badge.type === 'session' && 
    badge.requirement <= completedSessions.length &&
    !userBadgeIds.includes(badge.id)
  );
  newBadges.push(...sessionBadges);
  
  // Verifica insignias de tema completado
  const completedThemes = progress.completedThemes || [];
  const themeBadges = badges.filter(badge => 
    badge.type === 'theme' && 
    badge.requirement <= completedThemes.length &&
    !userBadgeIds.includes(badge.id)
  );
  newBadges.push(...themeBadges);
  
  // Verifica insignias de parcial completado
  const completedPartials = progress.completedPartials || [];
  const partialBadges = badges.filter(badge => 
    badge.type === 'partial' && 
    badge.requirement <= completedPartials.length &&
    !userBadgeIds.includes(badge.id)
  );
  newBadges.push(...partialBadges);
  
  // Verifica insignias especiales basadas en logros específicos
  // Por ejemplo, completar todas las actividades de reflexión
  const activityCounts = progress.activityCounts || {};
  const specialBadges = badges.filter(badge => {
    if (badge.type !== 'special' || userBadgeIds.includes(badge.id)) return false;
    
    switch (badge.condition) {
      case 'reflection_activities':
        return (activityCounts['reflexion'] || 0) >= badge.requirement;
      case 'debate_activities':
        return (activityCounts['debate'] || 0) >= badge.requirement;
      case 'quiz_perfect_score':
        return (progress.perfectQuizzes || 0) >= badge.requirement;
      case 'consecutive_days':
        return (user.consecutiveDays || 0) >= badge.requirement;
      default:
        return false;
    }
  });
  newBadges.push(...specialBadges);
  
  return newBadges;
};

/**
 * Calcula la recompensa de XP para una actividad completada
 * @param {Object} activity - Objeto de actividad
 * @param {number} score - Puntuación obtenida (para quizzes)
 * @returns {number} XP ganado
 */
export const calculateActivityXP = (activity, score = null) => {
  // XP base de la actividad
  let xp = activity.xp || 0;
  
  // Para quizzes, ajusta XP basado en la puntuación
  if (activity.tipo === 'quiz' && score !== null) {
    // Porcentaje de respuestas correctas
    const percentage = score / activity.preguntas.length;
    // Ajusta XP: 100% = XP completo, 0% = 10% del XP
    xp = Math.round(xp * (0.1 + 0.9 * percentage));
  }
  
  return xp;
};

/**
 * Genera un mensaje de felicitación personalizado basado en el logro
 * @param {string} achievementType - Tipo de logro ('level', 'badge', 'xp', etc.)
 * @param {Object} details - Detalles del logro
 * @returns {string} Mensaje de felicitación
 */
export const generateCongratulationMessage = (achievementType, details) => {
  const messages = {
    level: [
      `¡Increíble! Has alcanzado el nivel ${details.level}. ${details.reward}`,
      `¡Tu sabiduría crece! Nivel ${details.level} desbloqueado. ${details.reward}`,
      `¡Felicidades, Navegante del Tiempo! Has ascendido al nivel ${details.level}. ${details.reward}`
    ],
    badge: [
      `¡Has ganado la insignia "${details.name}"! ${details.description}`,
      `¡Nueva insignia desbloqueada: "${details.name}"! ${details.description}`,
      `Tu colección de insignias crece: "${details.name}" añadida. ${details.description}`
    ],
    xp: [
      `¡Has ganado ${details.xp} puntos de experiencia!`,
      `¡Tu sabiduría aumenta! +${details.xp} XP`,
      `¡Excelente trabajo! +${details.xp} XP para tu viaje filosófico`
    ],
    activity: [
      `¡Actividad completada! Has demostrado gran pensamiento crítico.`,
      `¡Excelente reflexión! Sigues los pasos de los grandes filósofos.`,
      `¡Actividad dominada! Tu odisea del pensamiento continúa.`
    ],
    theme: [
      `¡Has completado el tema "${details.name}"! Un nuevo territorio filosófico conquistado.`,
      `¡Tema "${details.name}" dominado! Los grandes pensadores estarían orgullosos.`,
      `¡Felicidades! Has navegado con éxito por las aguas de "${details.name}".`
    ],
    partial: [
      `¡Has completado el parcial "${details.name}"! Una etapa importante en tu odisea.`,
      `¡Parcial "${details.name}" conquistado! Tu mapa del conocimiento se expande.`,
      `¡Extraordinario logro! Has dominado "${details.name}". Nuevos horizontes te esperan.`
    ]
  };
  
  // Selecciona un mensaje aleatorio del tipo correspondiente
  const messageArray = messages[achievementType] || messages.xp;
  const randomIndex = Math.floor(Math.random() * messageArray.length);
  return messageArray[randomIndex];
};

/**
 * Verifica si el usuario ha subido de nivel
 * @param {number} oldXP - XP anterior
 * @param {number} newXP - XP nuevo
 * @returns {Object|null} Información del nuevo nivel o null si no subió
 */
export const checkLevelUp = (oldXP, newXP) => {
  const oldLevel = calculateLevel(oldXP);
  const newLevel = calculateLevel(newXP);
  
  if (newLevel.current.id > oldLevel.current.id) {
    return newLevel.current;
  }
  
  return null;
};

/**
 * Genera confeti para celebrar logros importantes
 * @param {string} achievementType - Tipo de logro
 * @returns {Object} Configuración para el efecto de confeti
 */
export const generateConfettiConfig = (achievementType) => {
  // Configuraciones básicas para diferentes tipos de logros
  const configs = {
    level: {
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    },
    badge: {
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    },
    partial: {
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 }
    }
  };
  
  return configs[achievementType] || {
    particleCount: 30,
    spread: 50,
    origin: { y: 0.7 }
  };
};