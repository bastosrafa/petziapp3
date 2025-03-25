import { useState } from "react";
import { useVaccineContext } from "../contexts/VaccineContext";
import { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { Label } from "@/shadcn/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shadcn/components/ui/select";
import { toast } from "@/shadcn/components/ui/use-toast";

export default function VaccineForm() {
  const { addVaccine } = useVaccineContext();
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    status: "Pendente",
    type: "V8/V10",
    notes: "",
  });

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
        <CardTitle>Adicionar Nova Vacina</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome da Vacina</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ex: V8, V10, Antirrábica"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Tipo de Vacina</Label>
            <Select
              value={formData.type}
              onValueChange={(value) => setFormData({ ...formData, type: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="V8/V10">V8/V10</SelectItem>
                <SelectItem value="Antirrábica">Antirrábica</SelectItem>
                <SelectItem value="Gripe">Gripe</SelectItem>
                <SelectItem value="Giárdia">Giárdia</SelectItem>
                <SelectItem value="Outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Data da Vacina</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
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