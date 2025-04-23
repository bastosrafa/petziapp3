import { useState } from "react";
import { useFirestore } from "@/hooks/useFirestore";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Timestamp } from 'firebase/firestore';
import styled from "styled-components";
import { useToast } from "@/shadcn/components/ui/use-toast";

const FormContainer = styled.div`
  padding: 20px;
`;

const FormTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
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

const OtherForm = ({ onClose, onSuccess }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(new Date().toTimeString().slice(0, 5));
  const { addDocument } = useFirestore('diary');
  const { user } = useAuthContext();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await addDocument({
        type: 'other',
        title,
        description,
        date: Timestamp.fromDate(combineDateAndTime(date, time)),
        userId: user.uid,
        createdAt: Timestamp.now(),
        category: "outros"
      });

      if (result && result.type === 'SUCCESS') {
        toast({
          title: "Sucesso!",
          description: "Registro adicionado com sucesso.",
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
      <FormTitle>Novo Registro</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Título</Label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Digite um título para o registro"
          />
        </FormGroup>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <FormGroup>
            <Label>Data</Label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Hora</Label>
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </FormGroup>
        </div>

        <FormGroup>
          <Label>Descrição</Label>
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Descreva o registro em detalhes"
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
};

export default OtherForm; 