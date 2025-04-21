import React, { useState, useEffect } from 'react';
import { OptionsContainer, OptionButton, MultiOptionButton, ConfirmButton } from '../OnboardingStyles';

// Componente que mostra opções de resposta para o usuário escolher
const OptionSelector = ({ options, onSelect, delay = 300, multiSelect = false }) => {
  const [visible, setVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  useEffect(() => {
    // Adiciona um delay antes de mostrar as opções
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  // Não renderiza nada até que seja visível
  if (!visible) return null;
  
  const handleSelect = (option) => {
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
  
  // Verificar se estamos no primeiro passo (welcome)
  const isFirstStep = options.length === 1 && options[0].id === 'start';

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '8px',
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      {multiSelect && selectedOptions.length > 0 && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          marginTop: '10px', 
          marginBottom: '5px'
        }}>
          <ConfirmButton
            onClick={() => onSelect(selectedOptions)}
            $index={options.length}
            style={{ width: 'auto', padding: '8px 16px' }}
          >
            Confirmar ({selectedOptions.length} selecionado{selectedOptions.length !== 1 ? 's' : ''})
          </ConfirmButton>
        </div>
      )}
      
      {options.map((option, index) => (
        multiSelect ? (
          <MultiOptionButton
            key={option.id}
            $index={index}
            onClick={() => handleSelect(option)}
            $selected={isSelected(option.id)}
            className={`multi-option-button ${isSelected(option.id) ? 'selected' : ''}`}
            style={{ 
              borderRadius: '12px',
              maxWidth: '100%',
              alignSelf: 'flex-start'
            }}
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
              borderRadius: '12px',
              maxWidth: isFirstStep ? '100%' : '90%',
              alignSelf: isFirstStep ? 'center' : 'flex-start',
              padding: isFirstStep ? '15px 20px' : '12px 16px',
              fontSize: isFirstStep ? '16px' : '15px',
              fontWeight: isFirstStep ? '600' : '500',
              textAlign: isFirstStep ? 'center' : 'left',
              display: 'block',
              width: '100%',
              backgroundColor: isFirstStep ? '#4a89dc' : 'white',
              color: isFirstStep ? 'white' : 'inherit',
              boxShadow: isFirstStep ? '0 4px 10px rgba(74, 137, 220, 0.3)' : '0 2px 6px rgba(0, 0, 0, 0.05)',
              border: isFirstStep ? 'none' : '1px solid rgba(0, 0, 0, 0.1)',
              margin: isFirstStep ? '10px auto' : '5px 0'
            }}
          >
            {option.label || (typeof option === 'string' ? option : JSON.stringify(option))}
          </OptionButton>
        )
      ))}
    </div>
  );
};

export default OptionSelector; 