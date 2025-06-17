/**
 * Utilidades para el almacenamiento local
 * 
 * Este archivo contiene funciones para manejar el almacenamiento local y la persistencia de datos.
 */

// Prefijo para todas las claves de almacenamiento
const STORAGE_PREFIX = 'odisea_pensamiento_';

/**
 * Guarda un valor en el almacenamiento local
 * @param {string} key - Clave para almacenar el valor
 * @param {any} value - Valor a almacenar (será convertido a JSON)
 */
export const saveToStorage = (key, value) => {
  try {
    if (typeof window !== 'undefined') {
      const prefixedKey = `${STORAGE_PREFIX}${key}`;
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(prefixedKey, serializedValue);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error al guardar en localStorage: ${error.message}`);
    return false;
  }
};

/**
 * Obtiene un valor del almacenamiento local
 * @param {string} key - Clave del valor a obtener
 * @param {any} defaultValue - Valor por defecto si no existe la clave
 * @returns {any} Valor almacenado o defaultValue si no existe
 */
export const getFromStorage = (key, defaultValue = null) => {
  try {
    if (typeof window !== 'undefined') {
      const prefixedKey = `${STORAGE_PREFIX}${key}`;
      const serializedValue = localStorage.getItem(prefixedKey);
      
      if (serializedValue === null) {
        return defaultValue;
      }
      
      return JSON.parse(serializedValue);
    }
    return defaultValue;
  } catch (error) {
    console.error(`Error al leer de localStorage: ${error.message}`);
    return defaultValue;
  }
};

/**
 * Elimina un valor del almacenamiento local
 * @param {string} key - Clave del valor a eliminar
 */
export const removeFromStorage = (key) => {
  try {
    if (typeof window !== 'undefined') {
      const prefixedKey = `${STORAGE_PREFIX}${key}`;
      localStorage.removeItem(prefixedKey);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error al eliminar de localStorage: ${error.message}`);
    return false;
  }
};

/**
 * Limpia todos los datos de la aplicación del almacenamiento local
 */
export const clearAppStorage = () => {
  try {
    if (typeof window !== 'undefined') {
      // Solo elimina las claves que pertenecen a esta aplicación
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(STORAGE_PREFIX)) {
          localStorage.removeItem(key);
        }
      });
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error al limpiar localStorage: ${error.message}`);
    return false;
  }
};

/**
 * Exporta todos los datos del usuario a un archivo JSON
 * @returns {Object} Objeto con todos los datos del usuario
 */
export const exportUserData = () => {
  try {
    if (typeof window !== 'undefined') {
      const userData = {};
      
      // Recopila todas las claves que pertenecen a esta aplicación
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(STORAGE_PREFIX)) {
          const shortKey = key.replace(STORAGE_PREFIX, '');
          userData[shortKey] = JSON.parse(localStorage.getItem(key));
        }
      });
      
      // Agrega metadatos
      userData.exportDate = new Date().toISOString();
      userData.appVersion = '1.0.0';
      
      return userData;
    }
    return null;
  } catch (error) {
    console.error(`Error al exportar datos: ${error.message}`);
    return null;
  }
};

/**
 * Importa datos de usuario desde un objeto JSON
 * @param {Object} userData - Datos del usuario a importar
 * @returns {boolean} True si la importación fue exitosa
 */
export const importUserData = (userData) => {
  try {
    if (typeof window !== 'undefined' && userData) {
      // Primero limpia los datos existentes
      clearAppStorage();
      
      // Importa los nuevos datos
      Object.keys(userData).forEach(key => {
        // Ignora los metadatos
        if (key !== 'exportDate' && key !== 'appVersion') {
          saveToStorage(key, userData[key]);
        }
      });
      
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error al importar datos: ${error.message}`);
    return false;
  }
};

/**
 * Verifica si el almacenamiento local está disponible
 * @returns {boolean} True si localStorage está disponible
 */
export const isStorageAvailable = () => {
  try {
    if (typeof window !== 'undefined') {
      const testKey = `${STORAGE_PREFIX}test`;
      localStorage.setItem(testKey, 'test');
      const result = localStorage.getItem(testKey) === 'test';
      localStorage.removeItem(testKey);
      return result;
    }
    return false;
  } catch (error) {
    return false;
  }
};

/**
 * Obtiene el tamaño aproximado de los datos almacenados (en bytes)
 * @returns {number} Tamaño aproximado en bytes
 */
export const getStorageSize = () => {
  try {
    if (typeof window !== 'undefined') {
      let totalSize = 0;
      
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(STORAGE_PREFIX)) {
          totalSize += localStorage.getItem(key).length * 2; // Aproximación: 2 bytes por carácter
        }
      });
      
      return totalSize;
    }
    return 0;
  } catch (error) {
    console.error(`Error al calcular tamaño: ${error.message}`);
    return 0;
  }
};