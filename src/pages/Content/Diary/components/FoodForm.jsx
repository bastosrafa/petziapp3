import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";
import { Textarea } from "@/shadcn/components/ui/textarea";
import { X } from "lucide-react";
import { toast } from "@/shadcn/components/ui/use-toast";
import { dashboardService } from "@/firebase/services/dashboardService";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Timestamp } from 'firebase/firestore';

export default function FoodForm({ onClose }) {
  const { user } = useAuthContext();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    category: "alimentacao",
    type: "",
    amount: "",
    unit: "g",
    brand: "",
    notes: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Erro ao salvar",
        description: "Você precisa estar logado para registrar uma alimentação.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Criar timestamp combinando data e hora
      const date = new Date(formData.date);
      if (formData.time) {
        const [hours, minutes] = formData.time.split(':');
        date.setHours(parseInt(hours), parseInt(minutes), 0, 0);
      }
      
      // Converter para Timestamp do Firestore
      const timestamp = Timestamp.fromDate(date);

      // Preparar dados para salvar
      const foodData = {
        timestamp,
        type: formData.type,
        amount: formData.amount ? parseFloat(formData.amount) : null,
        unit: formData.unit,
        brand: formData.brand || null,
        notes: formData.notes || null,
        category: formData.category
      };

      await dashboardService.updateActivity(user.uid, 'food', foodData);
      
      toast({
        title: "Registro salvo com sucesso!",
        description: "A alimentação foi registrada no diário.",
      });
      onClose();
    } catch (error) {
      console.error('Error saving food entry:', error);
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
        <CardTitle>Registro de Alimentação</CardTitle>
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
              <Label htmlFor="type">Tipo de Alimento</Label>
              <Input
                id="type"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                placeholder="Ex: Ração seca, Ração úmida, Petisco"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Quantidade</Label>
              <Input
                id="amount"
                type="number"
                step="0.1"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                placeholder="Ex: 100"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="brand">Marca (opcional)</Label>
            <Input
              id="brand"
              value={formData.brand}
              onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              placeholder="Ex: Royal Canin, Pedigree"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Observações (opcional)</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Observações sobre a alimentação, apetite, etc..."
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