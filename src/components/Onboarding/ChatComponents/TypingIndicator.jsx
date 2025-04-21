import React, { useState, useEffect } from 'react';
import { TypingIndicator as StyledIndicator } from '../OnboardingStyles';

// Componente que mostra o indicador "digitando..."
const TypingIndicator = ({ delay = 300, duration = 1800 }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Mostra o indicador após um pequeno delay
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, delay);
    
    // Esconde o indicador após a duração especificada
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, delay + duration);
    
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [delay, duration]);
  
  if (!visible) return null;
  
  return (
    <StyledIndicator>
      <div className="typing-text">Digitando</div>
      <span></span>
      <span></span>
      <span></span>
    </StyledIndicator>
  );
};

export default TypingIndicator; 