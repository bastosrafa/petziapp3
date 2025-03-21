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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.active ? "#007bff" : "#ccc")};
  margin: 0 5px;
  cursor: pointer;
`;

const Socialization2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <LessonContainer>
      <Title>Socialização com Pessoas</Title>
      <CarouselContainer>
        <Slide active={currentSlide === 0}>
          <SlideTitle>Introdução à Socialização com Pessoas</SlideTitle>
          <ContentSection>
            <ContentText>
              A socialização com pessoas é uma parte crucial do desenvolvimento do seu cão.
              Envolve expor seu cão a diferentes tipos de pessoas, incluindo crianças,
              idosos, pessoas com diferentes aparências e pessoas usando diferentes
              acessórios (chapéus, óculos, etc.).
            </ContentText>
          </ContentSection>
        </Slide>

        <Slide active={currentSlide === 1}>
          <SlideTitle>Métodos de Socialização</SlideTitle>
          <ContentSection>
            <ContentText>
              Existem várias maneiras de socializar seu cão com pessoas, incluindo:
              encontros controlados, passeios em locais movimentados, visitas a
              parques e praças, e interações com convidados em casa.
            </ContentText>
          </ContentSection>
        </Slide>

        <Slide active={currentSlide === 2}>
          <SlideTitle>Dicas para Socialização Segura</SlideTitle>
          <ContentSection>
            <ContentText>
              Para garantir uma socialização segura e positiva, é importante:
              começar gradualmente, usar reforço positivo, observar os sinais de
              estresse do seu cão e nunca forçar interações.
            </ContentText>
          </ContentSection>
        </Slide>
      </CarouselContainer>

      <NavigationButtons>
        <Button onClick={prevSlide} disabled={currentSlide === 0}>
          Anterior
        </Button>
        <Button onClick={nextSlide} disabled={currentSlide === 2}>
          Próximo
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
    </LessonContainer>
  );
};

export default Socialization2; 