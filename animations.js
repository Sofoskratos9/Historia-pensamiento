/**
 * Utilidades para animaciones y efectos visuales
 * 
 * Este archivo contiene funciones para manejar animaciones y efectos visuales en la aplicación.
 */

import confetti from 'canvas-confetti';

/**
 * Lanza confeti para celebrar un logro
 * @param {Object} options - Opciones de configuración del confeti
 */
export const launchConfetti = (options = {}) => {
  const defaults = {
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#FFD700', '#FFA500', '#FF4500', '#9370DB', '#00BFFF'],
    startVelocity: 30,
    gravity: 1.2,
    ticks: 60,
    shapes: ['circle', 'square'],
    scalar: 1.2,
    zIndex: 100
  };
  
  const config = { ...defaults, ...options };
  
  confetti(config);
};

/**
 * Lanza confeti en forma de cañón
 * @param {number} duration - Duración en milisegundos
 */
export const launchConfettiCannon = (duration = 1500) => {
  const end = Date.now() + duration;
  
  const interval = setInterval(() => {
    if (Date.now() > end) {
      return clearInterval(interval);
    }
    
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#FFD700', '#FFA500']
    });
    
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#9370DB', '#00BFFF']
    });
  }, 40);
};

/**
 * Lanza confeti en forma de lluvia
 * @param {number} duration - Duración en milisegundos
 */
export const launchConfettiRain = (duration = 3000) => {
  const end = Date.now() + duration;
  
  const interval = setInterval(() => {
    if (Date.now() > end) {
      return clearInterval(interval);
    }
    
    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: 300,
      origin: {
        x: Math.random(),
        y: 0
      },
      colors: ['#FFD700', '#FFA500', '#FF4500', '#9370DB', '#00BFFF'],
      shapes: ['circle', 'square'],
      gravity: 0.5,
      scalar: 0.5,
      drift: 0
    });
  }, 50);
};

/**
 * Lanza confeti en forma de explosión
 */
export const launchConfettiExplosion = () => {
  confetti({
    particleCount: 150,
    spread: 180,
    origin: { y: 0.6 },
    colors: ['#FFD700', '#FFA500', '#FF4500', '#9370DB', '#00BFFF'],
    startVelocity: 45,
    gravity: 1,
    shapes: ['circle', 'square']
  });
};

/**
 * Lanza confeti personalizado para diferentes tipos de logros
 * @param {string} achievementType - Tipo de logro ('level', 'badge', 'partial', etc.)
 */
export const launchAchievementConfetti = (achievementType) => {
  switch (achievementType) {
    case 'level':
      // Confeti dorado para subir de nivel
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#FFA500', '#FFDF00'],
        startVelocity: 30,
        gravity: 1.2,
        ticks: 60,
        shapes: ['circle', 'square'],
        scalar: 1.2
      });
      break;
      
    case 'badge':
      // Confeti con colores variados para insignias
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#9370DB', '#00BFFF', '#FF69B4', '#32CD32'],
        startVelocity: 25,
        gravity: 1,
        ticks: 50,
        shapes: ['circle']
      });
      break;
      
    case 'partial':
      // Gran explosión para completar un parcial
      launchConfettiCannon(2000);
      setTimeout(() => {
        launchConfettiExplosion();
      }, 500);
      break;
      
    case 'theme':
      // Confeti moderado para completar un tema
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#32CD32', '#00BFFF', '#FFD700'],
        startVelocity: 30,
        gravity: 1,
        ticks: 60
      });
      break;
      
    default:
      // Confeti básico para otros logros
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
  }
};

/**
 * Aplica una animación de entrada a un elemento
 * @param {HTMLElement} element - Elemento a animar
 * @param {string} animation - Nombre de la animación
 * @param {number} duration - Duración en milisegundos
 * @returns {Promise} Promesa que se resuelve cuando termina la animación
 */
export const animateElement = (element, animation = 'fadeIn', duration = 500) => {
  if (!element) return Promise.resolve();
  
  return new Promise(resolve => {
    // Asegura que el elemento sea visible
    element.style.opacity = '1';
    element.style.display = 'block';
    
    // Aplica la clase de animación
    element.classList.add(animation);
    
    // Configura la duración
    element.style.animationDuration = `${duration}ms`;
    
    // Elimina la clase cuando termina la animación
    const handleAnimationEnd = () => {
      element.classList.remove(animation);
      element.removeEventListener('animationend', handleAnimationEnd);
      resolve();
    };
    
    element.addEventListener('animationend', handleAnimationEnd);
  });
};

/**
 * Aplica una animación de salida a un elemento
 * @param {HTMLElement} element - Elemento a animar
 * @param {string} animation - Nombre de la animación
 * @param {number} duration - Duración en milisegundos
 * @returns {Promise} Promesa que se resuelve cuando termina la animación
 */
export const animateElementOut = (element, animation = 'fadeOut', duration = 500) => {
  if (!element) return Promise.resolve();
  
  return new Promise(resolve => {
    // Aplica la clase de animación
    element.classList.add(animation);
    
    // Configura la duración
    element.style.animationDuration = `${duration}ms`;
    
    // Oculta el elemento cuando termina la animación
    const handleAnimationEnd = () => {
      element.style.opacity = '0';
      element.style.display = 'none';
      element.classList.remove(animation);
      element.removeEventListener('animationend', handleAnimationEnd);
      resolve();
    };
    
    element.addEventListener('animationend', handleAnimationEnd);
  });
};

/**
 * Aplica una animación de pulso a un elemento
 * @param {HTMLElement} element - Elemento a animar
 * @param {number} duration - Duración en milisegundos
 */
export const pulseElement = (element, duration = 1000) => {
  if (!element) return;
  
  element.classList.add('animate-pulse');
  
  setTimeout(() => {
    element.classList.remove('animate-pulse');
  }, duration);
};

/**
 * Aplica una animación de rebote a un elemento
 * @param {HTMLElement} element - Elemento a animar
 * @param {number} duration - Duración en milisegundos
 */
export const bounceElement = (element, duration = 1000) => {
  if (!element) return;
  
  element.classList.add('animate-bounce');
  
  setTimeout(() => {
    element.classList.remove('animate-bounce');
  }, duration);
};

/**
 * Aplica una animación de sacudida a un elemento
 * @param {HTMLElement} element - Elemento a animar
 * @param {number} duration - Duración en milisegundos
 */
export const shakeElement = (element, duration = 500) => {
  if (!element) return;
  
  element.classList.add('animate-shake');
  
  setTimeout(() => {
    element.classList.remove('animate-shake');
  }, duration);
};

/**
 * Aplica una animación de destello a un elemento
 * @param {HTMLElement} element - Elemento a animar
 * @param {string} color - Color del destello
 * @param {number} duration - Duración en milisegundos
 */
export const flashElement = (element, color = '#FFD700', duration = 300) => {
  if (!element) return;
  
  const originalBackground = element.style.backgroundColor;
  const originalTransition = element.style.transition;
  
  element.style.transition = `background-color ${duration / 2}ms ease`;
  element.style.backgroundColor = color;
  
  setTimeout(() => {
    element.style.backgroundColor = originalBackground;
    
    setTimeout(() => {
      element.style.transition = originalTransition;
    }, duration / 2);
  }, duration / 2);
};