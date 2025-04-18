import React, { useState } from "react";
import styled from "styled-components";

const LessonContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const SlideContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 1rem;
  margin-right: -1rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #F7FAFC;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #CBD5E0;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: #A0AEC0;
    }
  }
`;

const SlideTitle = styled.h2`
  font-size: 1.5rem;
  color: #2D3748;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Text = styled.p`
  color: #4A5568;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const StepList = styled.ol`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const StepItem = styled.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "1️⃣";
    position: absolute;
    left: 0;
  }

  &:nth-child(2):before {
    content: "2️⃣";
  }

  &:nth-child(3):before {
    content: "3️⃣";
  }

  &:nth-child(4):before {
    content: "4️⃣";
  }

  &:nth-child(5):before {
    content: "5️⃣";
  }
`;

const SummaryList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const SummaryItem = styled.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "✔";
    color: #48BB78;
    position: absolute;
    left: 0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ImagePlaceholder = styled.div`
  color: #A0AEC0;
  font-size: 1.1rem;
`;

const IntroductionText = styled.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #4299E1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #3182CE;
  }

  &:disabled {
    background: #CBD5E0;
    cursor: not-allowed;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#4299E1' : '#CBD5E0'};
  cursor: pointer;
  transition: background 0.2s;
`;

const Card = styled.div`
  background: #F7FAFC;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const CardTitle = styled.h3`
  color: #2D3748;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BenefitItem = styled.li`
  color: #4A5568;
  padding: 1rem;
  position: relative;
  line-height: 1.6;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: #F7FAFC;
  }

  &:before {
    content: "";
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #48BB78, #38A169);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    font-weight: bold;
    flex-shrink: 0;
    box-shadow: 0 2px 4px rgba(72, 187, 120, 0.2);
  }

  &:nth-child(1):before {
    content: "1";
  }

  &:nth-child(2):before {
    content: "2";
  }

  &:nth-child(3):before {
    content: "3";
  }

  &:nth-child(4):before {
    content: "4";
  }

  &:nth-child(5):before {
    content: "5";
  }
`;

const BenefitText = styled.span`
  flex: 1;
  font-size: 1rem;
  color: #2D3748;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  perspective: 1000px;
`;

const StepCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px) rotateX(5deg);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #4299E1, #48BB78);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #4299E1, #3182CE);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  font-weight: bold;
  font-size: 1.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  ${StepCard}:hover & {
    transform: scale(1.1);
  }
`;

const StepText = styled.p`
  color: #4A5568;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
  transition: color 0.3s ease;

  ${StepCard}:hover & {
    color: #2D3748;
  }
`;

const ModuleCompletionPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PopupTitle = styled.h2`
  color: #2D3748;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const PopupMessage = styled.p`
  color: #4A5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const PopupButton = styled.button`
  background: #4299E1;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;

  &:hover {
    background: #3182CE;
  }
`;

export default function MentalFun4({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);

  const nextSlide = () => {
    if (currentSlide === 2) {
      localStorage.setItem("mental4_completed", "true");
      localStorage.setItem("training_completed", "true");
      window.dispatchEvent(new Event('storage'));
      setShowCompletionPopup(true);
    } else {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + 4) % 4);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleClosePopup = () => {
    setShowCompletionPopup(false);
    window.location.href = '/dashboard';
  };

  return (
    <LessonContainer>
      <Title>Introdução aos Esportes Caninos</Title>
      
      <CarouselContainer>
        {/* Slide 0: Introdução com Imagem */}
        <Slide active={currentSlide === 0}>
          <SlideTitle>Bem-vindo à Aula!</SlideTitle>
          <ImageContainer>
            <ImagePlaceholder>Imagem ilustrativa de cães praticando esportes</ImagePlaceholder>
          </ImageContainer>
          <IntroductionText>
            Nesta aula, vamos conhecer os principais esportes caninos e como começar a praticá-los com seu cão.
          </IntroductionText>
        </Slide>

        {/* Slide 1: Por que ensinar */}
        <Slide active={currentSlide === 1}>
          <SlideTitle>Por que ensinar?</SlideTitle>
          <SlideContent>
            <Card>
              <CardTitle>Benefícios da Consolidação</CardTitle>
              <BenefitsList>
                <BenefitItem>
                  <BenefitText>Revisão e prática dos conhecimentos adquiridos</BenefitText>
                </BenefitItem>
                <BenefitItem>
                  <BenefitText>Desenvolvimento de habilidades avançadas</BenefitText>
                </BenefitItem>
                <BenefitItem>
                  <BenefitText>Maior confiança e independência do cão</BenefitText>
                </BenefitItem>
                <BenefitItem>
                  <BenefitText>Preparação para novos desafios</BenefitText>
                </BenefitItem>
                <BenefitItem>
                  <BenefitText>Fortalecimento do vínculo e comunicação</BenefitText>
                </BenefitItem>
              </BenefitsList>
            </Card>
          </SlideContent>
        </Slide>

        {/* Slide 2: Passo a Passo */}
        <Slide active={currentSlide === 2}>
          <SlideTitle>Passo a Passo</SlideTitle>
          <SlideContent>
            <StepsGrid>
              <StepCard>
                <StepNumber>1</StepNumber>
                <StepText>Revisão dos exercícios anteriores: Pratique os quebra-cabeças e jogos já aprendidos.</StepText>
              </StepCard>
              <StepCard>
                <StepNumber>2</StepNumber>
                <StepText>Combinação de habilidades: Misture diferentes tipos de exercícios em uma mesma sessão.</StepText>
              </StepCard>
              <StepCard>
                <StepNumber>3</StepNumber>
                <StepText>Aumento da dificuldade: Adicione distrações ou aumente o tempo de espera.</StepText>
              </StepCard>
              <StepCard>
                <StepNumber>4</StepNumber>
                <StepText>Novos desafios: Introduza variações dos exercícios já conhecidos.</StepText>
              </StepCard>
              <StepCard>
                <StepNumber>5</StepNumber>
                <StepText>Prática independente: Incentive o cão a resolver problemas por conta própria.</StepText>
              </StepCard>
            </StepsGrid>
          </SlideContent>
        </Slide>

        {/* Slide 3: Resumo Rápido */}
        <Slide active={currentSlide === 3}>
          <SlideTitle>Resumo Rápido</SlideTitle>
          <SummaryList>
            <SummaryItem>Escolha um esporte que combine com o perfil do seu cão.</SummaryItem>
            <SummaryItem>Comece com treinos básicos e aumente gradualmente a dificuldade.</SummaryItem>
            <SummaryItem>Procure orientação profissional para praticar com segurança.</SummaryItem>
          </SummaryList>
        </Slide>
      </CarouselContainer>

      <NavigationButtons>
        <Button onClick={prevSlide} disabled={currentSlide === 0}>
          Anterior
        </Button>
        <Button onClick={nextSlide}>
          {currentSlide === 2 ? "Concluir" : "Próximo"}
        </Button>
      </NavigationButtons>

      <Dots>
        {[0, 1, 2, 3].map((index) => (
          <Dot
            key={index}
            active={currentSlide === index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Dots>

      {showCompletionPopup && (
        <ModuleCompletionPopup>
          <PopupContent>
            <PopupTitle>Parabéns! 🎉</PopupTitle>
            <PopupMessage>
              Você completou com sucesso o treinamento básico do seu pet! 
              Agora ele está preparado com as habilidades fundamentais para 
              uma vida mais feliz e saudável. Continue praticando e 
              fortalecendo o vínculo com seu amigo de quatro patas!
            </PopupMessage>
            <PopupButton onClick={handleClosePopup}>
              Voltar ao Início
            </PopupButton>
          </PopupContent>
        </ModuleCompletionPopup>
      )}
    </LessonContainer>
  );
} 