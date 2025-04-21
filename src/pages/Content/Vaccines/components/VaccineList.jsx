import { useVaccineContext } from "../contexts/VaccineContext";
import styled from "styled-components";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "@/shadcn/components/ui/use-toast";
import { useState } from "react";

const Container = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #333;
  margin: 0;
`;

const TabsContainer = styled.div`
  width: 100%;
`;

const TabsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  padding: 10px;
  border: none;
  background: ${props => props.$active ? '#007bff' : '#f8f9fa'};
  color: ${props => props.$active ? 'white' : '#333'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.$active ? '#0056b3' : '#e9ecef'};
  }
`;

const TabContent = styled.div`
  display: ${props => props.$active ? 'block' : 'none'};
`;

const VaccineCard = styled.div`
  padding: 15px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const VaccineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const VaccineTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin: 0;
`;

const VaccineInfo = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
`;

const Badge = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${props => props.$variant === 'success' ? '#28a745' : '#6c757d'};
  color: white;
`;

const Button = styled.button`
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f8f9fa;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const LoadingSpinner = styled.div`
  width: 30px;
  height: 30px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  color: #666;
  margin: 0;
`;

const ErrorText = styled.p`
  color: #dc3545;
  text-align: center;
  margin: 0;
`;

export default function VaccineList() {
  const { vaccines, loading, error, updateVaccineStatus } = useVaccineContext();
  const [activeTab, setActiveTab] = useState('pending');

  console.log("Estado do VaccineList:", { loading, error, vaccinesCount: vaccines.length });

  const handleStatusUpdate = async (vaccineId, newStatus) => {
    try {
      await updateVaccineStatus(vaccineId, newStatus);
      toast({
        title: "Sucesso",
        description: `Vacina marcada como ${newStatus.toLowerCase()}`,
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao atualizar status da vacina.",
        variant: "destructive",
      });
    }
  };

  const pendingVaccines = vaccines.filter((v) => v.status === "Pendente");
  const appliedVaccines = vaccines.filter((v) => v.status === "Aplicada");

  console.log("Vacinas filtradas:", { 
    total: vaccines.length, 
    pending: pendingVaccines.length, 
    applied: appliedVaccines.length 
  });

  if (loading) {
    return (
      <Container>
        <Header>
          <Title>Histórico de Vacinas e Medicamentos</Title>
        </Header>
        <LoadingContainer>
          <LoadingSpinner />
          <LoadingText>Carregando vacinas...</LoadingText>
        </LoadingContainer>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Header>
          <Title>Histórico de Vacinas e Medicamentos</Title>
        </Header>
        <ErrorText>Erro ao carregar vacinas: {error}</ErrorText>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Histórico de Vacinas e Medicamentos</Title>
      </Header>
      <TabsContainer>
        <TabsList>
          <TabButton
            $active={activeTab === 'pending'}
            onClick={() => setActiveTab('pending')}
          >
            Pendentes ({pendingVaccines.length})
          </TabButton>
          <TabButton
            $active={activeTab === 'applied'}
            onClick={() => setActiveTab('applied')}
          >
            Aplicadas ({appliedVaccines.length})
          </TabButton>
        </TabsList>

        <TabContent $active={activeTab === 'pending'}>
          {pendingVaccines.length > 0 ? (
            pendingVaccines.map((vaccine) => (
              <VaccineCard key={vaccine.id}>
                <VaccineHeader>
                  <div>
                    <VaccineTitle>{vaccine.name}</VaccineTitle>
                    <VaccineInfo>Tipo: {vaccine.type}</VaccineInfo>
                    <VaccineInfo>
                      Data: {vaccine.date && !isNaN(new Date(vaccine.date).getTime()) 
                        ? format(new Date(vaccine.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                        : "Data não disponível"}
                    </VaccineInfo>
                    {vaccine.notes && (
                      <VaccineInfo>Obs: {vaccine.notes}</VaccineInfo>
                    )}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                    <Badge>Pendente</Badge>
                    <Button onClick={() => handleStatusUpdate(vaccine.id, "Aplicada")}>
                      Marcar como Aplicada
                    </Button>
                  </div>
                </VaccineHeader>
              </VaccineCard>
            ))
          ) : (
            <VaccineInfo style={{ textAlign: 'center' }}>Nenhuma vacina pendente.</VaccineInfo>
          )}
        </TabContent>

        <TabContent $active={activeTab === 'applied'}>
          {appliedVaccines.length > 0 ? (
            appliedVaccines.map((vaccine) => (
              <VaccineCard key={vaccine.id}>
                <VaccineHeader>
                  <div>
                    <VaccineTitle>{vaccine.name}</VaccineTitle>
                    <VaccineInfo>Tipo: {vaccine.type}</VaccineInfo>
                    <VaccineInfo>
                      Data: {vaccine.date && !isNaN(new Date(vaccine.date).getTime()) 
                        ? format(new Date(vaccine.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                        : "Data não disponível"}
                    </VaccineInfo>
                    {vaccine.notes && (
                      <VaccineInfo>Obs: {vaccine.notes}</VaccineInfo>
                    )}
                  </div>
                  <Badge $variant="success">Aplicada</Badge>
                </VaccineHeader>
              </VaccineCard>
            ))
          ) : (
            <VaccineInfo style={{ textAlign: 'center' }}>Nenhuma vacina aplicada.</VaccineInfo>
          )}
        </TabContent>
      </TabsContainer>
    </Container>
  );
} 