import React, { useState } from "react";
import LessonBase from "@/components/LessonBase";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';

export default function Socialization1({ onNextLesson }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const slides = [
    {
      title: "O que é Socialização?",
      image: "/images/socialization/dog-socialization.jpg",
      imageAlt: "Cão interagindo com pessoas e outros cães",
      content: (
        <div style={{ 
          flex: 1,
          overflowY: 'auto',
          paddingRight: '10px',
          maxHeight: '420px',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
          scrollbarColor: '#4299E1 #F7FAFC',
          pointerEvents: 'auto',
          position: 'relative',
          zIndex: 1
        }}>
          <p style={{ 
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#333',
            marginBottom: '15px',
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap'
          }}>
            A socialização é um processo fundamental no desenvolvimento do seu cão,
            que o ajuda a se adaptar e interagir de forma positiva com diferentes
            pessoas, animais e situações do ambiente.
          </p>
        </div>
      )
    },
    {
      title: "Por que a Socialização é Importante?",
      image: "/images/socialization/importance.jpg",
      imageAlt: "Cão confiante e bem socializado",
      content: (
        <div style={{ 
          flex: 1,
          overflowY: 'auto',
          paddingRight: '10px',
          maxHeight: '420px',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
          scrollbarColor: '#4299E1 #F7FAFC',
          pointerEvents: 'auto',
          position: 'relative',
          zIndex: 1
        }}>
          <p style={{ 
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#333',
            marginBottom: '15px',
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap'
          }}>
            Uma boa socialização ajuda a prevenir problemas de comportamento,
            reduz a ansiedade e o medo, e contribui para um cão mais confiante
            e equilibrado.
          </p>
        </div>
      )
    },
    {
      title: "Período Crítico de Socialização",
      image: "/images/socialization/critical-period.jpg",
      imageAlt: "Filhote de cão em período de socialização",
      content: (
        <div style={{ 
          flex: 1,
          overflowY: 'auto',
          paddingRight: '10px',
          maxHeight: '420px',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
          scrollbarColor: '#4299E1 #F7FAFC',
          pointerEvents: 'auto',
          position: 'relative',
          zIndex: 1
        }}>
          <p style={{ 
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#333',
            marginBottom: '15px',
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap'
          }}>
            O período mais importante para a socialização é entre 3 e 16 semanas
            de idade. Durante este período, o cão está mais receptivo a novas
            experiências e forma suas primeiras impressões do mundo.
          </p>
        </div>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === slides.length - 1) {
      // Salvar no localStorage primeiro
      localStorage.setItem("socialization1_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "socialization1",
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
            new Promise(resolve => setTimeout(resolve, 2000))
          ]).then(() => {
            // Atualizar o dashboard em segundo plano
            updateTraining({
              completedLessons: 9,
              currentLevel: 'beginner',
              lastSession: new Date(),
              totalTime: 90
            }).catch(err => console.error("Erro ao atualizar dashboard:", err));
            
            refreshData().catch(err => console.error("Erro ao atualizar dados:", err));
            
            console.log("Progresso da lição Socialization1 salvo com sucesso");
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
      title="Introdução à Socialização"
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