import React, { useState, useEffect } from 'react';
import { useDashboard } from '../../../pages/Dashboard/contexts/DashboardContext';
import './styles.css';

const PetStatus = () => {
  const { dashboardData } = useDashboard();
  const [mood, setMood] = useState('neutral');
  const [messages, setMessages] = useState([]);

  const moodDescriptions = {
    happy: 'Estou super feliz! Meus tutores cuidam muito bem de mim! 🐶',
    neutral: 'Estou tranquilo e pronto para brincar! 🐕',
    sad: 'Preciso de mais atenção e carinho... 🥺'
  };

  useEffect(() => {
    if (dashboardData) {
      const now = new Date();
      
      const getTimestamp = (timestamp) => {
        if (!timestamp) return null;
        
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
        return null;
      };

      const lastFood = getTimestamp(dashboardData.activities?.food?.lastEntry?.timestamp);
      const lastWalk = getTimestamp(dashboardData.activities?.walk?.lastEntry?.timestamp);
      const lastTraining = getTimestamp(dashboardData.activities?.training?.lastEntry?.timestamp);
      const lastVaccine = getTimestamp(dashboardData.health?.lastVaccine?.date);

      let score = 0;
      let needs = [];

      // Food check
      if (lastFood) {
        const hoursSinceFood = (now - lastFood) / (1000 * 60 * 60);
        if (hoursSinceFood > 8) {
          score -= 1;
          needs.push("comida");
        } else if (hoursSinceFood <= 4) {
          score += 1;
        }
      } else {
        score -= 1;
        needs.push("comida");
      }

      // Walk check
      if (lastWalk) {
        const hoursSinceWalk = (now - lastWalk) / (1000 * 60 * 60);
        if (hoursSinceWalk > 24) {
          score -= 1;
          needs.push("passeio");
        } else if (hoursSinceWalk <= 12) {
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
          needs.push("treino");
        } else if (hoursSinceTraining <= 12) {
          score += 1;
        }
      }

      // Vaccine check
      if (lastVaccine) {
        const monthsSinceVaccine = (now - lastVaccine) / (1000 * 60 * 60 * 24 * 30);
        if (monthsSinceVaccine > 12) {
          score -= 1;
          needs.push("vacina");
        }
      }

      // Determine mood based on score
      if (score >= 1) {
        setMood('happy');
      } else if (score <= -1) {
        setMood('sad');
      } else {
        setMood('neutral');
      }

      // Set messages based on needs
      const messages = [];
      if (needs.length > 0) {
        if (needs.length === 1) {
          messages.push(`Estou precisando de ${needs[0]}.`);
        } else if (needs.length === 2) {
          messages.push(`Estou precisando de ${needs[0]} e ${needs[1]}.`);
        } else {
          const lastNeed = needs.pop();
          messages.push(`Estou precisando de ${needs.join(', ')} e ${lastNeed}.`);
        }
      } else {
        messages.push(moodDescriptions[mood]);
      }

      setMessages(messages);
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