import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";

export default function BadHabits1() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Módulo 1: Introdução aos Maus Hábitos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>
            Bem-vindo ao primeiro módulo sobre maus hábitos. Neste módulo, você aprenderá:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>O que são maus hábitos em cães</li>
            <li>Como identificar comportamentos problemáticos</li>
            <li>As causas comuns de maus hábitos</li>
            <li>Estratégias básicas de prevenção</li>
          </ul>
          <p>
            Este é um conteúdo introdutório que servirá como base para os próximos módulos.
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 