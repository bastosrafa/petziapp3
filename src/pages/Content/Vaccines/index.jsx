import { useEffect } from "react";
import VaccineForm from "./components/VaccineForm";
import VaccineList from "./components/VaccineList";
import { useVaccineReminders } from "./hooks/useVaccineReminders";
import { Button } from "@/shadcn/components/ui/button";
import { toast } from "@/shadcn/components/ui/use-toast";
import { Bell } from "lucide-react";

export default function Vaccines() {
  const { requestNotificationPermission } = useVaccineReminders();

  useEffect(() => {
    // Solicita permissão de notificação ao montar o componente
    requestNotificationPermission();
  }, []);

  const handleEnableNotifications = async () => {
    const granted = await requestNotificationPermission();
    if (granted) {
      toast({
        title: "Notificações Ativadas",
        description: "Você receberá lembretes para suas vacinas pendentes.",
      });
    } else {
      toast({
        title: "Notificações Desativadas",
        description: "Você não receberá lembretes para suas vacinas.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Carteira de Vacinação e Medicamentos</h1>
          <Button onClick={handleEnableNotifications}>
            <Bell className="mr-2 h-4 w-4" />
            Ativar Lembretes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <VaccineForm />
        </div>
        <div className="space-y-6">
          <VaccineList />
        </div>
      </div>
    </div>
  );
} 