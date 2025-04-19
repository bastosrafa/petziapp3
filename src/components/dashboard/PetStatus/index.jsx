import React, { useState, useEffect } from 'react';
import { useDashboard } from '../../../pages/Dashboard/contexts/DashboardContext';
import './styles.css';

const PetStatus = () => {
  const { dashboardData, loading } = useDashboard();
  const [mood, setMood] = useState('neutral');
  const [messages, setMessages] = useState([]);

  const moodDescriptions = {
<<<<<<< HEAD
    happy: 'Tudo em dia! 🐶',
    neutral: 'Tudo bem, mas podemos melhorar! 🐕',
    sad: 'Precisamos cuidar de algumas coisas... 🥺'
=======
    happy: 'Estou super feliz! Meus tutores cuidam muito bem de mim! 🐶',
    neutral: 'Estou tranquilo e pronto para brincar! 🐕',
    sad: 'Preciso de mais atenção e carinho... 🥺'
>>>>>>> d17186c97ac644fc020f9a08caba433bc69f0b8c
  };

  useEffect(() => {
    if (dashboardData) {
      console.log('PetStatus received new dashboard data:', dashboardData);
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

      console.log('Timestamps:', {
        lastFood,
        lastWalk,
        lastTraining,
        lastVaccine
      });

      let score = 0;
      let needs = [];
      let status = {
        food: { status: 'ok', hours: 0 },
        walk: { status: 'ok', hours: 0 },
        training: { status: 'ok', hours: 0 },
        vaccine: { status: 'ok', months: 0 }
      };

      // Food check
      if (lastFood) {
        const hoursSinceFood = (now - lastFood) / (1000 * 60 * 60);
        console.log('Hours since food:', hoursSinceFood);
        if (hoursSinceFood > 8) {
          score -= 1;
<<<<<<< HEAD
          needs.push("alimentação");
          status.food = { status: 'late', hours: Math.round(hoursSinceFood) };
=======
          needs.push("comida");
>>>>>>> d17186c97ac644fc020f9a08caba433bc69f0b8c
        } else if (hoursSinceFood <= 4) {
          score += 1;
        }
      } else {
        score -= 1;
<<<<<<< HEAD
        needs.push("alimentação");
        status.food = { status: 'missing' };
=======
        needs.push("comida");
>>>>>>> d17186c97ac644fc020f9a08caba433bc69f0b8c
      }

      // Walk check
      if (lastWalk) {
        const hoursSinceWalk = (now - lastWalk) / (1000 * 60 * 60);
<<<<<<< HEAD
        console.log('Hours since walk:', hoursSinceWalk);
        if (hoursSinceWalk > 12) {
          score -= 1;
          needs.push("passeio");
          status.walk = { status: 'late', hours: Math.round(hoursSinceWalk) };
        } else if (hoursSinceWalk <= 6) {
=======
        if (hoursSinceWalk > 24) {
          score -= 1;
          needs.push("passeio");
        } else if (hoursSinceWalk <= 12) {
>>>>>>> d17186c97ac644fc020f9a08caba433bc69f0b8c
          score += 1;
        }
      } else {
        score -= 1;
        needs.push("passeio");
        status.walk = { status: 'missing' };
      }

      // Training check
      if (lastTraining) {
        const hoursSinceTraining = (now - lastTraining) / (1000 * 60 * 60);
        console.log('Hours since training:', hoursSinceTraining);
        if (hoursSinceTraining > 24) {
          score -= 1;
<<<<<<< HEAD
          needs.push("treinamento");
          status.training = { status: 'late', hours: Math.round(hoursSinceTraining) };
        } else if (hoursSinceTraining <= 12) {
          score += 1;
        }
      } else {
        score -= 1;
        needs.push("treinamento");
        status.training = { status: 'missing' };
=======
          needs.push("treino");
        } else if (hoursSinceTraining <= 12) {
          score += 1;
        }
>>>>>>> d17186c97ac644fc020f9a08caba433bc69f0b8c
      }

      // Vaccine check
      if (lastVaccine) {
        const monthsSinceVaccine = (now - lastVaccine) / (1000 * 60 * 60 * 24 * 30);
        console.log('Months since vaccine:', monthsSinceVaccine);
        if (monthsSinceVaccine > 12) {
          score -= 1;
          needs.push("vacina");
<<<<<<< HEAD
          status.vaccine = { status: 'late', months: Math.round(monthsSinceVaccine) };
        } else if (monthsSinceVaccine <= 6) {
          score += 1;
        }
      } else {
        score -= 1;
        needs.push("vacina");
        status.vaccine = { status: 'missing' };
      }

      console.log('Final status:', {
        score,
        needs,
        status
      });

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
=======
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
>>>>>>> d17186c97ac644fc020f9a08caba433bc69f0b8c
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