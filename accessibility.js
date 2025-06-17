/**
 * Utilidades para accesibilidad
 * 
 * Este archivo contiene funciones para mejorar la accesibilidad de la aplicación.
 */

import { saveToStorage, getFromStorage } from './storage';

// Clave para almacenar las preferencias de accesibilidad
const ACCESSIBILITY_STORAGE_KEY = 'accessibility_preferences';

// Preferencias de accesibilidad por defecto
const DEFAULT_PREFERENCES = {
  fontSize: 'medium', // small, medium, large, x-large
  highContrast: false,
  reduceAnimations: false,
  dyslexicFont: false,
  readAloud: false,
  colorBlindMode: 'none', // none, protanopia, deuteranopia, tritanopia
  keyboardNavigation: true,
  autoplayMedia: true,
  focusIndicators: true
};

/**
 * Obtiene las preferencias de accesibilidad
 * @returns {Object} Preferencias de accesibilidad
 */
export const getAccessibilityPreferences = () => {
  return getFromStorage(ACCESSIBILITY_STORAGE_KEY, DEFAULT_PREFERENCES);
};

/**
 * Guarda las preferencias de accesibilidad
 * @param {Object} preferences - Preferencias a guardar
 */
export const saveAccessibilityPreferences = (preferences) => {
  const currentPreferences = getAccessibilityPreferences();
  const updatedPreferences = { ...currentPreferences, ...preferences };
  saveToStorage(ACCESSIBILITY_STORAGE_KEY, updatedPreferences);
  applyAccessibilityPreferences(updatedPreferences);
};

/**
 * Aplica las preferencias de accesibilidad al documento
 * @param {Object} preferences - Preferencias a aplicar
 */
export const applyAccessibilityPreferences = (preferences = null) => {
  if (typeof document === 'undefined') return;
  
  const prefs = preferences || getAccessibilityPreferences();
  const html = document.documentElement;
  
  // Tamaño de fuente
  const fontSizeMap = {
    'small': '0.875rem', // 14px
    'medium': '1rem',    // 16px
    'large': '1.125rem', // 18px
    'x-large': '1.25rem' // 20px
  };
  html.style.setProperty('--base-font-size', fontSizeMap[prefs.fontSize] || fontSizeMap.medium);
  
  // Alto contraste
  if (prefs.highContrast) {
    html.classList.add('high-contrast');
  } else {
    html.classList.remove('high-contrast');
  }
  
  // Reducir animaciones
  if (prefs.reduceAnimations) {
    html.classList.add('reduce-animations');
  } else {
    html.classList.remove('reduce-animations');
  }
  
  // Fuente para dislexia
  if (prefs.dyslexicFont) {
    html.classList.add('dyslexic-font');
  } else {
    html.classList.remove('dyslexic-font');
  }
  
  // Modo para daltonismo
  html.setAttribute('data-color-blind-mode', prefs.colorBlindMode);
  
  // Indicadores de foco
  if (prefs.focusIndicators) {
    html.classList.add('focus-indicators');
  } else {
    html.classList.remove('focus-indicators');
  }
};

/**
 * Inicializa las preferencias de accesibilidad
 */
export const initAccessibility = () => {
  if (typeof window === 'undefined') return;
  
  // Aplica las preferencias guardadas
  const preferences = getAccessibilityPreferences();
  applyAccessibilityPreferences(preferences);
  
  // Detecta preferencias del sistema
  detectSystemPreferences();
};

/**
 * Detecta preferencias de accesibilidad del sistema
 */
export const detectSystemPreferences = () => {
  if (typeof window === 'undefined') return;
  
  const preferences = getAccessibilityPreferences();
  let hasChanges = false;
  
  // Detecta preferencia de reducción de movimiento
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && !preferences.reduceAnimations) {
    preferences.reduceAnimations = true;
    hasChanges = true;
  }
  
  // Detecta preferencia de alto contraste
  if (window.matchMedia('(prefers-contrast: more)').matches && !preferences.highContrast) {
    preferences.highContrast = true;
    hasChanges = true;
  }
  
  // Si hay cambios, guarda las nuevas preferencias
  if (hasChanges) {
    saveAccessibilityPreferences(preferences);
  }
};

/**
 * Aumenta el tamaño de fuente
 */
export const increaseFontSize = () => {
  const preferences = getAccessibilityPreferences();
  const fontSizes = ['small', 'medium', 'large', 'x-large'];
  const currentIndex = fontSizes.indexOf(preferences.fontSize);
  
  if (currentIndex < fontSizes.length - 1) {
    saveAccessibilityPreferences({
      fontSize: fontSizes[currentIndex + 1]
    });
  }
};

/**
 * Disminuye el tamaño de fuente
 */
export const decreaseFontSize = () => {
  const preferences = getAccessibilityPreferences();
  const fontSizes = ['small', 'medium', 'large', 'x-large'];
  const currentIndex = fontSizes.indexOf(preferences.fontSize);
  
  if (currentIndex > 0) {
    saveAccessibilityPreferences({
      fontSize: fontSizes[currentIndex - 1]
    });
  }
};

/**
 * Alterna el modo de alto contraste
 */
export const toggleHighContrast = () => {
  const preferences = getAccessibilityPreferences();
  saveAccessibilityPreferences({
    highContrast: !preferences.highContrast
  });
};

/**
 * Alterna la reducción de animaciones
 */
export const toggleReduceAnimations = () => {
  const preferences = getAccessibilityPreferences();
  saveAccessibilityPreferences({
    reduceAnimations: !preferences.reduceAnimations
  });
};

/**
 * Alterna la fuente para dislexia
 */
export const toggleDyslexicFont = () => {
  const preferences = getAccessibilityPreferences();
  saveAccessibilityPreferences({
    dyslexicFont: !preferences.dyslexicFont
  });
};

/**
 * Establece el modo para daltonismo
 * @param {string} mode - Modo para daltonismo (none, protanopia, deuteranopia, tritanopia)
 */
export const setColorBlindMode = (mode) => {
  saveAccessibilityPreferences({
    colorBlindMode: mode
  });
};

/**
 * Lee un texto en voz alta
 * @param {string} text - Texto a leer
 */
export const readAloud = (text) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  
  // Detiene cualquier lectura en curso
  window.speechSynthesis.cancel();
  
  if (!text) return;
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'es-MX';
  
  // Obtiene las voces disponibles
  const voices = window.speechSynthesis.getVoices();
  
  // Intenta encontrar una voz en español
  const spanishVoice = voices.find(voice => voice.lang.startsWith('es'));
  if (spanishVoice) {
    utterance.voice = spanishVoice;
  }
  
  window.speechSynthesis.speak(utterance);
};

/**
 * Detiene la lectura en voz alta
 */
export const stopReading = () => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  
  window.speechSynthesis.cancel();
};

/**
 * Maneja la navegación por teclado
 * @param {Event} event - Evento de teclado
 * @param {Object} navigationMap - Mapa de navegación
 */
export const handleKeyboardNavigation = (event, navigationMap) => {
  const preferences = getAccessibilityPreferences();
  
  if (!preferences.keyboardNavigation) return;
  
  // Ejemplo de navigationMap:
  // {
  //   'ArrowRight': () => nextSlide(),
  //   'ArrowLeft': () => prevSlide(),
  //   'Space': () => togglePlay()
  // }
  
  const handler = navigationMap[event.key];
  if (handler) {
    event.preventDefault();
    handler();
  }
};

/**
 * Agrega atributos ARIA a un elemento
 * @param {HTMLElement} element - Elemento al que agregar atributos
 * @param {Object} attributes - Atributos ARIA a agregar
 */
export const addAriaAttributes = (element, attributes) => {
  if (!element) return;
  
  Object.entries(attributes).forEach(([key, value]) => {
    const ariaKey = key.startsWith('aria-') ? key : `aria-${key}`;
    element.setAttribute(ariaKey, value);
  });
};

/**
 * Verifica si un elemento es visible para lectores de pantalla
 * @param {HTMLElement} element - Elemento a verificar
 * @returns {boolean} True si el elemento es visible para lectores de pantalla
 */
export const isScreenReaderVisible = (element) => {
  if (!element) return false;
  
  const style = window.getComputedStyle(element);
  const ariaHidden = element.getAttribute('aria-hidden');
  
  return !(style.display === 'none' || 
           style.visibility === 'hidden' || 
           ariaHidden === 'true');
};