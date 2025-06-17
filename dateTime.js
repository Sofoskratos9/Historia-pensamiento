/**
 * Utilidades para manejo de fechas y tiempo
 * 
 * Este archivo contiene funciones para manejar fechas, tiempos y cálculos relacionados.
 */

/**
 * Formatea una fecha en formato legible en español
 * @param {Date|string|number} date - Fecha a formatear
 * @returns {string} Fecha formateada (ej. "15 de enero de 2023")
 */
export const formatDate = (date) => {
  const dateObj = new Date(date);
  
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  return dateObj.toLocaleDateString('es-MX', options);
};

/**
 * Formatea una fecha en formato corto
 * @param {Date|string|number} date - Fecha a formatear
 * @returns {string} Fecha formateada (ej. "15/01/2023")
 */
export const formatShortDate = (date) => {
  const dateObj = new Date(date);
  
  const options = { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit' 
  };
  
  return dateObj.toLocaleDateString('es-MX', options);
};

/**
 * Formatea una hora en formato de 12 horas
 * @param {Date|string|number} date - Fecha/hora a formatear
 * @returns {string} Hora formateada (ej. "3:45 PM")
 */
export const formatTime = (date) => {
  const dateObj = new Date(date);
  
  const options = { 
    hour: 'numeric', 
    minute: '2-digit', 
    hour12: true 
  };
  
  return dateObj.toLocaleTimeString('es-MX', options);
};

/**
 * Calcula la diferencia en días entre dos fechas
 * @param {Date|string|number} date1 - Primera fecha
 * @param {Date|string|number} date2 - Segunda fecha
 * @returns {number} Diferencia en días
 */
export const daysBetween = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  
  // Normaliza las fechas a medianoche
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);
  
  // Calcula la diferencia en milisegundos y convierte a días
  const diffTime = Math.abs(d2 - d1);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};

/**
 * Verifica si una fecha es hoy
 * @param {Date|string|number} date - Fecha a verificar
 * @returns {boolean} True si la fecha es hoy
 */
export const isToday = (date) => {
  const dateObj = new Date(date);
  const today = new Date();
  
  return dateObj.getDate() === today.getDate() &&
         dateObj.getMonth() === today.getMonth() &&
         dateObj.getFullYear() === today.getFullYear();
};

/**
 * Verifica si una fecha es ayer
 * @param {Date|string|number} date - Fecha a verificar
 * @returns {boolean} True si la fecha es ayer
 */
export const isYesterday = (date) => {
  const dateObj = new Date(date);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  
  return dateObj.getDate() === yesterday.getDate() &&
         dateObj.getMonth() === yesterday.getMonth() &&
         dateObj.getFullYear() === yesterday.getFullYear();
};

/**
 * Calcula el tiempo transcurrido desde una fecha en formato legible
 * @param {Date|string|number} date - Fecha desde la que calcular
 * @returns {string} Tiempo transcurrido en formato legible
 */
export const timeAgo = (date) => {
  const dateObj = new Date(date);
  const now = new Date();
  
  const seconds = Math.floor((now - dateObj) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  
  if (years > 0) {
    return years === 1 ? 'hace 1 año' : `hace ${years} años`;
  } else if (months > 0) {
    return months === 1 ? 'hace 1 mes' : `hace ${months} meses`;
  } else if (days > 0) {
    return days === 1 ? 'hace 1 día' : `hace ${days} días`;
  } else if (hours > 0) {
    return hours === 1 ? 'hace 1 hora' : `hace ${hours} horas`;
  } else if (minutes > 0) {
    return minutes === 1 ? 'hace 1 minuto' : `hace ${minutes} minutos`;
  } else {
    return seconds <= 10 ? 'justo ahora' : `hace ${seconds} segundos`;
  }
};

/**
 * Calcula la fecha de inicio de la semana actual
 * @returns {Date} Fecha de inicio de la semana (lunes)
 */
export const getStartOfWeek = () => {
  const today = new Date();
  const day = today.getDay(); // 0 = domingo, 1 = lunes, ...
  const diff = today.getDate() - day + (day === 0 ? -6 : 1); // Ajusta para que la semana comience el lunes
  
  const startOfWeek = new Date(today.setDate(diff));
  startOfWeek.setHours(0, 0, 0, 0);
  
  return startOfWeek;
};

/**
 * Calcula la fecha de fin de la semana actual
 * @returns {Date} Fecha de fin de la semana (domingo)
 */
export const getEndOfWeek = () => {
  const startOfWeek = getStartOfWeek();
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);
  
  return endOfWeek;
};

/**
 * Calcula la duración en formato legible
 * @param {number} minutes - Duración en minutos
 * @returns {string} Duración formateada
 */
export const formatDuration = (minutes) => {
  if (minutes < 60) {
    return `${minutes} min`;
  } else {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours} h ${mins} min` : `${hours} h`;
  }
};

/**
 * Verifica si el usuario ha accedido en días consecutivos
 * @param {Date|string|number} lastLogin - Fecha del último acceso
 * @param {Date|string|number} currentLogin - Fecha del acceso actual
 * @returns {boolean} True si son días consecutivos
 */
export const areConsecutiveDays = (lastLogin, currentLogin) => {
  const last = new Date(lastLogin);
  const current = new Date(currentLogin);
  
  // Normaliza las fechas a medianoche
  last.setHours(0, 0, 0, 0);
  current.setHours(0, 0, 0, 0);
  
  // Calcula la diferencia en días
  const diffTime = current - last;
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  
  // Son consecutivos si la diferencia es exactamente 1 día
  return diffDays === 1;
};

/**
 * Obtiene el nombre del día de la semana
 * @param {Date|string|number} date - Fecha
 * @returns {string} Nombre del día de la semana
 */
export const getDayName = (date) => {
  const dateObj = new Date(date);
  
  const options = { weekday: 'long' };
  return dateObj.toLocaleDateString('es-MX', options);
};

/**
 * Obtiene el nombre del mes
 * @param {Date|string|number} date - Fecha
 * @returns {string} Nombre del mes
 */
export const getMonthName = (date) => {
  const dateObj = new Date(date);
  
  const options = { month: 'long' };
  return dateObj.toLocaleDateString('es-MX', options);
};