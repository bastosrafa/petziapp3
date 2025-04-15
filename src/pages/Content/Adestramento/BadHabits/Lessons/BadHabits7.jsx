import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";

export default function BadHabits7() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Módulo 7: Comportamentos de Agressividade</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>
            Neste módulo, abordaremos comportamentos agressivos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Agressão por medo</li>
            <li>Agressão por proteção</li>
            <li>Agressão por dominância</li>
            <li>Agressão redirecionada</li>
          </ul>
          <p>
            Desenvolveremos técnicas para gerenciar e redirecionar comportamentos agressivos de forma segura e eficaz.
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 