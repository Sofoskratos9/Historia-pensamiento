import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useUser } from '../context/UserContext';
import { useProgress } from '../context/ProgressContext';
import { generateNavigationMap } from '../utils/navigation';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import ProgressCard from '../components/ProgressCard';
import PartialCard from '../components/PartialCard';

export default function MapaOdisea() {
  const router = useRouter();
  const { user, loading: userLoading } = useUser();
  const { getNextSession } = useProgress();
  const [navigationMap, setNavigationMap] = useState([]);
  const [nextSession, setNextSession] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMap, setFilteredMap] = useState([]);

  useEffect(() => {
    // Si el usuario no está autenticado y no está cargando, redirigir al inicio
    if (!user && !userLoading) {
      router.push('/');
    }
  }, [user, userLoading, router]);

  useEffect(() => {
    // Genera el mapa de navegación
    const map = generateNavigationMap();
    setNavigationMap(map);
    setFilteredMap(map);
    
    // Obtiene la próxima sesión recomendada
    if (user) {
      const next = getNextSession();
      setNextSession(next);
    }
  }, [user, getNextSession]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredMap(navigationMap);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    
    // Filtrar el mapa de navegación basado en el término de búsqueda
    const filtered = navigationMap.map(partial => {
      // Verificar si el parcial coincide
      const partialMatches = partial.titulo.toLowerCase().includes(searchTermLower);
      
      // Filtrar temas que coinciden
      const filteredThemes = partial.temas.map(theme => {
        // Verificar si el tema coincide
        const themeMatches = theme.titulo.toLowerCase().includes(searchTermLower);
        
        // Filtrar sesiones que coinciden
        const filteredSessions = theme.sesiones.filter(session => 
          session.titulo.toLowerCase().includes(searchTermLower)
        );
        
        // Si hay sesiones que coinciden o el tema coincide, incluir el tema
        if (filteredSessions.length > 0 || themeMatches) {
          return {
            ...theme,
            sesiones: themeMatches ? theme.sesiones : filteredSessions
          };
        }
        return null;
      }).filter(Boolean); // Eliminar temas nulos
      
      // Si hay temas que coinciden o el parcial coincide, incluir el parcial
      if (filteredThemes.length > 0 || partialMatches) {
        return {
          ...partial,
          temas: partialMatches ? partial.temas : filteredThemes
        };
      }
      return null;
    }).filter(Boolean); // Eliminar parciales nulos
    
    setFilteredMap(filtered);
  }, [searchTerm, navigationMap]);

  // Si el usuario no está autenticado y está cargando, mostrar un indicador de carga
  if (!user && userLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  // Si el usuario no está autenticado y no está cargando, no renderizar nada (se redirigirá)
  if (!user && !userLoading) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Mapa del Curso | La Odisea del Pensamiento</title>
        <meta name="description" content="Explora el mapa completo del curso de filosofía para bachillerato" />
      </Head>

      <Navigation />
      <Breadcrumbs />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary-800 mb-6">Mapa del Curso</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna lateral */}
          <div className="lg:col-span-1">
            <ProgressCard />
            
            {nextSession && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-primary-800 mb-3">Continúa tu aprendizaje</h2>
                <p className="text-gray-700 mb-4">Tu próxima sesión recomendada:</p>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary-700">{nextSession.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {nextSession.partialTitle} &gt; {nextSession.themeTitle}
                  </p>
                  <button 
                    onClick={() => router.push(nextSession.path)}
                    className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                  >
                    Continuar
                  </button>
                </div>
              </div>
            )}
            
            {/* Buscador */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-primary-800 mb-3">Buscar contenido</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar temas, sesiones..."
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Contenido principal */}
          <div className="lg:col-span-2">
            {filteredMap.length > 0 ? (
              filteredMap.map((partial, index) => (
                <div key={partial.id} className="mb-8">
                  <PartialCard 
                    partial={{
                      id: partial.id,
                      title: partial.titulo,
                      description: partial.descripcion || '',
                      themes: partial.temas.map(theme => ({
                        id: theme.id,
                        title: theme.titulo,
                        description: theme.descripcion || '',
                        sessions: theme.sesiones.map(session => ({
                          id: session.id,
                          title: session.titulo,
                          type: session.tipo
                        }))
                      }))
                    }} 
                    index={index} 
                  />
                </div>
              ))
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400 mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No se encontraron resultados</h3>
                <p className="text-gray-600">Intenta con otros términos de búsqueda</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}