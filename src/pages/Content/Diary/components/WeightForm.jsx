import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";
import { Textarea } from "@/shadcn/components/ui/textarea";
import { X } from "lucide-react";
import { toast } from "@/shadcn/components/ui/use-toast";

export default function WeightForm({ onClose }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    category: "peso",
    weight: "",
    height: "",
    length: "",
    chest: "",
    neck: "",
    notes: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Implementar a lógica de salvamento
      toast({
        title: "Registro salvo com sucesso!",
        description: "As medidas do pet foram registradas no diário.",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar o registro. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Peso e Medidas</CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Data</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Hora (opcional)</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="weight">Peso (kg)</Label>
              <Input
                id="weight"
                type="number"
                step="0.1"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                placeholder="Ex: 5.5"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Altura (cm) (opcional)</Label>
              <Input
                id="height"
                type="number"
                step="0.1"
                value={formData.height}
                onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                placeholder="Ex: 45.0"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="length">Comprimento (cm) (opcional)</Label>
              <Input
                id="length"
                type="number"
                step="0.1"
                value={formData.length}
                onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                placeholder="Ex: 60.0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="chest">Circunferência do Tórax (cm) (opcional)</Label>
              <Input
                id="chest"
                type="number"
                step="0.1"
                value={formData.chest}
                onChange={(e) => setFormData({ ...formData, chest: e.target.value })}
                placeholder="Ex: 65.0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="neck">Circunferência do Pescoço (cm) (opcional)</Label>
            <Input
              id="neck"
              type="number"
              step="0.1"
              value={formData.neck}
              onChange={(e) => setFormData({ ...formData, neck: e.target.value })}
              placeholder="Ex: 35.0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Observações (opcional)</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Observações sobre as medidas ou mudanças notadas..."
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
} 