import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ModuleCompletionPopup from "../../../../../components/ModuleCompletionPopup";

const LessonContainer = styled.div`
  padding: 20px;
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

const ContentSection = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  color: #2D3748;
  margin-bottom: 0.75rem;
`;

const ContentText = styled.p`
  color: #4A5568;
  line-height: 1.6;
`;

export default function StartHere5({ onNextLesson, onBack }) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const LESSON_NAME = "Introdução ao Clicker ou Recompensas";

  const nextSlide = () => {
    if (currentSlide === 2) {
      localStorage.setItem("starthere5_completed", "true");
      setShowPopup(true);
    } else {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + 3) % 3);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleNextModule = () => {
    // Desbloqueia a primeira aula do módulo de comportamento
    localStorage.setItem("behavior1_unlocked", "true");
    
    // Desbloqueia o módulo na página de adestramento
    localStorage.setItem("behavior_unlocked", "true");
    
    // Navega para a primeira aula do módulo de comportamento
    navigate("/content/training/behavior");
  };

  return (
    <LessonContainer>
      <Title>{LESSON_NAME}</Title>
      
      <CarouselContainer>
        <Slide active={(currentSlide === 0).toString()}>
          <SlideTitle>Preparação do Ambiente</SlideTitle>
          <ContentSection>
            <ContentText>
              Um ambiente adequado é fundamental para o sucesso do treinamento. 
              Vamos aprender como criar o local ideal para treinar seu cão.
            </ContentText>
          </ContentSection>
        </Slide>

        <Slide active={(currentSlide === 1).toString()}>
          <SlideTitle>Elementos Essenciais</SlideTitle>
          <ContentSection>
            <SectionTitle>O que você precisa:</SectionTitle>
            <ContentText>
              • Local silencioso e sem distrações
              • Petiscos de alto valor
              • Brinquedos interativos
              • Guia e coleira
              • Tapete ou cama para descanso
            </ContentText>
          </ContentSection>
        </Slide>

        <Slide active={(currentSlide === 2).toString()}>
          <SlideTitle>Organização do Espaço</SlideTitle>
          <ContentSection>
            <SectionTitle>Dicas de Organização</SectionTitle>
            <ContentText>
              • Mantenha o espaço limpo e organizado
              • Tenha todos os materiais à mão
              • Crie uma área de descanso
              • Evite objetos que possam distrair
              • Mantenha uma temperatura agradável
            </ContentText>
          </ContentSection>
        </Slide>
      </CarouselContainer>

      <NavigationButtons>
        <Button onClick={onBack}>Voltar</Button>
        <Button onClick={nextSlide}>
          {currentSlide === 2 ? "Concluir Aula" : "Próximo"}
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

      {showPopup && (
        <ModuleCompletionPopup
          onClose={handleClosePopup}
          onNextModule={handleNextModule}
        />
      )}
    </LessonContainer>
  );
} 