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
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const SlideContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 1rem;
  margin-right: -1rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #F7FAFC;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #CBD5E0;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: #A0AEC0;
    }
  }
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

const Card = styled.div`
  background: #F7FAFC;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const CardTitle = styled.h3`
  color: #2D3748;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BenefitItem = styled.li`
  color: #4A5568;
  padding: 1rem;
  position: relative;
  line-height: 1.6;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: #F7FAFC;
  }

  &:before {
    content: "";
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #48BB78, #38A169);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    font-weight: bold;
    flex-shrink: 0;
    box-shadow: 0 2px 4px rgba(72, 187, 120, 0.2);
  }

  &:nth-child(1):before {
    content: "1";
  }

  &:nth-child(2):before {
    content: "2";
  }

  &:nth-child(3):before {
    content: "3";
  }

  &:nth-child(4):before {
    content: "4";
  }

  &:nth-child(5):before {
    content: "5";
  }
`;

const BenefitText = styled.span`
  flex: 1;
  font-size: 1rem;
  color: #2D3748;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  perspective: 1000px;
`;

const StepCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px) rotateX(5deg);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #4299E1, #48BB78);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #4299E1, #3182CE);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  font-weight: bold;
  font-size: 1.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  ${StepCard}:hover & {
    transform: scale(1.1);
  }
`;

const StepText = styled.p`
  color: #4A5568;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
  transition: color 0.3s ease;

  ${StepCard}:hover & {
    color: #2D3748;
  }
`;

export default function MentalFun1({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide === 2) {
      localStorage.setItem("mental1_completed", "true");
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
      <Title>Brinquedos Interativos e Enriquecimento Ambiental</Title>
      
      <CarouselContainer>
        {/* Slide 0: Introdução com Imagem */}
        <Slide active={currentSlide === 0}>
          <SlideTitle>Bem-vindo à Aula!</SlideTitle>
          <ImageContainer>
            <ImagePlaceholder>Imagem ilustrativa de cão brincando com brinquedos interativos</ImagePlaceholder>
          </ImageContainer>
          <IntroductionText>
            Nesta aula, vamos aprender como usar brinquedos interativos e técnicas de enriquecimento ambiental para manter seu cão mentalmente estimulado.
          </IntroductionText>
        </Slide>

        {/* Slide 1: Por que ensinar */}
        <Slide active={currentSlide === 1}>
          <SlideTitle>Por que ensinar?</SlideTitle>
          <SlideContent>
            <Card>
              <CardTitle>Benefícios do Enriquecimento Ambiental</CardTitle>
              <BenefitsList>
                <BenefitItem>
                  <BenefitText>Mantém o cão mentalmente estimulado e ativo</BenefitText>
                </BenefitItem>
                <BenefitItem>
                  <BenefitText>Reduz comportamentos destrutivos e ansiedade</BenefitText>
                </BenefitItem>
                <BenefitItem>
                  <BenefitText>Promove o bem-estar físico e mental</BenefitText>
                </BenefitItem>
                <BenefitItem>
                  <BenefitText>Fortalecimento do vínculo entre tutor e cão</BenefitText>
                </BenefitItem>
                <BenefitItem>
                  <BenefitText>Desenvolvimento de habilidades cognitivas</BenefitText>
                </BenefitItem>
              </BenefitsList>
            </Card>
          </SlideContent>
        </Slide>

        {/* Slide 2: Passo a Passo */}
        <Slide active={currentSlide === 2}>
          <SlideTitle>Passo a Passo</SlideTitle>
          <SlideContent>
            <StepsGrid>
              <StepCard>
                <StepNumber>1</StepNumber>
                <StepText>Escolha brinquedos interativos: Mordedores recheáveis, brinquedos que liberam petiscos e quebra-cabeças para cães são ótimos para estimulação mental.</StepText>
              </StepCard>
              <StepCard>
                <StepNumber>2</StepNumber>
                <StepText>Varie os brinquedos: Alterne os brinquedos para evitar que o cão perca o interesse.</StepText>
              </StepCard>
              <StepCard>
                <StepNumber>3</StepNumber>
                <StepText>Crie desafios: Esconda petiscos pela casa e incentive o cão a encontrá-los.</StepText>
              </StepCard>
              <StepCard>
                <StepNumber>4</StepNumber>
                <StepText>Estimule diferentes sentidos: Use brinquedos de texturas variadas, sons e cheiros para manter o cão engajado.</StepText>
              </StepCard>
              <StepCard>
                <StepNumber>5</StepNumber>
                <StepText>Dê novos desafios semanalmente: Mudar a posição da caminha, trocar os brinquedos e criar novos jogos ajudam o cão a se adaptar e aprender.</StepText>
              </StepCard>
            </StepsGrid>
          </SlideContent>
        </Slide>

        {/* Slide 3: Resumo Rápido */}
        <Slide active={currentSlide === 3}>
          <SlideTitle>Resumo Rápido</SlideTitle>
          <SummaryList>
            <SummaryItem>Ofereça brinquedos interativos e desafios novos.</SummaryItem>
            <SummaryItem>Esconda petiscos para estimular o faro.</SummaryItem>
            <SummaryItem>Mantenha a variedade para evitar tédio.</SummaryItem>
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