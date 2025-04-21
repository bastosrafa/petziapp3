import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '@/contexts/OnboardingContext';
import { useAuthContext } from '@/hooks/useAuthContext';
import { onboardingSteps, getNextStep } from './onboardingSteps';
import MessageBubble from './ChatComponents/MessageBubble';
import OptionSelector from './ChatComponents/OptionSelector';
import TextInputField from './ChatComponents/TextInputField';
import TypingIndicator from './ChatComponents/TypingIndicator';
import {
  ChatContainer,
  HeaderContainer,
  ProgressText,
  MessagesContainer,
  ResponseAreaContainer
} from './OnboardingStyles';

const ChatOnboarding = () => {
  const { completeOnboarding } = useOnboarding();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  
  // Estado para rastrear a conversação
  const [messages, setMessages] = useState([]);
  const [currentStepId, setCurrentStepId] = useState('welcome');
  const [petData, setPetData] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(1);
  const [darkMode, setDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  
  // Refs para o container de mensagens e última mensagem (para auto-scroll)
  const messagesContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  
  // Encontra o passo atual com base no ID
  const currentStep = onboardingSteps.find(step => step.id === currentStepId);
  
  // Detecta preferência de tema do sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      setDarkMode(e.matches);
    };
    
    // Adiciona ouvinte para mudanças no tema
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Para compatibilidade com navegadores mais antigos
      mediaQuery.addListener(handleChange);
    }
    
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);
  
  // Inicializa a conversa com a primeira mensagem
  useEffect(() => {
    if (messages.length === 0 && currentStep) {
      // Simula um pequeno delay antes de mostrar a primeira mensagem
      setTimeout(() => {
        const message = typeof currentStep.message === 'function'
          ? currentStep.message(petData)
          : currentStep.message;
          
        setMessages([
          { id: `system-${Date.now()}`, text: message, type: 'system' }
        ]);
      }, 500);
    }
  }, [messages, currentStep, petData]);
  
  // Auto-scroll para a última mensagem quando novas mensagens são adicionadas
  useEffect(() => {
    if (messagesEndRef.current) {
      // Scroll imediato para o final ao adicionar mensagens
      const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'end' 
        });
      };
      
      scrollToBottom();
      
      // Um segundo scroll após um pequeno delay, para garantir que
      // todas as animações e renderizações tenham sido concluídas
      const timer = setTimeout(scrollToBottom, 100);
      return () => clearTimeout(timer);
    }
  }, [messages, showTyping]);
  
  // Auto-scroll quando o passo muda
  useEffect(() => {
    // Garantir que sempre há espaço para visualizar opções/input
    const scrollToEnd = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'end'
        });
      }
    };
    
    // Pequeno delay para dar tempo aos componentes renderizarem
    const timer = setTimeout(scrollToEnd, 400);
    return () => clearTimeout(timer);
  }, [currentStepId]);
  
  // Salva o progresso no localStorage
  useEffect(() => {
    if (Object.keys(petData).length > 0) {
      localStorage.setItem('onboarding_progress', JSON.stringify({
        currentStepId,
        petData,
        messages
      }));
    }
  }, [currentStepId, petData, messages]);
  
  // Verifica se há progresso salvo ao carregar
  useEffect(() => {
    const savedProgress = localStorage.getItem('onboarding_progress');
    
    if (savedProgress) {
      try {
        const { currentStepId: savedStepId, petData: savedPetData, messages: savedMessages } = JSON.parse(savedProgress);
        
        // Se o usuário já completou o onboarding, não restaura
        const savedStep = onboardingSteps.find(step => step.id === savedStepId);
        if (savedStep && !savedStep.isCompleted) {
          setCurrentStepId(savedStepId);
          setPetData(savedPetData);
          setMessages(savedMessages);
          
          // Atualiza o índice do passo
          const stepIndex = onboardingSteps.findIndex(step => step.id === savedStepId) + 1;
          setCurrentStepIndex(stepIndex);
        }
      } catch (error) {
        console.error('Erro ao restaurar progresso do onboarding:', error);
      }
    }
  }, []);
  
  // Atualiza o índice do passo atual quando o ID muda
  useEffect(() => {
    const stepIndex = onboardingSteps.findIndex(step => step.id === currentStepId) + 1;
    if (stepIndex > 0) {
      setCurrentStepIndex(stepIndex);
    }
  }, [currentStepId]);
  
  // Finaliza o onboarding
  const finishOnboarding = async () => {
    if (user) {
      try {
        // Limpa o progresso salvo
        localStorage.removeItem('onboarding_progress');
        
        // Marca como concluído no Firestore
        await completeOnboarding(petData);
        
        // Redireciona para a página inicial
        navigate('/');
      } catch (error) {
        console.error('Erro ao finalizar onboarding:', error);
      }
    }
  };
  
  // Processa a resposta do usuário e avança para a próxima etapa
  const processUserResponse = (response) => {
    if (!currentStep) return;
    
    // Formata a resposta para exibição amigável
    let displayText = '';
    
    if (typeof response === 'object' && response !== null) {
      if (response.label) {
        displayText = response.label;
      } else if (Array.isArray(response)) {
        displayText = response.map(item => item.label).join(', ');
      } else if (response.id === 'barking') {
        displayText = 'Latidos excessivamente';
      } else if (response.id === 'chewing') {
        displayText = 'Mastiga objetos';
      } else if (response.id && typeof response.id === 'string') {
        // Humaniza outros IDs possíveis
        displayText = response.id
          .replace(/([A-Z])/g, ' $1') // Adiciona espaço antes de maiúsculas
          .replace(/^./, str => str.toUpperCase()) // Capitaliza primeira letra
          .trim();
      } else {
        displayText = 'Selecionado';
      }
    } else {
      displayText = response;
    }
    
    // Adiciona a resposta do usuário às mensagens com o texto formatado
    const userMessage = {
      id: `user-${Date.now()}`,
      text: displayText,
      type: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Atualiza os dados do pet com base na etapa atual
    let updatedPetData = { ...petData };
    
    switch (currentStep.id) {
      case 'pet-name':
        updatedPetData.petName = response;
        break;
      case 'pet-type':
        updatedPetData.petType = response.id;
        break;
      case 'pet-breed':
        updatedPetData.breed = response;
        break;
      case 'pet-age':
        updatedPetData.age = response.id;
        break;
      case 'pet-behavior':
        updatedPetData.behaviors = Array.isArray(response) 
          ? response.map(item => item.id)
          : [response.id];
        break;
      case 'training-goals':
        updatedPetData.goals = Array.isArray(response)
          ? response.map(item => item.id)
          : [response.id];
        break;
      case 'experience-level':
        updatedPetData.experienceLevel = response.id;
        break;
      default:
        // Para outras etapas, não precisamos atualizar o petData
        break;
    }
    
    setPetData(updatedPetData);
    
    // Mostra o indicador de digitação
    setShowTyping(true);
    
    // Define um timeout para avançar para a próxima etapa
    setTimeout(() => {
      setShowTyping(false);
      
      // Obtém o ID da próxima etapa
      const nextStepId = getNextStep(currentStep.id, response, updatedPetData);
      
      // Verifica se é a última etapa
      const nextStep = onboardingSteps.find(step => step.id === nextStepId);
      
      if (nextStep) {
        // Se for a etapa final, marca como concluído
        if (nextStep.isCompleted) {
          setIsCompleted(true);
          
          // Adiciona a mensagem final
          const finalMessage = {
            id: `system-${Date.now()}`,
            text: nextStep.message,
            type: 'system'
          };
          
          setMessages(prev => [...prev, finalMessage]);
          
          // Finaliza o onboarding após um delay
          setTimeout(() => {
            finishOnboarding();
          }, 2000);
          
          return;
        }
        
        // Avança para a próxima etapa
        setCurrentStepId(nextStepId);
        
        // Adiciona a mensagem da próxima etapa
        const nextMessage = typeof nextStep.message === 'function'
          ? nextStep.message(updatedPetData.petName, updatedPetData.petType, updatedPetData)
          : nextStep.message;
          
        const systemMessage = {
          id: `system-${Date.now()}`,
          text: nextMessage,
          type: 'system'
        };
        
        setMessages(prev => [...prev, systemMessage]);
      }
    }, 1500);
  };
  
  // Renderiza as opções de resposta com base na etapa atual
  const renderResponseOptions = () => {
    if (!currentStep || isCompleted || showTyping) return null;
    
    if (currentStep.input) {
      return (
        <TextInputField
          onSubmit={processUserResponse}
          placeholder={currentStep.inputPlaceholder}
        />
      );
    }
    
    if (currentStep.options) {
      return (
        <OptionSelector
          options={currentStep.options}
          onSelect={processUserResponse}
          multiSelect={currentStep.multiSelect}
        />
      );
    }
    
    return null;
  };
  
  return (
    <ChatContainer className={darkMode ? 'dark-mode' : 'light-mode'}>
      <HeaderContainer>
        <ProgressText>Etapa {currentStepIndex} de {onboardingSteps.length - 1}</ProgressText>
      </HeaderContainer>
      
      <MessagesContainer ref={messagesContainerRef}>
        {messages.map(message => (
          <MessageBubble
            key={message.id}
            message={message.text}
            isUser={message.type === 'user'}
            showInstantly={message.showInstantly}
          />
        ))}
        
        {showTyping && <TypingIndicator />}
        
        <div ref={messagesEndRef} />
      </MessagesContainer>
      
      <ResponseAreaContainer>
        {renderResponseOptions()}
      </ResponseAreaContainer>
    </ChatContainer>
  );
};

export default ChatOnboarding; 