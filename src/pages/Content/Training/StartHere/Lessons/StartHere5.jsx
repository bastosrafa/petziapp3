import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ModuleCompletionPopup from "../../../../../components/ModuleCompletionPopup";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';

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
  height: 600px;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 100px); /* Reduzido para dar espaço aos botões */
  opacity: ${props => props.active === "true" ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  pointer-events: ${props => props.active === "true" ? 'auto' : 'none'};
`;

const SlideContent = styled.div`
  height: 100%;
  padding: 2.5rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;

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
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 70px;
  left: 0;
  right: 0;
  z-index: 1;
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
    content: "•";
    position: absolute;
    left: 0;
  }
`;

const ExampleList = styled.ol`
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
    content: "•";
    position: absolute;
    left: 0;
  }
`;

export default function StartHere5({ onNextLesson, onBack }) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const LESSON_NAME = "Introdução ao Clicker ou Recompensas";
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const nextSlide = async () => {
    if (currentSlide === 3) {
      // Salvar no localStorage primeiro
      localStorage.setItem("starthere5_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Mostrar o popup imediatamente
      setShowPopup(true);
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "starthere5",
            moduleId: "starthere",
            courseId: "9DwWIAtShVCPXyRPSbqF",
            userId: user.uid,
            status: "completed",
            completedAt: Timestamp.fromDate(new Date()),
            duration: 5
          };
          
          // Usar Promise.race para não bloquear a navegação
          Promise.race([
            addProgress(progressData),
            new Promise(resolve => setTimeout(resolve, 2000)) // Timeout de 2 segundos
          ]).then(() => {
            // Atualizar o dashboard em segundo plano
            updateTraining({
              completedLessons: 5,
              currentLevel: 'beginner',
              lastSession: new Date(),
              totalTime: 25
            }).catch(err => console.error("Erro ao atualizar dashboard:", err));
            
            refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
            
            console.log("Progresso da lição StartHere5 salvo com sucesso");
          }).catch(error => {
            console.error("Erro ao salvar progresso da lição:", error);
          });
        }
      } catch (error) {
        console.error("Erro ao processar progresso da lição:", error);
      }
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
        {/* Slide 0: Introdução com Imagem */}
        <Slide active={(currentSlide === 0).toString()}>
          <SlideContent>
            <SlideTitle>Bem-vindo à Aula!</SlideTitle>
            <ImageContainer>
              <ImagePlaceholder>Imagem ilustrativa do reforço positivo com cães</ImagePlaceholder>
            </ImageContainer>
            <IntroductionText>
              Nesta aula, vamos aprender como usar o reforço positivo para treinar nosso cão de forma eficaz e divertida.
            </IntroductionText>
          </SlideContent>
        </Slide>

        {/* Slide 1: O que é Reforço Positivo */}
        <Slide active={(currentSlide === 1).toString()}>
          <SlideContent>
            <SlideTitle>O que é Reforço Positivo?</SlideTitle>
            <Text>
              O reforço positivo é uma técnica de treinamento que recompensa comportamentos desejados, tornando-os mais prováveis de se repetirem.
            </Text>
            <BulletList>
              <BulletItem>Petisco → Recompensa imediata e efetiva.</BulletItem>
              <BulletItem>Carinho → Afeto e atenção como recompensa.</BulletItem>
              <BulletItem>Brinquedo → Recompensa divertida e interativa.</BulletItem>
              <BulletItem>Elogio → Reforço verbal com tom animado.</BulletItem>
            </BulletList>
          </SlideContent>
        </Slide>

        {/* Slide 2: Como Usar */}
        <Slide active={(currentSlide === 2).toString()}>
          <SlideContent>
            <SlideTitle>Como Usar o Reforço Positivo</SlideTitle>
            <BulletList>
              <BulletItem>Recompense imediatamente → O cão precisa associar a recompensa ao comportamento.</BulletItem>
              <BulletItem>Seja consistente → Recompense sempre que o comportamento desejado ocorrer.</BulletItem>
              <BulletItem>Use diferentes tipos de recompensa → Mantenha o interesse do cão.</BulletItem>
              <BulletItem>Diminua gradualmente as recompensas → Conforme o comportamento se torna consistente.</BulletItem>
            </BulletList>
          </SlideContent>
        </Slide>

        {/* Slide 3: Exemplo Prático */}
        <Slide active={(currentSlide === 3).toString()}>
          <SlideContent>
            <SlideTitle>Exemplo Prático</SlideTitle>
            <ExampleList>
              <ExampleItem>Quando o cão senta, dê um petisco imediatamente.</ExampleItem>
              <ExampleItem>Se o cão fica quieto quando pedido, ofereça um brinquedo.</ExampleItem>
              <ExampleItem>Quando o cão vem quando chamado, faça carinho e elogie.</ExampleItem>
            </ExampleList>
          </SlideContent>
        </Slide>

        <Dots>
          {[0, 1, 2, 3].map((index) => (
            <Dot
              key={index}
              active={currentSlide === index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </Dots>

        <NavigationButtons>
          <Button onClick={prevSlide} disabled={currentSlide === 0}>
            Anterior
          </Button>
          <Button onClick={nextSlide}>
            {currentSlide === 3 ? "Próxima Aula" : "Próximo"}
          </Button>
        </NavigationButtons>
      </CarouselContainer>

      {showPopup && (
        <ModuleCompletionPopup
          onClose={handleClosePopup}
          onNextModule={handleNextModule}
        />
      )}
    </LessonContainer>
  );
} 