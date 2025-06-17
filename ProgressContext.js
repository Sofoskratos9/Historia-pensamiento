import { createContext, useState, useEffect, useContext } from 'react';
import { useUser } from './UserContext';

// Crear el contexto
const ProgressContext = createContext();

// Hook personalizado para usar el contexto
export const useProgress = () => useContext(ProgressContext);

// Proveedor del contexto
export const ProgressProvider = ({ children }) => {
  const { user } = useUser();
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar progreso desde localStorage al iniciar
  useEffect(() => {
    const loadProgress = () => {
      try {
        if (user) {
          const savedProgress = localStorage.getItem(`odisea_progress_${user.id}`);
          if (savedProgress) {
            setProgress(JSON.parse(savedProgress));
          } else {
            // Inicializar progreso para un nuevo usuario
            initializeProgress();
          }
        }
      } catch (error) {
        console.error('Error al cargar el progreso:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      loadProgress();
    } else {
      setProgress(null);
      setLoading(false);
    }
  }, [user]);

  // Guardar progreso en localStorage cuando cambia
  useEffect(() => {
    if (user && progress) {
      localStorage.setItem(`odisea_progress_${user.id}`, JSON.stringify(progress));
    }
  }, [user, progress]);

  // Inicializar el progreso para un nuevo usuario
  const initializeProgress = () => {
    const initialProgress = {
      currentParcial: 1,
      currentTema: 1,
      currentSesion: 1,
      completedSesiones: [],
      completedTemas: [],
      completedParciales: [],
      quizScores: {},
      activities: {},
      lastActivity: new Date().toISOString(),
    };

    setProgress(initialProgress);
    return initialProgress;
  };

  // Función para marcar una sesión como completada
  const completeSesion = (parcial, tema, sesion) => {
    setProgress((prevProgress) => {
      if (!prevProgress) return null;

      const sesionId = `${parcial}-${tema}-${sesion}`;
      const completedSesiones = [...prevProgress.completedSesiones];

      if (!completedSesiones.includes(sesionId)) {
        completedSesiones.push(sesionId);
      }

      // Determinar la siguiente sesión
      let nextParcial = parcial;
      let nextTema = tema;
      let nextSesion = sesion + 1;

      // Lógica para avanzar a la siguiente sesión, tema o parcial
      // Esta lógica debe adaptarse a la estructura específica del currículo
      // Aquí hay una implementación básica

      return {
        ...prevProgress,
        completedSesiones,
        currentParcial: nextParcial,
        currentTema: nextTema,
        currentSesion: nextSesion,
        lastActivity: new Date().toISOString(),
      };
    });
  };

  // Función para marcar un tema como completado
  const completeTema = (parcial, tema) => {
    setProgress((prevProgress) => {
      if (!prevProgress) return null;

      const temaId = `${parcial}-${tema}`;
      const completedTemas = [...prevProgress.completedTemas];

      if (!completedTemas.includes(temaId)) {
        completedTemas.push(temaId);
      }

      return {
        ...prevProgress,
        completedTemas,
        lastActivity: new Date().toISOString(),
      };
    });
  };

  // Función para marcar un parcial como completado
  const completeParcial = (parcial) => {
    setProgress((prevProgress) => {
      if (!prevProgress) return null;

      const completedParciales = [...prevProgress.completedParciales];

      if (!completedParciales.includes(parcial)) {
        completedParciales.push(parcial);
      }

      return {
        ...prevProgress,
        completedParciales,
        lastActivity: new Date().toISOString(),
      };
    });
  };

  // Función para guardar la puntuación de un quiz
  const saveQuizScore = (quizId, score, maxScore) => {
    setProgress((prevProgress) => {
      if (!prevProgress) return null;

      const quizScores = { ...prevProgress.quizScores };
      
      // Guardar solo la mejor puntuación
      if (!quizScores[quizId] || score > quizScores[quizId].score) {
        quizScores[quizId] = {
          score,
          maxScore,
          completedAt: new Date().toISOString(),
        };
      }

      return {
        ...prevProgress,
        quizScores,
        lastActivity: new Date().toISOString(),
      };
    });
  };

  // Función para guardar el progreso de una actividad
  const saveActivity = (activityId, data) => {
    setProgress((prevProgress) => {
      if (!prevProgress) return null;

      const activities = { ...prevProgress.activities };
      
      activities[activityId] = {
        ...activities[activityId],
        ...data,
        updatedAt: new Date().toISOString(),
      };

      return {
        ...prevProgress,
        activities,
        lastActivity: new Date().toISOString(),
      };
    });
  };

  // Función para verificar si una sesión está completada
  const isSesionCompleted = (parcial, tema, sesion) => {
    if (!progress) return false;
    const sesionId = `${parcial}-${tema}-${sesion}`;
    return progress.completedSesiones.includes(sesionId);
  };

  // Función para verificar si un tema está completado
  const isTemaCompleted = (parcial, tema) => {
    if (!progress) return false;
    const temaId = `${parcial}-${tema}`;
    return progress.completedTemas.includes(temaId);
  };

  // Función para verificar si un parcial está completado
  const isParcialCompleted = (parcial) => {
    if (!progress) return false;
    return progress.completedParciales.includes(parcial);
  };

  // Función para obtener el progreso general como porcentaje
  const getOverallProgress = () => {
    if (!progress) return 0;
    
    // Aquí deberías adaptar la lógica según la estructura específica del currículo
    // Este es un ejemplo básico
    const totalSesiones = 30; // Número total de sesiones en el currículo
    const completedSesiones = progress.completedSesiones.length;
    
    return Math.round((completedSesiones / totalSesiones) * 100);
  };

  // Valor del contexto
  const value = {
    progress,
    loading,
    completeSesion,
    completeTema,
    completeParcial,
    saveQuizScore,
    saveActivity,
    isSesionCompleted,
    isTemaCompleted,
    isParcialCompleted,
    getOverallProgress,
    initializeProgress,
  };

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
};