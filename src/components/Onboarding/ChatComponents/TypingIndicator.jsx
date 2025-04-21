import React, { useState, useEffect } from 'react';
import { TypingIndicator as StyledIndicator } from '../OnboardingStyles';

// Componente que mostra o indicador "digitando..."
const TypingIndicator = ({ delay = 500, duration = 1500 }) => {
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
      <span></span>
      <span></span>
      <span></span>
    </StyledIndicator>
  );
};

export default TypingIndicator; 