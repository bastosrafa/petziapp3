import React, { useState } from "react";
import LessonBase from "@/components/LessonBase";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { useCollection } from "@/hooks/useCollection";
import { Timestamp } from 'firebase/firestore';

export default function Behavior3({ onNextLesson, onBack }) {
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
      title: "Latidos Excessivos",
      image: "/images/training/barking-intro.jpg",
      imageAlt: "Cão latindo",
      imageHeight: "200px",
      content: (
        <>
          <p>
            Nesta aula, você aprenderá a controlar os latidos excessivos do seu cão. 
            Este é um comportamento natural, mas que pode ser gerenciado de forma adequada.
          </p>
        </>
      )
    },
    {
      title: "Como Controlar",
      content: (
        <>
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
              marginBottom: '15px',
              position: 'relative',
              paddingLeft: '30px'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '0',
                color: '#007bff',
                fontWeight: 'bold',
                fontSize: '1.1em'
              }}>1.</span>
              <span style={{
                fontSize: '16px',
                color: '#333',
                fontWeight: '500'
              }}>Identifique o motivo do latido</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Observe quando e por que seu cão late</span>
            </li>
            <li style={{ 
              marginBottom: '15px',
              position: 'relative',
              paddingLeft: '30px'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '0',
                color: '#007bff',
                fontWeight: 'bold',
                fontSize: '1.1em'
              }}>2.</span>
              <span style={{
                fontSize: '16px',
                color: '#333',
                fontWeight: '500'
              }}>Remova o estímulo quando possível</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Afaste o cão da fonte de estresse</span>
            </li>
            <li style={{ 
              marginBottom: '15px',
              position: 'relative',
              paddingLeft: '30px'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '0',
                color: '#007bff',
                fontWeight: 'bold',
                fontSize: '1.1em'
              }}>3.</span>
              <span style={{
                fontSize: '16px',
                color: '#333',
                fontWeight: '500'
              }}>Ensine o comando "quieto"</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Recompense quando ele parar de latir</span>
            </li>
            <li style={{ 
              marginBottom: '15px',
              position: 'relative',
              paddingLeft: '30px'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '0',
                color: '#007bff',
                fontWeight: 'bold',
                fontSize: '1.1em'
              }}>4.</span>
              <span style={{
                fontSize: '16px',
                color: '#333',
                fontWeight: '500'
              }}>Pratique em diferentes situações</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Comece em ambientes controlados</span>
            </li>
            <li style={{ 
              marginBottom: '15px',
              position: 'relative',
              paddingLeft: '30px'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '0',
                color: '#007bff',
                fontWeight: 'bold',
                fontSize: '1.1em'
              }}>5.</span>
              <span style={{
                fontSize: '16px',
                color: '#333',
                fontWeight: '500'
              }}>Seja consistente no treinamento</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Mantenha a mesma abordagem sempre</span>
            </li>
          </ol>
        </>
      )
    },
    {
      title: "Dicas e Prevenção",
      content: (
        <>
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
              marginBottom: '15px',
              position: 'relative',
              paddingLeft: '30px'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '0',
                color: '#007bff',
                fontSize: '1.2em'
              }}>•</span>
              <span style={{
                fontSize: '16px',
                color: '#333',
                fontWeight: '500'
              }}>Exercite seu cão regularmente</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Cães cansados latem menos</span>
            </li>
            <li style={{ 
              marginBottom: '15px',
              position: 'relative',
              paddingLeft: '30px'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '0',
                color: '#007bff',
                fontSize: '1.2em'
              }}>•</span>
              <span style={{
                fontSize: '16px',
                color: '#333',
                fontWeight: '500'
              }}>Proporcione enriquecimento ambiental</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Brinquedos e atividades mentais ajudam</span>
            </li>
            <li style={{ 
              marginBottom: '15px',
              position: 'relative',
              paddingLeft: '30px'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '0',
                color: '#007bff',
                fontSize: '1.2em'
              }}>•</span>
              <span style={{
                fontSize: '16px',
                color: '#333',
                fontWeight: '500'
              }}>Evite reforçar o latido</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Não dê atenção quando ele latir sem motivo</span>
            </li>
            <li style={{ 
              marginBottom: '15px',
              position: 'relative',
              paddingLeft: '30px'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '0',
                color: '#007bff',
                fontSize: '1.2em'
              }}>•</span>
              <span style={{
                fontSize: '16px',
                color: '#333',
                fontWeight: '500'
              }}>Considere treinamento profissional</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Se o problema persistir, busque ajuda</span>
            </li>
            <li style={{ 
              marginBottom: '15px',
              position: 'relative',
              paddingLeft: '30px'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '0',
                color: '#007bff',
                fontSize: '1.2em'
              }}>•</span>
              <span style={{
                fontSize: '16px',
                color: '#333',
                fontWeight: '500'
              }}>Seja paciente e consistente</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Mudanças de comportamento levam tempo</span>
            </li>
          </ul>
        </>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === 2) {
      // Salvar no localStorage primeiro
      localStorage.setItem("behavior3_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "behavior3",
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
            
            console.log("Progresso da lição Behavior3 salvo com sucesso");
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
      title="Latidos Excessivos"
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