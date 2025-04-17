import React, { useState } from "react";
import LessonBase from "@/components/LessonBase";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import styled from "styled-components";

const SlideContent = styled.div`
  padding: 1rem;
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

export default function Hygiene3({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const slides = [
    {
      title: "Corte de Unhas",
      image: "/images/hygiene/nail-trimming.jpg",
      imageAlt: "Cão tendo as unhas cortadas",
      content: (
        <div>
          <p>
            Nesta aula, vamos aprender sobre a importância do corte de unhas para a
            saúde e bem-estar do seu cão.
          </p>
        </div>
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
    setCurrentSlide((prev) => prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <LessonBase
      title="Corte de Unhas"
      slides={slides}
      currentSlide={currentSlide}
      onNextSlide={nextSlide}
      onPrevSlide={prevSlide}
      onGoToSlide={goToSlide}
      height="500px"
      contentHeight="calc(100% - 80px)"
      scrollable={true}
    />
  );
} 