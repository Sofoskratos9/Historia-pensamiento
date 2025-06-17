import { useState } from 'react';
import Link from 'next/link';
import { useProgress } from '../context/ProgressContext';

export default function PartialCard({ partial, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isSessionCompleted, isThemeCompleted, isPartialCompleted } = useProgress();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const partialCompleted = isPartialCompleted(partial.id);

  return (
    <div className="mb-8">
      <div 
        className={`bg-white rounded-lg shadow-md overflow-hidden border-l-4 ${partialCompleted ? 'border-green-500' : 'border-primary-500'}`}
      >
        {/* Encabezado del parcial */}
        <div 
          className="p-5 cursor-pointer flex justify-between items-center"
          onClick={toggleExpand}
        >
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary-700 text-white flex items-center justify-center mr-3">
              {index + 1}
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-800">{partial.title}</h3>
              <p className="text-gray-600">{partial.themes.length} temas</p>
            </div>
          </div>
          <div className="flex items-center">
            {partialCompleted && (
              <span className="mr-3 text-green-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-1 text-sm">Completado</span>
              </span>
            )}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 text-gray-500 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Contenido expandible */}
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-full' : 'max-h-0'}`}>
          <div className="p-5 pt-0 border-t border-gray-200">
            <p className="text-gray-700 mb-4">{partial.description}</p>
            
            {/* Lista de temas */}
            <div className="space-y-4">
              {partial.themes.map((theme, themeIndex) => {
                const themeCompleted = isThemeCompleted(theme.id);
                
                return (
                  <div key={theme.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center mr-2 text-xs">
                        {themeIndex + 1}
                      </div>
                      <h4 className="text-lg font-semibold text-primary-700">{theme.title}</h4>
                      {themeCompleted && (
                        <span className="ml-2 text-green-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                      )}
                    </div>
                    
                    {/* Lista de sesiones */}
                    <ul className="space-y-2 ml-8">
                      {theme.sessions.map((session, sessionIndex) => {
                        const sessionCompleted = isSessionCompleted(session.id);
                        
                        return (
                          <li key={session.id} className="flex items-center">
                            <Link 
                              href={`/parcial/${partial.id}/tema/${theme.id}/sesion/${session.id}`}
                            >
                              <a className={`flex items-center py-1 px-2 rounded hover:bg-gray-200 transition-colors ${sessionCompleted ? 'text-green-600' : 'text-gray-700'}`}>
                                <span className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center mr-2 text-xs text-gray-700">
                                  {sessionIndex + 1}
                                </span>
                                <span>{session.title}</span>
                                {sessionCompleted && (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                )}
                              </a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}