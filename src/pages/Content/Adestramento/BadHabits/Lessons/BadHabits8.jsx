import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";

export default function BadHabits8() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Módulo 8: Comportamentos de Hiperatividade</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>
            Neste módulo, abordaremos comportamentos hiperativos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Excesso de energia</li>
            <li>Dificuldade de concentração</li>
            <li>Comportamentos impulsivos</li>
            <li>Dificuldade de relaxamento</li>
          </ul>
          <p>
            Desenvolveremos estratégias para canalizar a energia de forma positiva e promover comportamentos mais calmos e focados.
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 