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
// Animação para aparecer suavemente da direita/esquerda
const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  70% {
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;
  background: linear-gradient(to bottom, #e6f2ff, #f8f9fa) !important;
  color: #222 !important;
  overflow: hidden;
  position: relative;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  * { box-sizing: border-box; }
  @media (max-width: 600px) {
    max-width: 100%;
    border-radius: 0;
  }
`;

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: linear-gradient(to right, #4a89dc, #5ca9fb);
  padding: 8px 16px 8px 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 0;
  flex-shrink: 0;
`;

export const ProgressText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
  letter-spacing: 0.5px;
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  padding: 8px 20px 30px 20px;
  
  /* Estilizar scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }
`;

export const MessageBubble = styled.div`
  max-width: 80%;
  padding: 14px 18px;
  border-radius: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  line-height: 1.5;
  font-size: 16px;
  word-wrap: break-word;
  background-color: ${({ $isUser }) => $isUser ? '#4a89dc' : 'white'};
  color: ${({ $isUser }) => $isUser ? 'white' : '#333'};
  align-self: ${({ $isUser }) => $isUser ? 'flex-end' : 'flex-start'};
  border-bottom-left-radius: ${({ $isUser }) => $isUser ? '20px' : '4px'};
  border-bottom-right-radius: ${({ $isUser }) => $isUser ? '4px' : '20px'};
  animation: ${fadeIn} 0.3s ease-in-out;
  &.system-bubble {}

  .typing-cursor {
    display: inline-block;
    width: 2px;
    height: 16px;
    background-color: currentColor;
    margin-left: 2px;
    animation: blink 1s infinite;
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  }
`;

export const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 18px;
  background-color: white;
  border-radius: 20px;
  border-bottom-left-radius: 4px;
  margin-bottom: 16px;
  align-self: flex-start;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: auto;
  animation: ${fadeIn} 0.3s ease-in-out;
  &.typing-indicator {}

  .typing-text {
    font-size: 14px;
    color: #666;
    margin-right: 8px;
  }

  span {
    height: 10px;
    width: 10px;
    background-color: #4a89dc;
    border-radius: 50%;
    display: inline-block;
    margin: 0 3px;
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
      opacity: 0.6;
    }
    30% {
      transform: scale(1.5);
      opacity: 1;
    }
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  animation: ${fadeIn} 0.5s ease-out;
  align-self: center;
  margin-top: 8px;
  
  @media (min-width: 480px) {
    max-width: 90%;
  }
`;

export const OptionButton = styled.button`
  padding: 12px 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  background-color: white;
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 5px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  animation: ${fadeIn} 0.3s ease-out;
  animation-delay: ${props => props.$index * 0.05}s;
  opacity: 0;
  animation-fill-mode: forwards;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  max-width: 90%;
  align-self: flex-start;
  width: 100%;
  
  &:hover {
    background-color: #f7f9fd;
    border-color: #4a89dc;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`;

export const MultiOptionButton = styled(OptionButton)`
  background-color: ${props => props.$selected ? '#f0f6ff' : 'white'};
  border-color: ${props => props.$selected ? '#4a89dc' : 'rgba(0, 0, 0, 0.1)'};
  
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

export const ConfirmButton = styled(OptionButton)`
  background-color: #4a89dc;
  color: white;
  text-align: center;
  font-weight: 600;
  
  &:hover {
    background-color: #3d7bcb;
  }
`;

export const InputContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  padding: 16px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  z-index: 10;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.3s ease-out;
  &.input-container {}
`;

export const TextInput = styled.input`
  flex: 1;
  padding: 14px 20px;
  border-radius: 24px;
  border: 1px solid #e0e0e0;
  font-size: 16px;
  outline: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  color: #333333;
  &.text-input {}

  &:focus {
    border-color: #4a89dc;
    box-shadow: 0 2px 8px rgba(74, 137, 220, 0.3);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

export const SendButton = styled.button`
  background: linear-gradient(to right, #4a89dc, #5ca9fb);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    box-shadow: none;
  }
  
  svg {
    width: 22px;
    height: 22px;
    fill: none;
    stroke: white;
    stroke-width: 2;
  }
`;

// Este componente pode ser usado para efeito de digitação
export const TypewriterText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  animation: ${typewriter} 1s steps(40, end);
`;