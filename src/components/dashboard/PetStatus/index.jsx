import React, { useState, useEffect, useCallback } from 'react';
import { useDashboard } from '../../../pages/Dashboard/contexts/DashboardContext';
import './styles.css';

const PetStatus = () => {
  const { dashboardData, loading, error } = useDashboard();
  const [mood, setMood] = useState('neutral');
  const [messages, setMessages] = useState([]);

  const moodDescriptions = {
    happy: 'Tudo em dia! 🐶',
    neutral: 'Tudo bem, mas podemos melhorar! 🐕',
    sad: 'Precisamos cuidar de algumas coisas... 🥺'
  };

  // Função para converter timestamps de forma segura
  const getTimestamp = useCallback((timestamp) => {
    if (!timestamp) return null;
    
    try {
      // Se for um timestamp do Firestore
      if (timestamp.toDate) {
        return timestamp.toDate();
      }
      // Se for uma string ISO ou objeto Date
      else if (typeof timestamp === 'string' || timestamp instanceof Date) {
        return new Date(timestamp);
      }
      // Se for um objeto com propriedade seconds (Firestore Timestamp)
      else if (timestamp.seconds) {
        return new Date(timestamp.seconds * 1000);
      }
    } catch (e) {
      // Silenciar erros para reduzir logs
    }
    
    return null;
  }, []);

  useEffect(() => {
    if (!dashboardData) return;

    try {
      const now = new Date();
      
      // Verifica se os campos necessários existem antes de tentar acessá-los
      const activitiesExist = dashboardData && dashboardData.activities;
      const healthExist = dashboardData && dashboardData.health;
      
      // Obter timestamps para cada atividade com verificações de segurança
      const lastFood = activitiesExist && dashboardData.activities.food 
        ? getTimestamp(dashboardData.activities.food.lastEntry?.timestamp) 
        : null;
        
      const lastWalk = activitiesExist && dashboardData.activities.walk 
        ? getTimestamp(dashboardData.activities.walk.lastEntry?.timestamp) 
        : null;
        
      const lastTraining = activitiesExist && dashboardData.activities.training 
        ? getTimestamp(dashboardData.activities.training?.lastEntry?.timestamp) 
        : null;
        
      // Melhorar a extração da data da última vacina
      let lastVaccine = null;
      if (healthExist && dashboardData.health.vaccines && dashboardData.health.vaccines.lastVaccine) {
        const vaccineData = dashboardData.health.vaccines.lastVaccine;
        // Tentar diferentes campos que podem conter a data
        if (vaccineData.date) {
          lastVaccine = getTimestamp(vaccineData.date);
        } else if (vaccineData.appliedDate) {
          lastVaccine = getTimestamp(vaccineData.appliedDate);
        } else if (vaccineData.timestamp) {
          lastVaccine = getTimestamp(vaccineData.timestamp);
        }
      }

      let score = 0;
      let needs = [];
      let status = {
        food: { status: 'ok', hours: 0 },
        walk: { status: 'ok', hours: 0 },
        training: { status: 'ok', hours: 0 },
        vaccine: { status: 'ok', months: 0 }
      };

      // Constantes para limites de tempo
      const FOOD_LATE_HOURS = 8;     // Considerar "atrasado" após 8 horas
      const FOOD_GOOD_HOURS = 4;     // Considerar "bom" se < 4 horas
      
      const WALK_LATE_HOURS = 8;     // Considerar "atrasado" após 8 horas
      const WALK_GOOD_HOURS = 4;     // Considerar "bom" se < 4 horas

      // Food check - com validação do timestamp
      if (lastFood && lastFood instanceof Date && !isNaN(lastFood.getTime())) {
        const hoursSinceFood = (now - lastFood) / (1000 * 60 * 60);
        if (hoursSinceFood > FOOD_LATE_HOURS) {
          score -= 1;
          needs.push("alimentação");
          status.food = { status: 'late', hours: Math.round(hoursSinceFood) };
        } else if (hoursSinceFood <= FOOD_GOOD_HOURS) {
          score += 1;
        }
      } else {
        score -= 1;
        needs.push("alimentação");
        status.food = { status: 'missing' };
      }

      // Walk check - com validação do timestamp
      if (lastWalk && lastWalk instanceof Date && !isNaN(lastWalk.getTime())) {
        const hoursSinceWalk = (now - lastWalk) / (1000 * 60 * 60);
        if (hoursSinceWalk > WALK_LATE_HOURS) {
          score -= 1;
          needs.push("passeio");
          status.walk = { status: 'late', hours: Math.round(hoursSinceWalk) };
        } else if (hoursSinceWalk <= WALK_GOOD_HOURS) {
          score += 1;
        }
      } else {
        score -= 1;
        needs.push("passeio");
        status.walk = { status: 'missing' };
      }

      // Training check - com validação do timestamp
      if (lastTraining && lastTraining instanceof Date && !isNaN(lastTraining.getTime())) {
        const hoursSinceTraining = (now - lastTraining) / (1000 * 60 * 60);
        if (hoursSinceTraining > 24) {
          score -= 1;
          needs.push("treinamento");
          status.training = { status: 'late', hours: Math.round(hoursSinceTraining) };
        } else if (hoursSinceTraining <= 12) {
          score += 1;
        }
      } else {
        score -= 1;
        needs.push("treinamento");
        status.training = { status: 'missing' };
      }

      // Vaccine check - com validação do timestamp
      if (lastVaccine && lastVaccine instanceof Date && !isNaN(lastVaccine.getTime())) {
        const monthsSinceVaccine = (now - lastVaccine) / (1000 * 60 * 60 * 24 * 30);
        if (monthsSinceVaccine > 12) {
          score -= 1;
          needs.push("vacina");
          status.vaccine = { status: 'late', months: Math.round(monthsSinceVaccine) };
        } else if (monthsSinceVaccine <= 6) {
          score += 1;
        }
      } else {
        score -= 1;
        needs.push("vacina");
        status.vaccine = { status: 'missing' };
      }

      // Generate message based on status
      let message = '';
      if (score >= 2) {
        setMood('happy');
        message = "Estou super bem! Tudo em dia e pronto para brincar! 🐾";
      } else if (score >= -1) {
        setMood('neutral');
        if (needs.length > 0) {
          const needsText = needs.join(", ");
          message = `Estou bem, mas precisamos cuidar do meu ${needsText}. 🐕`;
        } else {
          message = "Estou tranquilo e pronto para o que der e vier! 🐾";
        }
      } else {
        setMood('sad');
        if (status.food.status === 'late') {
          message = `Estou com fome! Faz ${status.food.hours} horas que não como. 🥺`;
        } else if (status.walk.status === 'late') {
          message = `Quero passear! Faz ${status.walk.hours} horas que não saio. 🐕`;
        } else if (status.training.status === 'late') {
          message = `Precisamos treinar! Faz ${status.training.hours} horas que não praticamos. 🎾`;
        } else if (status.vaccine.status === 'late') {
          message = `Está na hora da vacina! Faz ${status.vaccine.months} meses que não vacino. 💉`;
        } else {
          message = `Precisamos cuidar de algumas coisas... ${needs.join(", ")}. 🐾`;
        }
      }

      setMessages([message]);
    } catch (err) {
      // Definir estado neutro em caso de erro
      setMood('neutral');
      setMessages(["Estou muito feliz em te ver! 🐶"]);
    }
  }, [dashboardData, getTimestamp]);

  return (
    <div className="pet-status-container">
      <div className="pet-status-content">
        <div className="pet-container">
          <div className={`pet ${mood}`}>
            <div className="head"></div>
            <div className="ear left"></div>
            <div className="ear right"></div>
            <div className="eye left"></div>
            <div className="eye right"></div>
            <div className="nose"></div>
            <div className="mouth"></div>
          </div>
        </div>
        <div className="pet-status-info">
          <h2>Status do Pet</h2>
          <p className="mood-description">{moodDescriptions[mood]}</p>
          {messages.length > 0 && (
            <div className="mood-messages">
              {messages.map((message, index) => (
                <p key={index} className="mood-message">{message}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetStatus; 