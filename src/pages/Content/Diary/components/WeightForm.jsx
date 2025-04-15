import { useState } from "react";
import { useFirestore } from "@/hooks/useFirestore";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Timestamp } from 'firebase/firestore';
import styled from "styled-components";
import { X } from "lucide-react";

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

export default function WeightForm({ onClose }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    weight: "",
    height: "",
    length: "",
    notes: "",
    category: "peso"
  });

  const { addDocument } = useFirestore('diary');
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDocument({
        ...formData,
        date: Timestamp.fromDate(new Date(formData.date)),
        userId: user.uid,
        createdAt: Timestamp.now()
      });
      onClose();
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  return (
    <FormContainer>
      <FormHeader>
        <FormTitle>Novo Registro de Peso e Medidas</FormTitle>
        <CloseButton onClick={onClose}>
          <X size={20} />
        </CloseButton>
      </FormHeader>

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Data</Label>
          <Input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </FormGroup>

        <Grid>
          <FormGroup>
            <Label>Peso (kg)</Label>
            <Input
              type="number"
              step="0.1"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              placeholder="Ex: 5.2"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Altura (cm)</Label>
            <Input
              type="number"
              value={formData.height}
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
              placeholder="Ex: 25"
              required
            />
          </FormGroup>
        </Grid>

        <FormGroup>
          <Label>Comprimento (cm)</Label>
          <Input
            type="number"
            value={formData.length}
            onChange={(e) => setFormData({ ...formData, length: e.target.value })}
            placeholder="Ex: 40"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Observações</Label>
          <TextArea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Adicione observações relevantes..."
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