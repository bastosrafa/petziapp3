import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import ModuleCompletionPopup from "@/components/ModuleCompletionPopup";
import behavior4Image from '@/assets/images/training/behavior4.png';

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
  height: 600px;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  pointer-events: ${props => props.active ? 'auto' : 'none'};
  z-index: ${props => props.active ? 1 : 0};
`;

const SlideContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2.5rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;
  pointer-events: auto;
  position: relative;
  z-index: 1;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #F7FAFC;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #4299E1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #3182CE;
  }
`;

const SlideTitle = styled.h2`
  font-size: 1.8rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`;

const ContentText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

const ExerciseSteps = styled.ol`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ExerciseStep = styled.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #F0FFF4;
  border-radius: 8px;
  border-left: 4px solid #48BB78;
  transition: all 0.2s ease;

  &:hover {
    background: #E6FFED;
    transform: translateX(4px);
  }

  &:before {
    content: attr(data-step);
    color: #48BB78;
    font-weight: bold;
    font-size: 1.2rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
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

const BulletList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BulletItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #F0FFF4;
  border-radius: 8px;
  border-left: 4px solid #48BB78;
  transition: all 0.2s ease;

  &:hover {
    background: #E6FFED;
    transform: translateX(4px);
  }

  &:before {
    content: "•";
    color: #48BB78;
    font-weight: bold;
    font-size: 1.2rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Behavior4({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();
  const navigate = useNavigate();

  const slides = [
    {
      title: "Comandos Não e Quieto",
      subtitle: "Limites e controle comportamental",
      content: (
        <div>
          <Image src={behavior4Image} alt="Comandos Não e Quieto" />
          <ContentText>
            Os comandos "Não" e "Quieto" são fundamentais para corrigir comportamentos indesejados e manter o controle em situações específicas.
          </ContentText>
          <BulletList>
            <BulletItem>
              <strong>Correção imediata</strong>
              <ContentText>Interrompe comportamentos indesejados no momento.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Controle em situações específicas</strong>
              <ContentText>Mantém o cão calmo e controlado quando necessário.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Comunicação clara</strong>
              <ContentText>Estabelece limites de forma efetiva e consistente.</ContentText>
            </BulletItem>
          </BulletList>
        </div>
      )
    },
    {
      title: "Como Ensinar",
      content: (
        <div>
          <ExerciseSteps>
            <ExerciseStep data-step="1">
              <strong>Comece com o comando "Não"</strong>
              <ContentText>Use um tom firme e consistente para interromper comportamentos indesejados.</ContentText>
            </ExerciseStep>
            <ExerciseStep data-step="2">
              <strong>Introduza o comando "Quieto"</strong>
              <ContentText>Ensine o cão a se acalmar e permanecer tranquilo.</ContentText>
            </ExerciseStep>
            <ExerciseStep data-step="3">
              <strong>Pratique em diferentes situações</strong>
              <ContentText>Use os comandos em contextos variados para reforçar o aprendizado.</ContentText>
            </ExerciseStep>
            <ExerciseStep data-step="4">
              <strong>Recompense o comportamento correto</strong>
              <ContentText>Elogie e recompense quando o cão obedecer aos comandos.</ContentText>
            </ExerciseStep>
          </ExerciseSteps>
          <BulletList>
            <BulletItem>
              <strong>Dica importante</strong>
              <ContentText>Use gestos consistentes junto com os comandos verbais.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Evite erros comuns</strong>
              <ContentText>Não use os comandos de forma excessiva ou sem necessidade.</ContentText>
            </BulletItem>
          </BulletList>
        </div>
      )
    },
    {
      title: "Dicas Importantes",
      content: (
        <div>
          <BulletList>
            <BulletItem>
              <strong>Seja consistente</strong>
              <ContentText>Use sempre os mesmos comandos e gestos.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Pratique em momentos calmos</strong>
              <ContentText>Comece o treino quando o cão estiver tranquilo.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Aumente as distrações gradualmente</strong>
              <ContentText>Comece em ambiente controlado e aumente as distrações aos poucos.</ContentText>
            </BulletItem>
          </BulletList>
          <BulletList>
            <BulletItem>
              <strong>Não use punição física</strong>
              <ContentText>Use reforço positivo e redirecionamento.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Mantenha as sessões curtas</strong>
              <ContentText>Treinos de 5-10 minutos são mais eficazes.</ContentText>
            </BulletItem>
          </BulletList>
        </div>
      )
    },
    {
      title: "Exemplo Prático",
      content: (
        <div>
          <ContentText>Pratique os comandos em diferentes situações:</ContentText>
          <BulletList>
            <BulletItem>
              <strong>Durante os passeios</strong>
              <ContentText>Use "Não" para interromper latidos excessivos e "Quieto" para acalmar.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Em casa</strong>
              <ContentText>Use os comandos para controlar comportamentos indesejados.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Com visitas</strong>
              <ContentText>Mantenha o cão calmo e controlado na presença de outras pessoas.</ContentText>
            </BulletItem>
          </BulletList>
          <BulletList>
            <BulletItem>
              <strong>Frequência de treino</strong>
              <ContentText>Pratique 3-5 vezes por dia, em sessões curtas.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Progressão</strong>
              <ContentText>Aumente gradualmente o nível de distração.</ContentText>
            </BulletItem>
          </BulletList>
        </div>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      try {
        // Save to localStorage first
        localStorage.setItem("behavior4_completed", "true");
        
        // Save progress to Firestore
        await addProgress({
          userId: user.uid,
            lessonId: "behavior4",
            moduleId: "behavior",
          completedAt: Timestamp.now(),
          progress: 100
        });

        // Update training progress
        await updateTraining({
          completedLessons: 1,
          currentLevel: 'beginner',
              lastSession: new Date(),
          totalTime: 5
        });
            
        // Refresh data
        await refreshData();
            
            console.log("Progresso da lição Behavior4 salvo com sucesso");
        onNextLesson();
      } catch (error) {
        console.error("Erro ao salvar progresso:", error);
      }
    }
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <LessonContainer>
      <Title>Comandos Não e Quieto</Title>
      <CarouselContainer>
        {slides.map((slide, index) => (
          <Slide key={index} active={currentSlide === index}>
            <SlideContent>
              {slide.subtitle && <SlideTitle>{slide.subtitle}</SlideTitle>}
              {slide.content}
            </SlideContent>
          </Slide>
        ))}
        <NavigationButtons>
          <Button onClick={prevSlide} disabled={currentSlide === 0}>
            Anterior
          </Button>
          <Dots>
            {slides.map((_, index) => (
              <Dot
                key={index}
                active={currentSlide === index}
                onClick={() => goToSlide(index)}
              />
            ))}
          </Dots>
          <Button onClick={nextSlide}>
            {currentSlide === slides.length - 1 ? "Concluir" : "Próximo"}
          </Button>
        </NavigationButtons>
      </CarouselContainer>
    </LessonContainer>
  );
} 