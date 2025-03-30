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
  setDoc 
} from 'firebase/firestore';
import { db } from '../config';

// Diary Collection Operations
export const diaryService = {
  // Adicionar entrada de alimentação
  addFoodEntry: async (userId, data) => {
    try {
      const diaryRef = collection(db, 'diary_entries');
      const entry = {
        type: 'food',
        timestamp: Timestamp.now(),
        userId,
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
      const diaryRef = collection(db, 'diary_entries');
      const entry = {
        type: 'walk',
        timestamp: Timestamp.now(),
        userId,
        ...data
      };
      return await addDoc(diaryRef, entry);
    } catch (error) {
      console.error('Error adding walk entry:', error);
      throw error;
    }
  },

  // Buscar últimas entradas
  getRecentEntries: async (userId, limitCount = 10) => {
    try {
      const diaryRef = collection(db, 'diary_entries');
      const q = query(
        diaryRef,
        where('userId', '==', userId),
        orderBy('timestamp', 'desc'),
        firestoreLimit(limitCount)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error fetching recent entries:', error);
      return []; // Retornar array vazio em caso de erro
    }
  }
};

// Health Records Collection Operations
export const healthService = {
  // Atualizar status das vacinas
  updateVaccineStatus: async (userId, data) => {
    try {
      const healthRef = doc(db, 'health_records', userId);
      const healthData = {
        status: data.status,
        lastUpdate: Timestamp.now(),
        userId,
        ...data
      };
      await setDoc(healthRef, healthData, { merge: true });
    } catch (error) {
      console.error('Error updating vaccine status:', error);
      throw error;
    }
  },

  // Adicionar registro de vacina
  addVaccineRecord: async (userId, data) => {
    try {
      const healthRef = collection(db, 'health_records');
      const record = {
        ...data,
        timestamp: Timestamp.now(),
        userId
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
      const healthRef = doc(db, 'health_records', userId);
      const docSnap = await getDoc(healthRef);
      if (!docSnap.exists()) {
        // Create default record if it doesn't exist
        const defaultData = {
          status: 'up_to_date',
          lastUpdate: Timestamp.now(),
          userId,
          nextDose: null
        };
        await setDoc(healthRef, defaultData);
        return defaultData;
      }
      return docSnap.data();
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
      const progressRef = doc(db, 'training_progress', userId);
      const progressData = {
        lastUpdate: Timestamp.now(),
        userId,
        ...data
      };
      await setDoc(progressRef, progressData, { merge: true });
    } catch (error) {
      console.error('Error updating training progress:', error);
      throw error;
    }
  },

  // Adicionar lição concluída
  addCompletedLesson: async (userId, lessonData) => {
    try {
      const progressRef = collection(db, 'training_progress');
      const lesson = {
        ...lessonData,
        completedAt: Timestamp.now(),
        userId
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
      const progressRef = doc(db, 'training_progress', userId);
      const docSnap = await getDoc(progressRef);
      if (!docSnap.exists()) {
        // Create default record if it doesn't exist
        const defaultData = {
          completedLessons: 0,
          totalTime: 0,
          currentLevel: 'beginner',
          lastUpdate: Timestamp.now(),
          userId
        };
        await setDoc(progressRef, defaultData);
        return defaultData;
      }
      return docSnap.data();
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