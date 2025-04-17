import React, { useState } from "react";
import LessonBase from "@/components/LessonBase";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';

export default function Socialization3({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const slides = [
    {
      title: "Introdução à Socialização com Cães",
      image: "/images/socialization/dogs-socialization.jpg",
      imageAlt: "Cães interagindo em um parque",
      content: (
        <div>
          <p>
            A socialização com outros cães é essencial para o desenvolvimento
            social do seu pet. Isso ajuda a prevenir problemas de agressividade
            e medo, e permite que seu cão desenvolva habilidades sociais
            importantes.
          </p>
        </div>
      )
    },
    {
      title: "Encontros Controlados",
      content: (
        <div>
          <p>
            Para socializar seu cão com outros cães, é importante:
            escolher parceiros de brincadeira adequados, realizar encontros
            em ambientes controlados e supervisionar todas as interações
            atentamente.
          </p>
        </div>
      )
    },
    {
      title: "Parques e Grupos de Socialização",
      content: (
        <div>
          <p>
            Parques para cães e grupos de socialização são ótimas opções
            para socialização, mas é importante garantir que seu cão esteja
            preparado e que o ambiente seja seguro e controlado.
          </p>
        </div>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === slides.length - 1) {
      try {
        // Salvar no localStorage
        localStorage.setItem("socialization3_completed", "true");
        window.dispatchEvent(new Event('storage'));
        
        // Atualizar o progresso no Firestore
        if (user) {
          const progressData = {
            lessonId: "socialization3",
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
            completedLessons: 13, // Incrementar o número de lições completadas
            currentLevel: 'intermediate',
            lastSession: new Date(),
            totalTime: 130 // Tempo total em minutos
          });
          
          // Forçar atualização do dashboard
          await refreshData();
          
          console.log("Progresso da lição Socialization3 salvo com sucesso");
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
      title="Socialização com Outros Cães"
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