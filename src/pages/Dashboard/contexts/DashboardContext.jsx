import React, { createContext, useContext, useState, useEffect } from 'react';
import { dashboardService } from '../../../firebase/services/dashboardService';
import { AuthContext } from '../../../contexts/AuthContext';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para carregar dados do dashboard
  const loadDashboardData = async () => {
    if (!user) {
      setLoading(false);
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      // Carregar dados do dashboard
      const data = await dashboardService.getDashboardData(user.uid);
      console.log('Dashboard data loaded:', data);
      
      // Atualizar estado com os dados retornados
      setDashboardData(data);
    } catch (err) {
      console.error('Error loading dashboard data:', err);
      setError('Erro ao carregar dados do dashboard');
    } finally {
      setLoading(false);
    }
  };

  // Carregar dados iniciais
  useEffect(() => {
    loadDashboardData();
  }, [user]);

  // Funções auxiliares para atualizar dados
  const updateActivity = async (activityType, data) => {
    try {
      await dashboardService.updateActivity(user.uid, activityType, data);
      await loadDashboardData(); // Recarregar dados após atualização
    } catch (err) {
      console.error(`Error updating ${activityType} activity:`, err);
      throw err;
    }
  };

  const updateHealth = async (healthData) => {
    try {
      await dashboardService.updateHealth(user.uid, healthData);
      await loadDashboardData(); // Recarregar dados após atualização
    } catch (err) {
      console.error('Error updating health data:', err);
      throw err;
    }
  };

  const updateTraining = async (trainingData) => {
    try {
      await dashboardService.updateTraining(user.uid, trainingData);
      await loadDashboardData(); // Recarregar dados após atualização
    } catch (err) {
      console.error('Error updating training data:', err);
      throw err;
    }
  };

  const value = {
    dashboardData,
    loading,
    error,
    // Funções de atualização
    updateActivity,
    updateHealth,
    updateTraining,
    // Função para recarregar dados
    refreshData: loadDashboardData
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