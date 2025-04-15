import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";

export default function BadHabits5() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Módulo 5: Comportamentos de Proteção</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>
            Neste módulo, abordaremos comportamentos de proteção excessiva:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proteção de recursos</li>
            <li>Proteção de território</li>
            <li>Proteção de pessoas</li>
            <li>Comportamentos possessivos</li>
          </ul>
          <p>
            Trabalharemos para estabelecer limites saudáveis e reduzir comportamentos de proteção excessiva.
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 