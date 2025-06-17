import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useUser } from '../context/UserContext';
import { useProgress } from '../context/ProgressContext';
import { generateNavigationMap } from '../utils/navigation';
import { calculateLevel } from '../utils/gamification';
import { trackSessionStart } from '../utils/analytics';

export default function Home() {
  const router = useRouter();
  const { user, isAuthenticated } = useUser();
  const { getOverallProgress } = useProgress();
  const [navigationMap, setNavigationMap] = useState([]);
  const [nextSession, setNextSession] = useState(null);
  const [userLevel, setUserLevel] = useState(null);
  const [showWelcomeAnimation, setShowWelcomeAnimation] = useState(false);

  useEffect(() => {
    // Genera el mapa de navegación
    setNavigationMap(generateNavigationMap());
    
    // Registra el inicio de sesión para análisis
    if (isAuthenticated && user) {
      trackSessionStart(user);
    }
    
    // Muestra la animación de bienvenida
    setShowWelcomeAnimation(true);
    
    // Calcula el nivel del usuario
    if (user && user.xp) {
      setUserLevel(calculateLevel(user.xp));
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    // Determina la próxima sesión recomendada basada en el progreso
    if (isAuthenticated && navigationMap.length > 0) {
      const progress = getOverallProgress();
      
      // Busca la primera sesión no completada
      let foundNextSession = false;
      
      for (const parcial of navigationMap) {
        for (const tema of parcial.temas) {
          for (const sesion of tema.sesiones) {
            const sessionId = sesion.id;
            const isCompleted = progress.completedSessions.includes(sessionId);
            
            if (!isCompleted && !foundNextSession) {
              setNextSession({
                id: sessionId,
                titulo: sesion.titulo,
                tema: tema.titulo,
                parcial: parcial.titulo,
                path: `/sesion/${sessionId}`
              });
              foundNextSession = true;
              break;
            }
          }
          if (foundNextSession) break;
        }
        if (foundNextSession) break;
      }
    }
  }, [isAuthenticated, navigationMap, getOverallProgress]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <Head>
        <title>La Odisea del Pensamiento</title>
        <meta name="description" content="Una aventura de aprendizaje gamificada sobre la Historia del Pensamiento" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Encabezado animado */}
        <div className={`text-center mb-12 transition-all duration-1000 ${showWelcomeAnimation ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
            La Odisea del Pensamiento
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Un viaje a través de las grandes ideas que han transformado la humanidad
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Panel izquierdo */}
          <div className="bg-primary-700 rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:scale-[1.02]">
            {isAuthenticated ? (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center text-2xl font-bold">
                    {userLevel ? userLevel.current.id : 1}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">¡Bienvenido, {user.username}!</h2>
                    <p className="text-gray-300">Navegante del Tiempo</p>
                  </div>
                </div>
                
                {userLevel && (
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Nivel {userLevel.current.id}</span>
                      {userLevel.next && <span>Nivel {userLevel.next.id}</span>}
                    </div>
                    <div className="w-full bg-primary-800 rounded-full h-2.5">
                      <div 
                        className="bg-accent-500 h-2.5 rounded-full animate-pulse-slow" 
                        style={{ width: `${userLevel.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-right mt-1 text-gray-300">{user.xp} XP</p>
                  </div>
                )}
                
                {nextSession && (
                  <div className="mt-6 bg-primary-600 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Continúa tu viaje</h3>
                    <p className="text-sm text-gray-300 mb-3">{nextSession.parcial} &gt; {nextSession.tema}</p>
                    <Link href={nextSession.path}>
                      <a className="block w-full py-3 px-4 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg text-center transition-colors">
                        {nextSession.titulo}
                      </a>
                    </Link>
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Link href="/mapa">
                    <a className="py-3 px-4 bg-secondary-600 hover:bg-secondary-700 text-white font-medium rounded-lg text-center transition-colors">
                      Mapa de la Odisea
                    </a>
                  </Link>
                  <Link href="/perfil">
                    <a className="py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg text-center transition-colors">
                      Mi Perfil
                    </a>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-6 text-center">
                <h2 className="text-2xl font-bold">Inicia tu viaje filosófico</h2>
                <p className="text-gray-300">Conviértete en un Navegante del Tiempo y explora las grandes ideas que han transformado la humanidad.</p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Link href="/login">
                    <a className="py-3 px-4 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg text-center transition-colors">
                      Iniciar Sesión
                    </a>
                  </Link>
                  <Link href="/registro">
                    <a className="py-3 px-4 bg-secondary-600 hover:bg-secondary-700 text-white font-medium rounded-lg text-center transition-colors">
                      Registrarse
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Panel derecho */}
          <div className="space-y-6">
            {/* Tarjeta de introducción */}
            <div className="bg-primary-700 rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:scale-[1.02]">
              <h2 className="text-2xl font-bold mb-4">¿Qué es La Odisea del Pensamiento?</h2>
              <p className="text-gray-300 mb-4">
                Una aventura de aprendizaje gamificada que te llevará a través de la Historia del Pensamiento, 
                desde los primeros filósofos hasta las grandes síntesis medievales.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2 text-accent-400">✓</span> Gana insignias y puntos de experiencia
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-accent-400">✓</span> Completa retos y actividades interactivas
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-accent-400">✓</span> Conecta las grandes ideas con tu vida cotidiana
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-accent-400">✓</span> Desarrolla tu pensamiento crítico
                </li>
              </ul>
            </div>

            {/* Tarjeta de parciales */}
            <div className="bg-primary-700 rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:scale-[1.02]">
              <h2 className="text-2xl font-bold mb-4">Explora los Territorios del Pensamiento</h2>
              <div className="space-y-4">
                {navigationMap.slice(0, 3).map((parcial) => (
                  <div key={parcial.id} className="bg-primary-600 rounded-lg p-3 hover:bg-primary-500 transition-colors">
                    <h3 className="font-semibold">{parcial.titulo}</h3>
                    <p className="text-sm text-gray-300">{parcial.temas.length} temas · {parcial.temas.reduce((acc, tema) => acc + tema.sesiones.length, 0)} sesiones</p>
                  </div>
                ))}
                <Link href="/mapa">
                  <a className="block w-full py-2 px-4 bg-secondary-600 hover:bg-secondary-700 text-white font-medium rounded-lg text-center transition-colors mt-4">
                    Ver mapa completo
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sección de características */}
      <section className="bg-primary-800 py-12 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Una nueva forma de aprender filosofía</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-primary-700 rounded-xl p-5 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Aprendizaje Activo</h3>
              <p className="text-gray-300">Aprende haciendo a través de retos, dilemas y actividades interactivas.</p>
            </div>
            
            <div className="bg-primary-700 rounded-xl p-5 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Microlearning</h3>
              <p className="text-gray-300">Contenido dividido en píldoras de conocimiento de 5-7 minutos para mantener tu atención.</p>
            </div>
            
            <div className="bg-primary-700 rounded-xl p-5 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Gamificación</h3>
              <p className="text-gray-300">Gana insignias, puntos de experiencia y desbloquea nuevos territorios en tu viaje.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 py-6 text-center text-gray-400 text-sm">
        <div className="container mx-auto px-4">
          <p>La Odisea del Pensamiento © {new Date().getFullYear()}</p>
          <p className="mt-2">Una aventura de aprendizaje para estudiantes de 3º de secundaria</p>
        </div>
      </footer>
    </div>
  );
}