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
          <ol style={{ paddingLeft: '25px', marginTop: '15px', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '15px' }}>
              <span style={{ color: '#007bff', fontWeight: '500' }}>1. Comece com ausências curtas</span>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
                Saia por alguns minutos e volte, aumentando gradualmente o tempo.
              </p>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <span style={{ color: '#007bff', fontWeight: '500' }}>2. Crie uma rotina de despedida</span>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
                Mantenha um ritual consistente ao sair e voltar.
              </p>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <span style={{ color: '#007bff', fontWeight: '500' }}>3. Proporcione distrações</span>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
                Deixe brinquedos interativos e petiscos para o cão.
              </p>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <span style={{ color: '#007bff', fontWeight: '500' }}>4. Ignore comportamentos ansiosos</span>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
                Não recompense a ansiedade com atenção.
              </p>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <span style={{ color: '#007bff', fontWeight: '500' }}>5. Considere o uso de feromônios</span>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
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
          <ul style={{ paddingLeft: '25px', marginTop: '15px', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '15px' }}>
              <span style={{ color: '#007bff', fontWeight: '500' }}>• Mantenha a calma</span>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
                Evite demonstrações excessivas de afeto ao sair e voltar.
              </p>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <span style={{ color: '#007bff', fontWeight: '500' }}>• Exercite antes de sair</span>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
                Um cão cansado tende a ficar mais relaxado.
              </p>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <span style={{ color: '#007bff', fontWeight: '500' }}>• Grave o comportamento</span>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
                Use câmeras para monitorar o comportamento do cão.
              </p>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <span style={{ color: '#007bff', fontWeight: '500' }}>• Consulte um profissional</span>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
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
      title="Aula 5: Ansiedade de Separação"
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