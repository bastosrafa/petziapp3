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
          <h3 style={{ 
            fontSize: '18px',
            color: '#444',
            marginBottom: '15px',
            fontWeight: '600'
          }}>Passo a Passo</h3>
          <ol style={{ 
            listStyle: 'none',
            padding: '0',
            marginBottom: '20px',
            counterReset: 'item',
            overflow: 'visible'
          }}>
            <li style={{ 
              marginBottom: '15px',
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                backgroundColor: '#e9ecef',
                transform: 'translateX(5px)'
              }
            }}>
              <span style={{ 
                color: '#007bff', 
                fontWeight: '600',
                fontSize: '16px',
                display: 'block',
                marginBottom: '8px'
              }}>1. Escolha do Parceiro</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Selecione um cão com temperamento compatível, preferencialmente um que já seja bem socializado e calmo.
              </p>
            </li>
            <li style={{ 
              marginBottom: '15px',
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                backgroundColor: '#e9ecef',
                transform: 'translateX(5px)'
              }
            }}>
              <span style={{ 
                color: '#007bff', 
                fontWeight: '600',
                fontSize: '16px',
                display: 'block',
                marginBottom: '8px'
              }}>2. Ambiente Adequado</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Realize o encontro em um local neutro, espaçoso e sem distrações, como um parque vazio ou quintal.
              </p>
            </li>
            <li style={{ 
              marginBottom: '15px',
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                backgroundColor: '#e9ecef',
                transform: 'translateX(5px)'
              }
            }}>
              <span style={{ 
                color: '#007bff', 
                fontWeight: '600',
                fontSize: '16px',
                display: 'block',
                marginBottom: '8px'
              }}>3. Supervisão Atenta</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Mantenha os cães na guia inicialmente e observe atentamente suas reações, intervindo se necessário.
              </p>
            </li>
          </ol>
        </div>
      )
    },
    {
      title: "Parques e Grupos de Socialização",
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
          <h3 style={{ 
            fontSize: '18px',
            color: '#444',
            marginBottom: '15px',
            fontWeight: '600'
          }}>Dicas Importantes</h3>
          <ul style={{ 
            listStyle: 'none',
            padding: '0',
            marginBottom: '20px',
            overflow: 'visible'
          }}>
            <li style={{ 
              marginBottom: '15px',
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                backgroundColor: '#e9ecef',
                transform: 'translateX(5px)'
              }
            }}>
              <span style={{ 
                color: '#007bff', 
                fontWeight: '600',
                fontSize: '16px',
                display: 'block',
                marginBottom: '8px'
              }}>• Preparação Prévia</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Certifique-se que seu cão está com todas as vacinas em dia e em boas condições de saúde antes de frequentar parques.
              </p>
            </li>
            <li style={{ 
              marginBottom: '15px',
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                backgroundColor: '#e9ecef',
                transform: 'translateX(5px)'
              }
            }}>
              <span style={{ 
                color: '#007bff', 
                fontWeight: '600',
                fontSize: '16px',
                display: 'block',
                marginBottom: '8px'
              }}>• Horários Adequados</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Visite os parques em horários mais tranquilos, evitando períodos de pico quando há muitos cães.
              </p>
            </li>
            <li style={{ 
              marginBottom: '15px',
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                backgroundColor: '#e9ecef',
                transform: 'translateX(5px)'
              }
            }}>
              <span style={{ 
                color: '#007bff', 
                fontWeight: '600',
                fontSize: '16px',
                display: 'block',
                marginBottom: '8px'
              }}>• Grupos de Socialização</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Participe de grupos de socialização organizados por profissionais, onde o ambiente é controlado e supervisionado.
              </p>
            </li>
          </ul>
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