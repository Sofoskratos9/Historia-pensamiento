/**
 * Utilidades para validación de datos
 * 
 * Este archivo contiene funciones para validar datos de entrada y formularios.
 */

/**
 * Valida un nombre de usuario
 * @param {string} username - Nombre de usuario a validar
 * @returns {Object} Objeto con resultado de validación
 */
export const validateUsername = (username) => {
  if (!username || username.trim() === '') {
    return {
      isValid: false,
      message: 'El nombre de usuario es obligatorio'
    };
  }
  
  if (username.length < 3) {
    return {
      isValid: false,
      message: 'El nombre de usuario debe tener al menos 3 caracteres'
    };
  }
  
  if (username.length > 20) {
    return {
      isValid: false,
      message: 'El nombre de usuario no puede tener más de 20 caracteres'
    };
  }
  
  // Solo permite letras, números, guiones y guiones bajos
  const validUsernameRegex = /^[a-zA-Z0-9_-]+$/;
  if (!validUsernameRegex.test(username)) {
    return {
      isValid: false,
      message: 'El nombre de usuario solo puede contener letras, números, guiones y guiones bajos'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

/**
 * Valida un correo electrónico
 * @param {string} email - Correo electrónico a validar
 * @returns {Object} Objeto con resultado de validación
 */
export const validateEmail = (email) => {
  if (!email || email.trim() === '') {
    return {
      isValid: false,
      message: 'El correo electrónico es obligatorio'
    };
  }
  
  // Expresión regular para validar correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: 'El formato del correo electrónico no es válido'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

/**
 * Valida una contraseña
 * @param {string} password - Contraseña a validar
 * @returns {Object} Objeto con resultado de validación
 */
export const validatePassword = (password) => {
  if (!password) {
    return {
      isValid: false,
      message: 'La contraseña es obligatoria'
    };
  }
  
  if (password.length < 6) {
    return {
      isValid: false,
      message: 'La contraseña debe tener al menos 6 caracteres'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

/**
 * Valida que dos contraseñas coincidan
 * @param {string} password - Contraseña original
 * @param {string} confirmPassword - Confirmación de contraseña
 * @returns {Object} Objeto con resultado de validación
 */
export const validatePasswordMatch = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return {
      isValid: false,
      message: 'Las contraseñas no coinciden'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

/**
 * Valida un formulario de registro
 * @param {Object} formData - Datos del formulario
 * @returns {Object} Objeto con resultado de validación
 */
export const validateRegistrationForm = (formData) => {
  const { username, email, password, confirmPassword } = formData;
  
  const usernameValidation = validateUsername(username);
  if (!usernameValidation.isValid) {
    return usernameValidation;
  }
  
  const emailValidation = validateEmail(email);
  if (!emailValidation.isValid) {
    return emailValidation;
  }
  
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) {
    return passwordValidation;
  }
  
  const passwordMatchValidation = validatePasswordMatch(password, confirmPassword);
  if (!passwordMatchValidation.isValid) {
    return passwordMatchValidation;
  }
  
  return {
    isValid: true,
    message: ''
  };
};

/**
 * Valida un formulario de inicio de sesión
 * @param {Object} formData - Datos del formulario
 * @returns {Object} Objeto con resultado de validación
 */
export const validateLoginForm = (formData) => {
  const { username, password } = formData;
  
  if (!username || username.trim() === '') {
    return {
      isValid: false,
      message: 'El nombre de usuario es obligatorio'
    };
  }
  
  if (!password) {
    return {
      isValid: false,
      message: 'La contraseña es obligatoria'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

/**
 * Valida una respuesta de texto libre
 * @param {string} text - Texto a validar
 * @param {number} minLength - Longitud mínima requerida
 * @returns {Object} Objeto con resultado de validación
 */
export const validateFreeText = (text, minLength = 10) => {
  if (!text || text.trim() === '') {
    return {
      isValid: false,
      message: 'El texto es obligatorio'
    };
  }
  
  if (text.trim().length < minLength) {
    return {
      isValid: false,
      message: `El texto debe tener al menos ${minLength} caracteres`
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

/**
 * Valida una selección de opciones
 * @param {Array} selected - Opciones seleccionadas
 * @param {number} minRequired - Mínimo de opciones requeridas
 * @returns {Object} Objeto con resultado de validación
 */
export const validateSelection = (selected, minRequired = 1) => {
  if (!selected || !Array.isArray(selected)) {
    return {
      isValid: false,
      message: 'Selección inválida'
    };
  }
  
  if (selected.length < minRequired) {
    return {
      isValid: false,
      message: `Debes seleccionar al menos ${minRequired} opción(es)`
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

/**
 * Valida un número dentro de un rango
 * @param {number} value - Valor a validar
 * @param {number} min - Valor mínimo permitido
 * @param {number} max - Valor máximo permitido
 * @returns {Object} Objeto con resultado de validación
 */
export const validateNumberInRange = (value, min, max) => {
  const numberValue = Number(value);
  
  if (isNaN(numberValue)) {
    return {
      isValid: false,
      message: 'El valor debe ser un número'
    };
  }
  
  if (numberValue < min) {
    return {
      isValid: false,
      message: `El valor debe ser mayor o igual a ${min}`
    };
  }
  
  if (numberValue > max) {
    return {
      isValid: false,
      message: `El valor debe ser menor o igual a ${max}`
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};