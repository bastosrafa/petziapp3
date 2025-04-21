import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../contexts/OnboardingContext';
import * as S from './OnboardingStyles.jsx';

// Componente para exibir mensagem do bot
export const ChatMessage = ({ message, isUser = false }) => {
  return isUser ? (
    <S.Message>
      <S.MessageBubble isUser={true}>
        {message}
      </S.MessageBubble>
    </S.Message>
  ) : (
    <S.BotMessage>
      <S.Avatar>P</S.Avatar>
      <S.MessageBubble isUser={false}>
        {message}
      </S.MessageBubble>
    </S.BotMessage>
  );
};

// Componente para exibir indicador de progresso
export const ProgressIndicator = ({ currentStep, totalSteps }) => {
  const percent = (currentStep / totalSteps) * 100;
  
  return (
    <S.ProgressContainer>
      <S.ProgressBar>
        <S.Progress percent={percent} />
      </S.ProgressBar>
      <S.ProgressText>Etapa {Math.min(currentStep + 1, totalSteps)} de {totalSteps}</S.ProgressText>
    </S.ProgressContainer>
  );
};

// Componente para pergunta de texto
export const TextQuestion = ({ question, onAnswer }) => {
  const [value, setValue] = useState('');
  
  const handleSubmit = () => {
    if (value.trim()) {
      onAnswer(value);
      setValue('');
    }
  };
  
  return (
    <>
      <ChatMessage message={question} />
      <S.TextInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Digite sua resposta..."
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <S.NextButton onClick={handleSubmit} disabled={!value.trim()}>
        Continuar
      </S.NextButton>
    </>
  );
};

// Componente para pergunta de opções
export const OptionsQuestion = ({ question, options, onAnswer }) => {
  return (
    <>
      <ChatMessage message={question} />
      <S.OptionsContainer>
        {options.map((option, index) => (
          <S.OptionButton 
            key={index} 
            onClick={() => onAnswer(option.value !== undefined ? option.value : option.label)}
          >
            {option.label}
          </S.OptionButton>
        ))}
      </S.OptionsContainer>
    </>
  );
};

// Componente para pergunta de slider
export const SliderQuestion = ({ question, min, max, step, labels, onAnswer }) => {
  const [value, setValue] = useState((max + min) / 2);
  
  return (
    <>
      <ChatMessage message={question} />
      <S.SliderContainer>
        <S.SliderLabels>
          <span>{labels?.min || min}</span>
          <span>{labels?.max || max}</span>
        </S.SliderLabels>
        <S.Slider
          as="input"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
        />
        <S.SliderValue>
          {value} {labels?.unit || ''}
        </S.SliderValue>
      </S.SliderContainer>
      <S.NextButton onClick={() => onAnswer(value)}>
        Continuar
      </S.NextButton>
    </>
  );
};

// Componente para pergunta de checkbox
export const CheckboxQuestion = ({ question, options, onAnswer }) => {
  const [selected, setSelected] = useState([]);
  
  const toggleOption = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };
  
  return (
    <>
      <ChatMessage message={question} />
      <S.CheckboxContainer>
        {options.map((option, index) => (
          <S.CheckboxLabel 
            key={index} 
            checked={selected.includes(option.value || option.label)}
          >
            <input
              type="checkbox"
              checked={selected.includes(option.value || option.label)}
              onChange={() => toggleOption(option.value || option.label)}
            />
            {option.label}
          </S.CheckboxLabel>
        ))}
      </S.CheckboxContainer>
      <S.NextButton 
        onClick={() => onAnswer(selected)} 
        disabled={selected.length === 0}
      >
        Continuar
      </S.NextButton>
    </>
  );
}; 