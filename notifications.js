/**
 * Utilidades para notificaciones y mensajes
 * 
 * Este archivo contiene funciones para manejar notificaciones y mensajes en la aplicación.
 */

import { saveToStorage, getFromStorage } from './storage';

// Clave para almacenar las notificaciones en localStorage
const NOTIFICATIONS_STORAGE_KEY = 'notifications';

/**
 * Tipos de notificaciones
 */
export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  ACHIEVEMENT: 'achievement'
};

/**
 * Crea una nueva notificación
 * @param {string} message - Mensaje de la notificación
 * @param {string} type - Tipo de notificación (success, error, warning, info, achievement)
 * @param {Object} data - Datos adicionales para la notificación
 * @returns {Object} Objeto de notificación
 */
export const createNotification = (message, type = NOTIFICATION_TYPES.INFO, data = {}) => {
  return {
    id: Date.now().toString(),
    message,
    type,
    data,
    read: false,
    createdAt: new Date().toISOString()
  };
};

/**
 * Guarda una notificación en el almacenamiento local
 * @param {Object} notification - Objeto de notificación
 */
export const saveNotification = (notification) => {
  const notifications = getNotifications();
  notifications.unshift(notification);
  
  // Limita a 50 notificaciones para no sobrecargar el almacenamiento
  const limitedNotifications = notifications.slice(0, 50);
  
  saveToStorage(NOTIFICATIONS_STORAGE_KEY, limitedNotifications);
};

/**
 * Obtiene todas las notificaciones almacenadas
 * @returns {Array} Array de notificaciones
 */
export const getNotifications = () => {
  return getFromStorage(NOTIFICATIONS_STORAGE_KEY, []);
};

/**
 * Marca una notificación como leída
 * @param {string} notificationId - ID de la notificación
 */
export const markNotificationAsRead = (notificationId) => {
  const notifications = getNotifications();
  const updatedNotifications = notifications.map(notification => {
    if (notification.id === notificationId) {
      return { ...notification, read: true };
    }
    return notification;
  });
  
  saveToStorage(NOTIFICATIONS_STORAGE_KEY, updatedNotifications);
};

/**
 * Marca todas las notificaciones como leídas
 */
export const markAllNotificationsAsRead = () => {
  const notifications = getNotifications();
  const updatedNotifications = notifications.map(notification => {
    return { ...notification, read: true };
  });
  
  saveToStorage(NOTIFICATIONS_STORAGE_KEY, updatedNotifications);
};

/**
 * Elimina una notificación
 * @param {string} notificationId - ID de la notificación
 */
export const deleteNotification = (notificationId) => {
  const notifications = getNotifications();
  const updatedNotifications = notifications.filter(
    notification => notification.id !== notificationId
  );
  
  saveToStorage(NOTIFICATIONS_STORAGE_KEY, updatedNotifications);
};

/**
 * Elimina todas las notificaciones
 */
export const clearAllNotifications = () => {
  saveToStorage(NOTIFICATIONS_STORAGE_KEY, []);
};

/**
 * Obtiene el número de notificaciones no leídas
 * @returns {number} Número de notificaciones no leídas
 */
export const getUnreadNotificationsCount = () => {
  const notifications = getNotifications();
  return notifications.filter(notification => !notification.read).length;
};

/**
 * Crea y guarda una notificación de logro
 * @param {string} title - Título del logro
 * @param {string} message - Mensaje descriptivo
 * @param {Object} achievementData - Datos del logro
 */
export const createAchievementNotification = (title, message, achievementData = {}) => {
  const notification = createNotification(
    `¡${title}! ${message}`,
    NOTIFICATION_TYPES.ACHIEVEMENT,
    {
      ...achievementData,
      title
    }
  );
  
  saveNotification(notification);
};

/**
 * Crea y guarda una notificación de nivel alcanzado
 * @param {Object} levelData - Datos del nivel
 */
export const createLevelUpNotification = (levelData) => {
  createAchievementNotification(
    `¡Nivel ${levelData.id} Alcanzado!`,
    `Has desbloqueado: ${levelData.reward}`,
    {
      type: 'level',
      level: levelData.id,
      reward: levelData.reward
    }
  );
};

/**
 * Crea y guarda una notificación de insignia obtenida
 * @param {Object} badgeData - Datos de la insignia
 */
export const createBadgeNotification = (badgeData) => {
  createAchievementNotification(
    `¡Nueva Insignia!`,
    `Has obtenido: ${badgeData.name}`,
    {
      type: 'badge',
      badgeId: badgeData.id,
      badgeName: badgeData.name,
      badgeDescription: badgeData.description
    }
  );
};

/**
 * Crea y guarda una notificación de tema completado
 * @param {Object} themeData - Datos del tema
 */
export const createThemeCompletedNotification = (themeData) => {
  createAchievementNotification(
    `¡Tema Completado!`,
    `Has dominado: ${themeData.titulo}`,
    {
      type: 'theme',
      themeId: themeData.id,
      themeName: themeData.titulo
    }
  );
};

/**
 * Crea y guarda una notificación de parcial completado
 * @param {Object} partialData - Datos del parcial
 */
export const createPartialCompletedNotification = (partialData) => {
  createAchievementNotification(
    `¡Parcial Completado!`,
    `Has conquistado: ${partialData.titulo}`,
    {
      type: 'partial',
      partialId: partialData.id,
      partialName: partialData.titulo
    }
  );
};

/**
 * Verifica si las notificaciones del navegador están habilitadas
 * @returns {Promise<boolean>} Promise que resuelve a true si están habilitadas
 */
export const areNotificationsEnabled = async () => {
  if (!('Notification' in window)) {
    return false;
  }
  
  if (Notification.permission === 'granted') {
    return true;
  }
  
  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }
  
  return false;
};

/**
 * Muestra una notificación del navegador
 * @param {string} title - Título de la notificación
 * @param {Object} options - Opciones de la notificación
 * @returns {Promise<boolean>} Promise que resuelve a true si se mostró la notificación
 */
export const showBrowserNotification = async (title, options = {}) => {
  const enabled = await areNotificationsEnabled();
  
  if (!enabled) {
    return false;
  }
  
  const defaultOptions = {
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-96x96.png',
    vibrate: [100, 50, 100],
    requireInteraction: false
  };
  
  const notification = new Notification(title, {
    ...defaultOptions,
    ...options
  });
  
  return true;
};