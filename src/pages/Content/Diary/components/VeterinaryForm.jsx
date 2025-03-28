import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";
import { Textarea } from "@/shadcn/components/ui/textarea";
import { X } from "lucide-react";
import { toast } from "@/shadcn/components/ui/use-toast";

export default function VeterinaryForm({ onClose }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    category: "veterinario",
    title: "",
    description: "",
    location: "",
    attachments: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Implementar a lógica de salvamento
      toast({
        title: "Registro salvo com sucesso!",
        description: "A visita ao veterinário foi registrada no diário.",
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
        <CardTitle>Nova Visita ao Veterinário</CardTitle>
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
              <Label htmlFor="time">Hora</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Ex: Consulta de rotina, Exame de sangue"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Descreva os detalhes da visita..."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Localização (opcional)</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="Nome da clínica ou endereço"
            />
          </div>

          <div className="space-y-2">
            <Label>Anexos (opcional)</Label>
            <div className="flex items-center gap-2">
              <Input
                type="file"
                multiple
                onChange={(e) => {
                  const files = Array.from(e.target.files);
                  setFormData({ ...formData, attachments: files });
                }}
              />
              <Button type="button" variant="outline">
                Anexar
              </Button>
            </div>
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