import React, { useState, useEffect } from 'react';
import { OptionsContainer, OptionButton, MultiOptionButton, ConfirmButton } from '../OnboardingStyles';

// Componente que mostra opções de resposta para o usuário escolher
const OptionSelector = ({ options, onSelect, delay = 300, multiSelect = false }) => {
  const [visible, setVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showHint, setShowHint] = useState(false);
  
  useEffect(() => {
    // Adiciona um delay antes de mostrar as opções
    const timer = setTimeout(() => {
      setVisible(true);
      
      // Mostrar dica após 1.5s se o usuário não selecionar
      setTimeout(() => {
        setShowHint(true);
      }, 1500);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  if (!visible) return null;
  
  const handleSelect = (option) => {
    // Esconder dica quando o usuário seleciona uma opção
    setShowHint(false);
    
    if (multiSelect) {
      // Para múltipla seleção
      const isSelected = selectedOptions.find(opt => opt.id === option.id);
      let newSelected;
      
      if (isSelected) {
        newSelected = selectedOptions.filter(opt => opt.id !== option.id);
      } else {
        newSelected = [...selectedOptions, option];
      }
      
      setSelectedOptions(newSelected);
    } else {
      // Para seleção única, notifica imediatamente
      onSelect(option);
    }
  };
  
  // Determina se uma opção está selecionada
  const isSelected = (optionId) => {
    return selectedOptions.some(opt => opt.id === optionId);
  };
  
  // Mover o botão de confirmar para o topo se tivermos muitas opções
  const totalOptions = options.length;
  const showConfirmAtTop = totalOptions > 4 && multiSelect && selectedOptions.length > 0;
  
  // Verificar se estamos no primeiro passo (welcome)
  const isFirstStep = options.length === 1 && options[0].id === 'start';

  return (
    <OptionsContainer style={{ 
      width: '100%',
      background: 'transparent',
      padding: '10px 0',
      marginBottom: 0,
    }}>
      {showHint && isFirstStep && (
        <div style={{
          position: 'absolute',
          top: '-25px',
          width: '100%',
          textAlign: 'center',
          color: '#4a89dc',
          fontSize: '14px',
          animation: 'bounce 1s infinite',
          left: 0
        }}>
          <span>👇 Clique para continuar</span>
          <style>
            {`
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
              }
            `}
          </style>
        </div>
      )}
    
      {showConfirmAtTop && (
        <ConfirmButton
          onClick={() => onSelect(selectedOptions)}
          $index={0} // Renderizar primeiro
          className="option-button"
          style={{ marginBottom: '10px' }}
        >
          Confirmar ({selectedOptions.length} selecionado{selectedOptions.length !== 1 ? 's' : ''})
        </ConfirmButton>
      )}
    
      {options.map((option, index) => (
        multiSelect ? (
          <MultiOptionButton
            key={option.id}
            $index={index}
            onClick={() => handleSelect(option)}
            $selected={isSelected(option.id)}
            className={`multi-option-button ${isSelected(option.id) ? 'selected' : ''}`}
          >
            {option.label || (typeof option === 'string' ? option : JSON.stringify(option))}
          </MultiOptionButton>
        ) : (
          <OptionButton
            key={option.id}
            $index={index}
            onClick={() => handleSelect(option)}
            className="option-button"
            style={{
              animation: showHint && isFirstStep ? 'pulse 1.5s infinite' : undefined
            }}
          >
            {option.label || (typeof option === 'string' ? option : JSON.stringify(option))}
            {showHint && isFirstStep && (
              <style>
                {`
                  @keyframes pulse {
                    0%, 100% { box-shadow: 0 0 8px rgba(74, 137, 220, 0.3); }
                    50% { box-shadow: 0 0 12px rgba(74, 137, 220, 0.7); }
                  }
                `}
              </style>
            )}
          </OptionButton>
        )
      ))}
      
      {multiSelect && selectedOptions.length > 0 && !showConfirmAtTop && (
        <ConfirmButton
          onClick={() => onSelect(selectedOptions)}
          $index={options.length}
          className="option-button"
        >
          Confirmar ({selectedOptions.length} selecionado{selectedOptions.length !== 1 ? 's' : ''})
        </ConfirmButton>
      )}
    </OptionsContainer>
  );
};

export default OptionSelector; 