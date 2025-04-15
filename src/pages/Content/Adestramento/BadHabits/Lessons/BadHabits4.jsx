import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";

export default function BadHabits4() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Módulo 4: Comportamentos Sociais</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>
            Neste módulo, focaremos nos comportamentos sociais que precisam de ajuste:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pular em pessoas</li>
            <li>Morder durante brincadeiras</li>
            <li>Problemas com outros cães</li>
            <li>Comportamentos territoriais</li>
          </ul>
          <p>
            Desenvolveremos estratégias para melhorar a interação social e promover comportamentos mais adequados.
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 