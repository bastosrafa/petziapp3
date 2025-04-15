import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { Button } from "@/shadcn/components/ui/button";
import { ClockIcon, LockIcon } from "lucide-react";
import Hygiene1 from "./Lessons/Hygiene1";
import Hygiene2 from "./Lessons/Hygiene2";
import Hygiene3 from "./Lessons/Hygiene3";
import Hygiene4 from "./Lessons/Hygiene4";
import Hygiene5 from "./Lessons/Hygiene5";
import { trainingModules } from "../config";
import { DashboardProvider } from "@/pages/Dashboard/contexts/DashboardContext";

const hygieneModule = trainingModules.find(m => m.id === "hygiene");

export default function HygieneModule() {
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
          <h1 className="text-2xl font-bold">{hygieneModule.title}</h1>
          <p className="text-muted-foreground mt-2">{hygieneModule.description}</p>
        </div>
        <Button variant="outline" onClick={handleBack}>
          Voltar
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hygieneModule.lessons.map((lesson) => (
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
          {selectedLesson.id === "hygiene1" && <Hygiene1 />}
          {selectedLesson.id === "hygiene2" && <Hygiene2 />}
          {selectedLesson.id === "hygiene3" && <Hygiene3 />}
          {selectedLesson.id === "hygiene4" && <Hygiene4 />}
          {selectedLesson.id === "hygiene5" && <Hygiene5 />}
        </div>
      )}
    </div>
  );
} 