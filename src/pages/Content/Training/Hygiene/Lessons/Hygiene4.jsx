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
  visibility: ${props => props.active ? 'visible' : 'hidden'};
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

export default function Hygiene4({ onNextLesson }) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const nextSlide = () => {
    if (currentSlide === 3) {
      setShowPopup(true);
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + 4) % 4);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleNextModule = () => {
    // Desbloqueia a primeira aula do módulo de maus hábitos
    localStorage.setItem("badhabits1_unlocked", "true");
    
    // Desbloqueia o módulo na página de adestramento
    localStorage.setItem("badhabits_unlocked", "true");
    
    // Desbloqueia o módulo na página de adestramento geral
    localStorage.setItem("startHere", "true");
    localStorage.setItem("badhabits_unlocked", "true");
    
    // Navega para a primeira aula do módulo de maus hábitos
    navigate("/content/training/badhabits");
  };

  return (
    <LessonContainer>
      <Title>Evitando Destruição de Móveis</Title>
      
      <CarouselContainer>
        {/* Slide 0: Introdução com Imagem */}
        <Slide active={currentSlide === 0}>
          <SlideTitle>Bem-vindo à Aula!</SlideTitle>
          <ImageContainer>
            <ImagePlaceholder>Imagem ilustrativa de cão com brinquedos apropriados</ImagePlaceholder>
          </ImageContainer>
          <IntroductionText>
            Nesta aula, vamos aprender como evitar que seu cão destrua móveis e objetos, oferecendo alternativas adequadas.
          </IntroductionText>
        </Slide>

        {/* Slide 1: Por que ensinar */}
        <Slide active={currentSlide === 1}>
          <SlideTitle>Por que ensinar?</SlideTitle>
          <Text>
            Cães que roem móveis ou destroem objetos geralmente estão:
          </Text>
          <SummaryList>
            <SummaryItem>Entediados por falta de atividade</SummaryItem>
            <SummaryItem>Ansiosos por alguma situação</SummaryItem>
            <SummaryItem>Sem alternativas adequadas para morder</SummaryItem>
          </SummaryList>
        </Slide>

        {/* Slide 2: Passo a Passo */}
        <Slide active={currentSlide === 2}>
          <SlideTitle>Passo a Passo</SlideTitle>
          <StepList>
            <StepItem>Ofereça brinquedos próprios para morder: Como mordedores de borracha ou ossos naturais.</StepItem>
            <StepItem>Use reforço positivo: Sempre que o cão morder o brinquedo correto, elogie e recompense.</StepItem>
            <StepItem>Evite reforçar o comportamento errado: Se o cão pegar algo proibido, substitua imediatamente por um brinquedo adequado.</StepItem>
            <StepItem>Sprays anti-mordida podem ajudar: Alguns cães respondem bem a substâncias de gosto amargo aplicadas nos móveis.</StepItem>
            <StepItem>Aumente a atividade física e mental: Passeios diários e brinquedos interativos reduzem o tédio e a ansiedade.</StepItem>
          </StepList>
        </Slide>

        {/* Slide 3: Resumo Rápido */}
        <Slide active={currentSlide === 3}>
          <SlideTitle>Resumo Rápido</SlideTitle>
          <SummaryList>
            <SummaryItem>Ofereça alternativas seguras para morder.</SummaryItem>
            <SummaryItem>Recompense sempre que o cão escolher o brinquedo certo.</SummaryItem>
            <SummaryItem>Aumente os estímulos físicos e mentais para evitar tédio.</SummaryItem>
          </SummaryList>
        </Slide>
      </CarouselContainer>

      <NavigationButtons>
        <Button onClick={prevSlide} disabled={currentSlide === 0}>
          Anterior
        </Button>
        <Button onClick={nextSlide}>
          {currentSlide === 3 ? "Concluir Aula" : "Próximo"}
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

      {showPopup && (
        <ModuleCompletionPopup
          onClose={handleClosePopup}
          onNextModule={handleNextModule}
        />
      )}
    </LessonContainer>
  );
} 