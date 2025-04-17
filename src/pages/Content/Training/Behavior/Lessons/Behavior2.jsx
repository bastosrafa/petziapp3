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
              }}>Ignore o cão quando ele pular</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Não faça contato visual ou fale com ele</span>
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
              }}>Vire as costas e não faça contato visual</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Mostre que pulando ele não receberá atenção</span>
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
              }}>Recompense quando ele estiver com as patas no chão</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Use petiscos ou carinho como recompensa</span>
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
              }}>Pratique com diferentes pessoas</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Isso ajuda a generalizar o comportamento</span>
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
              }}>Seja consistente em todas as situações</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>A consistência é fundamental para o sucesso</span>
            </li>
          </ol>
        </>
      )
    },
    {
      title: "Prática e Dicas",
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
              }}>Mantenha a calma e não grite</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>O cão precisa de um líder calmo e confiante</span>
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
              }}>Ensine um comportamento alternativo</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Como sentar para receber atenção</span>
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
              }}>Recompense comportamentos calmos</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Valorize quando o cão estiver tranquilo</span>
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
              }}>Pratique com visitas</span>
              <br />
              <span style={{ 
                fontSize: '14px',
                color: '#666',
                display: 'block',
                marginTop: '5px'
              }}>Peça ajuda de amigos e familiares</span>
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
              }}>O treinamento leva tempo e dedicação</span>
            </li>
          </ul>
        </>
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
      title="Não Pular nas Pessoas"
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