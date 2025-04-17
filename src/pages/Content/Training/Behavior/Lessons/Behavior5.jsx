import React, { useState } from "react";
import LessonBase from "@/components/LessonBase";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFirestore } from "@/hooks/useFirestore";
import { useCollection } from "@/hooks/useCollection";
import { Timestamp } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

export default function Behavior5() {
  const navigate = useNavigate();
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
      title: "Introdução",
      image: "/images/behavior/behavior5-1.jpg",
      imageAlt: "Cão ansioso",
      content: (
        <div>
          <p>A ansiedade de separação é um problema comum em cães que pode causar comportamentos destrutivos e vocalizações excessivas quando o tutor se ausenta.</p>
          <p>Nesta aula, vamos aprender técnicas para ajudar seu cão a lidar melhor com a separação.</p>
        </div>
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
              }}>1. Comece com ausências curtas</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Saia por alguns minutos e volte, aumentando gradualmente o tempo.
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
              }}>2. Crie uma rotina de despedida</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Mantenha um ritual consistente ao sair e voltar.
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
              }}>3. Proporcione distrações</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Deixe brinquedos interativos e petiscos para o cão.
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
              }}>4. Ignore comportamentos ansiosos</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Não recompense a ansiedade com atenção.
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
              }}>5. Considere o uso de feromônios</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Produtos como Adaptil podem ajudar a acalmar o cão.
              </p>
            </li>
          </ol>
        </div>
      )
    },
    {
      title: "Prática e Dicas",
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
              }}>• Mantenha a calma</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Evite demonstrações excessivas de afeto ao sair e voltar.
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
              }}>• Exercite antes de sair</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Um cão cansado tende a ficar mais relaxado.
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
              }}>• Grave o comportamento</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Use câmeras para monitorar o comportamento do cão.
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
              }}>• Consulte um profissional</span>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                Em casos graves, busque ajuda de um especialista em comportamento.
              </p>
            </li>
          </ul>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Lógica para próxima aula
      navigate("/content/training/socialization");
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
      title="Ansiedade de Separação"
      slides={slides}
      currentSlide={currentSlide}
      onNextSlide={nextSlide}
      onPrevSlide={prevSlide}
      onGoToSlide={goToSlide}
      isLastLesson={true}
      nextModulePath="/content/training/socialization"
    />
  );
} 