import React, { useState, useEffect } from 'react';
import { useDashboard } from '../../../pages/Dashboard/contexts/DashboardContext';
import './styles.css';

const moodDescriptions = {
  happy: "Feliz e energético",
  neutral: "Estado normal",
  sad: "Precisando de atenção"
};

const PetStatus = () => {
  const { dashboardData } = useDashboard();
  const [mood, setMood] = useState('neutral');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const getTimestamp = (timestamp) => {
    if (!timestamp) return null;
    
    try {
      // Se for um timestamp do Firestore
      if (timestamp && timestamp.toDate) {
        return timestamp.toDate();
      } 
      // Se for um objeto com seconds (formato Firestore timestamp)
      else if (timestamp && timestamp.seconds) {
        return new Date(timestamp.seconds * 1000);
      }
      // Se for um objeto Date
      else if (timestamp instanceof Date) {
        return timestamp;
      } 
      // Se for uma string ISO
      else if (typeof timestamp === 'string') {
        return new Date(timestamp);
      }
      
      console.error("Formato de timestamp não reconhecido:", timestamp);
      return null;
    } catch (error) {
      console.error("Erro ao processar timestamp:", error, timestamp);
      return null;
    }
  };

  useEffect(() => {
    if (!dashboardData) return;
    
    console.log("Dashboard data recebido:", new Date().toLocaleString());
    console.log("Dashboard completo:", JSON.stringify(dashboardData, (key, value) => {
      if (value && typeof value === 'object' && value.toDate) {
        return `[Timestamp]`;
      }
      return value;
    }, 2));
    
    const currentDate = new Date();
    
    // Extrair timestamps para as atividades com mais logs para depuração
    console.log("Verificando última alimentação...");
    if (dashboardData.lastFoodEntry) {
      console.log("lastFoodEntry encontrado:", dashboardData.lastFoodEntry);
    } else if (dashboardData.activities?.food?.lastEntry) {
      console.log("activities.food.lastEntry encontrado:", dashboardData.activities.food.lastEntry);
    } else if (dashboardData.activities?.lastFood?.date) {
      console.log("activities.lastFood.date encontrado:", dashboardData.activities.lastFood.date);
    } else {
      console.log("Nenhum registro de alimentação encontrado no dashboard");
    }
    
    // Priorizar todas as possíveis fontes de timestamp
    const lastFoodRaw = 
      dashboardData.lastFoodEntry?.date || 
      dashboardData.lastFoodEntry?.timestamp || 
      dashboardData.activities?.food?.lastEntry?.timestamp ||
      dashboardData.activities?.lastFood?.date;

    console.log("Dados brutos da última alimentação:", lastFoodRaw);

    const lastFoodTimestamp = getTimestamp(lastFoodRaw);
    console.log("Timestamp processado da última alimentação:", 
      lastFoodTimestamp ? lastFoodTimestamp.toLocaleString() : "NULL");
    
    // Obter o intervalo de alimentação personalizado (se existir)
    const feedingInterval = dashboardData.lastFoodEntry?.feedingInterval 
      ? parseInt(dashboardData.lastFoodEntry.feedingInterval, 10) 
      : 8; // Padrão: 8 horas se não especificado
    
    // Define limites para alimentação (em horas) - baseado no intervalo configurado
    const foodLimits = {
      good: feedingInterval / 2, // Bom se estiver na primeira metade do intervalo
      late: feedingInterval      // Atrasado após o intervalo configurado
    };

    // Define limites para passeio (em horas) - agora com limite de 24h
    const walkLimits = {
      good: 12,  // Menos de 12 horas = bom
      late: 24   // Mais de 24 horas = atrasado
    };
    
    // Verificando dados do passeio
    console.log("Verificando último passeio...");
    if (dashboardData.lastWalkEntry) {
      console.log("lastWalkEntry encontrado:", dashboardData.lastWalkEntry);
    } else if (dashboardData.activities?.walk?.lastEntry) {
      console.log("activities.walk.lastEntry encontrado:", dashboardData.activities.walk.lastEntry);
    } else if (dashboardData.activities?.lastWalk?.date) {
      console.log("activities.lastWalk.date encontrado:", dashboardData.activities.lastWalk.date);
    } else {
      console.log("Nenhum registro de passeio encontrado no dashboard");
    }
    
    // Tentar todas as possíveis localizações do timestamp de passeio
    const lastWalkRaw = 
      dashboardData.lastWalkEntry?.date || 
      dashboardData.lastWalkEntry?.timestamp || 
      dashboardData.activities?.walk?.lastEntry?.timestamp ||
      dashboardData.activities?.lastWalk?.date;
    
    console.log("Dados brutos do último passeio:", lastWalkRaw);
    
    const lastWalkTimestamp = getTimestamp(lastWalkRaw);
    console.log("Timestamp processado do último passeio:", 
      lastWalkTimestamp ? lastWalkTimestamp.toLocaleString() : "NULL");
    
    const lastTrainingTimestamp = getTimestamp(
      dashboardData.activities?.lastTraining?.date
    );
    
    const lastVaccineTimestamp = getTimestamp(
      dashboardData.lastVaccine?.date
    );

    // Calcular tempo desde a última alimentação
    let hoursSinceLastFood = null;

    if (lastFoodTimestamp && !isNaN(lastFoodTimestamp.getTime())) {
      // Verificar se a data não está no futuro
      if (lastFoodTimestamp > currentDate) {
        console.error("ALERTA: Data da última alimentação está no futuro:", lastFoodTimestamp.toLocaleString());
        console.error("Data atual:", currentDate.toLocaleString());
        
        // Tratar como se o intervalo tivesse passado (forçar atraso)
        hoursSinceLastFood = feedingInterval + 1; // Garantir que seja marcado como atrasado
        
        console.log("CORREÇÃO: Ajustando para considerar alimentação atrasada devido à data futura");
      } else {
        const diffMs = currentDate.getTime() - lastFoodTimestamp.getTime();
        hoursSinceLastFood = Math.floor(diffMs / (1000 * 60 * 60));
        console.log("Diferença em milissegundos:", diffMs);
        console.log("Diferença calculada em horas desde última alimentação:", hoursSinceLastFood);
      }
    } else {
      console.error("Não foi possível calcular o tempo desde a última alimentação - timestamp inválido");
    }

    // Calcular tempo desde o último passeio
    let hoursSinceLastWalk = null;

    if (lastWalkTimestamp && !isNaN(lastWalkTimestamp.getTime())) {
      // Verificar se a data não está no futuro
      if (lastWalkTimestamp > currentDate) {
        console.error("ALERTA: Data do último passeio está no futuro:", lastWalkTimestamp.toLocaleString());
        console.error("Data atual:", currentDate.toLocaleString());
        
        // Tratar como se o intervalo tivesse passado (forçar atraso)
        hoursSinceLastWalk = walkLimits.late + 1; // Garantir que seja marcado como atrasado
        
        console.log("CORREÇÃO: Ajustando para considerar passeio atrasado devido à data futura");
      } else {
        const diffMs = currentDate.getTime() - lastWalkTimestamp.getTime();
        hoursSinceLastWalk = Math.floor(diffMs / (1000 * 60 * 60));
        console.log("Diferença calculada em horas desde último passeio:", hoursSinceLastWalk);
      }
    } else {
      console.error("Não foi possível calcular o tempo desde o último passeio - timestamp inválido");
    }

    // Calcular tempo desde o último treino
    const daysSinceLastTraining = lastTrainingTimestamp
      ? Math.floor((currentDate - lastTrainingTimestamp) / (1000 * 60 * 60 * 24))
      : null;

    // Calcular tempo desde a última vacina
    const daysSinceLastVaccine = lastVaccineTimestamp
      ? Math.floor((currentDate - lastVaccineTimestamp) / (1000 * 60 * 60 * 24))
      : null;

    console.log("Horas desde última refeição:", hoursSinceLastFood);
    console.log("Intervalo de alimentação configurado:", feedingInterval, "horas");
    console.log("Horas desde último passeio:", hoursSinceLastWalk);
    console.log("Dias desde último treino:", daysSinceLastTraining);
    console.log("Dias desde última vacina:", daysSinceLastVaccine);

    // Verificações e pontuação para alimentação
    let foodStatus = "unknown";
    let foodScore = 0;
    console.log("Verificando status de alimentação:");
    console.log("- Horas desde última refeição:", hoursSinceLastFood);
    console.log("- Intervalo configurado:", feedingInterval, "horas");
    console.log("- Limites: bom < " + foodLimits.good + " horas, atrasado >= " + foodLimits.late + " horas");

    if (hoursSinceLastFood !== null) {
      // Se o valor for negativo, trata-se de uma data futura, considerar como atrasado
      if (hoursSinceLastFood < 0) {
        foodStatus = "late";
        foodScore = -1;
        console.log("Alimentação: ATRASADA - Data futura detectada");
      } else if (hoursSinceLastFood < foodLimits.good) {
        foodStatus = "recent";
        foodScore = 1;
        console.log("Alimentação: Recente");
      } else if (hoursSinceLastFood >= foodLimits.late) {
        foodStatus = "late";
        foodScore = -1;
        console.log("Alimentação: ATRASADA - Já se passaram", hoursSinceLastFood, "horas (limite:", foodLimits.late, "horas)");
      } else {
        foodStatus = "normal";
        foodScore = 0;
        console.log("Alimentação: Normal");
      }
    } else {
      console.log("Status de alimentação não pôde ser determinado");
    }

    // Verificações e pontuação para passeio
    let walkStatus = "unknown";
    let walkScore = 0;
    console.log("Verificando status de passeio:");
    console.log("- Horas desde último passeio:", hoursSinceLastWalk);
    console.log("- Limites: bom < " + walkLimits.good + " horas, atrasado >= " + walkLimits.late + " horas");

    if (hoursSinceLastWalk !== null) {
      // Se o valor for negativo, trata-se de uma data futura, considerar como atrasado
      if (hoursSinceLastWalk < 0) {
        walkStatus = "late";
        walkScore = -1;
        console.log("Passeio: ATRASADO - Data futura detectada");
      } else if (hoursSinceLastWalk < walkLimits.good) {
        walkStatus = "recent";
        walkScore = 1;
        console.log("Passeio: Recente");
      } else if (hoursSinceLastWalk >= walkLimits.late) {
        walkStatus = "late";
        walkScore = -1;
        console.log("Passeio: ATRASADO - Já se passaram", hoursSinceLastWalk, "horas (limite:", walkLimits.late, "horas)");
      } else {
        walkStatus = "normal";
        walkScore = 0;
        console.log("Passeio: Normal");
      }
    } else {
      console.log("Status de passeio não pôde ser determinado");
    }

    // Pontuação para treino (opcional)
    let trainingScore = 0;
    if (daysSinceLastTraining !== null) {
      if (daysSinceLastTraining < 2) {
        trainingScore = 1;
        console.log("Treino: Recente");
      } else if (daysSinceLastTraining > 7) {
        trainingScore = -1;
        console.log("Treino: Atrasado");
      } else {
        console.log("Treino: Normal");
      }
    }

    // Pontuação para vacina (apenas afeta negativamente se estiver muito atrasada)
    let vaccineScore = 0;
    if (daysSinceLastVaccine !== null && daysSinceLastVaccine > 365) {
      vaccineScore = -1;
      console.log("Vacina: Atrasada");
    }

    // Calcular pontuação total
    const totalScore = foodScore + walkScore + trainingScore + vaccineScore;
    console.log("Pontuação total:", totalScore);

    // Determinar humor com base na pontuação
    let newMood = 'neutral';
    if (totalScore >= 1) {
      newMood = 'happy';
    } else if (totalScore <= -2) {
      newMood = 'sad';
    }

    setMood(newMood);

    // Gerar mensagens específicas com base nas necessidades
    const newMessages = [];
    if (foodStatus === "late") {
      newMessages.push(`Estou com fome! Já se passaram ${hoursSinceLastFood} horas desde minha última refeição.`);
    }
    if (walkStatus === "late") {
      newMessages.push(`Quero dar um passeio! Faz mais de ${Math.floor(hoursSinceLastWalk)} horas que não saio.`);
    }
    if (daysSinceLastTraining !== null && daysSinceLastTraining > 7) {
      newMessages.push("Que tal praticarmos alguns truques?");
    }
    if (vaccineScore < 0) {
      newMessages.push("Minhas vacinas estão atrasadas!");
    }

    // Se não há problemas específicos
    if (newMessages.length === 0) {
      if (newMood === 'happy') {
        newMessages.push("Estou super bem hoje!");
      } else if (newMood === 'neutral') {
        newMessages.push("Estou bem. O que vamos fazer hoje?");
      } else {
        newMessages.push("Preciso de mais atenção...");
      }
    }

    setMessages(newMessages);
    setMessage(newMessages[0] || "Olá!");

    // Verificação de segurança para situações extremas
    if (dashboardData.lastFoodEntry) {
      try {
        const rawDate = dashboardData.lastFoodEntry.date;
        let timestamp = null;
        
        if (rawDate && rawDate.toDate) {
          timestamp = rawDate.toDate();
        } else if (rawDate && rawDate.seconds) {
          timestamp = new Date(rawDate.seconds * 1000);
        } else if (rawDate instanceof Date) {
          timestamp = rawDate;
        }
        
        if (timestamp && !isNaN(timestamp.getTime())) {
          const interval = parseInt(dashboardData.lastFoodEntry.feedingInterval || "8", 10);
          const now = new Date();
          
          console.log("VERIFICAÇÃO FINAL DE ALIMENTAÇÃO:");
          console.log("- Data da última alimentação:", timestamp.toLocaleString());
          console.log("- Data atual do sistema:", now.toLocaleString());
          console.log("- Intervalo configurado:", interval, "horas");
          
          let diffHours;
          let statusCalculado;
          
          // Verificar se a data está no futuro
          if (timestamp > now) {
            console.error("ALERTA: A data da última alimentação está no futuro!");
            diffHours = interval + 1; // Forçar status de atrasado
            statusCalculado = "ATRASADO (data futura)";
          } else {
            diffHours = (now.getTime() - timestamp.getTime()) / (1000 * 60 * 60);
            statusCalculado = diffHours >= interval ? "ATRASADO" : "EM DIA";
          }
          
          console.log("- Horas decorridas:", diffHours);
          console.log("- Status calculado:", statusCalculado);
          
          // Forçar o status de alimentação se necessário
          if ((diffHours >= interval || timestamp > now) && foodStatus !== "late") {
            console.warn("Corrigindo status de alimentação para ATRASADO");
            const updatedMessages = [...newMessages];
            
            // Remover qualquer mensagem existente sobre alimentação
            const foodMessageIndex = updatedMessages.findIndex(msg => msg.includes("com fome"));
            if (foodMessageIndex !== -1) {
              updatedMessages.splice(foodMessageIndex, 1);
            }
            
            // Adicionar a mensagem de alerta
            const hoursMessage = timestamp > now 
              ? "Data futura detectada!" 
              : `Já se passaram ${Math.floor(diffHours)} horas`;
              
            updatedMessages.unshift(`Estou com fome! ${hoursMessage} desde minha última refeição.`);
            setMessages(updatedMessages);
            
            // Se não tiver mensagens negativas, atualizar o humor
            if (totalScore === 0) {
              setMood('neutral');
            } else if (totalScore > 0) {
              // Se o humor era positivo, ajustar para neutro devido à alimentação atrasada
              setMood('neutral');
            }
          }
        }
      } catch (e) {
        console.error("Erro na verificação de segurança:", e);
      }
    }

  }, [dashboardData]);

  return (
    <div className="pet-status-container">
      <div className="pet-status-content">
        <div className="pet-container">
          <div className={`pet ${mood}`}>
            <div className="ear left"></div>
            <div className="ear right"></div>
            <div className="head"></div>
            <div className="eye left"></div>
            <div className="eye right"></div>
            <div className="nose"></div>
            <div className="mouth"></div>
          </div>
        </div>
        
        <div className="pet-status-info">
          <h2>{`Como ${dashboardData?.petName ? dashboardData.petName : 'seu pet'} está hoje:`}</h2>
          <div className="mood-description">{moodDescriptions[mood]}</div>
          
          <div className="mood-messages">
            {messages.map((msg, index) => (
              <div key={index} className="mood-message">{msg}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetStatus; 