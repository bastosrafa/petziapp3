import React, { useState } from "react";
import LessonBase from "@/components/LessonBase";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';

export default function Socialization2({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const slides = [
    {
      title: "Introdução à Socialização com Pessoas",
      image: "/images/socialization/people-socialization.jpg",
      imageAlt: "Cão interagindo com diferentes pessoas",
      content: (
        <div>
          <p>
            A socialização com pessoas é uma parte crucial do desenvolvimento do seu cão.
            Envolve expor seu cão a diferentes tipos de pessoas, incluindo crianças,
            idosos, pessoas com diferentes aparências e pessoas usando diferentes
            acessórios (chapéus, óculos, etc.).
          </p>
        </div>
      )
    },
    {
      title: "Métodos de Socialização",
      content: (
        <div>
          <p>
            Existem várias maneiras de socializar seu cão com pessoas, incluindo:
            encontros controlados, passeios em locais movimentados, visitas a
            parques e praças, e interações com convidados em casa.
          </p>
        </div>
      )
    },
    {
      title: "Dicas para Socialização Segura",
      content: (
        <div>
          <p>
            Para garantir uma socialização segura e positiva, é importante:
            começar gradualmente, usar reforço positivo, observar os sinais de
            estresse do seu cão e nunca forçar interações.
          </p>
        </div>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === slides.length - 1) {
      try {
        // Salvar no localStorage
        localStorage.setItem("socialization2_completed", "true");
        window.dispatchEvent(new Event('storage'));
        
        // Atualizar o progresso no Firestore
        if (user) {
          const progressData = {
            lessonId: "socialization2",
            moduleId: "socialization",
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
            completedLessons: 12, // Incrementar o número de lições completadas
            currentLevel: 'intermediate',
            lastSession: new Date(),
            totalTime: 115 // Tempo total em minutos
          });
          
          // Forçar atualização do dashboard
          await refreshData();
          
          console.log("Progresso da lição Socialization2 salvo com sucesso");
        }
        
        // Avançar para a próxima lição
        onNextLesson();
      } catch (error) {
        console.error("Erro ao salvar progresso da lição:", error);
        // Mesmo com erro, avançar para a próxima lição
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
      title="Socialização com Pessoas"
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