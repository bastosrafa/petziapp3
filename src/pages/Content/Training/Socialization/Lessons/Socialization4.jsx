import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import ModuleCompletionPopup from "@/components/ModuleCompletionPopup";
import socialization4Image from "@/assets/images/training/socialization4.png";

const LessonContainer = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 0;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;
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
  padding-bottom: 3rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;
  pointer-events: auto;
  position: relative;
  z-index: 1;
  max-height: 500px;

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
  color: #4A5568;
  margin-bottom: 15px;
  word-wrap: break-word;
  white-space: pre-wrap;
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
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateX(4px) scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:before {
    content: "•";
    font-weight: bold;
    font-size: 1.5rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const PreparationBullet = styled(BulletItem)`
  background: #EBF8FF;
  border-left: 4px solid #4299E1;

  &:hover {
    background: #BEE3F8;
  }

  &:before {
    color: #4299E1;
  }
`;

const InteractionBullet = styled(BulletItem)`
  background: #F0FFF4;
  border-left: 4px solid #48BB78;

  &:hover {
    background: #C6F6D5;
  }

  &:before {
    color: #48BB78;
  }
`;

const ComfortBullet = styled(BulletItem)`
  background: #FAF5FF;
  border-left: 4px solid #9F7AEA;

  &:hover {
    background: #E9D8FD;
  }

  &:before {
    color: #9F7AEA;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  background-image: url(${socialization4Image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
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

export default function Socialization4({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const slides = [
    {
      title: "Controle de Impulsos",
      subtitle: "Aprendendo a esperar",
      content: (
        <div>
          <ImagePlaceholder />
          <ContentText>
            O controle de impulsos é fundamental para um cão bem-comportado e equilibrado. 
            Vamos aprender técnicas para ajudar seu cão a desenvolver autocontrole.
          </ContentText>
        </div>
      )
    },
    {
      title: "Exercícios Básicos",
      subtitle: "Começando com o simples",
      content: (
        <div>
          <BulletList>
            <PreparationBullet>
              <strong>Ficar Parado:</strong> Ensine seu cão a permanecer calmo em diferentes situações.
            </PreparationBullet>
            <PreparationBullet>
              <strong>Esperar por Comida:</strong> Treine para que ele aguarde sua permissão antes de comer.
            </PreparationBullet>
            <PreparationBullet>
              <strong>Controle na Porta:</strong> Aprenda a não sair correndo quando a porta é aberta.
            </PreparationBullet>
          </BulletList>
        </div>
      )
    },
    {
      title: "Técnicas de Treinamento",
      subtitle: "Métodos eficazes",
      content: (
        <div>
          <BulletList>
            <InteractionBullet>
              <strong>Comandos Claros:</strong> Use comandos consistentes como "espera" e "fica".
            </InteractionBullet>
            <InteractionBullet>
              <strong>Reforço Positivo:</strong> Recompense o comportamento calmo e controlado.
            </InteractionBullet>
            <InteractionBullet>
              <strong>Progressão Gradual:</strong> Aumente a dificuldade dos exercícios aos poucos.
            </InteractionBullet>
          </BulletList>
        </div>
      )
    },
    {
      title: "Dicas Importantes",
      subtitle: "Para um treinamento eficaz",
      content: (
        <div>
          <BulletList>
            <ComfortBullet>
              <strong>Paciência:</strong> Cada cão tem seu próprio ritmo de aprendizado.
            </ComfortBullet>
            <ComfortBullet>
              <strong>Consistência:</strong> Mantenha a rotina de treinos e comandos.
            </ComfortBullet>
            <ComfortBullet>
              <strong>Ambiente Controlado:</strong> Comece em locais tranquilos e sem distrações.
            </ComfortBullet>
          </BulletList>
        </div>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === slides.length - 1) {
      // Salvar no localStorage primeiro
      localStorage.setItem("socialization4_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Avançar para a próxima lição imediatamente
      onNextLesson();
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "socialization4",
            moduleId: "socialization",
            courseId: "9DwWIAtShVCPXyRPSbqF",
            userId: user.uid,
            status: "completed",
            completedAt: Timestamp.fromDate(new Date()),
            duration: 15
          };
          
          // Usar Promise.race para não bloquear a navegação
          Promise.race([
            addProgress(progressData),
            new Promise(resolve => setTimeout(resolve, 2000)) // Timeout de 2 segundos
          ]).then(() => {
            // Atualizar o dashboard em segundo plano
            updateTraining({
              completedLessons: 14,
              currentLevel: 'intermediate',
              lastSession: new Date(),
              totalTime: 145
            }).catch(err => console.error("Erro ao atualizar dashboard:", err));
            
            refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
            
            console.log("Progresso da lição Socialization4 salvo com sucesso");
          }).catch(error => {
            console.error("Erro ao salvar progresso da lição:", error);
          });
        }
      } catch (error) {
        console.error("Erro ao processar progresso da lição:", error);
      }
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    if (onNextLesson) {
      onNextLesson();
    }
  };

  return (
    <>
      <LessonContainer>
        <Title>Controlando Impulsos</Title>
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
      {showPopup && (
        <ModuleCompletionPopup
          onClose={handleClosePopup}
          moduleName="Socialização"
          nextModule="Comportamento"
        />
      )}
    </>
  );
} 