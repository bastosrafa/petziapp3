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

export default function BadHabits2({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Bem-vindo à Aula!",
      content: (
        <SlideContent>
          <ImageContainer>
            <ImagePlaceholder>Imagem ilustrativa de cão esperando pacientemente durante refeição</ImagePlaceholder>
          </ImageContainer>
          <SlideIntro>
            Nesta aula, vamos aprender como ensinar seu cão a não roubar comida da mesa e a esperar pacientemente durante as refeições.
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
                <StepTitle>Segurança Alimentar</StepTitle>
              </StepHeader>
              <StepDescription>
                Prevenir o acesso a alimentos perigosos ou tóxicos para cães, como chocolate, cebola e uvas, que podem causar sérios problemas de saúde.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Comportamento Social</StepTitle>
              </StepHeader>
              <StepDescription>
                Evitar situações constrangedoras durante visitas ou refeições em família, mantendo um ambiente harmonioso e seguro para todos.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Saúde Digestiva</StepTitle>
              </StepHeader>
              <StepDescription>
                Prevenir problemas digestivos causados por alimentos inadequados ou em excesso, mantendo uma dieta balanceada e controlada.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Limites e Respeito</StepTitle>
              </StepHeader>
              <StepDescription>
                Estabelecer limites claros de comportamento, ensinando o cão a respeitar o espaço e os momentos das refeições da família.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>5</StepNumber>
                <StepTitle>Bem-estar Geral</StepTitle>
              </StepHeader>
              <StepDescription>
                Promover um ambiente mais tranquilo e organizado, reduzindo o estresse tanto para o cão quanto para os membros da família.
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
                <StepTitle>Local de Descanso</StepTitle>
              </StepHeader>
              <StepDescription>
                Ensine seu cão a ficar em um tapete ou cama específica durante as refeições. Este local deve ser confortável e estar a uma distância segura da mesa.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Comandos de Controle</StepTitle>
              </StepHeader>
              <StepDescription>
                Use comandos claros como "Fica" ou "Espera" para manter o cão no lugar. Pratique estes comandos em diferentes situações para reforçar o comportamento.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Reforço Positivo</StepTitle>
              </StepHeader>
              <StepDescription>
                Recompense o cão com petiscos e elogios quando ele permanecer no local designado. O timing da recompensa é crucial para o aprendizado.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Ignorar Comportamentos Indesejados</StepTitle>
              </StepHeader>
              <StepDescription>
                Não dê atenção quando o cão tentar roubar comida. Ignorar completamente o comportamento indesejado ajuda a extinguir este hábito.
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>5</StepNumber>
                <StepTitle>Consistência na Família</StepTitle>
              </StepHeader>
              <StepDescription>
                Todos na casa devem seguir as mesmas regras e comandos. A consistência é fundamental para o sucesso do treinamento.
              </StepDescription>
            </StepItem>
          </StepsGrid>
        </SlideContent>
      )
    }
  ];

  return (
    <LessonBase
      title="Evitar Roubo de Comida da Mesa"
      slides={slides}
      currentSlide={currentSlide}
      onNextSlide={() => {
        if (currentSlide === slides.length - 1) {
          localStorage.setItem("badhabits2_completed", "true");
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