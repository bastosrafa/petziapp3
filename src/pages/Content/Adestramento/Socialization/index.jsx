import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { Button } from "@/shadcn/components/ui/button";
import { ClockIcon, LockIcon } from "lucide-react";
import Socialization1 from "./Lessons/Socialization1";
import Socialization2 from "./Lessons/Socialization2";
import Socialization3 from "./Lessons/Socialization3";
import Socialization4 from "./Lessons/Socialization4";
import Socialization5 from "./Lessons/Socialization5";
import { trainingModules } from "../config";
import { DashboardProvider } from "@/pages/Dashboard/contexts/DashboardContext";

const socializationModule = trainingModules.find(m => m.id === "socialization");

export default function SocializationModule() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const navigate = useNavigate();

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleBack = () => {
    navigate("/content/training");
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{socializationModule.title}</h1>
          <p className="text-muted-foreground mt-2">{socializationModule.description}</p>
        </div>
        <Button variant="outline" onClick={handleBack}>
          Voltar
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {socializationModule.lessons.map((lesson) => (
          <Card
            key={lesson.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              lesson.locked ? "opacity-50" : ""
            }`}
            onClick={() => !lesson.locked && handleLessonSelect(lesson)}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {lesson.title}
                {localStorage.getItem(`${lesson.id}_completed`) === "true" && (
                  <span className="ml-2 text-green-500">✓</span>
                )}
              </CardTitle>
              {lesson.status === "hot" && (
                <span className="text-xs text-destructive">🔥</span>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                {lesson.description}
              </p>
              <div className="flex items-center gap-1.5 mt-2 text-xs text-primary">
                <ClockIcon className="h-3 w-3" />
                <p>{lesson.duration}</p>
              </div>
              {lesson.locked && (
                <div className="absolute top-2 right-2 text-destructive">
                  <LockIcon className="h-4 w-4" />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedLesson && (
        <div className="mt-8">
          {selectedLesson.id === "socialization1" && <Socialization1 />}
          {selectedLesson.id === "socialization2" && <Socialization2 />}
          {selectedLesson.id === "socialization3" && <Socialization3 />}
          {selectedLesson.id === "socialization4" && <Socialization4 />}
          {selectedLesson.id === "socialization5" && <Socialization5 />}
        </div>
      )}
    </div>
  );
} 