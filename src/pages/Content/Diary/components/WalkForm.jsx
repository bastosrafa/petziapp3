import { useState } from "react";
import { useFirestore } from "@/hooks/useFirestore";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Timestamp } from 'firebase/firestore';
import styled from "styled-components";
import { X } from "lucide-react";
import { useToast } from "@/shadcn/components/ui/use-toast";

const FormContainer = styled.div`
  padding: 20px;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const FormTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #666;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
`;

const SaveButton = styled(Button)`
  background-color: #007bff;
  color: white;
  border: none;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #e9ecef;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export default function WalkForm({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    duration: "",
    location: "",
    notes: "",
    category: "passeio"
  });

  const { addDocument } = useFirestore('diary');
  const { user } = useAuthContext();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await addDocument({
        ...formData,
        date: Timestamp.fromDate(combineDateAndTime(formData.date, formData.time)),
        userId: user.uid,
        createdAt: Timestamp.now()
      });

      if (result && result.type === 'SUCCESS') {
        toast({
          title: "Sucesso!",
          description: "Registro de passeio adicionado com sucesso.",
          variant: "default",
        });
        if (onSuccess) {
          onSuccess();
        }
        onClose();
      } else {
        toast({
          title: "Erro",
          description: "Não foi possível adicionar o registro. Tente novamente.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error adding record:', error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao adicionar o registro. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  // Função para combinar data e hora em um único objeto Date
  const combineDateAndTime = (dateString, timeString) => {
    const [year, month, day] = dateString.split('-').map(num => parseInt(num, 10));
    const [hours, minutes] = timeString.split(':').map(num => parseInt(num, 10));
    
    // Mês em JavaScript é 0-indexed (0-11 em vez de 1-12)
    const date = new Date(year, month - 1, day, hours, minutes);
    return date;
  };

  return (
    <FormContainer>
      <FormHeader>
        <FormTitle>Novo Registro de Passeio</FormTitle>
        <CloseButton onClick={onClose}>
          <X size={20} />
        </CloseButton>
      </FormHeader>

      <form onSubmit={handleSubmit}>
        <Grid>
          <FormGroup>
            <Label>Data</Label>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Hora</Label>
            <Input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              required
            />
          </FormGroup>
        </Grid>

        <FormGroup>
          <Label>Duração (minutos)</Label>
          <Input
            type="number"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            placeholder="Ex: 30"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Local</Label>
          <Input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="Onde foi o passeio?"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Observações</Label>
          <TextArea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Adicione observações relevantes sobre o passeio..."
          />
        </FormGroup>

        <ButtonGroup>
          <CancelButton type="button" onClick={onClose}>
            Cancelar
          </CancelButton>
          <SaveButton type="submit">
            Salvar
          </SaveButton>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
} 