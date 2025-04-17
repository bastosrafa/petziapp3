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

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const BenefitItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BenefitHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const BenefitIcon = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
`;

const BenefitTitle = styled.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
`;

const BenefitDescription = styled.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
`;

const RoutineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const RoutineItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RoutineHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const RoutineNumber = styled.div`
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

const RoutineTitle = styled.h4`
  margin: 0;
  color: #2D3748;
  font-size: 1.1rem;
`;

const RoutineDescription = styled.p`
  color: #4A5568;
  margin: 0;
  line-height: 1.5;
`;

export default function Hygiene1({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const slides = [
    {
      title: "Introdução à Higiene",
      image: "/images/hygiene/introduction.jpg",
      imageAlt: "Cão sendo escovado",
      content: (
        <div>
          <p>
            Nesta aula, vamos aprender sobre a importância da higiene regular para
            a saúde e bem-estar do seu cão.
          </p>
        </div>
      )
    },
    {
      title: "Por que a Higiene é Importante?",
      content: (
        <SlideContent>
          <SlideIntro>
            Manter seu cão limpo e bem cuidado traz diversos benefícios:
          </SlideIntro>
          <BenefitsGrid>
            <BenefitItem>
              <BenefitHeader>
                <BenefitIcon>🛁</BenefitIcon>
                <BenefitTitle>Saúde e Prevenção</BenefitTitle>
              </BenefitHeader>
              <BenefitDescription>
                Reduz o risco de infecções e mantém a pele e pelagem saudáveis
              </BenefitDescription>
            </BenefitItem>
            <BenefitItem>
              <BenefitHeader>
                <BenefitIcon>👃</BenefitIcon>
                <BenefitTitle>Conforto e Bem-estar</BenefitTitle>
              </BenefitHeader>
              <BenefitDescription>
                Mantém o cão e o ambiente mais agradáveis, livre de odores
              </BenefitDescription>
            </BenefitItem>
            <BenefitItem>
              <BenefitHeader>
                <BenefitIcon>💪</BenefitIcon>
                <BenefitTitle>Vínculo e Confiança</BenefitTitle>
              </BenefitHeader>
              <BenefitDescription>
                Fortalece a relação entre você e seu pet durante os momentos de cuidado
              </BenefitDescription>
            </BenefitItem>
            <BenefitItem>
              <BenefitHeader>
                <BenefitIcon>🔍</BenefitIcon>
                <BenefitTitle>Monitoramento da Saúde</BenefitTitle>
              </BenefitHeader>
              <BenefitDescription>
                Permite identificar alterações na pele, pelagem ou comportamento precocemente
              </BenefitDescription>
            </BenefitItem>
          </BenefitsGrid>
        </SlideContent>
      )
    },
    {
      title: "Rotina Básica de Higiene",
      content: (
        <SlideContent>
          <SlideIntro>
            Estabeleça uma rotina regular de cuidados:
          </SlideIntro>
          <RoutineGrid>
            <RoutineItem>
              <RoutineHeader>
                <RoutineNumber>1</RoutineNumber>
                <RoutineTitle>Escovação Diária</RoutineTitle>
              </RoutineHeader>
              <RoutineDescription>
                Remove pelos mortos e previne a formação de nós na pelagem
              </RoutineDescription>
            </RoutineItem>
            <RoutineItem>
              <RoutineHeader>
                <RoutineNumber>2</RoutineNumber>
                <RoutineTitle>Banho Mensal</RoutineTitle>
              </RoutineHeader>
              <RoutineDescription>
                Use produtos específicos para cães e mantenha a pele hidratada
              </RoutineDescription>
            </RoutineItem>
            <RoutineItem>
              <RoutineHeader>
                <RoutineNumber>3</RoutineNumber>
                <RoutineTitle>Corte de Unhas</RoutineTitle>
              </RoutineHeader>
              <RoutineDescription>
                Mantenha as unhas curtas e saudáveis para evitar desconforto
              </RoutineDescription>
            </RoutineItem>
            <RoutineItem>
              <RoutineHeader>
                <RoutineNumber>4</RoutineNumber>
                <RoutineTitle>Limpeza de Ouvidos</RoutineTitle>
              </RoutineHeader>
              <RoutineDescription>
                Previne infecções e acúmulo de cera nos ouvidos
              </RoutineDescription>
            </RoutineItem>
          </RoutineGrid>
        </SlideContent>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === slides.length - 1) {
      try {
        // Salvar no localStorage
        localStorage.setItem("hygiene1_completed", "true");
        window.dispatchEvent(new Event('storage'));
        
        // Atualizar o progresso no Firestore
        if (user) {
          const progressData = {
            lessonId: "hygiene1",
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
            completedLessons: 16, // Incrementar o número de lições completadas
            currentLevel: 'intermediate',
            lastSession: new Date(),
            totalTime: 175 // Tempo total em minutos
          });
          
          // Forçar atualização do dashboard
          await refreshData();
          
          console.log("Progresso da lição Hygiene1 salvo com sucesso");
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
      title="Introdução à Higiene"
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