import { useEffect } from "react";
import { useVaccineContext } from "../contexts/VaccineContext";
import { addDays, isAfter, isBefore, startOfDay } from "date-fns";

export const useVaccineReminders = () => {
  const { vaccines } = useVaccineContext();

  useEffect(() => {
    const checkUpcomingVaccines = () => {
      const today = startOfDay(new Date());
      const threeDaysFromNow = addDays(today, 3);

      vaccines.forEach((vaccine) => {
        if (vaccine.status === "Pendente") {
          const vaccineDate = new Date(vaccine.date);
          const vaccineDateStart = startOfDay(vaccineDate);

          // Verifica se a vacina está próxima (dentro de 3 dias)
          if (
            isAfter(vaccineDateStart, today) &&
            isBefore(vaccineDateStart, threeDaysFromNow)
          ) {
            // Aqui você pode implementar a lógica de notificação
            // Por exemplo, usando o sistema de notificações do navegador
            if (Notification.permission === "granted") {
              new Notification("Lembrete de Vacina", {
                body: `${vaccine.name} está agendada para ${vaccineDate.toLocaleDateString()}`,
                icon: "/icon.png", // Adicione o ícone do seu app
              });
            }
          }
        }
      });
    };

    // Verifica lembretes a cada 24 horas
    const interval = setInterval(checkUpcomingVaccines, 24 * 60 * 60 * 1000);

    // Verifica imediatamente ao montar o componente
    checkUpcomingVaccines();

    return () => clearInterval(interval);
  }, [vaccines]);

  // Função para solicitar permissão de notificação
  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      return permission === "granted";
    } catch (error) {
      console.error("Erro ao solicitar permissão de notificação:", error);
      return false;
    }
  };

  return {
    requestNotificationPermission,
  };
}; 