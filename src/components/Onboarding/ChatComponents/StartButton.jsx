import React, { useState, useEffect } from 'react';

// Botão específico para a primeira etapa (Vamos lá!)
const StartButton = ({ option, onSelect, delay = 500 }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Adiciona um delay antes de mostrar o botão
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  if (!visible) return null;
  
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center',
      width: '100%',
      padding: '10px 0 30px'
    }}>
      <button
        onClick={() => onSelect(option)}
        style={{
          padding: '15px 30px',
          backgroundColor: '#4a89dc',
          color: 'white',
          border: 'none',
          borderRadius: '16px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(74, 137, 220, 0.3)',
          transition: 'all 0.3s ease',
          maxWidth: '240px',
          width: '100%',
          textAlign: 'center'
        }}
      >
        {option.label || 'Vamos lá!'}
      </button>
    </div>
  );
};

export default StartButton; 