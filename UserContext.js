import { createContext, useState, useEffect, useContext } from 'react';

// Crear el contexto
const UserContext = createContext();

// Hook personalizado para usar el contexto
export const useUser = () => useContext(UserContext);

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  // Estado para almacenar la información del usuario
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar usuario desde localStorage al iniciar
  useEffect(() => {
    const loadUser = () => {
      try {
        const savedUser = localStorage.getItem('odisea_user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Error al cargar el usuario:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // Guardar usuario en localStorage cuando cambia
  useEffect(() => {
    if (user) {
      localStorage.setItem('odisea_user', JSON.stringify(user));
    }
  }, [user]);

  // Función para registrar un nuevo usuario
  const registerUser = (userData) => {
    const newUser = {
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      xp: 0,
      level: 1,
      badges: [],
      avatar: userData.avatar || '/assets/avatars/default.png',
    };

    setUser(newUser);
    return newUser;
  };

  // Función para actualizar el usuario
  const updateUser = (updates) => {
    setUser((prevUser) => {
      if (!prevUser) return null;
      return { ...prevUser, ...updates };
    });
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('odisea_user');
    setUser(null);
  };

  // Función para añadir XP al usuario
  const addXP = (amount) => {
    setUser((prevUser) => {
      if (!prevUser) return null;
      
      const newXP = prevUser.xp + amount;
      const xpForNextLevel = prevUser.level * 100;
      
      // Comprobar si el usuario sube de nivel
      if (newXP >= xpForNextLevel) {
        return {
          ...prevUser,
          xp: newXP - xpForNextLevel,
          level: prevUser.level + 1,
        };
      }
      
      return {
        ...prevUser,
        xp: newXP,
      };
    });
  };

  // Función para añadir una insignia al usuario
  const addBadge = (badge) => {
    setUser((prevUser) => {
      if (!prevUser) return null;
      
      // Comprobar si el usuario ya tiene esta insignia
      if (prevUser.badges.some(b => b.id === badge.id)) {
        return prevUser;
      }
      
      return {
        ...prevUser,
        badges: [...prevUser.badges, { ...badge, earnedAt: new Date().toISOString() }],
      };
    });
  };

  // Valor del contexto
  const value = {
    user,
    loading,
    registerUser,
    updateUser,
    logout,
    addXP,
    addBadge,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};