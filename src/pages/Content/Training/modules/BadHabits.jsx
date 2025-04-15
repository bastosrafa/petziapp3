import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useFirestore } from '../../../../hooks/useFirestore';
import { useAuthContext } from '../../../../hooks/useAuthContext';
import { toast } from 'react-hot-toast';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Content = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: #333;
  line-height: 1.6;
`;

const Button = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.2s;
  cursor: pointer;
  border: none;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background-color: #4338ca;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

const BadHabits = () => {
  const navigate = useNavigate();
  const { addDocument } = useFirestore('training_progress');
  const { user } = useAuthContext();
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Check if module is already completed
    const checkCompletion = async () => {
      if (user) {
        const query = {
          where: [
            ['userId', '==', user.uid],
            ['moduleId', '==', 'badhabits']
          ]
        };
        const docs = await addDocument.getDocs(query);
        setIsCompleted(!docs.empty);
      }
    };
    checkCompletion();
  }, [user, addDocument]);

  const handleComplete = async () => {
    if (!user) return;

    try {
      await addDocument.add({
        userId: user.uid,
        moduleId: 'badhabits',
        completedAt: new Date(),
        progress: 100
      });

      // Unlock next module
      localStorage.setItem('badhabits_unlocked', 'true');
      setIsCompleted(true);
      toast.success('Módulo concluído com sucesso!');
      navigate('/content/training');
    } catch (error) {
      console.error('Error completing module:', error);
      toast.error('Erro ao concluir o módulo');
    }
  };

  return (
    <Container>
      <Header>
        <Title>Evitando Maus Hábitos ⚠️</Title>
        <Description>
          Aprenda a prevenir e corrigir comportamentos indesejados do seu pet, como morder móveis, latir excessivamente e outros hábitos problemáticos.
        </Description>
      </Header>

      <Content>
        <Section>
          <SectionTitle>Identificando Maus Hábitos</SectionTitle>
          <List>
            <ListItem>Morder móveis e objetos</ListItem>
            <ListItem>Latir excessivamente</ListItem>
            <ListItem>Pular em pessoas</ListItem>
            <ListItem>Puxar a coleira durante passeios</ListItem>
            <ListItem>Fazer xixi em lugares inadequados</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Prevenção e Correção</SectionTitle>
          <List>
            <ListItem>Fornecer brinquedos adequados para mastigação</ListItem>
            <ListItem>Usar reforço positivo para comportamentos desejados</ListItem>
            <ListItem>Estabelecer rotinas consistentes</ListItem>
            <ListItem>Usar comandos claros e consistentes</ListItem>
            <ListItem>Proporcionar exercícios físicos e mentais adequados</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Dicas Importantes</SectionTitle>
          <List>
            <ListItem>Seja paciente e consistente no treinamento</ListItem>
            <ListItem>Evite punições físicas ou gritos</ListItem>
            <ListItem>Identifique as causas dos comportamentos indesejados</ListItem>
            <ListItem>Consulte um profissional se necessário</ListItem>
          </List>
        </Section>

        <Button onClick={handleComplete} disabled={isCompleted}>
          {isCompleted ? 'Módulo Concluído' : 'Concluir Módulo'}
        </Button>
      </Content>
    </Container>
  );
};

export default BadHabits; 