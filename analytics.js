/**
 * Utilidades para análisis y seguimiento de actividades
 * 
 * Este archivo contiene funciones para registrar y analizar la actividad del usuario.
 */

import { saveToStorage, getFromStorage } from './storage';

// Clave para almacenar los eventos de análisis
const ANALYTICS_STORAGE_KEY = 'analytics_events';

// Tipos de eventos
export const EVENT_TYPES = {
  SESSION_START: 'session_start',
  SESSION_END: 'session_end',
  ACTIVITY_START: 'activity_start',
  ACTIVITY_COMPLETE: 'activity_complete',
  QUIZ_COMPLETE: 'quiz_complete',
  BADGE_EARNED: 'badge_earned',
  LEVEL_UP: 'level_up',
  THEME_COMPLETE: 'theme_complete',
  PARTIAL_COMPLETE: 'partial_complete',
  NAVIGATION: 'navigation',
  BUTTON_CLICK: 'button_click',
  ERROR: 'error',
  FEATURE_USE: 'feature_use'
};

/**
 * Registra un evento de análisis
 * @param {string} eventType - Tipo de evento
 * @param {Object} eventData - Datos del evento
 */
export const trackEvent = (eventType, eventData = {}) => {
  try {
    const events = getFromStorage(ANALYTICS_STORAGE_KEY, []);
    
    const event = {
      id: Date.now().toString(),
      type: eventType,
      timestamp: new Date().toISOString(),
      data: eventData
    };
    
    events.push(event);
    
    // Limita a 1000 eventos para no sobrecargar el almacenamiento
    const limitedEvents = events.slice(-1000);
    
    saveToStorage(ANALYTICS_STORAGE_KEY, limitedEvents);
    
    return event;
  } catch (error) {
    console.error('Error al registrar evento de análisis:', error);
    return null;
  }
};

/**
 * Registra el inicio de una sesión
 * @param {Object} userData - Datos del usuario
 */
export const trackSessionStart = (userData = {}) => {
  return trackEvent(EVENT_TYPES.SESSION_START, {
    userId: userData.id,
    username: userData.username,
    level: userData.level,
    timestamp: new Date().toISOString()
  });
};

/**
 * Registra el fin de una sesión
 * @param {Object} userData - Datos del usuario
 * @param {number} durationSeconds - Duración de la sesión en segundos
 */
export const trackSessionEnd = (userData = {}, durationSeconds = 0) => {
  return trackEvent(EVENT_TYPES.SESSION_END, {
    userId: userData.id,
    username: userData.username,
    level: userData.level,
    durationSeconds,
    timestamp: new Date().toISOString()
  });
};

/**
 * Registra el inicio de una actividad
 * @param {string} activityId - ID de la actividad
 * @param {string} activityType - Tipo de actividad
 * @param {Object} userData - Datos del usuario
 */
export const trackActivityStart = (activityId, activityType, userData = {}) => {
  return trackEvent(EVENT_TYPES.ACTIVITY_START, {
    userId: userData.id,
    activityId,
    activityType,
    timestamp: new Date().toISOString()
  });
};

/**
 * Registra la finalización de una actividad
 * @param {string} activityId - ID de la actividad
 * @param {string} activityType - Tipo de actividad
 * @param {number} durationSeconds - Duración de la actividad en segundos
 * @param {Object} userData - Datos del usuario
 */
export const trackActivityComplete = (activityId, activityType, durationSeconds, userData = {}) => {
  return trackEvent(EVENT_TYPES.ACTIVITY_COMPLETE, {
    userId: userData.id,
    activityId,
    activityType,
    durationSeconds,
    timestamp: new Date().toISOString()
  });
};

/**
 * Registra la finalización de un quiz
 * @param {string} quizId - ID del quiz
 * @param {number} score - Puntuación obtenida
 * @param {number} maxScore - Puntuación máxima posible
 * @param {number} durationSeconds - Duración del quiz en segundos
 * @param {Object} userData - Datos del usuario
 */
export const trackQuizComplete = (quizId, score, maxScore, durationSeconds, userData = {}) => {
  return trackEvent(EVENT_TYPES.QUIZ_COMPLETE, {
    userId: userData.id,
    quizId,
    score,
    maxScore,
    percentage: Math.round((score / maxScore) * 100),
    durationSeconds,
    timestamp: new Date().toISOString()
  });
};

/**
 * Registra la obtención de una insignia
 * @param {string} badgeId - ID de la insignia
 * @param {string} badgeName - Nombre de la insignia
 * @param {Object} userData - Datos del usuario
 */
export const trackBadgeEarned = (badgeId, badgeName, userData = {}) => {
  return trackEvent(EVENT_TYPES.BADGE_EARNED, {
    userId: userData.id,
    badgeId,
    badgeName,
    timestamp: new Date().toISOString()
  });
};

/**
 * Registra la subida de nivel
 * @param {number} oldLevel - Nivel anterior
 * @param {number} newLevel - Nuevo nivel
 * @param {Object} userData - Datos del usuario
 */
export const trackLevelUp = (oldLevel, newLevel, userData = {}) => {
  return trackEvent(EVENT_TYPES.LEVEL_UP, {
    userId: userData.id,
    oldLevel,
    newLevel,
    timestamp: new Date().toISOString()
  });
};

/**
 * Registra la finalización de un tema
 * @param {string} themeId - ID del tema
 * @param {string} themeName - Nombre del tema
 * @param {Object} userData - Datos del usuario
 */
export const trackThemeComplete = (themeId, themeName, userData = {}) => {
  return trackEvent(EVENT_TYPES.THEME_COMPLETE, {
    userId: userData.id,
    themeId,
    themeName,
    timestamp: new Date().toISOString()
  });
};

/**
 * Registra la finalización de un parcial
 * @param {string} partialId - ID del parcial
 * @param {string} partialName - Nombre del parcial
 * @param {Object} userData - Datos del usuario
 */
export const trackPartialComplete = (partialId, partialName, userData = {}) => {
  return trackEvent(EVENT_TYPES.PARTIAL_COMPLETE, {
    userId: userData.id,
    partialId,
    partialName,
    timestamp: new Date().toISOString()
  });
};

/**
 * Registra una navegación
 * @param {string} fromPath - Ruta de origen
 * @param {string} toPath - Ruta de destino
 * @param {Object} userData - Datos del usuario
 */
export const trackNavigation = (fromPath, toPath, userData = {}) => {
  return trackEvent(EVENT_TYPES.NAVIGATION, {
    userId: userData.id,
    fromPath,
    toPath,
    timestamp: new Date().toISOString()
  });
};

/**
 * Registra un clic en un botón
 * @param {string} buttonId - ID del botón
 * @param {string} buttonText - Texto del botón
 * @param {string} currentPath - Ruta actual
 * @param {Object} userData - Datos del usuario
 */
export const trackButtonClick = (buttonId, buttonText, currentPath, userData = {}) => {
  return trackEvent(EVENT_TYPES.BUTTON_CLICK, {
    userId: userData.id,
    buttonId,
    buttonText,
    currentPath,
    timestamp: new Date().toISOString()
  });
};

/**
 * Registra un error
 * @param {string} errorMessage - Mensaje de error
 * @param {string} errorSource - Fuente del error
 * @param {Object} userData - Datos del usuario
 */
export const trackError = (errorMessage, errorSource, userData = {}) => {
  return trackEvent(EVENT_TYPES.ERROR, {
    userId: userData.id,
    errorMessage,
    errorSource,
    timestamp: new Date().toISOString()
  });
};

/**
 * Registra el uso de una característica
 * @param {string} featureId - ID de la característica
 * @param {string} featureName - Nombre de la característica
 * @param {Object} userData - Datos del usuario
 */
export const trackFeatureUse = (featureId, featureName, userData = {}) => {
  return trackEvent(EVENT_TYPES.FEATURE_USE, {
    userId: userData.id,
    featureId,
    featureName,
    timestamp: new Date().toISOString()
  });
};

/**
 * Obtiene todos los eventos de análisis
 * @returns {Array} Array de eventos
 */
export const getAllEvents = () => {
  return getFromStorage(ANALYTICS_STORAGE_KEY, []);
};

/**
 * Obtiene eventos de análisis filtrados por tipo
 * @param {string} eventType - Tipo de evento
 * @returns {Array} Array de eventos filtrados
 */
export const getEventsByType = (eventType) => {
  const events = getAllEvents();
  return events.filter(event => event.type === eventType);
};

/**
 * Obtiene eventos de análisis filtrados por usuario
 * @param {string} userId - ID del usuario
 * @returns {Array} Array de eventos filtrados
 */
export const getEventsByUser = (userId) => {
  const events = getAllEvents();
  return events.filter(event => event.data.userId === userId);
};

/**
 * Obtiene eventos de análisis filtrados por fecha
 * @param {Date} startDate - Fecha de inicio
 * @param {Date} endDate - Fecha de fin
 * @returns {Array} Array de eventos filtrados
 */
export const getEventsByDateRange = (startDate, endDate) => {
  const events = getAllEvents();
  return events.filter(event => {
    const eventDate = new Date(event.timestamp);
    return eventDate >= startDate && eventDate <= endDate;
  });
};

/**
 * Limpia todos los eventos de análisis
 */
export const clearAllEvents = () => {
  saveToStorage(ANALYTICS_STORAGE_KEY, []);
};

/**
 * Exporta todos los eventos de análisis
 * @returns {Object} Objeto con todos los eventos
 */
export const exportAnalyticsData = () => {
  const events = getAllEvents();
  
  return {
    exportDate: new Date().toISOString(),
    totalEvents: events.length,
    events
  };
};