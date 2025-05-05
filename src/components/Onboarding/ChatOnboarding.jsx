import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '@/contexts/OnboardingContext';
import { useAuthContext } from '@/hooks/useAuthContext';
import { onboardingSteps, getNextStep } from './onboardingSteps';
import MessageBubble from './ChatComponents/MessageBubble';
import OptionSelector from './ChatComponents/OptionSelector';
import TextInputField from './ChatComponents/TextInputField';
import TypingIndicator from './ChatComponents/TypingIndicator';
import StartButton from './ChatComponents/StartButton';
import styled, { keyframes, css } from 'styled-components';
import {
  ChatContainer,
  HeaderContainer,
  ProgressText,
  MessagesContainer,
  OptionsContainer,
  OptionButton,
  ConfirmButton,
  TextInput,
  SendButton,
  InputContainer
} from './OnboardingStyles';

// Animação de fade in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TextInputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;

const InputSendButton = styled(SendButton)`
  margin-left: 8px;
`;

const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 100%;
  animation: ${fadeIn} 0.5s ease-out;
  background-color: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const PetInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 16px;
  background-color: #f9f9f9;
`;

const InfoTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 8px;
  color: #333;
  font-weight: 600;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 8px;
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
`;

const InfoLabel = styled.span`
  font-weight: 500;
  color: #666;
  font-size: 15px;
`;

const InfoValue = styled.span`
  color: #333;
  font-size: 15px;
  font-weight: 500;
`;

const MultiOptionButton = styled(OptionButton)`
  background-color: ${props => props.$selected ? '#f0f6ff' : 'white'};
  border-color: ${props => props.$selected ? '#4a89dc' : 'rgba(0, 0, 0, 0.1)'};
  padding-right: 40px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid ${props => props.$selected ? '#4a89dc' : '#ddd'};
    background-color: ${props => props.$selected ? '#4a89dc' : 'transparent'};
    transition: all 0.2s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    right: 19px;
    top: 46.5%;
    transform: translateY(-50%) rotate(45deg);
    width: 6px;
    height: 10px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    opacity: ${props => props.$selected ? 1 : 0};
  }
`;

// Constante para definir a ordem e o conteúdo das etapas
const ONBOARDING_STEPS = {
  WELCOME: {
    id: 'welcome',
    message: 'Olá! Sou o Tobias e vou ajudar você a configurar seu perfil! 🐾\n\nVamos começar?',
    buttonText: 'Vamos lá! 👋',
    nextStep: 'pet-name'
  },
  PET_NAME: {
    id: 'pet-name',
    message: 'Como se chama o seu amigo de quatro patas?',
    placeholder: 'Digite o nome do seu pet...',
    nextStep: 'pet-type'
  },
  PET_TYPE: {
    id: 'pet-type',
    getMessage: (petName) => `${petName} é um cachorro ou gato?`,
    options: [
      { value: 'cachorro', label: 'Cachorro 🐶' },
      { value: 'gato', label: 'Gato 🐱' }
    ],
    nextStep: 'pet-breed'
  },
  PET_BREED: {
    id: 'pet-breed',
    getMessage: (petName, petType) => `Qual é a raça do ${petName}?`,
    placeholder: 'Digite a raça do seu pet...',
    nextStep: 'pet-gender'
  },
  PET_GENDER: {
    id: 'pet-gender',
    getMessage: (petName, petType) => 
      `${petName} é ${petType === 'cachorro' ? 'um cachorro' : 'um gato'}! E qual é o gênero?`,
    options: [
      { value: 'macho', label: 'Macho' },
      { value: 'femea', label: 'Fêmea' }
    ],
    nextStep: 'pet-age'
  },
  PET_AGE: {
    id: 'pet-age',
    getMessage: (petName, petGender) => 
      `${petName} é ${petGender === 'macho' ? 'um menino' : 'uma menina'}! E qual é a idade aproximada?`,
    options: [
      { value: 'filhote', label: 'Filhote (até 1 ano)' },
      { value: 'adulto', label: 'Adulto (1 a 7 anos)' },
      { value: 'idoso', label: 'Idoso (mais de 7 anos)' }
    ],
    nextStep: 'pet-behavior'
  },
  PET_BEHAVIOR: {
    id: 'pet-behavior',
    getMessage: (petName) => `Quais comportamentos o ${petName} apresenta? (Selecione todos que se aplicam)`,
    options: [
      { value: 'barking', label: 'Late/Mia excessivamente' },
      { value: 'chewing', label: 'Mastiga objetos' },
      { value: 'jumping', label: 'Pula nas pessoas' },
      { value: 'pulling', label: 'Puxa a guia durante passeios' },
      { value: 'aggression', label: 'Agressividade com outros animais' },
      { value: 'anxiety', label: 'Ansiedade de separação' },
      { value: 'house-soiling', label: 'Faz necessidades em local inapropriado' },
      { value: 'fearful', label: 'Medo de barulhos/situações' },
      { value: 'well-behaved', label: 'Bem comportado, sem problemas' }
    ],
    multiSelect: true,
    nextStep: 'training-goals'
  },
  TRAINING_GOALS: {
    id: 'training-goals',
    message: 'Quais são seus objetivos principais de treinamento?',
    options: [
      { value: 'basic-obedience', label: 'Comandos básicos' },
      { value: 'stop-bad-behaviors', label: 'Parar comportamentos indesejados' },
      { value: 'socialization', label: 'Melhorar socialização' },
      { value: 'tricks', label: 'Ensinar truques divertidos' },
      { value: 'mental-stimulation', label: 'Estimulação mental' }
    ],
    multiSelect: true,
    nextStep: 'experience-level'
  },
  EXPERIENCE_LEVEL: {
    id: 'experience-level',
    message: 'Qual é o seu nível de experiência com treinamento de pets?',
    options: [
      { value: 'beginner', label: 'Iniciante (primeira vez)' },
      { value: 'some-experience', label: 'Alguma experiência' },
      { value: 'experienced', label: 'Experiente' }
    ],
    nextStep: 'final-confirmation'
  },
  FINAL_CONFIRMATION: {
    id: 'final-confirmation',
    getMessage: (petName) => `Ótimo! Agora conhecemos melhor ${petName}. Estamos prontos para preparar uma experiência personalizada para vocês.`,
    buttonText: 'Finalizar e ir para o app',
    nextStep: 'complete'
  },
  COMPLETE: {
    id: 'complete',
    message: 'Pronto! Seu perfil foi criado com sucesso. Vamos começar essa jornada de treinamento juntos!',
    isCompleted: true
  }
};

const ChatOnboarding = () => {
  const { completeOnboarding } = useOnboarding();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  
  // Estado para rastrear a conversação
  const [messages, setMessages] = useState([]);
  const [currentStepId, setCurrentStepId] = useState(ONBOARDING_STEPS.WELCOME.id);
  const [petData, setPetData] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(1);
  const [darkMode, setDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  
  // Estado para entrada de texto e seleção
  const [inputValue, setInputValue] = useState('');
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petGender, setPetGender] = useState('');
  const [petAge, setPetAge] = useState('');
  const [behaviors, setBehaviors] = useState([]);
  const [trainingGoals, setTrainingGoals] = useState([]);
  const [experienceLevel, setExperienceLevel] = useState('');
  
  // Estado para aguardar respostas
  const [waitingForResponse, setWaitingForResponse] = useState(false);
  
  // Estado para seleção múltipla
  const [selectedBehaviors, setSelectedBehaviors] = useState([]);
  const [selectedGoals, setSelectedGoals] = useState([]);
  
  // Estado para garantir que as opções só apareçam quando a animação de digitação estiver completa
  const [messageTypingComplete, setMessageTypingComplete] = useState(false);
  
  // Efeito para logar quando o estado messageTypingComplete muda
  useEffect(() => {
    console.log('Estado messageTypingComplete mudou:', messageTypingComplete);
  }, [messageTypingComplete]);
  
  // Refs para o container de mensagens e última mensagem (para auto-scroll)
  const messagesContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  
  // Encontra o passo atual com base no ID
  const getCurrentStep = () => {
    return Object.values(ONBOARDING_STEPS).find(step => step.id === currentStepId);
  };
  
  const currentStep = getCurrentStep();
  
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
    // Exibe a primeira mensagem apenas se não houver mensagens ainda
    if (messages.length === 0) {
      // Marca que a digitação vai começar
      setMessageTypingComplete(false);
      
      // Adiciona a primeira mensagem após um pequeno delay
      setTimeout(() => {
        setMessages([{
          id: `system-${Date.now()}`,
          text: ONBOARDING_STEPS.WELCOME.message,
          type: 'system'
        }]);
      }, 500);
    }
  }, []);  // Executa apenas na montagem do componente
  
  // Auto-scroll para a última mensagem quando novas mensagens são adicionadas
  useEffect(() => {
    if (messagesEndRef.current) {
      // Scroll imediato para o final ao adicionar mensagens ou quando aparecer/esconder typing indicator
      const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'end' 
        });
      };
      
      // Executa imediatamente
      scrollToBottom();
      
      // Um segundo scroll após um pequeno delay, para garantir que
      // todas as animações e renderizações tenham sido concluídas
      const timer = setTimeout(scrollToBottom, 100);
      
      // Um terceiro scroll com delay maior para capturar qualquer renderização adicional
      const finalTimer = setTimeout(scrollToBottom, 500);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(finalTimer);
      };
    }
  }, [messages, showTyping, messageTypingComplete]);
  
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
    const timer = setTimeout(scrollToEnd, 200);
    const secondTimer = setTimeout(scrollToEnd, 600);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(secondTimer);
    };
  }, [currentStepId]);
  
  // Função adicional de scroll para quando as opções aparecem
  useEffect(() => {
    if (messageTypingComplete && !showTyping && messagesEndRef.current) {
      // Quando as opções ficam visíveis, scroll para garantir que sejam vistas
      const timer = setTimeout(() => {
        messagesEndRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'end'
        });
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [messageTypingComplete, showTyping]);
  
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
    
    // Marca que uma nova mensagem vai começar a ser digitada
    setMessageTypingComplete(false);
    
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
        
        // Aguarda um tempo para garantir que a mensagem seja processada
        // antes de permitir a exibição das opções de resposta
        // Não definimos messageTypingComplete=true aqui - isso será feito pelo callback onTypingComplete
      }
    }, 1500);
  };
  
  // Renderiza as opções de resposta com base na etapa atual
  const renderResponseOptions = () => {
    if (showTyping || !messageTypingComplete) return null;

    // Passo 1: Boas-vindas
    if (currentStepId === ONBOARDING_STEPS.WELCOME.id) {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('optionsRendered'));
      }, 50);
      
      return (
        <OptionsContainer>
          <OptionButton
            $index={0}
            onClick={() => {
              // Adiciona resposta do usuário
              setMessages(prev => [...prev, {
                id: `user-${Date.now()}`,
                text: ONBOARDING_STEPS.WELCOME.buttonText,
                type: 'user'
              }]);
              
              // Avança para o próximo passo
              setCurrentStepId(ONBOARDING_STEPS.WELCOME.nextStep);
              setCurrentStepIndex(prev => prev + 1);
              
              // Mostra o indicador de digitação
              setShowTyping(true);
              setMessageTypingComplete(false);
              
              // Adiciona a próxima mensagem do sistema após um delay
              setTimeout(() => {
                setShowTyping(false);
                
                setMessages(prev => [...prev, {
                  id: `system-${Date.now()}`,
                  text: ONBOARDING_STEPS.PET_NAME.message,
                  type: 'system'
                }]);
              }, 1500);
            }}
            style={{
              backgroundColor: '#4a89dc',
              color: 'white',
              textAlign: 'center',
              fontWeight: '600',
              padding: '15px 20px',
              maxWidth: '200px',
              margin: '0 auto'
            }}
          >
            {ONBOARDING_STEPS.WELCOME.buttonText}
          </OptionButton>
        </OptionsContainer>
      );
    }

    // Passo 2: Nome do pet
    if (currentStepId === ONBOARDING_STEPS.PET_NAME.id) {
      return (
        <TextInputContainer>
          <TextInput
            value={inputValue}
            onChange={handleChange}
            placeholder={ONBOARDING_STEPS.PET_NAME.placeholder}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && inputValue.trim()) {
                handlePetNameSubmit();
              }
            }}
          />
          <SendButton
            onClick={() => inputValue.trim() && handlePetNameSubmit()}
            disabled={!inputValue.trim()}
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SendButton>
        </TextInputContainer>
      );
    }

    // Passo 3: Tipo do pet
    if (currentStepId === ONBOARDING_STEPS.PET_TYPE.id) {
      const { options } = ONBOARDING_STEPS.PET_TYPE;
      
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('optionsRendered'));
      }, 50);

      return (
        <OptionsContainer>
          {options.map((option, index) => (
            <OptionButton
              key={option.value}
              $index={index}
              onClick={() => handlePetTypeSelect(option.value)}
            >
              {option.label}
            </OptionButton>
          ))}
        </OptionsContainer>
      );
    }

    // Passo 4: Raça do pet
    if (currentStepId === ONBOARDING_STEPS.PET_BREED.id) {
      return (
        <TextInputContainer>
          <TextInput
            value={inputValue}
            onChange={handleChange}
            placeholder={ONBOARDING_STEPS.PET_BREED.placeholder}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && inputValue.trim()) {
                handlePetBreedSubmit();
              }
            }}
          />
          <SendButton
            onClick={() => inputValue.trim() && handlePetBreedSubmit()}
            disabled={!inputValue.trim()}
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SendButton>
        </TextInputContainer>
      );
    }

    // Passo 5: Gênero do pet
    if (currentStepId === ONBOARDING_STEPS.PET_GENDER.id) {
      const { options } = ONBOARDING_STEPS.PET_GENDER;
      
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('optionsRendered'));
      }, 50);

      return (
        <OptionsContainer>
          {options.map((option, index) => (
            <OptionButton
              key={option.value}
              $index={index}
              onClick={() => handlePetGenderSelect(option.value)}
            >
              {option.label}
            </OptionButton>
          ))}
        </OptionsContainer>
      );
    }

    // Passo 6: Idade do pet
    if (currentStepId === ONBOARDING_STEPS.PET_AGE.id) {
      const { options } = ONBOARDING_STEPS.PET_AGE;
      
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('optionsRendered'));
      }, 50);

      return (
        <OptionsContainer>
          {options.map((option, index) => (
            <OptionButton
              key={option.value}
              $index={index}
              onClick={() => handlePetAgeSelect(option.value)}
            >
              {option.label}
            </OptionButton>
          ))}
        </OptionsContainer>
      );
    }

    // Passo 7: Comportamentos do pet
    if (currentStepId === ONBOARDING_STEPS.PET_BEHAVIOR.id) {
      const { options } = ONBOARDING_STEPS.PET_BEHAVIOR;
      
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('optionsRendered'));
      }, 50);

      const toggleBehavior = (value) => {
        setSelectedBehaviors(prev => {
          if (prev.includes(value)) {
            return prev.filter(v => v !== value);
          } else {
            return [...prev, value];
          }
        });
      };

      return (
        <div style={{ width: '100%' }}>
          <OptionsContainer>
            {options.map((option, index) => (
              <MultiOptionButton
                key={option.value}
                $index={index}
                $selected={selectedBehaviors.includes(option.value)}
                onClick={() => toggleBehavior(option.value)}
              >
                {option.label}
              </MultiOptionButton>
            ))}
          </OptionsContainer>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
            <ConfirmButton 
              onClick={() => handleBehaviorSelect(selectedBehaviors)}
              disabled={selectedBehaviors.length === 0}
              style={{ maxWidth: '200px' }}
            >
              Confirmar ({selectedBehaviors.length} selecionado{selectedBehaviors.length !== 1 ? 's' : ''})
            </ConfirmButton>
          </div>
        </div>
      );
    }

    // Passo 8: Objetivos de treinamento
    if (currentStepId === ONBOARDING_STEPS.TRAINING_GOALS.id) {
      const { options } = ONBOARDING_STEPS.TRAINING_GOALS;
      
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('optionsRendered'));
      }, 50);

      const toggleGoal = (value) => {
        setSelectedGoals(prev => {
          if (prev.includes(value)) {
            return prev.filter(v => v !== value);
          } else {
            return [...prev, value];
          }
        });
      };

      return (
        <div style={{ width: '100%' }}>
          <OptionsContainer>
            {options.map((option, index) => (
              <MultiOptionButton
                key={option.value}
                $index={index}
                $selected={selectedGoals.includes(option.value)}
                onClick={() => toggleGoal(option.value)}
              >
                {option.label}
              </MultiOptionButton>
            ))}
          </OptionsContainer>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
            <ConfirmButton 
              onClick={() => handleGoalsSelect(selectedGoals)}
              disabled={selectedGoals.length === 0}
              style={{ maxWidth: '200px' }}
            >
              Confirmar ({selectedGoals.length} selecionado{selectedGoals.length !== 1 ? 's' : ''})
            </ConfirmButton>
          </div>
        </div>
      );
    }

    // Passo 9: Nível de experiência
    if (currentStepId === ONBOARDING_STEPS.EXPERIENCE_LEVEL.id) {
      const { options } = ONBOARDING_STEPS.EXPERIENCE_LEVEL;
      
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('optionsRendered'));
      }, 50);

      return (
        <OptionsContainer>
          {options.map((option, index) => (
            <OptionButton
              key={option.value}
              $index={index}
              onClick={() => handleExperienceLevelSelect(option.value)}
            >
              {option.label}
            </OptionButton>
          ))}
        </OptionsContainer>
      );
    }

    // Passo 10: Confirmação final
    if (currentStepId === ONBOARDING_STEPS.FINAL_CONFIRMATION.id) {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('optionsRendered'));
      }, 50);
      
      return (
        <ConfirmContainer>
          <PetInfoCard>
            <InfoTitle>Resumo do Perfil</InfoTitle>
            <InfoSection>
              <InfoLabel>Nome:</InfoLabel>
              <InfoValue>{petName}</InfoValue>
            </InfoSection>
            <InfoSection>
              <InfoLabel>Tipo:</InfoLabel>
              <InfoValue>{petType === 'cachorro' ? 'Cachorro' : 'Gato'}</InfoValue>
            </InfoSection>
            <InfoSection>
              <InfoLabel>Raça:</InfoLabel>
              <InfoValue>{petBreed}</InfoValue>
            </InfoSection>
            <InfoSection>
              <InfoLabel>Gênero:</InfoLabel>
              <InfoValue>{petGender === 'macho' ? 'Macho' : 'Fêmea'}</InfoValue>
            </InfoSection>
            <InfoSection>
              <InfoLabel>Idade:</InfoLabel>
              <InfoValue>
                {petAge === 'filhote'
                  ? 'Filhote (até 1 ano)'
                  : petAge === 'adulto'
                  ? 'Adulto (1 a 7 anos)'
                  : 'Idoso (mais de 7 anos)'}
              </InfoValue>
            </InfoSection>
          </PetInfoCard>
          <ConfirmButton onClick={handleFinalConfirmation} style={{ textAlign: 'center' }}>
            {ONBOARDING_STEPS.FINAL_CONFIRMATION.buttonText}
          </ConfirmButton>
        </ConfirmContainer>
      );
    }

    return null;
  };
  
  // Adiciona listener para o evento customizado disparado quando as opções são renderizadas
  useEffect(() => {
    const handleOptionsRendered = () => {
      if (messagesEndRef.current) {
        // Scroll para o fim quando as opções são renderizadas
        setTimeout(() => {
          messagesEndRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'end' 
          });
        }, 100);
      }
    };
    
    window.addEventListener('optionsRendered', handleOptionsRendered);
    
    return () => {
      window.removeEventListener('optionsRendered', handleOptionsRendered);
    };
  }, []);
  
  // Manipuladores de eventos
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePetNameSubmit = () => {
    if (inputValue.trim()) {
      const name = inputValue.trim();
      setPetName(name);
      
      // Adiciona mensagem do usuário
      setMessages(prev => [...prev, {
        id: `user-${Date.now()}`,
        text: name,
        type: 'user'
      }]);
      
      // Atualiza petData
      const updatedPetData = { ...petData, petName: name };
      setPetData(updatedPetData);
      
      // Limpa o campo de entrada
      setInputValue('');
      
      // Avança para o próximo passo
      setCurrentStepId(ONBOARDING_STEPS.PET_NAME.nextStep);
      setCurrentStepIndex(prev => prev + 1);
      
      // Mostra o indicador de digitação
      setShowTyping(true);
      setMessageTypingComplete(false);
      
      // Adiciona a próxima mensagem do sistema após um delay
      setTimeout(() => {
        setShowTyping(false);
        
        setMessages(prev => [...prev, {
          id: `system-${Date.now()}`,
          text: ONBOARDING_STEPS.PET_TYPE.getMessage(name),
          type: 'system'
        }]);
      }, 1500);
    }
  };

  const handlePetTypeSelect = (type) => {
    setPetType(type);
    
    // Adiciona mensagem do usuário
    const typeLabel = ONBOARDING_STEPS.PET_TYPE.options.find(opt => opt.value === type)?.label || type;
    
    setMessages(prev => [...prev, {
      id: `user-${Date.now()}`,
      text: typeLabel,
      type: 'user'
    }]);
    
    // Atualiza petData
    const updatedPetData = { ...petData, petType: type };
    setPetData(updatedPetData);
    
    // Avança para o próximo passo
    setCurrentStepId(ONBOARDING_STEPS.PET_TYPE.nextStep);
    setCurrentStepIndex(prev => prev + 1);
    
    // Mostra o indicador de digitação
    setShowTyping(true);
    setMessageTypingComplete(false);
    
    // Adiciona a próxima mensagem do sistema após um delay
    setTimeout(() => {
      setShowTyping(false);
      
      setMessages(prev => [...prev, {
        id: `system-${Date.now()}`,
        text: ONBOARDING_STEPS.PET_BREED.getMessage(petName, type),
        type: 'system'
      }]);
    }, 1500);
  };

  const handlePetGenderSelect = (gender) => {
    setPetGender(gender);
    
    // Adiciona mensagem do usuário
    const genderLabel = ONBOARDING_STEPS.PET_GENDER.options.find(opt => opt.value === gender)?.label || gender;
    
    setMessages(prev => [...prev, {
      id: `user-${Date.now()}`,
      text: genderLabel,
      type: 'user'
    }]);
    
    // Atualiza petData
    const updatedPetData = { ...petData, petGender: gender };
    setPetData(updatedPetData);
    
    // Avança para o próximo passo
    setCurrentStepId(ONBOARDING_STEPS.PET_GENDER.nextStep);
    setCurrentStepIndex(prev => prev + 1);
    
    // Mostra o indicador de digitação
    setShowTyping(true);
    setMessageTypingComplete(false);
    
    // Adiciona a próxima mensagem do sistema após um delay
    setTimeout(() => {
      setShowTyping(false);
      
      setMessages(prev => [...prev, {
        id: `system-${Date.now()}`,
        text: ONBOARDING_STEPS.PET_AGE.getMessage(petName, gender),
        type: 'system'
      }]);
    }, 1500);
  };

  const handlePetAgeSelect = (age) => {
    setPetAge(age);
    
    // Adiciona mensagem do usuário
    const ageLabel = ONBOARDING_STEPS.PET_AGE.options.find(opt => opt.value === age)?.label || age;
    
    setMessages(prev => [...prev, {
      id: `user-${Date.now()}`,
      text: ageLabel,
      type: 'user'
    }]);
    
    // Atualiza petData
    const updatedPetData = { ...petData, petAge: age };
    setPetData(updatedPetData);
    
    // Avança para o próximo passo
    setCurrentStepId(ONBOARDING_STEPS.PET_AGE.nextStep);
    setCurrentStepIndex(prev => prev + 1);
    
    // Mostra o indicador de digitação
    setShowTyping(true);
    setMessageTypingComplete(false);
    
    // Adiciona a próxima mensagem do sistema após um delay
    setTimeout(() => {
      setShowTyping(false);
      
      setMessages(prev => [...prev, {
        id: `system-${Date.now()}`,
        text: ONBOARDING_STEPS.PET_BEHAVIOR.getMessage(petName),
        type: 'system'
      }]);
    }, 1500);
  };

  const handlePetBreedSubmit = () => {
    if (inputValue.trim()) {
      const breed = inputValue.trim();
      setPetBreed(breed);
      
      // Adiciona mensagem do usuário
      setMessages(prev => [...prev, {
        id: `user-${Date.now()}`,
        text: breed,
        type: 'user'
      }]);
      
      // Atualiza petData
      const updatedPetData = { ...petData, petBreed: breed };
      setPetData(updatedPetData);
      
      // Limpa o campo de entrada
      setInputValue('');
      
      // Avança para o próximo passo
      setCurrentStepId(ONBOARDING_STEPS.PET_BREED.nextStep);
      setCurrentStepIndex(prev => prev + 1);
      
      // Mostra o indicador de digitação
      setShowTyping(true);
      setMessageTypingComplete(false);
      
      // Adiciona a próxima mensagem do sistema após um delay
      setTimeout(() => {
        setShowTyping(false);
        
        setMessages(prev => [...prev, {
          id: `system-${Date.now()}`,
          text: `${petName} é um ${breed}! E qual é o gênero?`,
          type: 'system'
        }]);
      }, 1500);
    }
  };

  const handleBehaviorSelect = (selectedOptions) => {
    setBehaviors(selectedOptions);
    
    // Formata as opções selecionadas para exibição
    const behaviorLabels = selectedOptions.map(opt => 
      ONBOARDING_STEPS.PET_BEHAVIOR.options.find(o => o.value === opt)?.label || opt
    ).join(', ');
    
    // Adiciona mensagem do usuário
    setMessages(prev => [...prev, {
      id: `user-${Date.now()}`,
      text: behaviorLabels || 'Nenhum comportamento selecionado',
      type: 'user'
    }]);
    
    // Atualiza petData
    const updatedPetData = { ...petData, behaviors: selectedOptions };
    setPetData(updatedPetData);
    
    // Avança para o próximo passo
    setCurrentStepId(ONBOARDING_STEPS.PET_BEHAVIOR.nextStep);
    setCurrentStepIndex(prev => prev + 1);
    
    // Mostra o indicador de digitação
    setShowTyping(true);
    setMessageTypingComplete(false);
    
    // Adiciona a próxima mensagem do sistema após um delay
    setTimeout(() => {
      setShowTyping(false);
      
      setMessages(prev => [...prev, {
        id: `system-${Date.now()}`,
        text: ONBOARDING_STEPS.TRAINING_GOALS.message,
        type: 'system'
      }]);
    }, 1500);
  };

  const handleGoalsSelect = (selectedOptions) => {
    setTrainingGoals(selectedOptions);
    
    // Formata as opções selecionadas para exibição
    const goalLabels = selectedOptions.map(opt => 
      ONBOARDING_STEPS.TRAINING_GOALS.options.find(o => o.value === opt)?.label || opt
    ).join(', ');
    
    // Adiciona mensagem do usuário
    setMessages(prev => [...prev, {
      id: `user-${Date.now()}`,
      text: goalLabels || 'Nenhum objetivo selecionado',
      type: 'user'
    }]);
    
    // Atualiza petData
    const updatedPetData = { ...petData, trainingGoals: selectedOptions };
    setPetData(updatedPetData);
    
    // Avança para o próximo passo
    setCurrentStepId(ONBOARDING_STEPS.TRAINING_GOALS.nextStep);
    setCurrentStepIndex(prev => prev + 1);
    
    // Mostra o indicador de digitação
    setShowTyping(true);
    setMessageTypingComplete(false);
    
    // Adiciona a próxima mensagem do sistema após um delay
    setTimeout(() => {
      setShowTyping(false);
      
      setMessages(prev => [...prev, {
        id: `system-${Date.now()}`,
        text: ONBOARDING_STEPS.EXPERIENCE_LEVEL.message,
        type: 'system'
      }]);
    }, 1500);
  };

  const handleExperienceLevelSelect = (level) => {
    setExperienceLevel(level);
    
    // Adiciona mensagem do usuário
    const levelLabel = ONBOARDING_STEPS.EXPERIENCE_LEVEL.options.find(opt => opt.value === level)?.label || level;
    
    setMessages(prev => [...prev, {
      id: `user-${Date.now()}`,
      text: levelLabel,
      type: 'user'
    }]);
    
    // Atualiza petData
    const updatedPetData = { ...petData, experienceLevel: level };
    setPetData(updatedPetData);
    
    // Avança para o próximo passo
    setCurrentStepId(ONBOARDING_STEPS.EXPERIENCE_LEVEL.nextStep);
    setCurrentStepIndex(prev => prev + 1);
    
    // Mostra o indicador de digitação
    setShowTyping(true);
    setMessageTypingComplete(false);
    
    // Adiciona a próxima mensagem do sistema após um delay
    setTimeout(() => {
      setShowTyping(false);
      
      setMessages(prev => [...prev, {
        id: `system-${Date.now()}`,
        text: ONBOARDING_STEPS.FINAL_CONFIRMATION.getMessage(petName),
        type: 'system'
      }]);
    }, 1500);
  };

  const handleFinalConfirmation = () => {
    // Adiciona mensagem do usuário
    setMessages(prev => [...prev, {
      id: `user-${Date.now()}`,
      text: ONBOARDING_STEPS.FINAL_CONFIRMATION.buttonText,
      type: 'user'
    }]);
    
    // Marca como concluído
    setCurrentStepId(ONBOARDING_STEPS.COMPLETE.id);
    setIsCompleted(true);
    
    // Mostra o indicador de digitação
    setShowTyping(true);
    setMessageTypingComplete(false);
    
    // Adiciona a mensagem de conclusão
    setTimeout(() => {
      setShowTyping(false);
      
      setMessages(prev => [...prev, {
        id: `system-${Date.now()}`,
        text: ONBOARDING_STEPS.COMPLETE.message,
        type: 'system'
      }]);
      
      // Finaliza o onboarding após um delay para permitir a leitura da mensagem
      setTimeout(() => {
        finishOnboarding();
      }, 2000);
    }, 1500);
  };
  
  return (
    <ChatContainer className={darkMode ? 'dark-mode' : 'light-mode'}>
      <HeaderContainer>
        <ProgressText>Etapa {currentStepIndex} de {Object.keys(ONBOARDING_STEPS).length - 1}</ProgressText>
      </HeaderContainer>
      
      <MessagesContainer ref={messagesContainerRef}>
        {messages.map((message, index) => (
          <MessageBubble
            key={message.id}
            message={message.text}
            isUser={message.type === 'user'}
            showInstantly={message.showInstantly}
            onTypingComplete={index === messages.length - 1 && message.type === 'system' ? () => {
              // Atraso para garantir que não haja conflito na renderização
              setTimeout(() => {
                setMessageTypingComplete(true);
              }, 200);
            } : undefined}
          />
        ))}
        
        {showTyping && <TypingIndicator />}
        
        {/* Renderiza as opções apenas quando a digitação estiver completa e não houver indicador de digitação */}
        {!showTyping && !isCompleted && messageTypingComplete && (
          <div style={{ paddingTop: '10px', paddingBottom: '25px' }}>
            {renderResponseOptions()}
          </div>
        )}
        
        {/* O messagesEndRef precisa estar após as opções para garantir scroll correto */}
        <div ref={messagesEndRef} style={{ height: '20px', width: '100%' }}></div>
      </MessagesContainer>
    </ChatContainer>
  );
};

export default ChatOnboarding; 