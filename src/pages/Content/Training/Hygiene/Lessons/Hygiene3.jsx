import React, { useState } from "react";
import styled from "styled-components";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import hygiene3Image from '@/assets/images/training/Hygiene3.png';

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

const SlideImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SlideIntro = styled.p`
  font-size: 1.1rem;
  color: #4A5568;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const StepItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const StepNumber = styled.div`
  background: #4299E1;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
`;

const StepTitle = styled.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
`;

const StepDescription = styled.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
`;

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const TipItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const TipHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const TipIcon = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
`;

const TipTitle = styled.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
`;

const TipDescription = styled.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
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
  background: #F7FAFC;
  border-radius: 8px;
  border-left: 4px solid #4299E1;
  transition: all 0.2s ease;

  &:hover {
    background: #EBF8FF;
    transform: translateX(4px);
  }

  &:before {
    content: "•";
    color: #4299E1;
    font-size: 2rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const WarningList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
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
  border-left: 4px solid #E53E3E;
  transition: all 0.2s ease;

  &:hover {
    background: #FFEBEB;
    transform: translateX(4px);
  }

  &:before {
    content: "⚠";
    color: #E53E3E;
    font-size: 1.2rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default function Hygiene3({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const slides = [
    {
      title: "Corte de Unhas",
      content: (
        <>
          <SlideImage src={hygiene3Image} alt="Cão tendo as unhas cortadas" />
          <ContentText>
            Nesta aula, vamos aprender sobre a importância do corte de unhas para a
            saúde e bem-estar do seu cão.
          </ContentText>
        </>
      )
    },
    {
      title: "Por que Cortar as Unhas?",
      content: (
        <SlideContent>
          <SlideIntro>
            Manter as unhas do seu cão aparadas é essencial por vários motivos:
          </SlideIntro>
          <TipsGrid>
            <TipItem>
              <TipHeader>
                <TipIcon>🦶</TipIcon>
                <TipTitle>Conforto</TipTitle>
              </TipHeader>
              <TipDescription>
                Unhas longas causam desconforto ao caminhar e podem deformar as patas
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>💪</TipIcon>
                <TipTitle>Saúde</TipTitle>
              </TipHeader>
              <TipDescription>
                Previne problemas articulares e lesões nas patas
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>🏠</TipIcon>
                <TipTitle>Proteção</TipTitle>
              </TipHeader>
              <TipDescription>
                Evita arranhões em móveis e pessoas
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>🩹</TipIcon>
                <TipTitle>Prevenção</TipTitle>
              </TipHeader>
              <TipDescription>
                Reduz o risco de unhas quebradas e infecções
              </TipDescription>
            </TipItem>
          </TipsGrid>
        </SlideContent>
      )
    },
    {
      title: "Como Cortar as Unhas",
      content: (
        <SlideContent>
          <SlideIntro>
            Siga estes passos para um corte de unhas seguro e eficiente:
          </SlideIntro>
          <StepsGrid>
            <StepItem>
              <StepHeader>
                <StepNumber>1</StepNumber>
                <StepTitle>Preparação</StepTitle>
              </StepHeader>
              <StepDescription>
                Acostume seu cão ao toque nas patas e ao cortador de unhas
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Identificação</StepTitle>
              </StepHeader>
              <StepDescription>
                Localize a parte viva da unha (quick) para evitar cortes dolorosos
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Corte</StepTitle>
              </StepHeader>
              <StepDescription>
                Corte em pequenos incrementos, mantendo-se longe da parte viva
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Finalização</StepTitle>
              </StepHeader>
              <StepDescription>
                Lixe as bordas para evitar farpas e recompense seu cão
              </StepDescription>
            </StepItem>
          </StepsGrid>
        </SlideContent>
      )
    },
    {
      title: "Dicas Importantes",
      content: (
        <SlideContent>
          <SlideIntro>
            Algumas dicas essenciais para o corte de unhas:
          </SlideIntro>
          <TipsGrid>
            <TipItem>
              <TipHeader>
                <TipIcon>⏰</TipIcon>
                <TipTitle>Frequência</TipTitle>
              </TipHeader>
              <TipDescription>
                Corte a cada 2-4 semanas, dependendo do crescimento
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>🔍</TipIcon>
                <TipTitle>Observação</TipTitle>
              </TipHeader>
              <TipDescription>
                Monitore o comportamento do cão durante o processo
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>🩹</TipIcon>
                <TipTitle>Emergência</TipTitle>
              </TipHeader>
              <TipDescription>
                Tenha pó hemostático à mão para acidentes
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>👨‍⚕️</TipIcon>
                <TipTitle>Profissional</TipTitle>
              </TipHeader>
              <TipDescription>
                Considere um veterinário para cães muito ansiosos
              </TipDescription>
            </TipItem>
          </TipsGrid>
        </SlideContent>
      )
    },
    {
      title: "Resumo e Próximos Passos",
      content: (
        <SlideContent>
          <SlideIntro>
            Parabéns! Você aprendeu sobre como cortar as unhas do seu cão de forma adequada.
          </SlideIntro>
          <BulletList>
            <BulletItem>Manter as unhas do seu cão aparadas é essencial para seu conforto e saúde</BulletItem>
            <BulletItem>Use equipamentos adequados e siga a técnica correta para evitar machucados</BulletItem>
            <BulletItem>Crie uma rotina de corte regular adaptada às necessidades do seu cão</BulletItem>
            <BulletItem>Recompense seu cão após o procedimento para criar associações positivas</BulletItem>
          </BulletList>
          
          <SlideIntro>
            Próximos passos:
          </SlideIntro>
          <BulletList>
            <BulletItem>Estabeleça uma rotina de corte de unhas adequada à sua rotina e do seu cão</BulletItem>
            <BulletItem>Combine com outras práticas de higiene para manter seu cão saudável</BulletItem>
            <BulletItem>Continue para a próxima aula para aprender sobre limpeza de ouvidos</BulletItem>
          </BulletList>
        </SlideContent>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === slides.length - 1) {
      try {
        // Salvar no localStorage
        localStorage.setItem("hygiene3_completed", "true");
        window.dispatchEvent(new Event('storage'));
        
        // Atualizar o progresso no Firestore
        if (user) {
          const progressData = {
            lessonId: "hygiene3",
            moduleId: "hygiene",
            courseId: "9DwWIAtShVCPXyRPSbqF",
            userId: user.uid,
            status: "completed",
            completedAt: Timestamp.fromDate(new Date()),
            duration: 15 // Duração estimada em minutos
          };
          
          // Adicionar o progresso
          await addProgress(progressData);
          
          // Atualizar o dashboard
          await updateTraining({
            completedLessons: 18, // Incrementar o número de lições completadas
            currentLevel: 'intermediate',
            lastSession: new Date(),
            totalTime: 205 // Tempo total em minutos
          });
          
          // Forçar atualização do dashboard
          await refreshData();
          
          console.log("Progresso da lição Hygiene3 salvo com sucesso");
        }
        
        // Avançar para a próxima lição
        onNextLesson();
      } catch (error) {
        console.error("Erro ao salvar progresso da lição:", error);
        onNextLesson();
      }
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <LessonContainer>
      <Title>
        Corte de Unhas
        {localStorage.getItem("hygiene3_completed") === "true" && (
          <span className="ml-2 text-green-500">✓</span>
        )}
      </Title>
      
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
    </LessonContainer>
  );
} 