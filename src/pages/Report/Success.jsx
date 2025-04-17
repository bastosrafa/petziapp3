import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import './styles.css';

const ReportSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="report-container">
      <div className="success-content">
        <FaCheckCircle className="success-icon" />
        <h1>Relatório Enviado!</h1>
        <p>Obrigado por nos ajudar a melhorar o PetziApp. Analisaremos seu relatório e entraremos em contato se necessário.</p>
        <button 
          className="back-button"
          onClick={() => navigate('/settings')}
        >
          <FaArrowLeft />
          Voltar para Configurações
        </button>
      </div>
    </div>
  );
};

export default ReportSuccess; 