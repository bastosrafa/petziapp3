import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import ModuleCompletionPopup from "@/components/ModuleCompletionPopup";
import socialization6Image from "@/assets/images/training/socialization6.png";

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

const UrbanBullet = styled(BulletItem)`
  background: #EBF8FF;
  border-left: 4px solid #4299E1;

  &:hover {
    background: #BEE3F8;
  }

  &:before {
    color: #4299E1;
  }
`;

const ParkBullet = styled(BulletItem)`
  background: #F0FFF4;
  border-left: 4px solid #48BB78;

  &:hover {
    background: #C6F6D5;
  }

  &:before {
    color: #48BB78;
  }
`;

const TransportBullet = styled(BulletItem)`
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
  background-image: url(${socialization6Image});
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

export default function Socialization6() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const slides = [
    {
      title: "Consolidação e Prática",
      subtitle: "Revisão e aplicação",
      content: (
        <div>
          <ImagePlaceholder />
          <ContentText>
            A socialização em diferentes ambientes é essencial para um cão adaptável e confiante. 
            Vamos aprender como ajudar seu cão a se sentir seguro em diversos contextos.
          </ContentText>
        </div>
      )
    },
    {
      title: "Revisão dos Conceitos",
      content: (
        <div>
          <ContentText>
            Pontos principais para revisar:
          </ContentText>
          <BulletList>
            <UrbanBullet>Importância da socialização precoce</UrbanBullet>
            <UrbanBullet>Período crítico de desenvolvimento</UrbanBullet>
            <UrbanBullet>Exposição gradual e positiva</UrbanBullet>
          </BulletList>
        </div>
      )
    },
    {
      title: "Plano de Prática",
      content: (
        <div>
          <ContentText>
            Como implementar na prática:
          </ContentText>
          <BulletList>
            <ParkBullet>Crie uma rotina de socialização</ParkBullet>
            <ParkBullet>Mantenha sessões curtas e positivas</ParkBullet>
            <ParkBullet>Registre o progresso do seu cão</ParkBullet>
          </BulletList>
        </div>
      )
    },
    {
      title: "Dicas Finais",
      content: (
        <div>
          <ContentText>
            Para um treinamento bem-sucedido:
          </ContentText>
          <BulletList>
            <TransportBullet>Seja consistente e paciente</TransportBullet>
            <TransportBullet>Celebre pequenas conquistas</TransportBullet>
            <TransportBullet>Mantenha o treinamento divertido</TransportBullet>
          </BulletList>
        </div>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === slides.length - 1) {
      // Salvar no localStorage primeiro
      localStorage.setItem("socialization6_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Mostrar o popup imediatamente
      setShowPopup(true);
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "socialization6",
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
              completedLessons: 16,
              currentLevel: 'intermediate',
              lastSession: new Date(),
              totalTime: 160
            }).catch(err => console.error("Erro ao atualizar dashboard:", err));
            
            refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
            
            console.log("Progresso da lição Socialization6 salvo com sucesso");
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
    setCurrentSlide((prev) => prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleNextModule = () => {
    // Desbloqueia a primeira aula do módulo de higiene
    localStorage.setItem("hygiene1_unlocked", "true");
    
    // Desbloqueia o módulo na página de adestramento
    localStorage.setItem("hygiene_unlocked", "true");
    
    // Navega para a primeira aula do módulo de higiene
    navigate("/content/training/hygiene");
  };

  return (
    <>
      <LessonContainer>
        <Title>Consolidação da Socialização</Title>
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
          onNextModule={handleNextModule}
        />
      )}
    </>
  );
} 