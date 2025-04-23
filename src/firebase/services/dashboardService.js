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
      console.log("========== INÍCIO getDashboardData ==========");
      
      const dashboardRef = doc(db, 'dashboards', userId);
      const dashboardDoc = await getDoc(dashboardRef);
      
      if (!dashboardDoc.exists()) {
        // Se o dashboard não existir, criar um novo
        return await dashboardService.initializeDashboard(userId);
      }
      
      const dashboardData = dashboardDoc.data();
      
      // Buscar a vacina mais recente que foi APLICADA (status == 'Aplicada')
      try {
        console.log("========== BUSCANDO VACINAS ==========");
        
        // Consulta direta na coleção health_records
        const healthRef = collection(db, 'users', userId, 'health_records');
        
        // Buscar manualmente todas as vacinas
        const vaccineQuery = query(
          healthRef,
          where('type', '==', 'vaccine')
        );
        
        const vaccineSnapshot = await getDocs(vaccineQuery);
        
        if (!vaccineSnapshot.empty) {
          console.log(`Encontradas ${vaccineSnapshot.size} vacinas no total`);
          
          // Filtrar TODAS as vacinas APLICADAS
          const appliedVaccines = vaccineSnapshot.docs
            .map(doc => ({
              id: doc.id,
              ...doc.data()
            }))
            .filter(data => data.status === 'Aplicada');
            
          console.log(`Total de vacinas aplicadas: ${appliedVaccines.length}`);
          
          // Mostrar TODAS as vacinas aplicadas para diagnóstico
          appliedVaccines.forEach((vaccine, index) => {
            const dateStr = vaccine.date 
              ? (vaccine.date.toDate ? vaccine.date.toDate().toISOString() : vaccine.date) 
              : 'sem data';
            
            console.log(`Vacina aplicada ${index + 1}: ${vaccine.name}, Data: ${dateStr}, Doc ID: ${vaccine.id}`);
          });
          
          // Ordenar por data (mais recente primeiro)
          appliedVaccines.sort((a, b) => {
            const getTime = (item) => {
              const date = item.date;
              if (!date) return 0;
              
              try {
                if (date.toDate) return date.toDate().getTime();
                if (typeof date === 'string') return new Date(date).getTime();
                if (date.seconds) return date.seconds * 1000;
                return 0;
              } catch (e) {
                console.error('Erro ao converter data para ordenação:', e);
                return 0;
              }
            };
            
            // Ordem decrescente (mais recente primeiro)
            return getTime(b) - getTime(a);
          });
          
          console.log("Vacinas ordenadas por data (mais recente primeiro):");
          appliedVaccines.forEach((vaccine, index) => {
            const dateStr = vaccine.date 
              ? (vaccine.date.toDate ? vaccine.date.toDate().toISOString() : vaccine.date) 
              : 'sem data';
            
            console.log(`${index + 1}: ${vaccine.name}, Data: ${dateStr}, Doc ID: ${vaccine.id}`);
          });
          
          if (appliedVaccines.length > 0) {
            // Usar a PRIMEIRA vacina após ordenação (a mais recente)
            const vaccineDoc = appliedVaccines[0];
            console.log('Vacina mais recente selecionada:', vaccineDoc);
            
            // Garantir que a data da vacina seja correta
            let vaccineDate = null;
            if (vaccineDoc.date) {
              try {
                if (vaccineDoc.date.toDate) {
                  vaccineDate = vaccineDoc.date.toDate();
                } else if (typeof vaccineDoc.date === 'string') {
                  vaccineDate = new Date(vaccineDoc.date);
                } else if (vaccineDoc.date.seconds) {
                  vaccineDate = new Date(vaccineDoc.date.seconds * 1000);
                }
                
                console.log('Data extraída da vacina mais recente:', vaccineDate);
              } catch (dateError) {
                console.error('Erro ao processar data da vacina:', dateError);
              }
            }
            
            if (vaccineDate && !isNaN(vaccineDate.getTime())) {
              console.log('Atualizando dashboard com a vacina mais recente de', vaccineDate);
              
              // Atualizar a data da última vacina no dashboard
              if (!dashboardData.health) dashboardData.health = {};
              if (!dashboardData.health.vaccines) dashboardData.health.vaccines = {};
              
              // Atualizar com a vacina mais recente
              dashboardData.health.vaccines.lastVaccine = {
                ...vaccineDoc,
                date: vaccineDate
              };
              
              // Atualizar o status
              dashboardData.health.vaccines.status = 'up_to_date';
              
              // Atualizar o documento do dashboard no Firestore
              await updateDoc(dashboardRef, {
                'health.vaccines.lastVaccine': {
                  ...vaccineDoc,
                  date: vaccineDate
                },
                'health.vaccines.status': 'up_to_date',
                lastUpdated: serverTimestamp()
              });
              
              console.log('Dashboard atualizado com sucesso com a vacina mais recente');
            }
          }
        } else {
          console.log('Nenhuma vacina encontrada');
        }
      } catch (vaccineError) {
        console.error('Erro ao buscar vacina mais recente:', vaccineError);
        // Não interromper o fluxo principal
      }
      
      // Agora vamos reler o dashboard após a atualização para garantir que temos os dados mais recentes
      const updatedDashboardDoc = await getDoc(dashboardRef);
      if (updatedDashboardDoc.exists()) {
        const updatedData = updatedDashboardDoc.data();
        if (updatedData.health?.vaccines?.lastVaccine) {
          dashboardData.health = updatedData.health;
          console.log('Dashboard recarregado com dados atualizados de vacina');
        }
      }
      
      // Buscar entradas mais recentes do diário
      const latestDiaryEntries = await dashboardService.getLatestDiaryEntries(userId);
      console.log('Entradas mais recentes do diário:', latestDiaryEntries);
      
      // Adicionar as entradas mais recentes diretamente ao objeto principal do dashboard
      // Primeiro, adicionar a entrada de passeio mais recente
      if (latestDiaryEntries.passeio) {
        // Verificar se a data está disponível e válida
        if (latestDiaryEntries.passeio.date && !isNaN(latestDiaryEntries.passeio.date.getTime())) {
          console.log('Data válida do último passeio encontrada:', latestDiaryEntries.passeio.date.toLocaleString());
          
          // Garantir que a data seja tanto date quanto timestamp
          if (!latestDiaryEntries.passeio.timestamp) {
            latestDiaryEntries.passeio.timestamp = latestDiaryEntries.passeio.date;
          }
          
          // Criar cópia limpa do objeto para evitar referências circulares ou problemas de serialização
          const walkEntry = {
            ...latestDiaryEntries.passeio,
            date: latestDiaryEntries.passeio.date,
            timestamp: latestDiaryEntries.passeio.date
          };
          
          dashboardData.lastWalkEntry = walkEntry;
          console.log('Último passeio adicionado como lastWalkEntry com timestamp válido');
          
          // Manter a retrocompatibilidade com a estrutura antiga do dashboard
          if (!dashboardData.activities) {
            dashboardData.activities = {};
          }
          if (!dashboardData.activities.walk) {
            dashboardData.activities.walk = { lastEntry: null, totalEntries: 0, streak: 0 };
          }
          
          // Criar um objeto de lastEntry compatível com a estrutura do dashboard
          dashboardData.activities.walk.lastEntry = {
            timestamp: latestDiaryEntries.passeio.date,
            details: walkEntry,
            type: 'walk'
          };
          
          console.log('Último passeio atualizado na estrutura antiga');
        } else {
          console.error('Data do último passeio é inválida ou não está disponível');
        }
      } else {
        console.log('Nenhum registro de passeio encontrado');
      }
      
      // Depois, adicionar a entrada de alimentação mais recente
      if (latestDiaryEntries.alimentacao) {
        // Verificar se a data está disponível e válida
        if (latestDiaryEntries.alimentacao.date && !isNaN(latestDiaryEntries.alimentacao.date.getTime())) {
          console.log('Data válida da última alimentação encontrada:', latestDiaryEntries.alimentacao.date.toLocaleString());
          console.log('Intervalo de alimentação configurado:', latestDiaryEntries.alimentacao.feedingInterval || '8 (padrão)');
          
          // Garantir que a data seja tanto date quanto timestamp
          if (!latestDiaryEntries.alimentacao.timestamp) {
            latestDiaryEntries.alimentacao.timestamp = latestDiaryEntries.alimentacao.date;
          }
          
          // Criar cópia limpa do objeto para evitar referências circulares ou problemas de serialização
          const foodEntry = {
            ...latestDiaryEntries.alimentacao,
            date: latestDiaryEntries.alimentacao.date,
            timestamp: latestDiaryEntries.alimentacao.date
          };
          
          dashboardData.lastFoodEntry = foodEntry;
          console.log('Última alimentação adicionada como lastFoodEntry com timestamp válido');
          
          // Manter a retrocompatibilidade com a estrutura antiga do dashboard
          if (!dashboardData.activities) {
            dashboardData.activities = {};
          }
          if (!dashboardData.activities.food) {
            dashboardData.activities.food = { lastEntry: null, totalEntries: 0, streak: 0 };
          }
          
          // Criar um objeto de lastEntry compatível com a estrutura do dashboard
          dashboardData.activities.food.lastEntry = {
            timestamp: latestDiaryEntries.alimentacao.date,
            details: foodEntry,
            type: 'food'
          };
          
          console.log('Última alimentação atualizada na estrutura antiga');
        } else {
          console.error('Data da última alimentação é inválida ou não está disponível');
        }
      } else {
        console.log('Nenhum registro de alimentação encontrado');
      }
      
      // Também atualizar o dashboard no Firestore com estes dados mais recentes
      try {
        const updateData = {};
        
        if (latestDiaryEntries.passeio && latestDiaryEntries.passeio.date && !isNaN(latestDiaryEntries.passeio.date.getTime())) {
          // Preparar dados para Firestore (Firestore não aceita objetos Date diretamente)
          const walkEntryForFirestore = {...latestDiaryEntries.passeio};
          
          // Converter Date para Timestamp do Firestore
          walkEntryForFirestore.date = Timestamp.fromDate(latestDiaryEntries.passeio.date);
          walkEntryForFirestore.timestamp = Timestamp.fromDate(latestDiaryEntries.passeio.date);
          
          // Atualizar a nova estrutura
          updateData.lastWalkEntry = walkEntryForFirestore;
          
          // Manter a retrocompatibilidade
          updateData['activities.walk.lastEntry'] = {
            timestamp: Timestamp.fromDate(latestDiaryEntries.passeio.date),
            details: walkEntryForFirestore,
            type: 'walk'
          };
        }
        
        if (latestDiaryEntries.alimentacao && latestDiaryEntries.alimentacao.date && !isNaN(latestDiaryEntries.alimentacao.date.getTime())) {
          // Preparar dados para Firestore (Firestore não aceita objetos Date diretamente)
          const foodEntryForFirestore = {...latestDiaryEntries.alimentacao};
          
          // Converter Date para Timestamp do Firestore
          foodEntryForFirestore.date = Timestamp.fromDate(latestDiaryEntries.alimentacao.date);
          foodEntryForFirestore.timestamp = Timestamp.fromDate(latestDiaryEntries.alimentacao.date);
          
          // Atualizar a nova estrutura
          updateData.lastFoodEntry = foodEntryForFirestore;
          
          // Manter a retrocompatibilidade
          updateData['activities.food.lastEntry'] = {
            timestamp: Timestamp.fromDate(latestDiaryEntries.alimentacao.date),
            details: foodEntryForFirestore,
            type: 'food'
          };
        }
        
        if (Object.keys(updateData).length > 0) {
          updateData.lastUpdated = serverTimestamp();
          console.log('Atualizando dashboard com dados de timestamp para Firestore');
          
          await updateDoc(dashboardRef, updateData);
          console.log('Dashboard atualizado com sucesso no Firestore');
        } else {
          console.log('Nenhum dado para atualizar no dashboard');
        }
      } catch (updateError) {
        console.error('Erro ao atualizar dashboard com dados do diário:', updateError);
        // Não lançar erro aqui para não interromper o fluxo principal
      }
      
      console.log("========== FIM getDashboardData ==========");
      return dashboardData;
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      throw error;
    }
  },

  // Função auxiliar para buscar um documento diretamente sem consultas adicionais
  getDocumentDirectly: async (docRef) => {
    try {
      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        console.log('Documento não encontrado');
        return null;
      }
      return docSnapshot.data();
    } catch (error) {
      console.error('Erro ao buscar documento diretamente:', error);
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
  },

  // Buscar entradas mais recentes do diário por categoria
  getLatestDiaryEntries: async (userId, categories = ['alimentacao', 'passeio']) => {
    try {
      const diaryRef = collection(db, 'diary');
      
      const results = {};
      
      // Realizar uma única consulta simples que não requer índices compostos
      const simpleQuery = query(
        diaryRef,
        where('userId', '==', userId)
      );
      
      const querySnapshot = await getDocs(simpleQuery);
      
      if (querySnapshot.empty) {
        console.log('Nenhum registro de diário encontrado para o usuário');
        return {};
      }
      
      // Debug: mostrar todos os registros encontrados
      console.log(`Encontrados ${querySnapshot.size} registros de diário`);
      querySnapshot.docs.forEach(doc => {
        const data = doc.data();
        let dateString = 'sem data';
        try {
          if (data.date) {
            if (data.date.toDate) {
              dateString = data.date.toDate().toISOString();
            } else if (data.date.seconds) {
              dateString = new Date(data.date.seconds * 1000).toISOString();
            } else {
              dateString = String(data.date);
            }
          }
        } catch (e) {
          dateString = `Erro ao processar data: ${e.message}`;
        }
        console.log(`ID: ${doc.id}, Categoria: ${data.category}, Data: ${dateString}`);
      });
      
      // Ordenar todos os registros por data, do mais recente para o mais antigo
      const allRecords = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        };
      }).sort((a, b) => {
        // Função para converter diversos formatos de data para timestamp
        const getTime = (date) => {
          if (!date) return 0;
          
          try {
            // Timestamp do Firestore
            if (date.toDate) return date.toDate().getTime();
            // String ou Date
            if (typeof date === 'string' || date instanceof Date) return new Date(date).getTime();
            // Objeto com seconds
            if (date.seconds) return date.seconds * 1000;
          } catch (e) {
            console.error("Erro ao processar data para ordenação:", e, date);
            return 0;
          }
        };
        
        return getTime(b.date) - getTime(a.date); // Ordem decrescente (mais recente primeiro)
      });
      
      console.log("Registros ordenados:");
      allRecords.slice(0, 5).forEach((record, index) => {
        let dateInfo = 'sem data';
        try {
          if (record.date) {
            if (record.date.toDate) {
              dateInfo = record.date.toDate().toLocaleString();
            } else if (record.date.seconds) {
              dateInfo = new Date(record.date.seconds * 1000).toLocaleString();
            } else if (record.date instanceof Date) {
              dateInfo = record.date.toLocaleString();
            } else {
              dateInfo = String(record.date);
            }
          }
        } catch (e) {
          dateInfo = `Erro ao processar data: ${e.message}`;
        }
        
        console.log(`${index + 1}: Categoria: ${record.category}, Data: ${dateInfo}`);
        if (record.category === 'alimentacao' || record.category === 'alimentação') {
          console.log(`   Intervalo de alimentação: ${record.feedingInterval || 'não definido'}`);
        }
      });
      
      // Uma vez que temos todos os registros ordenados, filtramos por categoria
      for (const category of categories) {
        // Definir variações de nomes de categoria para verificação
        const categoryVariations = category === 'alimentacao' 
          ? ['alimentacao', 'alimentação', 'comida', 'food', 'Alimentação', 'ALIMENTACAO', 'Alimentacao']
          : category === 'passeio' 
            ? ['passeio', 'passeios', 'walk', 'walks', 'Passeio', 'PASSEIO'] 
            : [category, category.toLowerCase(), category.toUpperCase()];
        
        // Encontrar o registro mais recente da categoria atual
        const matchingRecord = allRecords.find(record => 
          categoryVariations.includes(record.category)
        );
        
        if (matchingRecord) {
          console.log(`Registro encontrado para ${category}:`, JSON.stringify(matchingRecord, (key, value) => {
            if (value && typeof value === 'object' && value.toDate) {
              return `Timestamp: ${value.toDate().toLocaleString()}`;
            }
            return value;
          }));
          
          // Se for um registro de alimentação, verificar se tem o intervalo configurado
          if (category === 'alimentacao' && !matchingRecord.feedingInterval) {
            console.log(`Intervalo de alimentação não encontrado, usando padrão de 8 horas`);
            matchingRecord.feedingInterval = "8"; // Valor padrão se não estiver definido
          }
          
          // Converter Timestamp para Date
          let parsedDate = null;
          
          try {
            if (matchingRecord.date) {
              if (matchingRecord.date.toDate) {
                parsedDate = matchingRecord.date.toDate();
                console.log(`Data convertida via toDate(): ${parsedDate.toLocaleString()}`);
              } else if (matchingRecord.date.seconds) {
                parsedDate = new Date(matchingRecord.date.seconds * 1000);
                console.log(`Data convertida via seconds: ${parsedDate.toLocaleString()}`);
              } else if (typeof matchingRecord.date === 'string') {
                parsedDate = new Date(matchingRecord.date);
                console.log(`Data convertida via construtor Date (string): ${parsedDate.toLocaleString()}`);
              } else if (matchingRecord.date instanceof Date) {
                parsedDate = matchingRecord.date;
                console.log(`Data mantida como objeto Date: ${parsedDate.toLocaleString()}`);
              }
              
              // Verificar se a data é válida
              if (!parsedDate || isNaN(parsedDate.getTime())) {
                console.error("Data inválida após conversão:", parsedDate);
                parsedDate = null;
              } else {
                console.log(`Data válida convertida para ${category}: ${parsedDate.toLocaleString()}`);
              }
            }
          } catch (error) {
            console.error(`Erro ao converter data para ${category}:`, error);
            parsedDate = null;
          }
          
          // Garantir que tenhamos um timestamp válido
          if (!parsedDate) {
            console.error(`ATENÇÃO: Não foi possível converter a data para ${category}. Vai ficar null.`);
          }
          
          // Criar um objeto limpo para o resultado
          const recordClone = {...matchingRecord};
          delete recordClone.date; // Remover o objeto date original para evitar inconsistências
          
          results[category] = {
            ...recordClone,
            id: matchingRecord.id,
            date: parsedDate, // Usar a data convertida
            timestamp: parsedDate // Garantir que temos o mesmo valor em ambos os campos
          };
          
          console.log(`Resultado final para ${category}:`, results[category]);
          if (results[category].date) {
            console.log(`Data final para ${category}: ${results[category].date.toLocaleString()}`);
          } else {
            console.error(`NENHUMA DATA VÁLIDA PARA ${category}`);
          }
          
        } else {
          console.log(`Nenhum registro de ${category} encontrado`);
          results[category] = null;
        }
      }
      
      return results;
    } catch (error) {
      console.error('Error fetching latest diary entries:', error);
      return {}; // Retornar objeto vazio em vez de lançar erro
    }
  }
}; 