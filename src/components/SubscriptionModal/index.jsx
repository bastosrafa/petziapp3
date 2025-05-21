import React, { useState, useEffect } from 'react';
import { FaTimes, FaExchangeAlt, FaBan } from 'react-icons/fa';
import './styles.css';

const SubscriptionModal = ({ isOpen, onClose, userEmail }) => {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    if (isOpen && userEmail) {
      fetchSubscription();
    }
  }, [isOpen, userEmail]);

  const fetchSubscription = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`https://api.petziapp.com/api/subscription/${userEmail}`, {
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error('Erro ao buscar informações da assinatura');
      }

      const data = await response.json();
      setPlan(data.plan);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelRequest = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://api.petziapp.com/api/subscription/cancel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email: userEmail })
      });

      if (!response.ok) {
        throw new Error('Erro ao solicitar cancelamento');
      }

      setFeedback('Solicitação de cancelamento enviada com sucesso!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="subscription-modal-overlay">
      <div className="subscription-modal">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>

        <h2>Gerenciar Assinatura</h2>

        {loading ? (
          <div className="loading">Carregando...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <>
            <div className="current-plan">
              <h3>Plano Atual</h3>
              <p className="plan-name">{plan}</p>
            </div>

            <div className="actions">
              <a
                href="https://petziapp.com/changeplans/"
                target="_blank"
                rel="noopener noreferrer"
                className="action-button upgrade bg-green-600 text-white rounded"
                style={{ backgroundColor: '#16a34a', color: '#fff', borderRadius: '8px' }}
              >
                <FaExchangeAlt />
                Trocar de Plano
              </a>

              <button
                onClick={handleCancelRequest}
                className="action-button cancel"
                disabled={loading}
              >
                <FaBan />
                Solicitar Cancelamento
              </button>
            </div>

            {feedback && (
              <div className="feedback-message">
                {feedback}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SubscriptionModal; 