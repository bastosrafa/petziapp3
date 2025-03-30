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
  limit,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../config';

// Diary Collection Operations
export const diaryService = {
  // Adicionar entrada de alimentação
  addFoodEntry: async (userId, data) => {
    try {
      const diaryRef = collection(db, 'users', userId, 'diary');
      const entry = {
        type: 'food',
        timestamp: Timestamp.now(),
        ...data
      };
      return await addDoc(diaryRef, entry);
    } catch (error) {
      console.error('Error adding food entry:', error);
      throw error;
    }
  },

  // Adicionar registro de passeio
  addWalkEntry: async (userId, data) => {
    try {
      const diaryRef = collection(db, 'users', userId, 'diary');
      const entry = {
        type: 'walk',
        timestamp: Timestamp.now(),
        ...data
      };
      return await addDoc(diaryRef, entry);
    } catch (error) {
      console.error('Error adding walk entry:', error);
      throw error;
    }
  },

  // Buscar últimas entradas
  getRecentEntries: async (userId, limit = 10) => {
    try {
      const diaryRef = collection(db, 'users', userId, 'diary');
      const q = query(
        diaryRef,
        orderBy('timestamp', 'desc'),
        limit(limit)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error fetching recent entries:', error);
      throw error;
    }
  }
};

// Health Records Collection Operations
export const healthService = {
  // Atualizar status das vacinas
  updateVaccineStatus: async (userId, data) => {
    try {
      const healthRef = doc(db, 'users', userId, 'health_records', 'vaccines');
      await updateDoc(healthRef, {
        status: data.status,
        lastUpdate: Timestamp.now(),
        ...data
      });
    } catch (error) {
      console.error('Error updating vaccine status:', error);
      throw error;
    }
  },

  // Adicionar registro de vacina
  addVaccineRecord: async (userId, data) => {
    try {
      const healthRef = collection(db, 'users', userId, 'health_records', 'vaccines', 'history');
      const record = {
        ...data,
        timestamp: Timestamp.now()
      };
      return await addDoc(healthRef, record);
    } catch (error) {
      console.error('Error adding vaccine record:', error);
      throw error;
    }
  },

  // Buscar status atual das vacinas
  getVaccineStatus: async (userId) => {
    try {
      const healthRef = doc(db, 'users', userId, 'health_records', 'vaccines');
      const docSnap = await getDoc(healthRef);
      return docSnap.exists() ? docSnap.data() : null;
    } catch (error) {
      console.error('Error fetching vaccine status:', error);
      throw error;
    }
  }
};

// Training Progress Collection Operations
export const trainingService = {
  // Atualizar progresso do treino
  updateTrainingProgress: async (userId, data) => {
    try {
      const progressRef = doc(db, 'users_progress', userId);
      await updateDoc(progressRef, {
        lastUpdate: Timestamp.now(),
        ...data
      });
    } catch (error) {
      console.error('Error updating training progress:', error);
      throw error;
    }
  },

  // Adicionar lição concluída
  addCompletedLesson: async (userId, lessonData) => {
    try {
      const progressRef = collection(db, 'users_progress', userId, 'completed_lessons');
      const lesson = {
        ...lessonData,
        completedAt: Timestamp.now()
      };
      return await addDoc(progressRef, lesson);
    } catch (error) {
      console.error('Error adding completed lesson:', error);
      throw error;
    }
  },

  // Buscar progresso atual
  getTrainingProgress: async (userId) => {
    try {
      const progressRef = doc(db, 'users_progress', userId);
      const docSnap = await getDoc(progressRef);
      return docSnap.exists() ? docSnap.data() : null;
    } catch (error) {
      console.error('Error fetching training progress:', error);
      throw error;
    }
  }
};

// Dashboard Data Aggregation
export const dashboardService = {
  // Buscar todos os dados do dashboard
  getDashboardData: async (userId) => {
    try {
      const [recentEntries, vaccineStatus, trainingProgress] = await Promise.all([
        diaryService.getRecentEntries(userId),
        healthService.getVaccineStatus(userId),
        trainingService.getTrainingProgress(userId)
      ]);

      // Processar últimas entradas para encontrar último passeio e alimentação
      const lastWalk = recentEntries.find(entry => entry.type === 'walk');
      const lastFood = recentEntries.find(entry => entry.type === 'food');

      return {
        lastWalk: lastWalk?.timestamp?.toDate() || null,
        lastFood: lastFood?.timestamp?.toDate() || null,
        vaccines: vaccineStatus || {
          status: 'up_to_date',
          nextDose: null
        },
        training: trainingProgress || {
          completedLessons: 0,
          totalTime: 0,
          currentLevel: 'beginner'
        }
      };
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      throw error;
    }
  }
}; 