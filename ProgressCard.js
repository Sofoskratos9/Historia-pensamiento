import { useEffect, useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useUser } from '../context/UserContext';

export default function ProgressCard() {
  const { user } = useUser();
  const { 
    getOverallProgress, 
    completedSessions, 
    completedThemes, 
    completedPartials 
  } = useProgress();
  
  const [progress, setProgress] = useState(0);
  const [sessionCount, setSessionCount] = useState(0);
  const [themeCount, setThemeCount] = useState(0);
  const [partialCount, setPartialCount] = useState(0);

  useEffect(() => {
    if (user) {
      setProgress(getOverallProgress());
      setSessionCount(completedSessions.length);
      setThemeCount(completedThemes.length);
      setPartialCount(completedPartials.length);
    }
  }, [user, getOverallProgress, completedSessions, completedThemes, completedPartials]);

  if (!user) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-primary-800 mb-4">Tu progreso</h2>
      
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-primary-700">Progreso general</span>
          <span className="text-sm font-medium text-primary-700">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-accent-500 h-2.5 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-primary-50 p-3 rounded-lg">
          <div className="text-3xl font-bold text-primary-800">{sessionCount}</div>
          <div className="text-sm text-gray-600">Sesiones completadas</div>
        </div>
        
        <div className="bg-primary-50 p-3 rounded-lg">
          <div className="text-3xl font-bold text-primary-800">{themeCount}</div>
          <div className="text-sm text-gray-600">Temas completados</div>
        </div>
        
        <div className="bg-primary-50 p-3 rounded-lg">
          <div className="text-3xl font-bold text-primary-800">{partialCount}</div>
          <div className="text-sm text-gray-600">Parciales completados</div>
        </div>
      </div>
    </div>
  );
}