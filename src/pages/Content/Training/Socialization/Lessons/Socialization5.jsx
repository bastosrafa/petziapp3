import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ModuleCompletionPopup from "../../../../../components/ModuleCompletionPopup";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { Timestamp } from 'firebase/firestore';
import LessonBase from "@/components/LessonBase";

const LessonContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
`;

const SlideTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  color: #444;
`;

const ContentSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #555;
`;

const ContentText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 15px;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #4299E1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #3182CE;
  }

  &:disabled {
    background: #CBD5E0;
    cursor: not-allowed;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active === "true" ? '#4299E1' : '#CBD5E0'};
  cursor: pointer;
  transition: background 0.2s;
`;

const Socialization5 = ({ onNextLesson }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const { user } = useAuthContext();
  const { addDocument: addProgress } = useFirestore("progress");
  const { updateTraining, refreshData } = useDashboard();

  const slides = [
    {
      title: "Introdução aos Ambientes Desafiadores",
      image: "/images/socialization/challenging-environments.jpg",
      imageAlt: "Cão em ambiente desafiador",
      content: (
        <div>
          <p>
            A socialização em ambientes desafiadores é crucial para desenvolver
            a confiança e adaptabilidade do seu cão. Envolve expor seu pet a
            diferentes situações e locais que podem ser estressantes ou
            desconhecidos.
          </p>
        </div>
      )
    },
    {
      title: "Tipos de Ambientes",
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
          }}>Ambientes Desafiadores</h3>
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
              }}>1. Locais Movimentados</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Praças, parques e ruas movimentadas, onde há muitas pessoas, sons e estímulos visuais diferentes.
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
              }}>2. Transportes Públicos</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Ônibus, metrôs e trens, onde o cão precisa se adaptar a espaços confinados e diferentes sons e movimentos.
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
              }}>3. Ambientes com Diferentes Superfícies</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Locais com pisos escorregadios, escadas, grama, areia e outras texturas que podem ser desconhecidas para o cão.
              </p>
            </li>
          </ol>
        </div>
      )
    },
    {
      title: "Estratégias de Adaptação",
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
          }}>Dicas para Adaptação</h3>
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
              }}>• Exposição Gradual</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Comece com exposições curtas e em horários mais tranquilos, aumentando gradualmente a duração e a complexidade.
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
              }}>• Reforço Positivo</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Recompense comportamentos calmos e positivos com petiscos, carinho e elogios para criar associações positivas.
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
              }}>• Observação dos Sinais</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Fique atento aos sinais de estresse ou desconforto do seu cão e respeite seus limites, interrompendo a exposição se necessário.
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
        localStorage.setItem("socialization5_completed", "true");
        window.dispatchEvent(new Event('storage'));
        
        // Atualizar o progresso no Firestore
        if (user) {
          const progressData = {
            lessonId: "socialization5",
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
            completedLessons: 15, // Incrementar o número de lições completadas
            currentLevel: 'intermediate',
            lastSession: new Date(),
            totalTime: 160 // Tempo total em minutos
          });
          
          // Forçar atualização do dashboard
          await refreshData();
          
          console.log("Progresso da lição Socialization5 salvo com sucesso");
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

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleNextModule = async () => {
    try {
      // Update training progress in dashboard context
      await updateTraining({
        module: 'hygiene',
        lesson: 'hygiene1',
        status: 'unlocked',
        completed: false,
        lastAccessed: Timestamp.now()
      });

      // Desbloqueia a primeira aula do módulo de higiene
      localStorage.setItem("hygiene1_unlocked", "true");
      
      // Desbloqueia o módulo na página de adestramento
      localStorage.setItem("hygiene_unlocked", "true");
      
      // Navega para a primeira aula do módulo de higiene
      navigate("/content/training/hygiene");
    } catch (error) {
      console.error('Error updating training progress:', error);
      // Still navigate even if update fails
      navigate("/content/training/hygiene");
    }
  };

  return (
    <LessonBase
      title="Ambientes Desafiadores"
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
};

export default Socialization5; 