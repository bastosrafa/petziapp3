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
  opacity: ${props => props.active === "true" ? 1 : 0};
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

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const BulletItem = styled.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "🔹";
    position: absolute;
    left: 0;
  }
`;

const WarningList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const WarningItem = styled.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "🚫";
    position: absolute;
    left: 0;
  }
`;

const ExampleList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const ExampleItem = styled.li`
  color: #4A5568;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &:before {
    content: "🔹";
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

export default function StartHere2({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide === 3) {
      localStorage.setItem("starthere2_completed", "true");
      window.dispatchEvent(new Event('storage'));
      onNextLesson();
    } else {
      setCurrentSlide((prev) => (prev + 1) % 4);
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
      <Title>Comunicação eficaz com o cão</Title>
      
      <CarouselContainer>
        {/* Slide 0: Introdução com Imagem */}
        <Slide active={(currentSlide === 0).toString()}>
          <SlideTitle>Bem-vindo à Aula!</SlideTitle>
          <ImageContainer>
            <ImagePlaceholder>Imagem ilustrativa da comunicação com cães</ImagePlaceholder>
          </ImageContainer>
          <IntroductionText>
            Nesta aula, vamos aprender como se comunicar efetivamente com seu cão através do tom de voz e da linguagem corporal.
          </IntroductionText>
        </Slide>

        {/* Slide 1: Como os Cães Interpretam o Mundo */}
        <Slide active={(currentSlide === 1).toString()}>
          <SlideTitle>Como os Cães Interpretam o Mundo?</SlideTitle>
          <Text>
            Os cães não entendem palavras como os humanos, mas associam sons, gestos e expressões faciais ao que acontece em seguida.
          </Text>
          <BulletList>
            <BulletItem>Tom de voz: Indica emoções e intenções.</BulletItem>
            <BulletItem>Linguagem corporal: Reforça ou contradiz o que estamos pedindo.</BulletItem>
            <BulletItem>Expressões faciais: Os cães percebem mudanças sutis no rosto do tutor.</BulletItem>
          </BulletList>
        </Slide>

        {/* Slide 2: Como Usar o Tom de Voz Corretamente */}
        <Slide active={(currentSlide === 2).toString()}>
          <SlideTitle>Como Usar o Tom de Voz Corretamente?</SlideTitle>
          <BulletList>
            <BulletItem>Tom neutro e firme (comandos de obediência) → Para comandos como "Senta", "Deita", "Fica".</BulletItem>
            <BulletItem>Tom animado e motivacional (reforço positivo) → Para elogios, ex: "Muito bem!" ou "Bom garoto!".</BulletItem>
            <BulletItem>Tom grave e firme (correção de comportamento) → Para redirecionar um mau comportamento sem assustar ("Não mordisca", "Ei, calma").</BulletItem>
          </BulletList>
          <Text>O que NÃO fazer:</Text>
          <WarningList>
            <WarningItem>Falar muito alto ou de forma agressiva → O cão pode ficar assustado.</WarningItem>
            <WarningItem>Usar tom agudo para repreender → Soa como brincadeira e pode confundir o pet.</WarningItem>
          </WarningList>
        </Slide>

        {/* Slide 3: Exemplo Prático */}
        <Slide active={(currentSlide === 3).toString()}>
          <SlideTitle>Exemplo Prático</SlideTitle>
          <ExampleList>
            <ExampleItem>Diga "Senta" com um tom firme e neutro.</ExampleItem>
            <ExampleItem>Se ele acertar, elogie com um tom animado e feliz: "Isso, muito bem!"</ExampleItem>
            <ExampleItem>Se ele errar, use um "Ei!" em tom firme e neutro, sem gritar.</ExampleItem>
          </ExampleList>
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
