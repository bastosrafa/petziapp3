import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ModuleCompletionPopup from "../../../../../components/ModuleCompletionPopup";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import startHere5Image from '@/assets/images/training/Starthere5.png';

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
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  word-wrap: break-word;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BulletItem = styled.li`
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

const WarningList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const WarningItem = styled.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #FFF5F5;
  border-radius: 8px;
  border-left: 4px solid #F56565;
  transition: all 0.2s ease;

  &:hover {
    background: #FFEBEB;
    transform: translateX(4px);
  }

  &:before {
    content: "⚠️";
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const ExampleList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ExampleItem = styled.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #EBF8FF;
  border-radius: 8px;
  border-left: 4px solid #4299E1;
  transition: all 0.2s ease;

  &:hover {
    background: #BEE3F8;
    transform: translateX(4px);
  }

  &:before {
    content: "💡";
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const ExerciseList = styled.ol`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ExerciseItem = styled.li`
  color: #2D3748;
  padding: 1rem;
  padding-left: 2.5rem;
  position: relative;
  background: #FAF5FF;
  border-radius: 8px;
  border-left: 4px solid #9F7AEA;
  transition: all 0.2s ease;

  &:hover {
    background: #F3E8FF;
    transform: translateX(4px);
  }

  &:before {
    content: attr(data-step);
    color: #9F7AEA;
    font-weight: bold;
    font-size: 1.2rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const SlideImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default function StartHere5({ onNextLesson, onBack }) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const LESSON_NAME = "Consistência e Paciência";
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

  const slides = [
    {
      title: "A Base do Treinamento",
      content: (
        <>
          <SlideImage src={startHere5Image} alt="Consistência e Paciência" />
          <ContentText>
            A consistência e a paciência são fundamentais para o sucesso do treinamento. Nesta aula, você aprenderá como manter a consistência e desenvolver paciência.
          </ContentText>
          <ContentText>
            O treinamento é um processo contínuo que requer tempo e dedicação. Com paciência e consistência, você verá resultados duradouros.
          </ContentText>
        </>
      ),
    },
    {
      title: "Princípios da Consistência",
      content: (
        <>
          <Text>
            Veja os princípios fundamentais para manter a consistência:
          </Text>
          <BulletList>
            <BulletItem data-step="1">Use sempre os mesmos comandos → Evite variações nas palavras.</BulletItem>
            <BulletItem data-step="2">Mantenha a mesma rotina → Horários regulares para treinos.</BulletItem>
            <BulletItem data-step="3">Seja consistente nas recompensas → Reforce sempre os comportamentos desejados.</BulletItem>
            <BulletItem data-step="4">Todos na família devem seguir as mesmas regras → Consistência entre todos os membros.</BulletItem>
          </BulletList>
        </>
      ),
    },
    {
      title: "Desenvolvendo Paciência",
      content: (
        <>
          <Text>
            Aprenda a desenvolver e manter a paciência durante o treinamento:
          </Text>
          <ExerciseList>
            <ExerciseItem data-step="1">Estabeleça expectativas realistas → Cada cão aprende no seu ritmo.</ExerciseItem>
            <ExerciseItem data-step="2">Celebre pequenas conquistas → Reconheça cada progresso.</ExerciseItem>
            <ExerciseItem data-step="3">Mantenha sessões curtas → 5-10 minutos são mais eficientes.</ExerciseItem>
            <ExerciseItem data-step="4">Faça pausas quando necessário → Evite frustração.</ExerciseItem>
          </ExerciseList>
          <WarningList>
            <WarningItem>Não perca a calma se o cão não entender imediatamente.</WarningItem>
            <WarningItem>Não compare o progresso do seu cão com outros cães.</WarningItem>
          </WarningList>
        </>
      ),
    },
    {
      title: "Exemplo Prático",
      content: (
        <ExampleList>
          <ExampleItem>Quando o cão senta, dê um petisco imediatamente.</ExampleItem>
          <ExampleItem>Se o cão fica quieto quando pedido, ofereça um brinquedo.</ExampleItem>
          <ExampleItem>Quando o cão vem quando chamado, faça carinho e elogie.</ExampleItem>
        </ExampleList>
      ),
    },
  ];

  return (
    <LessonContainer>
      <Title>{LESSON_NAME}</Title>
      
      <CarouselContainer>
        {slides.map((slide, index) => (
          <Slide key={index} active={currentSlide === index}>
            <SlideContent>
              <SlideTitle>{slide.title}</SlideTitle>
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
            {currentSlide === slides.length - 1 ? "Próxima Aula" : "Próximo"}
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