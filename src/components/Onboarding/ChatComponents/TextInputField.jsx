import React, { useState, useEffect, useRef } from 'react';
import { InputContainer, TextInput, SendButton } from '../OnboardingStyles';

// Componente para entrada de texto no estilo de chat
const TextInputField = ({ onSubmit, placeholder = 'Digite sua resposta...', delay = 300 }) => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef(null);
  
  useEffect(() => {
    // Adiciona um delay antes de mostrar o input
    const timer = setTimeout(() => {
      setVisible(true);
      
      // Foca no input quando ele se torna visível
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
      
      // Mostrar dica visual após 1.5s se o usuário não digitar
      setTimeout(() => {
        setShowHint(true);
      }, 1500);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  // Esconde a dica quando o usuário começa a digitar
  useEffect(() => {
    if (inputValue.length > 0) {
      setShowHint(false);
    }
  }, [inputValue]);
  
  const handleSubmit = (e) => {
    e && e.preventDefault();
    
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue('');
    }
  };
  
  const handleKeyDown = (e) => {
    // Enviar ao pressionar Enter (sem Shift)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  
  if (!visible) return null;
  
  return (
    <InputContainer className="input-container" 
                   style={{ position: 'sticky', bottom: 0 }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', width: '100%' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          {showHint && !isFocused && !inputValue && (
            <div style={{
              position: 'absolute',
              top: '-30px',
              width: '100%',
              textAlign: 'center',
              color: '#4a89dc',
              fontSize: '14px',
              animation: 'bounce 1s infinite'
            }}>
              <span>👇 Digite sua resposta aqui</span>
              <style>
                {`
                  @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                  }
                `}
              </style>
            </div>
          )}
          <TextInput
            ref={inputRef}
            type="text"
            className="text-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            style={{
              borderColor: isFocused ? '#4a89dc' : (showHint ? '#4a89dc' : '#e0e0e0'),
              boxShadow: isFocused || showHint 
                ? '0 2px 8px rgba(74, 137, 220, 0.3)' 
                : '0 2px 6px rgba(0, 0, 0, 0.05)',
              animation: showHint && !isFocused ? 'pulse 1.5s infinite' : 'none'
            }}
          />
          <style>
            {`
              @keyframes pulse {
                0%, 100% { box-shadow: 0 0 8px rgba(74, 137, 220, 0.3); }
                50% { box-shadow: 0 0 12px rgba(74, 137, 220, 0.7); }
              }
            `}
          </style>
        </div>
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