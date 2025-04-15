import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";

export default function BadHabits6() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Módulo 6: Comportamentos de Ansiedade</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>
            Neste módulo, abordaremos comportamentos relacionados à ansiedade:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ansiedade de separação</li>
            <li>Medo de barulhos</li>
            <li>Ansiedade em situações novas</li>
            <li>Comportamentos compulsivos</li>
          </ul>
          <p>
            Desenvolveremos estratégias para reduzir a ansiedade e promover comportamentos mais calmos e confiantes.
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 