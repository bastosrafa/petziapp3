import React, { useState, useEffect } from 'react';
import { useDashboard } from '../../../pages/Dashboard/contexts/DashboardContext';
import './styles.css';

const PetStatus = () => {
  const { dashboardData } = useDashboard();
  const [mood, setMood] = useState('neutral');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!dashboardData) return;

    const now = new Date();
    let moodScore = 0;
    let currentMessages = [];

    // Verifica alimentação
    if (dashboardData.activities?.food?.lastEntry) {
      const lastFood = new Date(dashboardData.activities.food.lastEntry.timestamp);
      const hoursSinceLastFood = (now - lastFood) / (1000 * 60 * 60);
      if (hoursSinceLastFood > 24) {
        moodScore -= 2;
        currentMessages.push('Au au! Meu barriguinha está roncando... Será que tem um biscoitinho pra mim? 🦴');
      } else if (hoursSinceLastFood < 4) {
        moodScore += 1;
        currentMessages.push('Mmm... Que delícia! Agora estou com a barriguinha cheia! 🐾');
      }
    }

    // Verifica passeios
    if (dashboardData.activities?.walk?.lastEntry) {
      const lastWalk = new Date(dashboardData.activities.walk.lastEntry.timestamp);
      const daysSinceLastWalk = (now - lastWalk) / (1000 * 60 * 60 * 24);
      if (daysSinceLastWalk > 2) {
        moodScore -= 2;
        currentMessages.push('Estou com tanta energia! Vamos dar uma voltinha? Quero cheirar todas as árvores! 🌳');
      } else if (daysSinceLastWalk < 1) {
        moodScore += 1;
        currentMessages.push('Que passeio incrível! Adoro quando você me leva pra passear! 🐕');
      }
    }

    // Verifica treinamento
    if (dashboardData.training?.lastSession) {
      const lastSession = new Date(dashboardData.training.lastSession);
      const daysSinceLastSession = (now - lastSession) / (1000 * 60 * 60 * 24);
      if (daysSinceLastSession > 3) {
        moodScore -= 1;
        currentMessages.push('Hora de treinar! Quero mostrar pra você como sou esperto! 🎾');
      } else if (daysSinceLastSession < 1) {
        moodScore += 1;
        currentMessages.push('Uau! Aprendi tantas coisas novas hoje! Sou o melhor aluno! 🏆');
      }
    }

    // Verifica vacinas
    if (dashboardData.health?.vaccines?.status === 'pending') {
      moodScore -= 2;
      currentMessages.push('Doutor, estou precisando de um check-up! Quero ficar sempre saudável! 🏥');
    }

    // Determina o humor
    if (moodScore >= 2) {
      setMood('happy');
    } else if (moodScore <= -2) {
      setMood('sad');
    } else {
      setMood('neutral');
    }

    setMessages(currentMessages);
  }, [dashboardData]);

  const moodDescriptions = {
    happy: 'Estou super feliz! Tudo está perfeito! 🐶',
    neutral: 'Estou tranquilo, mas sempre pronto para brincar! 🐕',
    sad: 'Preciso de um pouco mais de atenção... 🥺'
  };

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