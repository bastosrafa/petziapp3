import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { ClockIcon, LockIcon } from "lucide-react";
import { trainingModules } from "./config";

export default function Training() {
  const navigate = useNavigate();

  const handleModuleClick = (moduleId) => {
    const module = trainingModules.find(m => m.id === moduleId);
    if (module && module.route) {
      navigate(module.route);
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Módulos de Treinamento</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trainingModules.map((module) => {
          const Icon = module.icon;
          return (
            <Card
              key={module.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                module.id !== "starthere" && module.id !== "behavior" ? "opacity-50" : ""
              }`}
              onClick={() => handleModuleClick(module.id)}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {module.title}
                </CardTitle>
                <div className="p-2 rounded-full bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  {module.description}
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-primary">
                  <ClockIcon className="h-3 w-3" />
                  <p>{module.duration}</p>
                </div>
                {module.id !== "starthere" && module.id !== "behavior" && (
                  <div className="absolute top-2 right-2 text-destructive">
                    <LockIcon className="h-4 w-4" />
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
} 