import React, { useState } from "react";
import LessonBase from "@/components/LessonBase";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { useCollection } from "@/hooks/useCollection";
import { Timestamp } from 'firebase/firestore';

export default function Behavior4({ onNextLesson, onBack }) {
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
      title: "Deitar e Rolar",
      image: "/images/training/lay-roll-intro.jpg",
      imageAlt: "Cão deitado e rolando",
      imageHeight: "200px",
      content: (
        <>
          <p>
            Nesta aula, você aprenderá a ensinar seu cão a deitar e rolar sob comando. 
            Este é um truque divertido que também ajuda no controle e na obediência do cão.
          </p>
        </>
      )
    },
    {
      title: "Como Ensinar",
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
              }}>Ensine primeiro o comando "deita"</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Use um petisco para guiar o cão para baixo</span>
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
              }}>Introduza o comando "rola"</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Guie o cão com o petisco em um movimento circular</span>
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
              }}>Combine os comandos</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Peça para "deitar" e depois "rolar"</span>
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
              }}>Reduza gradualmente o uso do petisco</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Use apenas o comando verbal e gestual</span>
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
              }}>Pratique em diferentes locais</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Isso ajuda a generalizar o comportamento</span>
            </li>
          </ol>
        </>
      )
    },
    {
      title: "Dicas e Truques",
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
              }}>Escolha um local confortável</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>O cão precisa se sentir seguro para rolar</span>
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
              }}>Use recompensas de alto valor</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Isso motiva o cão a tentar o movimento</span>
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
              }}>Seja paciente com o processo</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Alguns cães podem demorar mais para aprender</span>
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
              }}>Mantenha as sessões curtas</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>5-10 minutos por vez são suficientes</span>
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
              }}>Celebre cada pequeno progresso</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Recompense mesmo tentativas parciais</span>
            </li>
          </ul>
        </>
      )
    }
  ];

  const nextSlide = async () => {
    if (currentSlide === 2) {
      // Salvar no localStorage primeiro
      localStorage.setItem("behavior4_completed", "true");
      window.dispatchEvent(new Event('storage'));
      
      // Tentar salvar no Firestore em segundo plano
      try {
        if (user) {
          const progressData = {
            lessonId: "behavior4",
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
            
            console.log("Progresso da lição Behavior4 salvo com sucesso");
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
      title="Não Destruir Objetos"
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