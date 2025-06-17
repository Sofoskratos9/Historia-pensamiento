import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '../context/UserContext';
import { useProgress } from '../context/ProgressContext';

export default function Navigation() {
  const router = useRouter();
  const { user, logout } = useUser();
  const { getOverallProgress } = useProgress();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (user) {
      setProgress(getOverallProgress());
    }
  }, [user, getOverallProgress]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    router.push('/');
    closeMenu();
  };

  return (
    <nav className="bg-primary-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo y título */}
          <Link href="/">
            <a className="flex items-center space-x-2" onClick={closeMenu}>
              <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="font-bold text-lg hidden md:block">La Odisea del Pensamiento</span>
            </a>
          </Link>

          {/* Menú de navegación para escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/mapa">
              <a className={`hover:text-accent-400 transition-colors ${router.pathname === '/mapa' ? 'text-accent-400' : ''}`}>
                Mapa
              </a>
            </Link>
            {user && (
              <>
                <Link href="/insignias">
                  <a className={`hover:text-accent-400 transition-colors ${router.pathname === '/insignias' ? 'text-accent-400' : ''}`}>
                    Insignias
                  </a>
                </Link>
                <Link href="/perfil">
                  <a className={`hover:text-accent-400 transition-colors ${router.pathname === '/perfil' ? 'text-accent-400' : ''}`}>
                    Perfil
                  </a>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cerrar sesión
                </button>
              </>
            )}
            {!user && (
              <>
                <Link href="/login">
                  <a className={`hover:text-accent-400 transition-colors ${router.pathname === '/login' ? 'text-accent-400' : ''}`}>
                    Iniciar sesión
                  </a>
                </Link>
                <Link href="/registro">
                  <a className="py-2 px-4 bg-accent-500 hover:bg-accent-600 rounded-lg transition-colors">
                    Registrarse
                  </a>
                </Link>
              </>
            )}
          </div>

          {/* Botón de menú móvil */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Menú"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Menú móvil */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="flex flex-col space-y-4 pb-4">
            <Link href="/mapa">
              <a 
                className={`hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors ${router.pathname === '/mapa' ? 'bg-primary-700' : ''}`}
                onClick={closeMenu}
              >
                Mapa
              </a>
            </Link>
            {user && (
              <>
                <Link href="/insignias">
                  <a 
                    className={`hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors ${router.pathname === '/insignias' ? 'bg-primary-700' : ''}`}
                    onClick={closeMenu}
                  >
                    Insignias
                  </a>
                </Link>
                <Link href="/perfil">
                  <a 
                    className={`hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors ${router.pathname === '/perfil' ? 'bg-primary-700' : ''}`}
                    onClick={closeMenu}
                  >
                    Perfil
                  </a>
                </Link>
                <div className="pt-2 border-t border-primary-700">
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-primary-700 rounded-lg transition-colors"
                  >
                    Cerrar sesión
                  </button>
                </div>
              </>
            )}
            {!user && (
              <>
                <Link href="/login">
                  <a 
                    className={`hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors ${router.pathname === '/login' ? 'bg-primary-700' : ''}`}
                    onClick={closeMenu}
                  >
                    Iniciar sesión
                  </a>
                </Link>
                <Link href="/registro">
                  <a 
                    className="bg-accent-500 hover:bg-accent-600 px-4 py-2 rounded-lg transition-colors text-center"
                    onClick={closeMenu}
                  >
                    Registrarse
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Barra de progreso (solo para usuarios autenticados) */}
      {user && (
        <div className="h-1 bg-primary-700">
          <div 
            className="h-1 bg-accent-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </nav>
  );
}