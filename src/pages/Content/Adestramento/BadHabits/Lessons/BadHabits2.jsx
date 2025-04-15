import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";

export default function BadHabits2() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Módulo 2: Comportamentos Destrutivos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>
            Neste módulo, focaremos nos comportamentos destrutivos mais comuns:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Morder móveis e objetos</li>
            <li>Arranhar portas e paredes</li>
            <li>Destruir brinquedos e pertences</li>
            <li>Cavar no jardim</li>
          </ul>
          <p>
            Aprenderemos técnicas para redirecionar esses comportamentos e oferecer alternativas adequadas.
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 