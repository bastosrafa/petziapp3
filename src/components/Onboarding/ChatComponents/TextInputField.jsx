import React, { useState, useEffect, useRef } from 'react';
import { InputContainer, TextInput, SendButton } from '../OnboardingStyles';

// Componente para entrada de texto no estilo de chat
const TextInputField = ({ onSubmit, placeholder = 'Digite sua resposta...', delay = 1200 }) => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  
  useEffect(() => {
    // Adiciona um delay antes de mostrar o input
    const timer = setTimeout(() => {
      setVisible(true);
      
      // Foca no input quando ele se torna visível
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  const handleSubmit = (e) => {
    e && e.preventDefault();
    
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue('');
    }
  };
  
  if (!visible) return null;
  
  return (
    <InputContainer>
      <form onSubmit={handleSubmit} style={{ display: 'flex', width: '100%' }}>
        <TextInput
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
        />
        <SendButton 
          type="submit" 
          disabled={!inputValue.trim()}
          aria-label="Enviar"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </SendButton>
      </form>
    </InputContainer>
  );
};

export default TextInputField; 