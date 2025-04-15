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

const Jumping = () => {
  const navigate = useNavigate();
  const { completeLesson } = useTrainingContext();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    completeLesson('bad-habits', 'jumping');
    setIsCompleted(true);
    setTimeout(() => {
      navigate('/content/training/bad-habits');
    }, 1500);
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/content/training/bad-habits')}>←</BackButton>
        <Title>Pulos em Pessoas</Title>
      </Header>

      <Content>
        <Section>
          <SectionTitle>Entendendo o Comportamento</SectionTitle>
          <Text>
            Cães pulam em pessoas por diversos motivos: para cumprimentar, chamar
            atenção ou demonstrar excitação. Embora seja um comportamento natural,
            pode ser perigoso e incômodo, especialmente com crianças e idosos.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Técnicas de Controle</SectionTitle>
          <List>
            <ListItem>
              <strong>Ignorar o pulo:</strong> Vire-se de costas e ignore o cão
              quando ele pular. Só dê atenção quando as quatro patas estiverem no
              chão.
            </ListItem>
            <ListItem>
              <strong>Comando "Senta":</strong> Ensine o comando "senta" e use-o
              quando o cão tentar pular. Recompense quando ele obedecer.
            </ListItem>
            <ListItem>
              <strong>Treinamento com visitas:</strong> Peça para visitas
              seguirem a mesma regra: ignorar quando o cão pular e dar atenção
              apenas quando ele estiver calmo.
            </ListItem>
            <ListItem>
              <strong>Exercícios de calma:</strong> Ensine o cão a se acalmar
              antes de receber atenção ou carinho.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Dicas Adicionais</SectionTitle>
          <List>
            <ListItem>
              Seja consistente: todos em casa devem seguir as mesmas regras.
            </ListItem>
            <ListItem>
              Mantenha a calma e evite gritar ou empurrar o cão.
            </ListItem>
            <ListItem>
              Use uma coleira durante o treinamento para ter mais controle.
            </ListItem>
            <ListItem>
              Recompense comportamentos calmos e gentis.
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

export default Jumping; 