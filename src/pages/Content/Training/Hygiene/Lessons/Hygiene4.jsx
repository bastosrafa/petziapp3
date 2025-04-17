import React, { useState } from "react";
import LessonBase from "@/components/LessonBase";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import styled from "styled-components";
import ModuleCompletionPopup from "@/components/ModuleCompletionPopup";

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

export default function Hygiene4({ onNextLesson }) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const slides = [
    {
      title: "Limpeza de Ouvidos",
      image: "/images/hygiene/ear-cleaning.jpg",
      imageAlt: "Cão tendo os ouvidos limpos",
      content: (
        <div>
          <p>
            Nesta aula, vamos aprender sobre a importância da limpeza de ouvidos para a
            saúde e bem-estar do seu cão.
          </p>
        </div>
      )
    },
    {
      title: "Por que Limpar os Ouvidos?",
      content: (
        <SlideContent>
          <SlideIntro>
            A limpeza regular dos ouvidos é essencial por vários motivos:
          </SlideIntro>
          <TipsGrid>
            <TipItem>
              <TipHeader>
                <TipIcon>👂</TipIcon>
                <TipTitle>Prevenção</TipTitle>
              </TipHeader>
              <TipDescription>
                Evita infecções e acúmulo de cera nos ouvidos
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>🦮</TipIcon>
                <TipTitle>Conforto</TipTitle>
              </TipHeader>
              <TipDescription>
                Reduz coceira e desconforto causados por sujeira
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>👃</TipIcon>
                <TipTitle>Saúde</TipTitle>
              </TipHeader>
              <TipDescription>
                Previne problemas auditivos e otites
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>🔍</TipIcon>
                <TipTitle>Monitoramento</TipTitle>
              </TipHeader>
              <TipDescription>
                Permite identificar problemas precocemente
              </TipDescription>
            </TipItem>
          </TipsGrid>
        </SlideContent>
      )
    },
    {
      title: "Como Limpar os Ouvidos",
      content: (
        <SlideContent>
          <SlideIntro>
            Siga estes passos para uma limpeza segura e eficiente:
          </SlideIntro>
          <StepsGrid>
            <StepItem>
              <StepHeader>
                <StepNumber>1</StepNumber>
                <StepTitle>Inspeção</StepTitle>
              </StepHeader>
              <StepDescription>
                Verifique se há vermelhidão, odor ou secreção
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Limpeza Externa</StepTitle>
              </StepHeader>
              <StepDescription>
                Use um pano úmido para limpar a parte externa do ouvido
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Limpeza Interna</StepTitle>
              </StepHeader>
              <StepDescription>
                Aplique o produto de limpeza e massageie suavemente
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Finalização</StepTitle>
              </StepHeader>
              <StepDescription>
                Deixe o cão sacudir a cabeça e limpe o excesso
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
            Algumas dicas essenciais para a limpeza de ouvidos:
          </SlideIntro>
          <TipsGrid>
            <TipItem>
              <TipHeader>
                <TipIcon>⏰</TipIcon>
                <TipTitle>Frequência</TipTitle>
              </TipHeader>
              <TipDescription>
                Limpe a cada 1-2 semanas, dependendo da raça
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>⚠️</TipIcon>
                <TipTitle>Cuidados</TipTitle>
              </TipHeader>
              <TipDescription>
                Nunca use cotonetes ou objetos pontiagudos
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>💧</TipIcon>
                <TipTitle>Produtos</TipTitle>
              </TipHeader>
              <TipDescription>
                Use apenas produtos específicos para cães
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>👨‍⚕️</TipIcon>
                <TipTitle>Profissional</TipTitle>
              </TipHeader>
              <TipDescription>
                Consulte um veterinário se notar algo anormal
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
        localStorage.setItem("hygiene4_completed", "true");
        window.dispatchEvent(new Event('storage'));
        
        // Atualizar o progresso no Firestore
        if (user) {
          const progressData = {
            lessonId: "hygiene4",
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
            completedLessons: 19, // Incrementar o número de lições completadas
            currentLevel: 'intermediate',
            lastSession: new Date(),
            totalTime: 220 // Tempo total em minutos
          });
          
          // Forçar atualização do dashboard
          await refreshData();
          
          console.log("Progresso da lição Hygiene4 salvo com sucesso");
        }
        
        // Mostrar o popup de conclusão
        setShowPopup(true);
      } catch (error) {
        console.error("Erro ao salvar progresso da lição:", error);
        setShowPopup(true);
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
    // Desbloqueia a primeira aula do módulo de maus hábitos
    localStorage.setItem("badhabits1_unlocked", "true");
    
    // Desbloqueia o módulo na página de adestramento
    localStorage.setItem("badhabits_unlocked", "true");
    
    // Desbloqueia o módulo na página de adestramento geral
    localStorage.setItem("startHere", "true");
    localStorage.setItem("badhabits_unlocked", "true");
    
    // Atualiza o estado do módulo no Firestore
    if (user) {
      updateTraining({
        completedLessons: 19,
        currentLevel: 'intermediate',
        lastSession: new Date(),
        totalTime: 220,
        unlockedModules: ['startHere', 'hygiene', 'badhabits']
      });
    }
    
    // Navega para a primeira aula do módulo de maus hábitos
    navigate("/content/training/badhabits");
  };

  return (
    <>
      <LessonBase
        title="Limpeza de Ouvidos"
        slides={slides}
        currentSlide={currentSlide}
        onNextSlide={nextSlide}
        onPrevSlide={prevSlide}
        onGoToSlide={goToSlide}
        height="500px"
        contentHeight="calc(100% - 80px)"
        scrollable={true}
      />
      {showPopup && (
        <ModuleCompletionPopup
          onClose={handleClosePopup}
          onNextModule={handleNextModule}
        />
      )}
    </>
  );
} 