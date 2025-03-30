import React, { createContext, useContext, useState, useEffect } from 'react';
import { dashboardService, diaryService, healthService, trainingService } from '../../../firebase/services/dashboardService';
import { AuthContext } from '../../../contexts/AuthContext';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [petData, setPetData] = useState({
    mood: 'neutral',
    lastFood: null,
    lastWalk: null,
    vaccines: {
      nextDose: null,
      status: 'up_to_date'
    },
    training: {
      completedLessons: 0,
      totalTime: 0,
      currentLevel: 'beginner'
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carregar dados iniciais
  useEffect(() => {
    const loadDashboardData = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        setError(null);
        
        // Tentar carregar dados do dashboard
        const data = await dashboardService.getDashboardData(user.uid);
        
        // Atualizar apenas os campos que existem nos dados retornados
        setPetData(prev => ({
          ...prev,
          ...(data.lastFood && { lastFood: data.lastFood }),
          ...(data.lastWalk && { lastWalk: data.lastWalk }),
          ...(data.vaccines && { vaccines: data.vaccines }),
          ...(data.training && { training: data.training })
        }));
      } catch (err) {
        console.error('Error loading dashboard data:', err);
        // Se for erro de permissão, não mostrar erro ao usuário
        if (err.code === 'permission-denied') {
          setError(null);
          // Manter os dados padrão em caso de erro de permissão
          setPetData(prev => ({
            ...prev,
            lastFood: null,
            lastWalk: null,
            vaccines: {
              nextDose: null,
              status: 'up_to_date'
            },
            training: {
              completedLessons: 0,
              totalTime: 0,
              currentLevel: 'beginner'
            }
          }));
        } else {
          setError('Erro ao carregar dados do dashboard');
        }
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, [user]);

  const value = {
    petData,
    setPetData,
    loading,
    setLoading,
    error,
    setError,
    // Helper functions for common operations
    updateMood: (newMood) => {
      setPetData(prev => ({
        ...prev,
        mood: newMood
      }));
    },
    updateLastFood: async (data) => {
      if (!user) return;
      try {
        await diaryService.addFoodEntry(user.uid, data);
        setPetData(prev => ({
          ...prev,
          lastFood: new Date()
        }));
      } catch (err) {
        console.error('Error updating last food:', err);
        if (err.code === 'permission-denied') {
          throw new Error('Você não tem permissão para atualizar este dado');
        }
        throw err;
      }
    },
    updateLastWalk: async (data) => {
      if (!user) return;
      try {
        await diaryService.addWalkEntry(user.uid, data);
        setPetData(prev => ({
          ...prev,
          lastWalk: new Date()
        }));
      } catch (err) {
        console.error('Error updating last walk:', err);
        if (err.code === 'permission-denied') {
          throw new Error('Você não tem permissão para atualizar este dado');
        }
        throw err;
      }
    },
    updateVaccineStatus: async (data) => {
      if (!user) return;
      try {
        await healthService.updateVaccineStatus(user.uid, data);
        setPetData(prev => ({
          ...prev,
          vaccines: {
            ...prev.vaccines,
            ...data
          }
        }));
      } catch (err) {
        console.error('Error updating vaccine status:', err);
        if (err.code === 'permission-denied') {
          throw new Error('Você não tem permissão para atualizar este dado');
        }
        throw err;
      }
    },
    updateTrainingProgress: async (data) => {
      if (!user) return;
      try {
        await trainingService.updateTrainingProgress(user.uid, data);
        setPetData(prev => ({
          ...prev,
          training: {
            ...prev.training,
            ...data
          }
        }));
      } catch (err) {
        console.error('Error updating training progress:', err);
        if (err.code === 'permission-denied') {
          throw new Error('Você não tem permissão para atualizar este dado');
        }
        throw err;
      }
    }
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}; 