import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";
import { Textarea } from "@/shadcn/components/ui/textarea";
import { X } from "lucide-react";
import { toast } from "@/shadcn/components/ui/use-toast";

export default function WalkForm({ onClose }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    category: "passeios",
    duration: "",
    distance: "",
    location: "",
    weather: "",
    notes: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Implementar a lógica de salvamento
      toast({
        title: "Registro salvo com sucesso!",
        description: "O passeio foi registrado no diário.",
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
        <CardTitle>Registro de Passeio</CardTitle>
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
              <Label htmlFor="duration">Duração (minutos)</Label>
              <Input
                id="duration"
                type="number"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                placeholder="Ex: 30"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="distance">Distância (km) (opcional)</Label>
              <Input
                id="distance"
                type="number"
                step="0.1"
                value={formData.distance}
                onChange={(e) => setFormData({ ...formData, distance: e.target.value })}
                placeholder="Ex: 2.5"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Local (opcional)</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="Ex: Parque do Cão, Praça Central"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="weather">Condições do Tempo (opcional)</Label>
            <Input
              id="weather"
              value={formData.weather}
              onChange={(e) => setFormData({ ...formData, weather: e.target.value })}
              placeholder="Ex: Ensolarado, Nublado, Chuvoso"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Observações (opcional)</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Observações sobre o passeio, comportamento do pet, etc..."
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