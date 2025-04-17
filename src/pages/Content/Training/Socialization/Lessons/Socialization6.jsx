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
      title: "Técnicas de Socialização",
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
          }}>Métodos de Treinamento</h3>
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
              }}>1. Dessensibilização</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Exposição gradual a estímulos que causam medo ou ansiedade, começando com intensidade baixa e aumentando progressivamente.
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
              }}>2. Contracondicionamento</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Associar situações estressantes a experiências positivas, como petiscos e carinho, para mudar a resposta emocional do cão.
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
              }}>3. Modelagem de Comportamento</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Reforçar pequenos passos em direção ao comportamento desejado, ajudando o cão a se sentir confortável em situações novas.
              </p>
            </li>
          </ol>
        </div>
      )
    },
    {
      title: "Dicas Finais",
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
          }}>Recomendações Importantes</h3>
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
              }}>• Paciência e Consistência</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Cada cão tem seu próprio ritmo de aprendizado. Mantenha a consistência no treinamento e seja paciente com o progresso.
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
              }}>• Ambiente Seguro</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Certifique-se de que o ambiente de treinamento seja seguro e controlado, minimizando riscos e distrações.
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
              }}>• Observação Contínua</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Mantenha-se atento aos sinais de estresse ou desconforto do seu cão, ajustando o treinamento conforme necessário.
              </p>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Prática Final",
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
          }}>Exercícios Práticos</h3>
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
              }}>1. Socialização em Ambientes Diversos</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Pratique em diferentes locais: parques, ruas movimentadas, transportes públicos e ambientes com diferentes superfícies.
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
              }}>2. Interação com Diferentes Pessoas</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Exponha seu cão a pessoas de diferentes idades, aparências e comportamentos, sempre com supervisão e controle.
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
              }}>3. Controle de Estímulos</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Pratique o controle de impulsos em situações com diferentes níveis de distração e estímulos.
              </p>
            </li>
          </ol>
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