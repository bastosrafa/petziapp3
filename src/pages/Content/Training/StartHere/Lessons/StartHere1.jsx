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

const ExerciseSteps = styled.ol`
  list-style-position: inside;
  margin-bottom: 1.5rem;
`;

const ExerciseStep = styled.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  line-height: 1.6;
`;

const SummaryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SummaryItem = styled.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "✓";
    color: #48BB78;
    position: absolute;
    left: 0;
  }
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

const NextLessonButton = styled.button`
  padding: 0.5rem 1rem;
  background: #48BB78;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  margin-left: 1rem;

  &:hover {
    background: #38A169;
  }
`;

export default function StartHere1({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide === 3) {
      onNextLesson();
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

  return (
    <LessonContainer>
      <Title>Como os cães aprendem</Title>
      
      <CarouselContainer>
        {/* Slide 0: Introdução com Imagem */}
        <Slide active={currentSlide === 0}>
          <SlideTitle>Bem-vindo à Aula!</SlideTitle>
          <ImageContainer>
            <ImagePlaceholder>Imagem ilustrativa do tema</ImagePlaceholder>
          </ImageContainer>
          <IntroductionText>
            Nesta aula, vamos explorar os fundamentos do aprendizado canino e como usar o reforço positivo para treinar seu cão de forma eficaz e amorosa.
          </IntroductionText>
        </Slide>

        {/* Slide 1: Conceitos Básicos */}
        <Slide active={currentSlide === 1}>
          <SlideTitle>Conceitos Básicos</SlideTitle>
          <Text>
            Os cães aprendem através de associação e repetição.
          </Text>
          <Text>
            O reforço positivo (dar petiscos, carinho ou elogios quando fazem algo certo) é a forma mais eficaz.
          </Text>
          <Text>
            O reforço negativo e punições não são recomendados, pois podem gerar medo e ansiedade.
          </Text>
        </Slide>

        {/* Slide 2: Exercício Prático */}
        <Slide active={currentSlide === 2}>
          <SlideTitle>Exercício Prático</SlideTitle>
          <ExerciseSteps>
            <ExerciseStep>Pegue um petisco e segure na mão.</ExerciseStep>
            <ExerciseStep>Quando o cão olhar para você ou sentar espontaneamente, recompense imediatamente.</ExerciseStep>
            <ExerciseStep>Repita 5 a 10 vezes para ensinar que prestar atenção no tutor traz benefícios.</ExerciseStep>
          </ExerciseSteps>
        </Slide>

        {/* Slide 3: Resumo Rápido */}
        <Slide active={currentSlide === 3}>
          <SlideTitle>Resumo Rápido</SlideTitle>
          <SummaryList>
            <SummaryItem>Use reforço positivo sempre.</SummaryItem>
            <SummaryItem>Recompense rapidamente o comportamento correto.</SummaryItem>
            <SummaryItem>Evite punições – cães aprendem melhor com estímulos positivos.</SummaryItem>
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
