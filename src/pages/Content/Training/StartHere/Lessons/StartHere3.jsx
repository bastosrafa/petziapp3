import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import startHere3Image from '@/assets/images/training/starthere3.png';

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

const SlideImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContentText = styled.p`
  color: #4A5568;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  word-wrap: break-word;
`;

export default function StartHere3({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const nextSlide = async () => {
    if (currentSlide === 3) {
      // Salvar no localStorage primeiro
      localStorage.setItem("starthere3_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Avançar para a próxima lição imediatamente
      onNextLesson();
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "starthere3",
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
              completedLessons: 3,
              currentLevel: 'beginner',
              lastSession: new Date(),
              totalTime: 15
            }).catch(err => console.error("Erro ao atualizar dashboard:", err));
            
            refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
            
            console.log("Progresso da lição StartHere3 salvo com sucesso");
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

  const slides = [
    {
      title: "O Poder das Recompensas",
      content: (
        <>
          <SlideImage src={startHere3Image} alt="Recompensas e Reforço Positivo" />
          <ContentText>
            O reforço positivo é a base do treinamento moderno. Nesta aula, você aprenderá como usar recompensas para ensinar seu cão de forma eficaz e divertida.
          </ContentText>
          <ContentText>
            Quando usamos recompensas corretamente, o cão aprende mais rápido e mantém o comportamento desejado por mais tempo, criando uma experiência positiva para ambos.
          </ContentText>
        </>
      ),
    },
    {
      title: "Tipos de Recompensas",
      content: (
        <>
          <Text>
            Cada cão tem suas preferências. Conheça os principais tipos de recompensas:
          </Text>
          <BulletList>
            <BulletItem data-step="1">Petiscos → Ideais para treinos curtos e comandos novos.</BulletItem>
            <BulletItem data-step="2">Brinquedos → Perfeitos para treinos mais longos e interativos.</BulletItem>
            <BulletItem data-step="3">Carinho → Excelente para cães que valorizam contato físico.</BulletItem>
            <BulletItem data-step="4">Elogios → Importante para manter o vínculo e a motivação.</BulletItem>
          </BulletList>
        </>
      ),
    },
    {
      title: "Como Usar Recompensas",
      content: (
        <>
          <Text>
            Para um treinamento eficaz, siga estas etapas:
          </Text>
          <ExerciseList>
            <ExerciseItem data-step="1">Identifique o que seu cão mais gosta como recompensa.</ExerciseItem>
            <ExerciseItem data-step="2">Use recompensas de alto valor para comportamentos difíceis.</ExerciseItem>
            <ExerciseItem data-step="3">Dê a recompensa imediatamente após o comportamento desejado.</ExerciseItem>
            <ExerciseItem data-step="4">Reduza gradualmente as recompensas conforme o cão aprende.</ExerciseItem>
          </ExerciseList>
        </>
      ),
    },
    {
      title: "Exemplo Prático",
      content: (
        <>
          <Text>
            Veja como aplicar o reforço positivo em situações do dia a dia:
          </Text>
          <ExampleList>
            <ExampleItem>Quando o cão senta, dê um petisco e elogie com entusiasmo.</ExampleItem>
            <ExampleItem>Se o cão fica quieto quando pedido, ofereça um brinquedo favorito.</ExampleItem>
            <ExampleItem>Quando o cão vem quando chamado, faça carinho e dê um petisco especial.</ExampleItem>
          </ExampleList>
          <WarningList>
            <WarningItem>Nunca use recompensas para parar comportamentos indesejados.</WarningItem>
            <WarningItem>Mantenha as recompensas pequenas para não sobrecarregar o cão.</WarningItem>
          </WarningList>
        </>
      ),
    },
  ];

  return (
    <LessonContainer>
      <Title>Recompensas e Reforço Positivo</Title>
      
      <CarouselContainer>
        {slides.map((slide, index) => (
          <Slide key={index} active={(currentSlide === index).toString()}>
            <SlideContent>
              <SlideTitle>{slide.title}</SlideTitle>
              {slide.content}
            </SlideContent>
          </Slide>
        ))}

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
    </LessonContainer>
  );
} 