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

export default function BadHabits2({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide === 2) {
      localStorage.setItem("badhabits2_completed", "true");
      // Força a atualização do estado
      window.dispatchEvent(new Event('storage'));
      onNextLesson();
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

  return (
    <LessonContainer>
      <Title>Evitar Roubo de Comida da Mesa</Title>
      
      <CarouselContainer>
        {/* Slide 0: Introdução com Imagem */}
        <Slide active={currentSlide === 0}>
          <SlideTitle>Bem-vindo à Aula!</SlideTitle>
          <ImageContainer>
            <ImagePlaceholder>Imagem ilustrativa de cão aprendendo a não pegar comida da mesa</ImagePlaceholder>
          </ImageContainer>
          <IntroductionText>
            Nesta aula, vamos aprender como evitar que seu cão roube comida da mesa e desenvolva comportamentos oportunistas.
          </IntroductionText>
        </Slide>

        {/* Slide 1: Por que ensinar */}
        <Slide active={currentSlide === 1}>
          <SlideTitle>Por que ensinar?</SlideTitle>
          <Text>
            Se o cão rouba comida da mesa, ele pode desenvolver comportamentos oportunistas, além de correr o risco de ingerir alimentos perigosos.
          </Text>
        </Slide>

        {/* Slide 2: Passo a Passo */}
        <Slide active={currentSlide === 2}>
          <SlideTitle>Passo a Passo</SlideTitle>
          <StepList>
            <StepItem>Nunca deixe comida acessível: Guarde alimentos em locais fora do alcance do cão.</StepItem>
            <StepItem>Ensine o comando "Não": Quando o cão tentar pegar algo da mesa, diga "Não!" e o afaste.</StepItem>
            <StepItem>Reforce comportamentos alternativos: Antes das refeições, peça para ele sentar ou deitar e só recompense quando estiver calmo.</StepItem>
            <StepItem>Evite recompensas acidentais: Não ofereça restos de comida da mesa para o cão, pois ele aprenderá que pode conseguir comida se insistir.</StepItem>
            <StepItem>Pratique autocontrole: Coloque um petisco no chão e ensine o cão a só pegá-lo quando você permitir.</StepItem>
          </StepList>
        </Slide>

        {/* Slide 3: Resumo Rápido */}
        <Slide active={currentSlide === 3}>
          <SlideTitle>Resumo Rápido</SlideTitle>
          <SummaryList>
            <SummaryItem>Mantenha a comida fora do alcance do cão.</SummaryItem>
            <SummaryItem>Reforce comandos como "Não" e "Senta".</SummaryItem>
            <SummaryItem>Nunca ofereça comida da mesa para evitar reforço acidental.</SummaryItem>
          </SummaryList>
        </Slide>
      </CarouselContainer>

      <NavigationButtons>
        <Button onClick={prevSlide} disabled={currentSlide === 0}>
          Anterior
        </Button>
        <Button onClick={nextSlide}>
          {currentSlide === 3 ? "Próxima Aula" : "Próximo"}
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
    </LessonContainer>
  );
} 