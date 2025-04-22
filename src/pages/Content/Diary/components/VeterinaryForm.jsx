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

export default function VeterinaryForm({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    category: "veterinario",
    title: "",
    description: "",
    location: "",
  });

  const { addDocument } = useFirestore('diary');
  const { user } = useAuthContext();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await addDocument({
        ...formData,
        date: Timestamp.fromDate(new Date(formData.date)),
        userId: user.uid,
        createdAt: Timestamp.now()
      });

      if (result && result.type === 'SUCCESS') {
        toast({
          title: "Sucesso!",
          description: "Visita ao veterinário registrada com sucesso.",
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

  return (
    <FormContainer>
      <FormHeader>
        <FormTitle>Nova Visita ao Veterinário</FormTitle>
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
          <Label>Título</Label>
          <Input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Ex: Consulta de rotina, Exame de sangue"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Descrição</Label>
          <TextArea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Descreva os detalhes da visita..."
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Localização (opcional)</Label>
          <Input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="Nome da clínica ou endereço"
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