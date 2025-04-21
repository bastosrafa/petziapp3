import React, { useState, useEffect } from 'react';
import { MessageBubble as StyledBubble } from '../OnboardingStyles';

// Componente que renderiza uma única mensagem de chat
const MessageBubble = ({ message, isUser, showInstantly = false }) => {
  const [visible, setVisible] = useState(showInstantly);
  
  useEffect(() => {
    if (!showInstantly) {
      // Adiciona um delay artificial para simular uma conversa real
      const timer = setTimeout(() => {
        setVisible(true);
      }, isUser ? 300 : 1000); // Tempo menor para mensagens do usuário
      
      return () => clearTimeout(timer);
    }
  }, [isUser, showInstantly]);
  
  if (!visible) return null;
  
  return (
    <StyledBubble isUser={isUser}>
      {message}
    </StyledBubble>
  );
};

export default MessageBubble; 