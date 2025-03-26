import { useVaccineContext } from "../contexts/VaccineContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { Button } from "@/shadcn/components/ui/button";
import { Badge } from "@/shadcn/components/ui/badge";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "@/shadcn/components/ui/use-toast";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shadcn/components/ui/tabs";

export default function VaccineList() {
  const { vaccines, loading, error, updateVaccineStatus } = useVaccineContext();

  console.log("Estado do VaccineList:", { loading, error, vaccinesCount: vaccines.length });

  const handleStatusUpdate = async (vaccineId, newStatus) => {
    try {
      await updateVaccineStatus(vaccineId, newStatus);
      toast({
        title: "Sucesso",
        description: `Vacina marcada como ${newStatus.toLowerCase()}`,
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao atualizar status da vacina.",
        variant: "destructive",
      });
    }
  };

  const pendingVaccines = vaccines.filter((v) => v.status === "Pendente");
  const appliedVaccines = vaccines.filter((v) => v.status === "Aplicada");

  console.log("Vacinas filtradas:", { 
    total: vaccines.length, 
    pending: pendingVaccines.length, 
    applied: appliedVaccines.length 
  });

  if (loading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Histórico de Vacinas e Medicamentos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand mx-auto mb-4"></div>
              <p className="text-muted-foreground">Carregando vacinas...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Histórico de Vacinas e Medicamentos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-red-500">
            Erro ao carregar vacinas: {error}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Histórico de Vacinas e Medicamentos</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pending">
              Pendentes ({pendingVaccines.length})
            </TabsTrigger>
            <TabsTrigger value="applied">
              Aplicadas ({appliedVaccines.length})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="pending">
            <div className="space-y-4">
              {pendingVaccines.length > 0 ? (
                pendingVaccines.map((vaccine) => (
                  <Card key={vaccine.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <h3 className="font-semibold">{vaccine.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Tipo: {vaccine.type}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Data:{" "}
                            {format(new Date(vaccine.date), "dd 'de' MMMM 'de' yyyy", {
                              locale: ptBR,
                            })}
                          </p>
                          {vaccine.notes && (
                            <p className="text-sm text-muted-foreground">
                              Obs: {vaccine.notes}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant="secondary">Pendente</Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleStatusUpdate(vaccine.id, "Aplicada")}
                          >
                            Marcar como Aplicada
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-center text-muted-foreground">
                  Nenhuma vacina pendente.
                </p>
              )}
            </div>
          </TabsContent>
          <TabsContent value="applied">
            <div className="space-y-4">
              {appliedVaccines.length > 0 ? (
                appliedVaccines.map((vaccine) => (
                  <Card key={vaccine.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <h3 className="font-semibold">{vaccine.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Tipo: {vaccine.type}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Data:{" "}
                            {format(new Date(vaccine.date), "dd 'de' MMMM 'de' yyyy", {
                              locale: ptBR,
                            })}
                          </p>
                          {vaccine.notes && (
                            <p className="text-sm text-muted-foreground">
                              Obs: {vaccine.notes}
                            </p>
                          )}
                        </div>
                        <Badge variant="success">Aplicada</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-center text-muted-foreground">
                  Nenhuma vacina aplicada.
                </p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
} 