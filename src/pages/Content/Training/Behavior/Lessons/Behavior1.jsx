import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import ModuleCompletionPopup from "@/components/ModuleCompletionPopup";
import behavior1Image from '@/assets/images/training/behavior1.png';

const LessonContainer = styled.div`
  padding: 2rem 1rem 3.5rem 1rem;
  max-width: 800px;
  margin: 2rem auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  pointer-events: ${props => props.active ? 'auto' : 'none'};
  margin: 0;
  max-width: none;
`;

const SlideContent = styled.div`
  flex: 1;
  overflow-y: auto;
  max-width: 430px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
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
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

export default function Behavior1({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const slides = [
    {
      title: "Comando Sentar",
      subtitle: "Primeiro passo do adestramento",
      content: (
        <div>
          <Image src={behavior1Image} alt="Comando Sentar" />
          <ContentText>
            O comando "Sentar" é um dos comandos mais importantes e fundamentais no adestramento canino. 
            Ele serve como base para outros comandos e ajuda a estabelecer uma comunicação clara com seu cão.
          </ContentText>
          <BulletList>
            <BulletItem>
              <strong>Base para outros comandos</strong>
              <ContentText>É o primeiro passo para ensinar comandos mais complexos como "Deitar" e "Ficar".</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Controle em situações cotidianas</strong>
              <ContentText>Ajuda a manter o cão calmo em diversas situações do dia a dia.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Fortalecimento do vínculo</strong>
              <ContentText>Melhora a comunicação e o relacionamento entre você e seu cão.</ContentText>
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
              <strong>Posicione o petisco</strong>
              <ContentText>Segure um petisco próximo ao nariz do cão e mova-o lentamente para cima e para trás, sobre a cabeça dele.</ContentText>
            </ExerciseStep>
            <ExerciseStep data-step="2">
              <strong>Espere a resposta natural</strong>
              <ContentText>O cão naturalmente sentará para acompanhar o movimento do petisco com o olhar.</ContentText>
            </ExerciseStep>
            <ExerciseStep data-step="3">
              <strong>Recompense imediatamente</strong>
              <ContentText>Assim que o cão sentar, dê o petisco e elogie com entusiasmo.</ContentText>
            </ExerciseStep>
            <ExerciseStep data-step="4">
              <strong>Adicione o comando verbal</strong>
              <ContentText>Diga "Senta" no momento exato em que o cão estiver se sentando.</ContentText>
            </ExerciseStep>
          </ExerciseSteps>
          <BulletList>
            <BulletItem>
              <strong>Dica importante</strong>
              <ContentText>Use petiscos de alto valor para motivar o cão durante o treino.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Evite erros comuns</strong>
              <ContentText>Não force o cão a sentar fisicamente, deixe-o aprender naturalmente.</ContentText>
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
              <strong>Consistência é fundamental</strong>
              <ContentText>Use sempre o mesmo comando verbal e gesto para não confundir o cão.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Treine em diferentes ambientes</strong>
              <ContentText>Pratique em casa, no quintal e em locais com distrações controladas.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Mantenha as sessões curtas</strong>
              <ContentText>Treinos de 5-10 minutos são mais eficazes que sessões longas.</ContentText>
            </BulletItem>
          </BulletList>
          <BulletList>
            <BulletItem>
              <strong>Não force o cão</strong>
              <ContentText>Deixe o cão aprender no seu próprio ritmo, sem pressão.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Seja paciente</strong>
              <ContentText>Alguns cães podem demorar mais para aprender, mantenha a calma.</ContentText>
            </BulletItem>
          </BulletList>
        </div>
      )
    },
    {
      title: "Exemplo Prático",
      content: (
        <div>
          <ContentText>Pratique o comando "Sentar" em diferentes situações:</ContentText>
          <BulletList>
            <BulletItem>
              <strong>Antes das refeições</strong>
              <ContentText>Peça para o cão sentar antes de colocar a comida no pote.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Durante os passeios</strong>
              <ContentText>Use o comando antes de atravessar a rua ou quando encontrar outros cães.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Em casa</strong>
              <ContentText>Peça para sentar antes de abrir a porta ou dar atenção.</ContentText>
            </BulletItem>
          </BulletList>
          <BulletList>
            <BulletItem>
              <strong>Frequência de treino</strong>
              <ContentText>Pratique 3-5 vezes por dia, em sessões curtas.</ContentText>
            </BulletItem>
            <BulletItem>
              <strong>Progressão</strong>
              <ContentText>Aumente gradualmente as distrações conforme o cão melhora.</ContentText>
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
        localStorage.setItem("behavior1_completed", "true");
        
        // Save progress to Firestore
        await addProgress({
          userId: user.uid,
            lessonId: "behavior1",
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
        
        console.log("Progresso da lição Behavior1 salvo com sucesso");
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
      <Title>Comando Sentar</Title>
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