import React, { useState, useEffect } from 'react';
import { useDashboard } from '../../../pages/Dashboard/contexts/DashboardContext';
import './styles.css';

const PetStatus = () => {
  const { dashboardData } = useDashboard();
  const [mood, setMood] = useState('neutral');
  const [messages, setMessages] = useState([]);

  const moodDescriptions = {
    happy: 'Estou super feliz! Tudo está perfeito! 🐶',
    neutral: 'Estou tranquilo, mas sempre pronto para brincar! 🐕',
    sad: 'Preciso de um pouco mais de atenção... 🥺'
  };

  useEffect(() => {
    if (dashboardData) {
      const now = new Date();
      const lastFood = dashboardData.activities?.food?.lastEntry?.timestamp ? new Date(dashboardData.activities.food.lastEntry.timestamp) : null;
      const lastWalk = dashboardData.activities?.walk?.lastEntry?.timestamp ? new Date(dashboardData.activities.walk.lastEntry.timestamp) : null;
      const lastTraining = dashboardData.activities?.training?.lastEntry?.timestamp ? new Date(dashboardData.activities.training.lastEntry.timestamp) : null;
      const lastVaccine = dashboardData.health?.lastVaccine?.date ? new Date(dashboardData.health.lastVaccine.date) : null;

      let score = 0;
      let needs = [];

      // Food check
      if (lastFood) {
        const hoursSinceFood = (now - lastFood) / (1000 * 60 * 60);
        if (hoursSinceFood > 8) {
          score -= 1;
          needs.push("alimentação");
        } else if (hoursSinceFood <= 4) {
          score += 1;
        }
      } else {
        score -= 1;
        needs.push("alimentação");
      }

      // Walk check
      if (lastWalk) {
        const hoursSinceWalk = (now - lastWalk) / (1000 * 60 * 60);
        if (hoursSinceWalk > 12) {
          score -= 1;
          needs.push("passeio");
        } else if (hoursSinceWalk <= 6) {
          score += 1;
        }
      } else {
        score -= 1;
        needs.push("passeio");
      }

      // Training check
      if (lastTraining) {
        const hoursSinceTraining = (now - lastTraining) / (1000 * 60 * 60);
        if (hoursSinceTraining > 24) {
          score -= 1;
          needs.push("treinamento");
        } else if (hoursSinceTraining <= 12) {
          score += 1;
        }
      } else {
        score -= 1;
        needs.push("treinamento");
      }

      // Vaccine check
      if (lastVaccine) {
        const monthsSinceVaccine = (now - lastVaccine) / (1000 * 60 * 60 * 24 * 30);
        if (monthsSinceVaccine > 12) {
          score -= 1;
          needs.push("vacinação");
        } else if (monthsSinceVaccine <= 6) {
          score += 1;
        }
      } else {
        score -= 1;
        needs.push("vacinação");
      }

      // Determine mood and message based on score and needs
      if (score >= 2) {
        setMood('happy');
        setMessages(["Estou super feliz! Tudo está perfeito! 🐶"]);
      } else if (score >= -1) {
        setMood('neutral');
        if (needs.length > 0) {
          const needsText = needs.join(", ");
          setMessages([`Será que podemos cuidar do meu ${needsText}? 🐾`]);
        } else {
          setMessages(["Estou tranquilo e pronto para brincar! 🐕"]);
        }
      } else {
        setMood('sad');
        const needsText = needs.join(", ");
        setMessages([`Será que podemos cuidar do meu ${needsText}? 🥺`]);
      }
    }
  }, [dashboardData]);

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