import React, { useState, useEffect, useRef } from 'react';
import { MessageBubble as StyledBubble } from '../OnboardingStyles';

// Componente que renderiza uma única mensagem de chat com efeito de digitação
const MessageBubble = ({ message, isUser, showInstantly = false, onTypingComplete }) => {
  const [visible, setVisible] = useState(showInstantly);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const callbackCalled = useRef(false);
  
  // Garantir que a mensagem é sempre texto renderizável
  const safeMessage = React.useMemo(() => {
    if (message === null || message === undefined) return '';
    if (typeof message === 'string') return message;
    if (typeof message === 'number') return String(message);
    
    // Se for um objeto (como na etapa 6), extrair o valor de label
    if (typeof message === 'object') {
      if (message.label) return message.label;
      if (message.text) return message.text;
      return JSON.stringify(message);
    }
    
    return String(message);
  }, [message]);
  
  // Resetar o estado quando a mensagem mudar
  useEffect(() => {
    callbackCalled.current = false;
  }, [message]);
  
  // Efeito para decidir quando mostrar a bolha
  useEffect(() => {
    if (!showInstantly) {
      // Adiciona um delay antes de mostrar a bolha
      const timer = setTimeout(() => {
        setVisible(true);
        
        // Inicia o efeito de digitação apenas para mensagens do sistema
        if (!isUser) {
          setIsTyping(true);
        } else {
          // Mensagens do usuário aparecem imediatamente
          setTypedText(safeMessage);
        }
      }, isUser ? 300 : 600);
      
      return () => clearTimeout(timer);
    } else {
      setTypedText(safeMessage);
    }
  }, [isUser, showInstantly, safeMessage]);
  
  // Efeito para simular digitação
  useEffect(() => {
    if (isTyping && typedText.length < safeMessage.length) {
      const speed = Math.random() * 30 + 10; // Velocidade variável para parecer mais natural
      const timer = setTimeout(() => {
        setTypedText(safeMessage.substring(0, typedText.length + 1));
      }, speed);
      
      return () => clearTimeout(timer);
    } else if (isTyping && typedText.length === safeMessage.length) {
      setIsTyping(false);
      
      // Notifica o componente pai que a digitação foi concluída
      if (onTypingComplete && !callbackCalled.current) {
        callbackCalled.current = true;
        setTimeout(() => {
          onTypingComplete();
        }, 500); // Aumento o delay para garantir que o usuário veja a mensagem completa
      }
    }
  }, [isTyping, typedText, safeMessage, onTypingComplete]);
  
  if (!visible) return null;
  
  // Classe adicional para estilização no modo escuro
  const bubbleClass = isUser ? 'user-bubble' : 'system-bubble';
  
  return (
    <StyledBubble $isUser={isUser} className={bubbleClass}>
      {isUser ? safeMessage : typedText}
      {isTyping && <span className="typing-cursor">|</span>}
    </StyledBubble>
  );
};

export default MessageBubble; 