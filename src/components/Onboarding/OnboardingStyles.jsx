import styled, { css, keyframes } from 'styled-components';
import { colors } from '../../styles/colors';

// Animação de transição
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

const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

// Container principal
export const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  min-height: 600px;
  background-color: ${colors.background};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

// Componentes para a barra de progresso
export const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ProgressStep = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#0078ff' : props.completed ? '#7ed321' : '#eee'};
  color: ${props => (props.active || props.completed) ? 'white' : '#888'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  position: relative;
  
  &:not(:last-child):after {
    content: '';
    position: absolute;
    height: 2px;
    width: 30px;
    background-color: ${props => props.completed ? '#7ed321' : '#eee'};
    right: -25px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ProgressLabel = styled.div`
  font-size: 12px;
  color: #666;
  text-align: center;
  margin-top: 5px;
  max-width: 80px;
`;

export const ProgressStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Componentes para os passos individuais
export const StepContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`;

export const StepTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
`;

export const StepDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
`;

export const StepCounter = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
  text-align: center;
`;

// Formulários e campos
export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #0078ff;
    outline: none;
  }
  
  ${props => props.error && css`
    border-color: #e74c3c;
  `}
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: white;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #0078ff;
    outline: none;
  }
  
  ${props => props.error && css`
    border-color: #e74c3c;
  `}
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #0078ff;
    outline: none;
  }
`;

export const ErrorText = styled.p`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
`;

// Checkbox personalizado
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: #333;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  position: relative;
  transition: all 0.2s;
  background-color: ${props => props.checked ? '#0078ff' : 'white'};
  
  &:after {
    content: '';
    position: absolute;
    display: ${props => (props.checked ? 'block' : 'none')};
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const CheckboxText = styled.span`
  font-size: 16px;
`;

// Botões
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const PrimaryButton = styled.button`
  background-color: #0078ff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0062cc;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled.button`
  background-color: white;
  color: #0078ff;
  border: 1px solid #0078ff;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: #f0f7ff;
  }
  
  &:disabled {
    border-color: #cccccc;
    color: #cccccc;
    cursor: not-allowed;
  }
`;

// Componentes para o sumário
export const SummaryCard = styled.div`
  background-color: ${colors.background.light};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const SummaryItem = styled.div`
  margin-bottom: 15px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SummaryLabel = styled.span`
  font-weight: 600;
  color: ${colors.textDark};
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
`;

export const SummaryValue = styled.span`
  color: ${colors.textMedium};
  font-size: 16px;
`;

export const SummaryList = styled.ul`
  margin: 0;
  padding-left: 20px;
  
  li {
    margin-bottom: 5px;
  }
`;

// Componente de saudação para a tela de boas vindas
export const WelcomeImage = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 30px;
  background-color: ${colors.lightGray};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }
`;

export const WelcomeTitle = styled.h1`
  font-size: 28px;
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
`;

export const WelcomeText = styled.p`
  font-size: 16px;
  color: ${colors.textMedium};
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.6;
`;

// Animações e efeitos
export const StepTransition = styled.div`
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;
  padding: 20px;
  background-color: #f8f9fa;
  overflow-y: auto;
  position: relative;
`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const ProgressText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  padding-bottom: 80px;
`;

export const MessageBubble = styled.div`
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 18px;
  margin-bottom: 12px;
  animation: ${fadeIn} 0.3s ease-in-out;
  line-height: 1.5;
  
  ${props => props.isUser ? css`
    background-color: #007bff;
    color: white;
    align-self: flex-end;
    border-bottom-right-radius: 4px;
  ` : css`
    background-color: #f0f0f0;
    align-self: flex-start;
    border-bottom-left-radius: 4px;
  `}
`;

export const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  align-self: flex-start;

  span {
    height: 8px;
    width: 8px;
    background-color: #999;
    border-radius: 50%;
    display: inline-block;
    margin: 0 2px;
    animation: pulse 1.5s infinite ease-in-out;
  }

  span:nth-child(1) {
    animation-delay: 0s;
  }

  span:nth-child(2) {
    animation-delay: 0.2s;
  }

  span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes pulse {
    0%, 60%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    30% {
      transform: scale(1.5);
      opacity: 0.8;
    }
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
  align-self: flex-start;
`;

export const OptionButton = styled.button`
  padding: 10px 16px;
  border-radius: 18px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;

  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const InputContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 12px 16px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  z-index: 10;
  max-width: 600px;
  margin: 0 auto;
`;

export const TextInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border-radius: 24px;
  border: 1px solid #ddd;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const SendButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #0069d9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// Este componente pode ser usado para efeito de digitação
export const TypewriterText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  animation: ${typewriter} 1s steps(40, end);
`; 