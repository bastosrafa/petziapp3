import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";

export default function BadHabits3() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Módulo 3: Comportamentos de Ansiedade</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>
            Neste módulo, abordaremos os comportamentos relacionados à ansiedade:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Latidos excessivos</li>
            <li>Comportamentos compulsivos</li>
            <li>Ansiedade de separação</li>
            <li>Medos e fobias</li>
          </ul>
          <p>
            Aprenderemos técnicas para reduzir a ansiedade e promover comportamentos mais calmos e equilibrados.
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 