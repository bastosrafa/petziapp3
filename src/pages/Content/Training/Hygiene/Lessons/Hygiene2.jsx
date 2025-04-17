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

export default function Hygiene2({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const slides = [
    {
      title: "Banho e Tosa",
      image: "/images/hygiene/bath-grooming.jpg",
      imageAlt: "Cão sendo banhado e tosado",
      content: (
        <div>
          <p>
            Nesta aula, vamos aprender sobre a importância do banho e tosa para a
            saúde e bem-estar do seu cão.
          </p>
        </div>
      )
    },
    {
      title: "Preparação para o Banho",
      content: (
        <SlideContent>
          <SlideIntro>
            Antes de começar o banho, é importante preparar tudo corretamente:
          </SlideIntro>
          <StepsGrid>
            <StepItem>
              <StepHeader>
                <StepNumber>1</StepNumber>
                <StepTitle>Escovação Prévia</StepTitle>
              </StepHeader>
              <StepDescription>
                Remova todos os nós e pelos mortos antes do banho
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Produtos Necessários</StepTitle>
              </StepHeader>
              <StepDescription>
                Separe shampoo, condicionador e toalhas específicos para cães
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Local Adequado</StepTitle>
              </StepHeader>
              <StepDescription>
                Escolha um local seguro, quente e com boa iluminação
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Proteção dos Ouvidos</StepTitle>
              </StepHeader>
              <StepDescription>
                Use algodão para proteger os ouvidos da entrada de água
              </StepDescription>
            </StepItem>
          </StepsGrid>
        </SlideContent>
      )
    },
    {
      title: "Passo a Passo do Banho",
      content: (
        <SlideContent>
          <SlideIntro>
            Siga estes passos para um banho seguro e eficiente:
          </SlideIntro>
          <StepsGrid>
            <StepItem>
              <StepHeader>
                <StepNumber>1</StepNumber>
                <StepTitle>Molhe o Cão</StepTitle>
              </StepHeader>
              <StepDescription>
                Use água morna e molhe todo o corpo, evitando o rosto
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>2</StepNumber>
                <StepTitle>Aplique o Shampoo</StepTitle>
              </StepHeader>
              <StepDescription>
                Massageie suavemente da cabeça à cauda, evitando os olhos
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>3</StepNumber>
                <StepTitle>Enxágue Bem</StepTitle>
              </StepHeader>
              <StepDescription>
                Remova todo o shampoo para evitar irritações na pele
              </StepDescription>
            </StepItem>
            <StepItem>
              <StepHeader>
                <StepNumber>4</StepNumber>
                <StepTitle>Seque o Cão</StepTitle>
              </StepHeader>
              <StepDescription>
                Use toalhas e secador em temperatura baixa, se necessário
              </StepDescription>
            </StepItem>
          </StepsGrid>
        </SlideContent>
      )
    },
    {
      title: "Dicas de Tosa",
      content: (
        <SlideContent>
          <SlideIntro>
            Algumas dicas importantes para a tosa do seu cão:
          </SlideIntro>
          <TipsGrid>
            <TipItem>
              <TipHeader>
                <TipIcon>✂️</TipIcon>
                <TipTitle>Frequência Ideal</TipTitle>
              </TipHeader>
              <TipDescription>
                A cada 4-6 semanas, dependendo da raça e tipo de pelo
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>🪒</TipIcon>
                <TipTitle>Equipamentos</TipTitle>
              </TipHeader>
              <TipDescription>
                Use tesouras e máquinas específicas para cães
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>👀</TipIcon>
                <TipTitle>Áreas Sensíveis</TipTitle>
              </TipHeader>
              <TipDescription>
                Tenha cuidado especial com rosto, patas e áreas íntimas
              </TipDescription>
            </TipItem>
            <TipItem>
              <TipHeader>
                <TipIcon>💇</TipIcon>
                <TipTitle>Profissional</TipTitle>
              </TipHeader>
              <TipDescription>
                Considere um profissional para tosas mais complexas
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
        localStorage.setItem("hygiene2_completed", "true");
        window.dispatchEvent(new Event('storage'));
        
        // Atualizar o progresso no Firestore
        if (user) {
          const progressData = {
            lessonId: "hygiene2",
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
            completedLessons: 17, // Incrementar o número de lições completadas
            currentLevel: 'intermediate',
            lastSession: new Date(),
            totalTime: 190 // Tempo total em minutos
          });
          
          // Forçar atualização do dashboard
          await refreshData();
          
          console.log("Progresso da lição Hygiene2 salvo com sucesso");
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
      title="Banho e Tosa"
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