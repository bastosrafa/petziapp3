import React, { useState } from "react";
import styled from "styled-components";

const LessonContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const CarouselContainer = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SlideTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
`;

const ContentSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  color: #444;
  margin-bottom: 10px;
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
  border-radius: 4px;
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
  gap: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.active ? "#007bff" : "#ccc")};
  cursor: pointer;
`;

export default function Behavior3({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide === 2) {
      onNextLesson();
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

  return (
    <LessonContainer>
      <Title>Andar na Coleira</Title>
      
      <CarouselContainer>
        <Slide active={currentSlide === 0}>
          <SlideTitle>Introdução</SlideTitle>
          <ContentSection>
            <ContentText>
              Bem-vindo à aula sobre como ensinar seu cão a andar corretamente na coleira. 
              Um passeio tranquilo e controlado é essencial para o bem-estar do seu pet.
            </ContentText>
          </ContentSection>
        </Slide>

        <Slide active={currentSlide === 1}>
          <SlideTitle>Como Ensinar</SlideTitle>
          <ContentSection>
            <SectionTitle>Passo a Passo</SectionTitle>
            <ContentText>
              1. Comece em um ambiente calmo e familiar
              2. Mantenha a coleira frouxa, sem tensionar
              3. Recompense quando o cão andar ao seu lado
              4. Use um comando consistente como "Junto"
              5. Pratique mudanças de direção e velocidade
            </ContentText>
          </ContentSection>
        </Slide>

        <Slide active={currentSlide === 2}>
          <SlideTitle>Prática e Dicas</SlideTitle>
          <ContentSection>
            <SectionTitle>Dicas Importantes</SectionTitle>
            <ContentText>
              • Use uma coleira adequada ao tamanho do cão
              • Mantenha as sessões curtas inicialmente
              • Não puxe a coleira
              • Recompense comportamentos desejados
              • Aumente gradualmente as distrações
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
            active={currentSlide === index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Dots>
    </LessonContainer>
  );
} 