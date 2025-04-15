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

const Biting = () => {
  const navigate = useNavigate();
  const { completeLesson } = useTrainingContext();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    completeLesson('bad-habits', 'biting');
    setIsCompleted(true);
    setTimeout(() => {
      navigate('/content/training/bad-habits');
    }, 1500);
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/content/training/bad-habits')}>←</BackButton>
        <Title>Mordidas e Destruição de Objetos</Title>
      </Header>

      <Content>
        <Section>
          <SectionTitle>Entendendo o Comportamento</SectionTitle>
          <Text>
            Filhotes mordem naturalmente para explorar o mundo e aliviar o desconforto
            da dentição. Cães adultos podem morder por tédio, ansiedade ou falta de
            exercício. A destruição de objetos geralmente está relacionada a esses
            mesmos fatores.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Técnicas de Controle</SectionTitle>
          <List>
            <ListItem>
              <strong>Redirecionamento:</strong> Quando o cão morder algo inadequado,
              ofereça um brinquedo apropriado e elogie quando ele aceitar.
            </ListItem>
            <ListItem>
              <strong>Exercícios e brincadeiras:</strong> Aumente a quantidade de
              exercícios físicos e mentais para gastar energia.
            </ListItem>
            <ListItem>
              <strong>Enriquecimento ambiental:</strong> Ofereça brinquedos
              interativos e ossos para roer.
            </ListItem>
            <ListItem>
              <strong>Limitação de acesso:</strong> Em casos graves, restrinja o
              acesso a áreas com objetos valiosos.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Dicas Adicionais</SectionTitle>
          <List>
            <ListItem>
              Nunca puna fisicamente o cão por morder ou destruir objetos.
            </ListItem>
            <ListItem>
              Seja consistente no treinamento e mantenha a calma.
            </ListItem>
            <ListItem>
              Considere o uso de feromônios ou consulta com um veterinário
              comportamentalista se o problema persistir.
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
    </Container>
  );
};

export default Biting; 