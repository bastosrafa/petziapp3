import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  query, 
  where, 
  orderBy, 
  limit as firestoreLimit,
  Timestamp,
  setDoc,
  serverTimestamp,
  writeBatch,
  increment
} from 'firebase/firestore';
import { db } from '../config';

// Estrutura principal do dashboard
export const dashboardService = {
  // Inicializar dashboard para um novo usuário
  initializeDashboard: async (userId) => {
    try {
      const dashboardRef = doc(db, 'dashboards', userId);
      const dashboardData = {
        userId,
        lastUpdated: serverTimestamp(),
        mood: 'neutral',
        activities: {
          food: {
            lastEntry: null,
            totalEntries: 0,
            streak: 0
          },
          walk: {
            lastEntry: null,
            totalEntries: 0,
            streak: 0
          }
        },
        health: {
          vaccines: {
            lastVaccine: null,
            nextVaccine: null,
            status: 'up_to_date'
          },
          checkups: {
            lastCheckup: null,
            nextCheckup: null
          }
        },
        training: {
          completedLessons: 0,
          totalTime: 0,
          currentLevel: 'beginner',
          lastSession: null
        }
      };

      await setDoc(dashboardRef, dashboardData);
      return dashboardData;
    } catch (error) {
      console.error('Error initializing dashboard:', error);
      throw error;
    }
  },

  // Buscar vacinas mais recentes
  getRecentVaccines: async (userId) => {
    try {
      const vaccinesRef = collection(db, 'users', userId, 'health_records');
      const q = query(
        vaccinesRef,
        orderBy('date', 'desc'),
        firestoreLimit(1)
      );
      
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        return null;
      }
      
      const vaccine = querySnapshot.docs[0].data();
      console.log('Vacina encontrada:', vaccine);
      
      // Converter a data para o formato correto
      let vaccineDate = null;
      if (vaccine.date) {
        try {
          // Se a data já for um objeto Date, use diretamente
          if (vaccine.date instanceof Date) {
            vaccineDate = vaccine.date;
          } 
          // Se for uma string ISO, converta para Date
          else if (typeof vaccine.date === 'string') {
            vaccineDate = new Date(vaccine.date);
          }
          // Se for um timestamp do Firestore, converta para Date
          else if (vaccine.date.toDate) {
            vaccineDate = vaccine.date.toDate();
          }
          
          // Verificar se a data é válida
          if (isNaN(vaccineDate.getTime())) {
            console.error('Data inválida:', vaccine.date);
            vaccineDate = null;
          }
        } catch (error) {
          console.error('Erro ao converter data:', error);
          vaccineDate = null;
        }
      }
      
      return {
        ...vaccine,
        date: vaccineDate
      };
    } catch (error) {
      console.error('Error fetching recent vaccines:', error);
      throw error;
    }
  },

  // Atualizar atividade (comida ou passeio)
  updateActivity: async (userId, activityType, data) => {
    try {
      const dashboardRef = doc(db, 'dashboards', userId);
      const activityRef = collection(db, 'activities');
      
      // Criar nova entrada de atividade
      const activityData = {
        ...data,
        userId,
        type: activityType,
        createdAt: serverTimestamp()
      };
      
      const batch = writeBatch(db);
      
      // Adicionar nova atividade
      const activityDocRef = doc(activityRef);
      batch.set(activityDocRef, activityData);
      
      // Atualizar dashboard
      const dashboardUpdate = {
        [`activities.${activityType}.lastEntry`]: activityData,
        [`activities.${activityType}.totalEntries`]: increment(1),
        lastUpdated: serverTimestamp()
      };
      
      batch.update(dashboardRef, dashboardUpdate);
      
      await batch.commit();
      return activityDocRef.id;
    } catch (error) {
      console.error(`Error updating ${activityType} activity:`, error);
      throw error;
    }
  },

  // Atualizar informações de saúde
  updateHealth: async (userId, healthData) => {
    try {
      const dashboardRef = doc(db, 'dashboards', userId);
      const healthRef = collection(db, 'users', userId, 'health_records');
      
      const batch = writeBatch(db);
      
      // Adicionar novo registro de saúde
      const healthDocRef = doc(healthRef);
      const healthRecord = {
        ...healthData,
        userId,
        timestamp: serverTimestamp(),
        createdAt: serverTimestamp()
      };
      
      batch.set(healthDocRef, healthRecord);
      
      // Buscar vacina mais recente
      const recentVaccine = await dashboardService.getRecentVaccines(userId);
      
      // Atualizar dashboard
      batch.update(dashboardRef, {
        'health.vaccines.lastVaccine': recentVaccine,
        'health.vaccines.status': recentVaccine?.status === 'Aplicada' ? 'up_to_date' : 'pending',
        lastUpdated: serverTimestamp()
      });
      
      await batch.commit();
      return healthDocRef.id;
    } catch (error) {
      console.error('Error updating health record:', error);
      throw error;
    }
  },

  // Atualizar progresso do treinamento
  updateTraining: async (userId, trainingData) => {
    try {
      const dashboardRef = doc(db, 'dashboards', userId);
      const trainingRef = collection(db, 'training_progress');
      
      const batch = writeBatch(db);
      
      // Adicionar novo registro de treinamento
      const trainingDocRef = doc(trainingRef);
      const trainingRecord = {
        ...trainingData,
        userId,
        timestamp: serverTimestamp(),
        createdAt: serverTimestamp()
      };
      
      batch.set(trainingDocRef, trainingRecord);
      
      // Atualizar dashboard
      batch.update(dashboardRef, {
        'training': trainingData,
        lastUpdated: serverTimestamp()
      });
      
      await batch.commit();
      return trainingDocRef.id;
    } catch (error) {
      console.error('Error updating training progress:', error);
      throw error;
    }
  },

  // Buscar dados do dashboard
  getDashboardData: async (userId) => {
    try {
      const dashboardRef = doc(db, 'dashboards', userId);
      const dashboardDoc = await getDoc(dashboardRef);
      
      if (!dashboardDoc.exists()) {
        // Se o dashboard não existir, criar um novo
        return await dashboardService.initializeDashboard(userId);
      }
      
      const dashboardData = dashboardDoc.data();
      
      // Buscar vacina mais recente
      const recentVaccine = await dashboardService.getRecentVaccines(userId);
      console.log('Vacina mais recente para o dashboard:', recentVaccine);
      
      // Atualizar dados de vacinação
      if (recentVaccine) {
        dashboardData.health.vaccines.lastVaccine = recentVaccine;
        dashboardData.health.vaccines.status = recentVaccine.status === 'Aplicada' ? 'up_to_date' : 'pending';
      }
      
      return dashboardData;
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      throw error;
    }
  },

  // Buscar histórico de atividades
  getActivityHistory: async (userId, activityType, limit = 10) => {
    try {
      const activitiesRef = collection(db, 'activities');
      const q = query(
        activitiesRef,
        where('userId', '==', userId),
        where('type', '==', activityType),
        orderBy('timestamp', 'desc'),
        firestoreLimit(limit)
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate()
      }));
    } catch (error) {
      console.error(`Error fetching ${activityType} history:`, error);
      throw error;
    }
  }
}; 