import React, { createContext, useContext, useState, useEffect } from 'react';
import { dashboardService } from '../../../firebase/services/dashboardService';
import { AuthContext } from '../../../contexts/AuthContext';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../../../firebase/config';

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
      
      try {
        // Carregar dados do dashboard
        const data = await dashboardService.getDashboardData(user.uid);
        console.log('Dashboard data loaded:', data);
        
        // Atualizar estado com os dados retornados
        setDashboardData(data);
      } catch (err) {
        console.error('Error loading dashboard data:', err);
        
        // Se houver erro na busca completa, tentar buscar pelo menos os dados básicos do dashboard
        try {
          console.log('Tentando carregar apenas dados básicos do dashboard...');
          // Buscar o documento do dashboard diretamente, sem as subconsultas que podem falhar
          const dashboardRef = doc(db, 'dashboards', user.uid);
          const dashboardDoc = await dashboardService.getDocumentDirectly(dashboardRef);
          
          if (dashboardDoc) {
            console.log('Dados básicos do dashboard carregados com sucesso:', dashboardDoc);
            setDashboardData(dashboardDoc);
          } else {
            // Se nem isso funcionar, inicializar um dashboard vazio
            console.log('Inicializando dashboard vazio...');
            const emptyDashboard = await dashboardService.initializeDashboard(user.uid);
            setDashboardData(emptyDashboard);
          }
        } catch (basicError) {
          console.error('Erro ao carregar dados básicos do dashboard:', basicError);
          setError('Erro ao carregar dados do dashboard');
          // Mesmo com erro, inicializar um objeto vazio para que a UI não quebre
          setDashboardData({
            activities: {
              food: { lastEntry: null },
              walk: { lastEntry: null }
            },
            health: {
              vaccines: { lastVaccine: null }
            }
          });
        }
      }
    } catch (err) {
      console.error('Error in dashboard loading process:', err);
      setError('Erro ao carregar dados do dashboard');
      // Garantir que temos pelo menos um objeto vazio
      setDashboardData({
        activities: {
          food: { lastEntry: null },
          walk: { lastEntry: null }
        }, 
        health: {
          vaccines: { lastVaccine: null }
        }
      });
    } finally {
      setLoading(false);
    }
  };

  // Configurar listener em tempo real
  useEffect(() => {
    if (!user) return;

    // Referência ao documento do dashboard
    const dashboardRef = doc(db, 'dashboards', user.uid);
    
    // Variável para controlar se precisamos atualizar
    let lastUpdateTimestamp = 0;
    
    // Configurar o listener
    const unsubscribe = onSnapshot(dashboardRef, async (doc) => {
      if (doc.exists()) {
        // Obter dados do documento
        const data = doc.data();
        
        // Verificar se os dados são realmente novos para evitar loops
        const currentTimestamp = data.lastUpdated ? 
          (data.lastUpdated.seconds ? data.lastUpdated.seconds : Date.now() / 1000) : 
          Date.now() / 1000;
          
        // Só atualizar se for mais recente (com uma margem de segurança)
        if (currentTimestamp > lastUpdateTimestamp + 2) {
          lastUpdateTimestamp = currentTimestamp;
          
          try {
            // Carregar dados completos do dashboard
            const fullData = await dashboardService.getDashboardData(user.uid);
            setDashboardData(fullData);
          } catch (error) {
            console.error('Erro ao atualizar dados completos:', error);
            // Se falhar, pelo menos atualize com os dados básicos do snapshot
            setDashboardData(data);
          }
        }
      }
    }, (error) => {
      console.error('Error listening to dashboard updates:', error);
    });

    return () => unsubscribe();
  }, [user]);

  // Carregar dados iniciais
  useEffect(() => {
    loadDashboardData();
  }, [user]);

  // Funções auxiliares para atualizar dados
  const updateActivity = async (activityType, data) => {
    try {
      await dashboardService.updateActivity(user.uid, activityType, data);
      // Forçar atualização dos dados após uma mudança
      await loadDashboardData();
    } catch (err) {
      console.error(`Error updating ${activityType} activity:`, err);
      throw err;
    }
  };

  const updateHealth = async (healthData) => {
    try {
      await dashboardService.updateHealth(user.uid, healthData);
      // Não precisamos mais chamar loadDashboardData pois o listener em tempo real cuidará disso
    } catch (err) {
      console.error('Error updating health data:', err);
      throw err;
    }
  };

  const updateTraining = async (trainingData) => {
    try {
      await dashboardService.updateTraining(user.uid, trainingData);
      // Não precisamos mais chamar loadDashboardData pois o listener em tempo real cuidará disso
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
    throw Error('useDashboard must be inside a DashboardProvider');
  }
  return context;
}; 