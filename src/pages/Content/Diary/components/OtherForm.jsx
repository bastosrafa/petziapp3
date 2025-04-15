import { useState } from "react";
import { useFirestore } from "@/hooks/useFirestore";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Timestamp } from 'firebase/firestore';
import styled from "styled-components";

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

const OtherForm = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const { addDocument } = useFirestore('diary');
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDocument({
        type: 'other',
        title,
        description,
        date: Timestamp.fromDate(new Date(date)),
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