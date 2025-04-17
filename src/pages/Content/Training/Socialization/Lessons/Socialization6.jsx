import React, { useState } from "react";
import LessonBase from "@/components/LessonBase";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import ModuleCompletionPopup from "@/components/ModuleCompletionPopup";

export default function Socialization6({ onNextLesson }) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();
  const [showPopup, setShowPopup] = useState(false);

  const slides = [
    {
      title: "Introdução à Consolidação e Prática",
      image: "/images/socialization/consolidation.jpg",
      imageAlt: "Cão bem treinado e socializado",
      content: (
        <div>
          <p>
            Nesta aula final do módulo de socialização, vamos consolidar todos
            os conhecimentos adquiridos e praticar as técnicas aprendidas em
            situações reais e desafiadoras.
          </p>
        </div>
      )
    },
    {
      title: "Revisão dos Conceitos",
      content: (
        <div>
          <p>
            Vamos revisar os principais conceitos aprendidos: socialização com
            pessoas, socialização com outros cães, controle de impulsos e
            adaptação a ambientes desafiadores.
          </p>
        </div>
      )
    },
    {
      title: "Prática Final",
      content: (
        <div>
          <p>
            É hora de colocar em prática tudo o que foi aprendido. Vamos
            realizar exercícios que combinam diferentes situações e desafios,
            sempre mantendo o foco no bem-estar e na segurança do seu cão.
          </p>
        </div>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === slides.length - 1) {
      try {
        // Salvar no localStorage
        localStorage.setItem("socialization6_completed", "true");
        window.dispatchEvent(new Event('storage'));
        
        // Atualizar o progresso no Firestore
        if (user) {
          const progressData = {
            lessonId: "socialization6",
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
            completedLessons: 16, // Incrementar o número de lições completadas
            currentLevel: 'intermediate',
            lastSession: new Date(),
            totalTime: 175 // Tempo total em minutos
          });
          
          // Forçar atualização do dashboard
          await refreshData();
          
          console.log("Progresso da lição Socialization6 salvo com sucesso");
        }
        
        // Mostrar o popup de conclusão
        setShowPopup(true);
      } catch (error) {
        console.error("Erro ao salvar progresso da lição:", error);
        // Mesmo com erro, mostrar o popup
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
    // Desbloqueia a primeira aula do módulo de higiene
    localStorage.setItem("hygiene1_unlocked", "true");
    
    // Desbloqueia o módulo na página de adestramento
    localStorage.setItem("hygiene_unlocked", "true");
    
    // Navega para a primeira aula do módulo de higiene
    navigate("/content/training/hygiene");
  };

  return (
    <>
      <LessonBase
        title="Consolidação e Prática"
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