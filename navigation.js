/**
 * Utilidades para la navegación
 * 
 * Este archivo contiene funciones para manejar la navegación y rutas de la aplicación.
 */

import { curriculum } from '../data/curriculum';

/**
 * Genera la estructura de navegación para el mapa de la odisea
 * @returns {Array} Array de objetos con la estructura de navegación
 */
export const generateNavigationMap = () => {
  return curriculum.parciales.map(parcial => ({
    id: parcial.id,
    titulo: parcial.titulo,
    descripcion: parcial.descripcion,
    temas: parcial.temas.map(tema => ({
      id: tema.id,
      titulo: tema.titulo,
      descripcion: tema.descripcion,
      sesiones: tema.sesiones.map(sesion => ({
        id: sesion.id,
        titulo: sesion.titulo,
        tipo: sesion.tipo
      }))
    }))
  }));
};

/**
 * Genera las rutas para todas las páginas de contenido
 * @returns {Array} Array de objetos con las rutas
 */
export const generateRoutes = () => {
  const routes = [
    { path: '/', name: 'Inicio' },
    { path: '/perfil', name: 'Perfil' },
    { path: '/mapa', name: 'Mapa de la Odisea' },
    { path: '/insignias', name: 'Colección de Insignias' },
  ];
  
  // Agrega rutas para parciales, temas y sesiones
  curriculum.parciales.forEach(parcial => {
    routes.push({
      path: `/parcial/${parcial.id}`,
      name: parcial.titulo,
    });
    
    parcial.temas.forEach(tema => {
      routes.push({
        path: `/tema/${tema.id}`,
        name: tema.titulo,
        parent: `/parcial/${parcial.id}`
      });
      
      tema.sesiones.forEach(sesion => {
        routes.push({
          path: `/sesion/${sesion.id}`,
          name: sesion.titulo,
          parent: `/tema/${tema.id}`
        });
      });
    });
  });
  
  return routes;
};

/**
 * Obtiene información de una sesión específica
 * @param {string} sessionId - ID de la sesión
 * @returns {Object|null} Objeto con información de la sesión o null si no existe
 */
export const getSessionInfo = (sessionId) => {
  for (const parcial of curriculum.parciales) {
    for (const tema of parcial.temas) {
      for (const sesion of tema.sesiones) {
        if (sesion.id === sessionId) {
          return {
            ...sesion,
            tema: {
              id: tema.id,
              titulo: tema.titulo
            },
            parcial: {
              id: parcial.id,
              titulo: parcial.titulo
            }
          };
        }
      }
    }
  }
  return null;
};

/**
 * Obtiene información de un tema específico
 * @param {string} themeId - ID del tema
 * @returns {Object|null} Objeto con información del tema o null si no existe
 */
export const getThemeInfo = (themeId) => {
  for (const parcial of curriculum.parciales) {
    for (const tema of parcial.temas) {
      if (tema.id === themeId) {
        return {
          ...tema,
          parcial: {
            id: parcial.id,
            titulo: parcial.titulo
          }
        };
      }
    }
  }
  return null;
};

/**
 * Obtiene información de un parcial específico
 * @param {string} partialId - ID del parcial
 * @returns {Object|null} Objeto con información del parcial o null si no existe
 */
export const getPartialInfo = (partialId) => {
  for (const parcial of curriculum.parciales) {
    if (parcial.id === partialId) {
      return parcial;
    }
  }
  return null;
};

/**
 * Obtiene la siguiente sesión en la secuencia del curriculum
 * @param {string} currentSessionId - ID de la sesión actual
 * @returns {Object|null} Objeto con información de la siguiente sesión o null si es la última
 */
export const getNextSession = (currentSessionId) => {
  let foundCurrent = false;
  
  for (const parcial of curriculum.parciales) {
    for (const tema of parcial.temas) {
      for (let i = 0; i < tema.sesiones.length; i++) {
        const sesion = tema.sesiones[i];
        
        if (foundCurrent) {
          return {
            id: sesion.id,
            titulo: sesion.titulo,
            path: `/sesion/${sesion.id}`
          };
        }
        
        if (sesion.id === currentSessionId) {
          foundCurrent = true;
          
          // Si es la última sesión del tema, busca la primera del siguiente tema
          if (i === tema.sesiones.length - 1) {
            const temaIndex = parcial.temas.findIndex(t => t.id === tema.id);
            
            // Si hay más temas en este parcial
            if (temaIndex < parcial.temas.length - 1) {
              const nextTema = parcial.temas[temaIndex + 1];
              const nextSesion = nextTema.sesiones[0];
              return {
                id: nextSesion.id,
                titulo: nextSesion.titulo,
                path: `/sesion/${nextSesion.id}`,
                newTheme: true,
                themeTitle: nextTema.titulo
              };
            } 
            // Si es el último tema del parcial, busca el primer tema del siguiente parcial
            else {
              const parcialIndex = curriculum.parciales.findIndex(p => p.id === parcial.id);
              
              if (parcialIndex < curriculum.parciales.length - 1) {
                const nextParcial = curriculum.parciales[parcialIndex + 1];
                const nextTema = nextParcial.temas[0];
                const nextSesion = nextTema.sesiones[0];
                return {
                  id: nextSesion.id,
                  titulo: nextSesion.titulo,
                  path: `/sesion/${nextSesion.id}`,
                  newTheme: true,
                  themeTitle: nextTema.titulo,
                  newPartial: true,
                  partialTitle: nextParcial.titulo
                };
              }
            }
          }
        }
      }
    }
  }
  
  return null; // No hay más sesiones
};

/**
 * Obtiene la ruta de migas de pan (breadcrumbs) para una ruta específica
 * @param {string} path - Ruta actual
 * @param {Array} routes - Array de rutas generado por generateRoutes()
 * @returns {Array} Array de objetos con las migas de pan
 */
export const getBreadcrumbs = (path, routes) => {
  const breadcrumbs = [];
  
  // Siempre incluye el inicio
  breadcrumbs.push({
    path: '/',
    name: 'Inicio'
  });
  
  // Encuentra la ruta actual
  const currentRoute = routes.find(route => route.path === path);
  
  if (currentRoute) {
    // Si tiene padre, agrega la ruta del padre
    if (currentRoute.parent) {
      const parentRoute = routes.find(route => route.path === currentRoute.parent);
      
      if (parentRoute) {
        // Si el padre también tiene padre, agrega el abuelo
        if (parentRoute.parent) {
          const grandparentRoute = routes.find(route => route.path === parentRoute.parent);
          if (grandparentRoute) {
            breadcrumbs.push({
              path: grandparentRoute.path,
              name: grandparentRoute.name
            });
          }
        }
        
        breadcrumbs.push({
          path: parentRoute.path,
          name: parentRoute.name
        });
      }
    }
    
    // Agrega la ruta actual
    breadcrumbs.push({
      path: currentRoute.path,
      name: currentRoute.name
    });
  }
  
  return breadcrumbs;
};