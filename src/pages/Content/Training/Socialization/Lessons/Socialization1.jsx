import React, { useState } from "react";
import styled from "styled-components";

const LessonContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
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
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
`;

const SlideTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  color: #444;
`;

const ContentSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #555;
`;

const ContentText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 15px;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
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
  background: ${props => props.active === "true" ? '#4299E1' : '#CBD5E0'};
  cursor: pointer;
  transition: background 0.2s;
`;

const Socialization1 = ({ onNextLesson }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide === 2) {
      onNextLesson();
    } else {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <LessonContainer>
      <Title>Introdução à Socialização</Title>
      <CarouselContainer>
        <Slide active={currentSlide === 0}>
          <SlideTitle>O que é Socialização?</SlideTitle>
          <ContentSection>
            <ContentText>
              A socialização é um processo fundamental no desenvolvimento do seu cão,
              que o ajuda a se adaptar e interagir de forma positiva com diferentes
              pessoas, animais e situações do ambiente.
            </ContentText>
          </ContentSection>
        </Slide>

        <Slide active={currentSlide === 1}>
          <SlideTitle>Por que a Socialização é Importante?</SlideTitle>
          <ContentSection>
            <ContentText>
              Uma boa socialização ajuda a prevenir problemas de comportamento,
              reduz a ansiedade e o medo, e contribui para um cão mais confiante
              e equilibrado.
            </ContentText>
          </ContentSection>
        </Slide>

        <Slide active={currentSlide === 2}>
          <SlideTitle>Período Crítico de Socialização</SlideTitle>
          <ContentSection>
            <ContentText>
              O período mais importante para a socialização é entre 3 e 16 semanas
              de idade. Durante este período, o cão está mais receptivo a novas
              experiências e forma suas primeiras impressões do mundo.
            </ContentText>
          </ContentSection>
        </Slide>
      </CarouselContainer>

      <NavigationButtons>
        <Button onClick={prevSlide} disabled={currentSlide === 0}>
          Anterior
        </Button>
        <Button onClick={nextSlide}>
          {currentSlide === 2 ? "Próxima Aula" : "Próximo"}
        </Button>
      </NavigationButtons>

      <Dots>
        {[0, 1, 2].map((index) => (
          <Dot
            key={index}
            active={currentSlide === index ? "true" : "false"}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Dots>
    </LessonContainer>
  );
};

export default Socialization1; 