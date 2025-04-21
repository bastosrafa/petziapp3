import React, { useState, useEffect } from 'react';
import { OptionsContainer, OptionButton } from '../OnboardingStyles';

// Componente que mostra opções de resposta para o usuário escolher
const OptionSelector = ({ options, onSelect, delay = 1200, multiSelect = false }) => {
  const [visible, setVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  useEffect(() => {
    // Adiciona um delay antes de mostrar as opções
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  if (!visible) return null;
  
  const handleSelect = (option) => {
    if (multiSelect) {
      // Para múltipla seleção
      const isSelected = selectedOptions.includes(option.id);
      let newSelected;
      
      if (isSelected) {
        newSelected = selectedOptions.filter(id => id !== option.id);
      } else {
        newSelected = [...selectedOptions, option.id];
      }
      
      setSelectedOptions(newSelected);
      
      // Apenas notifica o componente pai sobre a seleção atualizada
      onSelect(newSelected.map(id => options.find(opt => opt.id === id)));
    } else {
      // Para seleção única, notifica imediatamente
      onSelect(option);
    }
  };
  
  // Determina se uma opção está selecionada
  const isSelected = (optionId) => {
    return multiSelect && selectedOptions.includes(optionId);
  };
  
  return (
    <OptionsContainer>
      {options.map((option) => (
        <OptionButton
          key={option.id}
          onClick={() => handleSelect(option)}
          style={{
            backgroundColor: isSelected(option.id) ? '#e6f2ff' : 'white',
            borderColor: isSelected(option.id) ? '#007bff' : '#ddd',
          }}
        >
          {option.label}
        </OptionButton>
      ))}
      
      {multiSelect && selectedOptions.length > 0 && (
        <OptionButton
          onClick={() => onSelect(selectedOptions.map(id => options.find(opt => opt.id === id)))}
          style={{ backgroundColor: '#007bff', color: 'white', marginTop: '8px' }}
        >
          Confirmar
        </OptionButton>
      )}
    </OptionsContainer>
  );
};

export default OptionSelector; 