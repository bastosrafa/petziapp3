import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import socialization3Image from "@/assets/images/training/socialization3.png";
import ModuleCompletionPopup from "@/components/ModuleCompletionPopup";

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
  height: calc(100% - 100px);
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

const AfterBullet = styled(BulletItem)`
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
  background-image: url(${socialization3Image});
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
  padding: 1rem 0.75rem;
  background: white;
  border-top: 1px solid #E2E8F0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const NavButton = styled.button`
  background-color: ${props => props.disabled ? '#CBD5E0' : '#4299E1'};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.9rem;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s;
  width: 100px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => props.disabled ? '#CBD5E0' : '#3182CE'};
  }
`;

const ProgressDots = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0 0.5rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#4299E1' : '#CBD5E0'};
  cursor: pointer;
  transition: background-color 0.2s;
`;

export default function Socialization3({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const slides = [
    {
      title: "Socialização com Outros Cães",
      subtitle: "Construindo amizades caninas",
      content: (
        <div>
          <ImagePlaceholder />
          <ContentText>
            A socialização com outros cães é essencial para o desenvolvimento social do seu pet. 
            Vamos aprender como criar encontros seguros e positivos entre cães.
          </ContentText>
        </div>
      )
    },
    {
      title: "Preparação para Encontros",
      subtitle: "Configurando para o sucesso",
      content: (
        <div>
          <BulletList>
            <PreparationBullet>
              <strong>Escolha do Local:</strong> Opte por parques para cães ou áreas seguras e controladas.
            </PreparationBullet>
            <PreparationBullet>
              <strong>Horário Adequado:</strong> Evite horários de pico e escolha momentos mais tranquilos.
            </PreparationBullet>
            <PreparationBullet>
              <strong>Equipamentos:</strong> Use coleira e guia adequadas, e leve petiscos para reforço positivo.
            </PreparationBullet>
            <PreparationBullet>
              <strong>Estado do Cão:</strong> Certifique-se que seu cão está calmo e bem alimentado antes do encontro.
            </PreparationBullet>
          </BulletList>
        </div>
      )
    },
    {
      title: "Durante o Encontro",
      subtitle: "Interações seguras e positivas",
      content: (
        <div>
          <BulletList>
            <InteractionBullet>
              <strong>Apresentação Gradual:</strong> Permita que os cães se cheirem e se conheçam aos poucos.
            </InteractionBullet>
            <InteractionBullet>
              <strong>Linguagem Corporal:</strong> Observe e interprete os sinais de comunicação canina.
            </InteractionBullet>
            <InteractionBullet>
              <strong>Intervenção:</strong> Esteja preparado para interromper se necessário, mas sem pânico.
            </InteractionBullet>
            <InteractionBullet>
              <strong>Reforço Positivo:</strong> Recompense comportamentos calmos e amigáveis.
            </InteractionBullet>
          </BulletList>
        </div>
      )
    },
    {
      title: "Tipos de Interação",
      subtitle: "Diferentes formas de socialização",
      content: (
        <div>
          <BulletList>
            <InteractionBullet>
              <strong>Brincadeiras:</strong> Observe e incentive brincadeiras apropriadas e recíprocas.
            </InteractionBullet>
            <InteractionBullet>
              <strong>Passeios em Grupo:</strong> Organize passeios com outros cães para socialização em movimento.
            </InteractionBullet>
            <InteractionBullet>
              <strong>Parques para Cães:</strong> Utilize áreas específicas para interação canina.
            </InteractionBullet>
            <InteractionBullet>
              <strong>Encontros Controlados:</strong> Comece com encontros individuais antes de grupos maiores.
            </InteractionBullet>
          </BulletList>
        </div>
      )
    },
    {
      title: "Dicas Importantes",
      subtitle: "Para uma socialização segura",
      content: (
        <div>
          <BulletList>
            <AfterBullet>
              <strong>Respeite os Limites:</strong> Cada cão tem seu próprio ritmo de socialização.
            </AfterBullet>
            <AfterBullet>
              <strong>Supervisão Constante:</strong> Mantenha-se atento durante todo o encontro.
            </AfterBullet>
            <AfterBullet>
              <strong>Petiscos e Recompensas:</strong> Use reforços positivos para criar associações agradáveis.
            </AfterBullet>
            <AfterBullet>
              <strong>Consistência:</strong> Mantenha uma rotina regular de socialização.
            </AfterBullet>
          </BulletList>
        </div>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === slides.length - 1) {
      // Salvar no localStorage primeiro
      localStorage.setItem("socialization3_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Avançar para a próxima lição imediatamente
      onNextLesson();
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "socialization3",
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
              completedLessons: 13,
              currentLevel: 'intermediate',
              lastSession: new Date(),
              totalTime: 130
            }).catch(err => console.error("Erro ao atualizar dashboard:", err));
            
            refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
            
            console.log("Progresso da lição Socialization3 salvo com sucesso");
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

  return (
    <>
      <LessonContainer>
        <Title>Socialização com Outros Cães</Title>
        <CarouselContainer>
          {slides.map((slide, index) => (
            <Slide key={index} active={(currentSlide === index).toString()}>
              <SlideContent>
                <SlideTitle>{slide.title}</SlideTitle>
                {slide.content}
              </SlideContent>
            </Slide>
          ))}

          <NavigationButtons>
            <NavButton onClick={prevSlide} disabled={currentSlide === 0}>
              Anterior
            </NavButton>
            <ProgressDots>
              {slides.map((_, index) => (
                <Dot
                  key={index}
                  active={currentSlide === index}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </ProgressDots>
            <NavButton onClick={nextSlide}>
              {currentSlide === slides.length - 1 ? "Concluir" : "Próximo"}
            </NavButton>
          </NavigationButtons>
        </CarouselContainer>
      </LessonContainer>
    </>
  );
} 