import { useEffect } from "react";
import VaccineForm from "./components/VaccineForm";
import VaccineList from "./components/VaccineList";
import { useVaccineReminders } from "./hooks/useVaccineReminders";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default function Vaccines() {
  const { requestNotificationPermission } = useVaccineReminders();

  useEffect(() => {
    // Solicita permissão de notificação ao montar o componente
    requestNotificationPermission();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Carteira de Vacinação e Medicamentos</Title>
      </Header>

      <Grid>
        <VaccineForm />
        <VaccineList />
      </Grid>
    </Container>
  );
} 