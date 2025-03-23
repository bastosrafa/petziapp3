import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ModuleCompletionPopup from "../../../../../components/ModuleCompletionPopup";

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

export default function StartHere5({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (currentSlide === 2) {
      setShowPopup(true);
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + 3) % 3);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleNextModule = () => {
    // Aqui você pode adicionar a lógica para desbloquear a primeira aula do módulo Behavior
    // Por exemplo, atualizar o estado global ou localStorage
    localStorage.setItem("behavior1_unlocked", "true");
    navigate("/content/training/behavior");
  };

  return (
    <LessonContainer>
      <Title>Introdução ao Clicker ou Recompensas</Title>
      
      <CarouselContainer>
        {/* Slide 0: Introdução com Imagem */}
        <Slide active={currentSlide === 0}>
          <SlideTitle>Bem-vindo à Aula!</SlideTitle>
          <ImageContainer>
            <ImagePlaceholder>Imagem ilustrativa do uso do clicker</ImagePlaceholder>
          </ImageContainer>
          <IntroductionText>
            Nesta aula, vamos aprender como usar o clicker ou recompensas verbais para treinar seu cão de forma mais eficiente.
          </IntroductionText>
        </Slide>

        {/* Slide 1: Como Funciona e Passo a Passo */}
        <Slide active={currentSlide === 1}>
          <SlideTitle>Como Funciona?</SlideTitle>
          <Text>
            O clicker é um dispositivo que faz um "click" para marcar o comportamento certo.
            Sempre que o cão faz algo correto, clique e recompense.
          </Text>
          <StepList>
            <StepItem>Dê um petisco e clique ao mesmo tempo.</StepItem>
            <StepItem>Repita 10x para que o cão associe o "click" à recompensa.</StepItem>
            <StepItem>Use o clicker sempre que o cão acertar um comando.</StepItem>
          </StepList>
        </Slide>

        {/* Slide 2: Resumo Rápido */}
        <Slide active={currentSlide === 2}>
          <SlideTitle>Resumo Rápido</SlideTitle>
          <SummaryList>
            <SummaryItem>O clicker ajuda o cão a aprender mais rápido.</SummaryItem>
            <SummaryItem>Sempre associe o clique a algo positivo.</SummaryItem>
            <SummaryItem>Se não tiver um clicker, use "sim!" ou "muito bem!" com entusiasmo.</SummaryItem>
          </SummaryList>
        </Slide>
      </CarouselContainer>

      <NavigationButtons>
        <Button onClick={prevSlide} disabled={currentSlide === 0}>
          Anterior
        </Button>
        <Button onClick={nextSlide}>
          {currentSlide === 2 ? "Concluir Aula" : "Próximo"}
        </Button>
      </NavigationButtons>

      <Dots>
        {[0, 1, 2].map((index) => (
          <Dot
            key={index}
            active={currentSlide === index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Dots>

      {showPopup && (
        <ModuleCompletionPopup
          onClose={handleClosePopup}
          onNextModule={handleNextModule}
        />
      )}
    </LessonContainer>
  );
} 