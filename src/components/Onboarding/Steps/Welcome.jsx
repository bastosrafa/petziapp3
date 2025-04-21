import React from 'react';
import { 
  StepContainer, 
  StepTransition, 
  WelcomeImage, 
  WelcomeTitle, 
  WelcomeText, 
  ButtonContainer, 
  PrimaryButton 
} from '../OnboardingStyles.jsx';
import { FaPaw } from 'react-icons/fa';

const Welcome = ({ nextStep }) => {
  return (
    <StepTransition>
      <StepContainer>
        <WelcomeImage>
          <FaPaw size={80} color="#4A6FA5" />
        </WelcomeImage>
        
        <WelcomeTitle>Bem-vindo ao Petziapp!</WelcomeTitle>
        
        <WelcomeText>
          Vamos configurar o perfil do seu pet para oferecer a melhor experiência
          possível. Este processo levará apenas alguns minutos.
        </WelcomeText>
        
        <WelcomeText>
          Você irá fornecer informações básicas sobre seu pet, suas preferências
          e comportamentos para que possamos personalizar o conteúdo de
          treinamento e sugestões para vocês.
        </WelcomeText>
        
        <ButtonContainer>
          <div></div> {/* Espaço vazio para manter o alinhamento */}
          <PrimaryButton onClick={nextStep}>
            Vamos começar
          </PrimaryButton>
        </ButtonContainer>
      </StepContainer>
    </StepTransition>
  );
};

export default Welcome; 