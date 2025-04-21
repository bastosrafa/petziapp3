import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import ModuleCompletionPopup from "@/components/ModuleCompletionPopup";
import badhabits4Image from "@/assets/images/training/badhabits4.png";

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
  height: 500px;
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
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #F7FAFC;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #4299E1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #3182CE;
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

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
  padding-bottom: 2rem;
`;

const StepItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const StepNumber = styled.div`
  background: #4299E1;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
`;

const StepTitle = styled.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
  font-weight: 600;
`;

const StepDescription = styled.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
  font-size: 0.95rem;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
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

const SlideImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const IntroductionText = styled.p`
  color: #4A5568;
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
`;

export default function BadHabits4({ onNextLesson }) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining } = useDashboard();

  const nextSlide = async () => {
    if (currentSlide === 2) {
      localStorage.setItem("badhabits4_completed", "true");
      window.dispatchEvent(new Event('storage'));
      setShowPopup(true);
      onNextLesson();
    } else {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < 3) {
      setCurrentSlide(index);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleNextModule = async () => {
    localStorage.setItem("mental1_unlocked", "true");
    localStorage.setItem("mental_unlocked", "true");
    localStorage.setItem("startHere", "true");
    localStorage.setItem("isContentLocked", "false");
    
    if (user) {
      try {
        await addProgress({
          userId: user.uid,
          moduleId: 'badhabits',
          lessonId: 'badhabits4',
          completedAt: Timestamp.now(),
          progress: 100
        });

        updateTraining({
          completedLessons: 24,
          currentLevel: 'intermediate',
          lastSession: new Date(),
          totalTime: 300,
          unlockedModules: ['startHere', 'badhabits', 'mental']
        });
      } catch (error) {
        console.error('Error updating progress:', error);
      }
    }
    
    window.dispatchEvent(new Event('storage'));
    navigate("/content/training/mental");
  };

  return (
    <LessonContainer>
      <Title>Evitar que o Cão Puxe na Coleira</Title>
      
      <CarouselContainer>
        {/* Slide 0: Introdução com Imagem */}
        <Slide active={currentSlide === 0}>
          <SlideTitle>Bem-vindo à Aula!</SlideTitle>
          <ImageContainer>
            <SlideImage src={badhabits4Image} alt="Cão andando calmamente na coleira" />
          </ImageContainer>
          <IntroductionText>
            Nesta aula, vamos aprender como ensinar seu cão a não puxar na coleira durante os passeios, tornando as caminhadas mais agradáveis para ambos.
          </IntroductionText>
        </Slide>

        {/* Slide 1: Por que ensinar */}
        <Slide active={currentSlide === 1}>
          <SlideTitle>Por que ensinar?</SlideTitle>
          <Text>
            Ensinar seu cão a não puxar na coleira é fundamental para passeios seguros e agradáveis. Este comportamento pode causar desconforto e até mesmo lesões, tanto para o cão quanto para o tutor.
          </Text>
          <StepsGrid>
            <StepItem>
              <StepHeader>
                <StepNumber>1</StepNumber>
                <StepTitle>Segurança</StepTitle>
              </StepHeader>
              <StepDescription>
                Previne acidentes e lesões, tanto para o cão quanto para o tutor.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Controle</StepTitle>
              </StepHeader>
              <StepDescription>
                Permite passeios mais tranquilos e controlados em qualquer ambiente.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Bem-estar</StepTitle>
              </StepHeader>
              <StepDescription>
                Reduz o estresse e a ansiedade durante os passeios.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Socialização</StepTitle>
              </StepHeader>
              <StepDescription>
                Facilita a interação com outros cães e pessoas durante os passeios.
              </StepDescription>
            </StepItem>
          </StepsGrid>
        </Slide>

        {/* Slide 2: Passo a Passo */}
        <Slide active={currentSlide === 2}>
          <SlideTitle>Passo a Passo</SlideTitle>
          <StepsGrid>
            <StepItem>
              <StepHeader>
                <StepNumber>1</StepNumber>
                <StepTitle>Pare quando o cão puxar</StepTitle>
              </StepHeader>
              <StepDescription>
                Pare imediatamente quando sentir a tensão na coleira e só continue quando o cão relaxar.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Recompense o comportamento correto</StepTitle>
              </StepHeader>
              <StepDescription>
                Dê petiscos e elogios quando o cão andar ao seu lado sem puxar.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Use equipamentos adequados</StepTitle>
              </StepHeader>
              <StepDescription>
                Coleiras peitorais ou peitorais anti-puxão podem ajudar no treinamento.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Mantenha a consistência</StepTitle>
              </StepHeader>
              <StepDescription>
                Treine regularmente e siga sempre o mesmo método.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>5</StepNumber>
                <StepTitle>Seja paciente</StepTitle>
              </StepHeader>
              <StepDescription>
                O treinamento pode levar tempo, mas os resultados valem a pena.
              </StepDescription>
            </StepItem>
          </StepsGrid>
        </Slide>
      </CarouselContainer>

      <NavigationButtons>
        <Button onClick={prevSlide} disabled={currentSlide === 0}>
          Anterior
        </Button>
        <Dots>
          {[0, 1, 2].map((index) => (
            <Dot
              key={index}
              active={currentSlide === index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </Dots>
        <Button onClick={nextSlide}>
          {currentSlide === 2 ? "Próxima Aula" : "Próximo"}
        </Button>
      </NavigationButtons>

      {showPopup && (
        <ModuleCompletionPopup
          onClose={handleClosePopup}
          onNextModule={handleNextModule}
        />
      )}
    </LessonContainer>
  );
} 