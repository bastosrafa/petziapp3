import React, { useState } from "react";
import styled from "styled-components";
import LessonBase from "@/components/LessonBase";

const SlideContent = styled.div`
  padding: 1rem;
`;

const SlideIntro = styled.p`
  font-size: 1.1rem;
  color: #4A5568;
  margin-bottom: 1.5rem;
  text-align: center;
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

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
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

export default function BadHabits1({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Bem-vindo à Aula!",
      content: (
        <SlideContent>
          <ImageContainer>
            <ImagePlaceholder>Imagem ilustrativa de cão com brinquedos apropriados</ImagePlaceholder>
          </ImageContainer>
          <SlideIntro>
            Nesta aula, vamos aprender como redirecionar o comportamento de mordidas e mastigação excessiva para brinquedos adequados.
          </SlideIntro>
        </SlideContent>
      )
    },
    {
      title: "Por que ensinar?",
      content: (
        <SlideContent>
          <StepsGrid>
            <StepItem>
              <StepHeader>
                <StepNumber>1</StepNumber>
                <StepTitle>Comportamento Natural</StepTitle>
              </StepHeader>
              <StepDescription>
                Cães usam a boca como principal ferramenta para explorar o ambiente, sendo um comportamento instintivo e essencial para seu desenvolvimento.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Prevenção de Danos</StepTitle>
              </StepHeader>
              <StepDescription>
                Evitar danos a móveis, roupas e objetos pessoais, além de prevenir acidentes com materiais perigosos que possam ser ingeridos.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Saúde Bucal</StepTitle>
              </StepHeader>
              <StepDescription>
                Promover a saúde bucal através da mastigação de brinquedos apropriados, que ajudam na limpeza dos dentes e no fortalecimento da mandíbula.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Bem-estar Mental</StepTitle>
              </StepHeader>
              <StepDescription>
                Reduzir o estresse e a ansiedade através de comportamentos de mastigação saudáveis, proporcionando uma válvula de escape natural para o cão.
              </StepDescription>
            </StepItem>
          </StepsGrid>
        </SlideContent>
      )
    },
    {
      title: "Métodos de Treinamento",
      content: (
        <SlideContent>
          <StepsGrid>
            <StepItem>
              <StepHeader>
                <StepNumber>1</StepNumber>
                <StepTitle>Brinquedos Apropriados</StepTitle>
              </StepHeader>
              <StepDescription>
                Ofereça brinquedos específicos para mastigação, como ossos de borracha ou brinquedos interativos, que sejam seguros e atrativos para o cão.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Redirecionamento</StepTitle>
              </StepHeader>
              <StepDescription>
                Quando o cão começar a morder algo inadequado, redirecione-o gentilmente para um brinquedo apropriado e recompense-o quando ele aceitar.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Consistência</StepTitle>
              </StepHeader>
              <StepDescription>
                Mantenha uma rotina consistente de oferecer brinquedos apropriados e recompensar o comportamento correto, reforçando positivamente as escolhas certas.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Ambiente Seguro</StepTitle>
              </StepHeader>
              <StepDescription>
                Mantenha objetos valiosos ou perigosos fora do alcance do cão e crie um ambiente onde ele possa explorar e mastigar com segurança.
              </StepDescription>
            </StepItem>
          </StepsGrid>
        </SlideContent>
      )
    }
  ];

  return (
    <LessonBase
      title="Mordidas e Mastigação Excessiva"
      slides={slides}
      currentSlide={currentSlide}
      onNextSlide={() => {
        if (currentSlide === slides.length - 1) {
          localStorage.setItem("badhabits1_completed", "true");
          window.dispatchEvent(new Event('storage'));
          onNextLesson();
        } else {
          setCurrentSlide(prev => (prev + 1) % slides.length);
        }
      }}
      onPrevSlide={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
      onGoToSlide={(index) => setCurrentSlide(index)}
      isLastLesson={false}
    />
  );
} 