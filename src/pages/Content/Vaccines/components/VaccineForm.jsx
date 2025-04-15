import { useState } from "react";
import { useVaccineContext } from "../contexts/VaccineContext";
import styled from "styled-components";
import { X } from "lucide-react";

const FormContainer = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  
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

export default function VaccineForm({ onClose }) {
  const { addVaccine } = useVaccineContext();
  const [formData, setFormData] = useState({
    name: "",
    date: new Date().toISOString().split('T')[0],
    status: "Pendente",
    type: "V8/V10",
    notes: "",
  });

  const vaccineTypes = [
    { value: "V8/V10", label: "V8/V10" },
    { value: "antirrabica", label: "Antirrábica" },
    { value: "gripe", label: "Gripe" },
    { value: "giardia", label: "Giárdia" },
    { value: "antipulgas", label: "Anti-pulgas e Carrapatos" },
    { value: "vermifugo", label: "Vermífugos" },
    { value: "outro", label: "Outro" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.date) {
      return;
    }

    try {
      await addVaccine(formData);
      setFormData({
        name: "",
        date: new Date().toISOString().split('T')[0],
        status: "Pendente",
        type: "V8/V10",
        notes: "",
      });
    } catch (error) {
      console.error('Error adding vaccine:', error);
    }
  };

  return (
    <FormContainer>
      <FormHeader>
        <FormTitle>Adicionar Novo</FormTitle>
        {onClose && (
          <CloseButton onClick={onClose}>
            <X size={20} />
          </CloseButton>
        )}
      </FormHeader>

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nome</Label>
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Nome da vacina ou medicamento"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Tipo</Label>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            {vaccineTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Data de Aplicação</Label>
          <Input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Status</Label>
          <Select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="Pendente">Pendente</option>
            <option value="Aplicada">Aplicada</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Observações</Label>
          <TextArea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Observações adicionais"
          />
        </FormGroup>

        <ButtonGroup>
          {onClose && (
            <CancelButton type="button" onClick={onClose}>
              Cancelar
            </CancelButton>
          )}
          <SaveButton type="submit">
            Adicionar Vacina
          </SaveButton>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
} 