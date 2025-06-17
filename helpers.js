/**
 * Utilidades generales y funciones de ayuda
 * 
 * Este archivo contiene funciones de utilidad general para la aplicación.
 */

/**
 * Genera un ID único
 * @returns {string} ID único
 */
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

/**
 * Mezcla aleatoriamente un array
 * @param {Array} array - Array a mezclar
 * @returns {Array} Array mezclado
 */
export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

/**
 * Trunca un texto a una longitud máxima
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} Texto truncado
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Capitaliza la primera letra de un texto
 * @param {string} text - Texto a capitalizar
 * @returns {string} Texto con la primera letra en mayúscula
 */
export const capitalizeFirstLetter = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Convierte un texto a formato de título (primera letra de cada palabra en mayúscula)
 * @param {string} text - Texto a convertir
 * @returns {string} Texto en formato de título
 */
export const toTitleCase = (text) => {
  if (!text) return '';
  return text.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
  );
};

/**
 * Genera un color aleatorio en formato hexadecimal
 * @returns {string} Color hexadecimal
 */
export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

/**
 * Genera un número aleatorio entre un rango
 * @param {number} min - Valor mínimo
 * @param {number} max - Valor máximo
 * @returns {number} Número aleatorio
 */
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Selecciona un elemento aleatorio de un array
 * @param {Array} array - Array de elementos
 * @returns {*} Elemento aleatorio
 */
export const getRandomElement = (array) => {
  if (!array || array.length === 0) return null;
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Elimina elementos duplicados de un array
 * @param {Array} array - Array con posibles duplicados
 * @returns {Array} Array sin duplicados
 */
export const removeDuplicates = (array) => {
  return [...new Set(array)];
};

/**
 * Agrupa un array de objetos por una propiedad
 * @param {Array} array - Array de objetos
 * @param {string} key - Propiedad por la que agrupar
 * @returns {Object} Objeto con los elementos agrupados
 */
export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
};

/**
 * Ordena un array de objetos por una propiedad
 * @param {Array} array - Array de objetos
 * @param {string} key - Propiedad por la que ordenar
 * @param {boolean} ascending - Orden ascendente o descendente
 * @returns {Array} Array ordenado
 */
export const sortByProperty = (array, key, ascending = true) => {
  return [...array].sort((a, b) => {
    if (a[key] < b[key]) return ascending ? -1 : 1;
    if (a[key] > b[key]) return ascending ? 1 : -1;
    return 0;
  });
};

/**
 * Filtra un array de objetos por una propiedad y valor
 * @param {Array} array - Array de objetos
 * @param {string} key - Propiedad por la que filtrar
 * @param {*} value - Valor a buscar
 * @returns {Array} Array filtrado
 */
export const filterByProperty = (array, key, value) => {
  return array.filter(item => item[key] === value);
};

/**
 * Busca texto en un array de objetos
 * @param {Array} array - Array de objetos
 * @param {string} searchText - Texto a buscar
 * @param {Array} keys - Propiedades en las que buscar
 * @returns {Array} Array con los resultados
 */
export const searchInArray = (array, searchText, keys) => {
  if (!searchText) return array;
  
  const lowerSearchText = searchText.toLowerCase();
  
  return array.filter(item => {
    return keys.some(key => {
      const value = item[key];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(lowerSearchText);
      }
      return false;
    });
  });
};

/**
 * Convierte segundos a formato de tiempo (mm:ss)
 * @param {number} seconds - Segundos a convertir
 * @returns {string} Tiempo formateado
 */
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Calcula el porcentaje
 * @param {number} value - Valor actual
 * @param {number} total - Valor total
 * @returns {number} Porcentaje
 */
export const calculatePercentage = (value, total) => {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
};

/**
 * Genera un slug a partir de un texto
 * @param {string} text - Texto a convertir en slug
 * @returns {string} Slug generado
 */
export const generateSlug = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Reemplaza espacios con -
    .replace(/[áàäâã]/g, 'a') // Normaliza caracteres acentuados
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöôõ]/g, 'o')
    .replace(/[úùüû]/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/[^\w\-]+/g, '') // Elimina caracteres no alfanuméricos
    .replace(/\-\-+/g, '-')   // Reemplaza múltiples - con uno solo
    .replace(/^-+/, '')       // Elimina - del inicio
    .replace(/-+$/, '');      // Elimina - del final
};

/**
 * Detecta si el dispositivo es móvil
 * @returns {boolean} True si es un dispositivo móvil
 */
export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (window.innerWidth <= 768);
};

/**
 * Detecta si el navegador soporta PWA
 * @returns {boolean} True si soporta PWA
 */
export const isPwaSupported = () => {
  if (typeof window === 'undefined') return false;
  
  return 'serviceWorker' in navigator && 
         'PushManager' in window &&
         window.matchMedia('(display-mode: standalone)').matches;
};

/**
 * Detecta si la aplicación está instalada como PWA
 * @returns {boolean} True si está instalada como PWA
 */
export const isPwaInstalled = () => {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.navigator.standalone === true;
};