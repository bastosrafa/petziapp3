import { useState } from "react";
import { useVaccineContext } from "../contexts/VaccineContext";
import { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { Label } from "@/shadcn/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shadcn/components/ui/select";
import { toast } from "@/shadcn/components/ui/use-toast";
import { X } from "lucide-react";

export default function VaccineForm({ onClose }) {
  const { addVaccine } = useVaccineContext();
  const [formData, setFormData] = useState({
    name: "",
    date: "",
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
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    try {
      await addVaccine(formData);
      setFormData({
        name: "",
        date: "",
        status: "Pendente",
        type: "V8/V10",
        notes: "",
      });
      toast({
        title: "Sucesso",
        description: "Vacina registrada com sucesso!",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao registrar vacina. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Adicionar Novo</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Nome da vacina ou medicamento"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Tipo</Label>
            <Select
              value={formData.type}
              onValueChange={(value) => setFormData({ ...formData, type: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                {vaccineTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Data de Aplicação</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select
              value={formData.status}
              onValueChange={(value) => setFormData({ ...formData, status: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pendente">Pendente</SelectItem>
                <SelectItem value="Aplicada">Aplicada</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Observações</Label>
            <Input
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Observações adicionais"
            />
          </div>

          <Button type="submit" className="w-full">
            Adicionar Vacina
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 