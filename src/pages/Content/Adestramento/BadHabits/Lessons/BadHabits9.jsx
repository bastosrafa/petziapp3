import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";

export default function BadHabits9() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Módulo 9: Comportamentos de Ansiedade</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>
            Neste módulo, abordaremos comportamentos ansiosos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ansiedade de separação</li>
            <li>Medo de barulhos</li>
            <li>Ansiedade em situações novas</li>
            <li>Comportamentos compulsivos</li>
          </ul>
          <p>
            Desenvolveremos técnicas para reduzir a ansiedade e promover um comportamento mais confiante e relaxado.
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 