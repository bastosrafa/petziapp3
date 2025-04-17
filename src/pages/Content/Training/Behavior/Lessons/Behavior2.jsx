import React, { useState } from "react";
import LessonBase from "@/components/LessonBase";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { useCollection } from "@/hooks/useCollection";
import { Timestamp } from 'firebase/firestore';

export default function Behavior2({ onNextLesson, onBack }) {
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
      title: "Não Pular nas Pessoas",
      image: "/images/training/no-jump-intro.jpg",
      imageAlt: "Cão pulando em pessoa",
      imageHeight: "200px",
      content: (
        <>
          <p>
            Nesta aula, você aprenderá a ensinar seu cão a não pular nas pessoas. 
            Este é um comportamento comum que pode ser corrigido com paciência e consistência.
          </p>
        </>
      )
    },
    {
      title: "Como Ensinar",
      content: (
        <div>
          <h3 style={{ 
            fontSize: '18px',
            color: '#444',
            marginBottom: '15px',
            fontWeight: '600'
          }}>Passo a Passo</h3>
          <ol style={{ 
            paddingLeft: '25px',
            marginTop: '15px',
            lineHeight: '1.8',
            listStyleType: 'none',
            counterReset: 'item'
          }}>
            <li style={{ 
              marginBottom: '20px',
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
              }}>1. Ignore o cão quando ele pular</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Vire as costas e evite contato visual quando o cão pular.
              </p>
            </li>
            <li style={{ 
              marginBottom: '20px',
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
              }}>2. Recompense o comportamento calmo</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Dê atenção e petiscos quando o cão estiver com as quatro patas no chão.
              </p>
            </li>
            <li style={{ 
              marginBottom: '20px',
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
              }}>3. Ensine um comando alternativo</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Treine o cão a sentar quando encontrar pessoas.
              </p>
            </li>
            <li style={{ 
              marginBottom: '20px',
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
              }}>4. Pratique com diferentes pessoas</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Envolva amigos e familiares no treinamento.
              </p>
            </li>
            <li style={{ 
              marginBottom: '20px',
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
              }}>5. Seja consistente</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Mantenha a mesma abordagem em todas as situações.
              </p>
            </li>
          </ol>
        </div>
      )
    },
    {
      title: "Dicas e Prevenção",
      content: (
        <div>
          <h3 style={{ 
            fontSize: '18px',
            color: '#444',
            marginBottom: '15px',
            fontWeight: '600'
          }}>Dicas Importantes</h3>
          <ul style={{ 
            paddingLeft: '25px',
            marginTop: '15px',
            lineHeight: '1.8',
            listStyleType: 'none'
          }}>
            <li style={{ 
              marginBottom: '20px',
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
              }}>• Exercite seu cão regularmente</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Cães cansados pulam menos.
              </p>
            </li>
            <li style={{ 
              marginBottom: '20px',
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
              }}>• Proporcione enriquecimento ambiental</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Brinquedos e atividades mentais ajudam a reduzir a excitação.
              </p>
            </li>
            <li style={{ 
              marginBottom: '20px',
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
              }}>• Mantenha a calma</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Cães refletem a energia de seus tutores.
              </p>
            </li>
          </ul>
        </div>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === 2) {
      // Salvar no localStorage primeiro
      localStorage.setItem("behavior2_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "behavior2",
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
            new Promise(resolve => setTimeout(resolve, 2000)) // Timeout de 2 segundos
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
            
            console.log("Progresso da lição Behavior2 salvo com sucesso");
          }).catch(error => {
            console.error("Erro ao salvar progresso da lição:", error);
          });
        }
      } catch (error) {
        console.error("Erro ao processar progresso da lição:", error);
      }
      
      // Avançar para a próxima lição imediatamente
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
      title="Não Latir Excessivamente"
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