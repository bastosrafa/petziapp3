import React, { useState } from "react";
import LessonBase from "@/components/LessonBase";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { useCollection } from "@/hooks/useCollection";
import { Timestamp } from 'firebase/firestore';

export default function Behavior1({ onNextLesson, onBack }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();
  const { documents: progressDocs } = useCollection(
    "progress",
    ["userId", "==", user.uid],
    null,
    ["courseId", "==", "9DwWIAtShVCPXyRPSbqF"]
  );

  const slides = [
    {
      title: "Bem-vindo à Aula: Senta e Deita",
      image: "/images/training/sit-down-intro.jpg",
      imageAlt: "Cão sentado",
      imageHeight: "200px",
      content: (
        <>
          <p>
            Nesta aula, você aprenderá a ensinar dois dos comandos mais importantes para o seu cão: "Senta" e "Deita". 
            Estes são os primeiros comandos que você deve ensinar ao seu cão, 
            pois são a base para outros comportamentos e ajudam a estabelecer uma boa comunicação entre vocês.
          </p>
          <ul>
            <li>Importância dos comandos básicos</li>
            <li>Como estabelecer uma comunicação clara</li>
            <li>Preparação para o treinamento</li>
          </ul>
        </>
      )
    },
    {
      title: "Passo a Passo: Comando Senta",
      image: "/images/training/sit-step1.jpg",
      imageAlt: "Ensinando cão a sentar",
      imageHeight: "200px",
      content: (
        <>
          <p>
            Vamos começar com o comando "Senta". Siga estes passos:
          </p>
          <ol>
            <li>Segure um petisco próximo ao nariz do cão</li>
            <li>Mova a mão para cima e para trás</li>
            <li>Quando o cão sentar, diga "Senta"</li>
            <li>Recompense imediatamente</li>
            <li>Repita várias vezes</li>
          </ol>
        </>
      )
    },
    {
      title: "Passo a Passo: Comando Deita",
      image: "/images/training/down-step1.jpg",
      imageAlt: "Ensinando cão a deitar",
      imageHeight: "200px",
      content: (
        <>
          <p>
            Agora vamos aprender o comando "Deita":
          </p>
          <ol>
            <li>Comece com o cão sentado</li>
            <li>Segure o petisco próximo ao nariz</li>
            <li>Mova a mão para baixo e para frente</li>
            <li>Quando o cão deitar, diga "Deita"</li>
            <li>Recompense imediatamente</li>
          </ol>
        </>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === slides.length - 1) {
      // Salvar no localStorage primeiro
      localStorage.setItem("behavior1_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "behavior1",
            moduleId: "behavior",
            courseId: "9DwWIAtShVCPXyRPSbqF",
            userId: user.uid,
            status: "completed",
            completedAt: Timestamp.fromDate(new Date()),
            duration: 5
          };
          
          // Usar Promise.race para não bloquear a navegação
          Promise.race([
            addProgress(progressData),
            new Promise(resolve => setTimeout(resolve, 2000))
          ]).then(() => {
            // Calcular o progresso total
            const updatedProgressDocs = progressDocs ? [...progressDocs] : [];
            updatedProgressDocs.push(progressData);
            
            // Calcular o número total de lições completadas
            const completedLessons = updatedProgressDocs.filter(doc => doc.status === "completed").length;
            
            // Calcular o tempo total de treinamento
            const totalTime = updatedProgressDocs.reduce((acc, doc) => acc + (doc.duration || 0), 0);
            
            // Determinar o nível com base no número de lições
            const currentLevel = completedLessons < 10 ? 'beginner' : 
                               completedLessons < 20 ? 'intermediate' : 
                               completedLessons < 30 ? 'advanced' : 'expert';
            
            // Atualizar o dashboard em segundo plano
            updateTraining({
              completedLessons,
              currentLevel,
              lastSession: new Date(),
              totalTime
            }).catch(err => console.error("Erro ao atualizar dashboard:", err));
            
            refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
          }).catch(error => {
            console.error("Erro ao salvar progresso da lição:", error);
          });
        }
      } catch (error) {
        console.error("Erro ao processar progresso da lição:", error);
      }
      
      // Avançar para a próxima lição
      onNextLesson();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <LessonBase
      title="Módulo 2: Comportamento"
      subtitle="Senta e Deita"
      slides={slides}
      currentSlide={currentSlide}
      onNextSlide={nextSlide}
      onPrevSlide={prevSlide}
      onGoToSlide={goToSlide}
      height="600px"
      contentHeight="calc(100% - 100px)"
      scrollable={true}
    />
  );
} 