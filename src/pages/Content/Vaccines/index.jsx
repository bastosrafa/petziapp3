import { useEffect } from "react";
import VaccineForm from "./components/VaccineForm";
import VaccineList from "./components/VaccineList";
import { useVaccineReminders } from "./hooks/useVaccineReminders";
import styled from "styled-components";
import { Bell } from "lucide-react";

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
`;

const NotificationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
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

  const handleEnableNotifications = async () => {
    const granted = await requestNotificationPermission();
    if (granted) {
      // Notificação de sucesso será mostrada pelo componente VaccineList
    }
  };

  return (
    <Container>
      <Header>
        <Title>Carteira de Vacinação e Medicamentos</Title>
        <NotificationButton onClick={handleEnableNotifications}>
          <Bell size={20} />
          Ativar Lembretes
        </NotificationButton>
      </Header>

      <Grid>
        <VaccineForm />
        <VaccineList />
      </Grid>
    </Container>
  );
} 