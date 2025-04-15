import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTrainingContext } from '../../../../context/TrainingContext';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

const Content = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
  color: #666;
  line-height: 1.6;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
`;

const CompleteButton = styled(Button)`
  background: #4CAF50;
  color: white;
  border: none;

  &:hover {
    background: #45a049;
  }
`;

const CancelButton = styled(Button)`
  background: none;
  border: 1px solid #ddd;
  color: #666;

  &:hover {
    background: #f5f5f5;
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 90%;
`;

const PopupTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const PopupText = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
`;

const PopupButton = styled(Button)`
  background: #4CAF50;
  color: white;
  border: none;
  width: 100%;

  &:hover {
    background: #45a049;
  }
`;

const ModuleCompletionPopup = ({ onClose, onNextModule }) => (
  <PopupOverlay>
    <PopupContent>
      <PopupTitle>Parabéns! 🎉</PopupTitle>
      <PopupText>
        Você completou o módulo de Maus Hábitos! Agora você pode avançar para o módulo
        de Exercícios Mentais.
      </PopupText>
      <PopupButton onClick={onNextModule}>
        Ir para Exercícios Mentais
      </PopupButton>
    </PopupContent>
  </PopupOverlay>
);

const Barking = () => {
  const navigate = useNavigate();
  const { completeLesson } = useTrainingContext();
  const [isCompleted, setIsCompleted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleComplete = () => {
    completeLesson('bad-habits', 'barking');
    setIsCompleted(true);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleNextModule = () => {
    // Desbloqueia a primeira aula do módulo de exercícios mentais
    localStorage.setItem("mental1_unlocked", "true");
    
    // Desbloqueia o módulo na página de adestramento
    localStorage.setItem("mental_unlocked", "true");
    
    // Navega para a primeira aula do módulo de exercícios mentais
    navigate("/content/training/mental");
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/content/training/bad-habits')}>←</BackButton>
        <Title>Latidos Excessivos</Title>
      </Header>

      <Content>
        <Section>
          <SectionTitle>Entendendo o Comportamento</SectionTitle>
          <Text>
            Os cães latem por diversos motivos: alerta, tédio, ansiedade, medo ou
            simplesmente para chamar atenção. Identificar a causa é o primeiro passo
            para resolver o problema.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Técnicas de Controle</SectionTitle>
          <List>
            <ListItem>
              <strong>Ignorar o latido:</strong> Não dê atenção quando o cão latir
              sem motivo aparente. Recompense apenas quando ele estiver quieto.
            </ListItem>
            <ListItem>
              <strong>Comando "Quieto":</strong> Ensine o comando "quieto" usando
              recompensas. Quando o cão parar de latir, dê um petisco e elogie.
            </ListItem>
            <ListItem>
              <strong>Exercícios físicos:</strong> Cães cansados latem menos.
              Aumente a quantidade de exercícios diários.
            </ListItem>
            <ListItem>
              <strong>Enriquecimento ambiental:</strong> Brinquedos interativos e
              atividades mentais ajudam a reduzir o tédio.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Dicas Adicionais</SectionTitle>
          <List>
            <ListItem>
              Mantenha a calma e seja consistente no treinamento.
            </ListItem>
            <ListItem>
              Evite punições físicas ou gritos, pois podem piorar o problema.
            </ListItem>
            <ListItem>
              Considere consultar um adestrador profissional se o problema persistir.
            </ListItem>
          </List>
        </Section>

        <ButtonGroup>
          <CompleteButton onClick={handleComplete}>
            {isCompleted ? 'Concluído!' : 'Concluir Lição'}
          </CompleteButton>
          <CancelButton onClick={() => navigate('/content/training/bad-habits')}>
            Voltar
          </CancelButton>
        </ButtonGroup>
      </Content>

      {showPopup && (
        <ModuleCompletionPopup
          onClose={handleClosePopup}
          onNextModule={handleNextModule}
        />
      )}
    </Container>
  );
};

export default Barking; 