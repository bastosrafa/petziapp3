import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { Button } from "@/shadcn/components/ui/button";
import { ClockIcon, LockIcon } from "lucide-react";
import Behavior1 from "./Lessons/Behavior1";
import Behavior2 from "./Lessons/Behavior2";
import Behavior3 from "./Lessons/Behavior3";
import Behavior4 from "./Lessons/Behavior4";
import Behavior5 from "./Lessons/Behavior5";
import { trainingModules } from "../config";
import { DashboardProvider } from "@/pages/Dashboard/contexts/DashboardContext";

const behaviorModule = trainingModules.find(m => m.id === "behavior");

export default function Behavior() {
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
          <h1 className="text-2xl font-bold">{behaviorModule.title}</h1>
          <p className="text-muted-foreground mt-2">{behaviorModule.description}</p>
        </div>
        <Button variant="outline" onClick={handleBack}>
          Voltar
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {behaviorModule.lessons.map((lesson) => (
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
          {selectedLesson.id === "behavior1" && <Behavior1 />}
          {selectedLesson.id === "behavior2" && <Behavior2 />}
          {selectedLesson.id === "behavior3" && <Behavior3 />}
          {selectedLesson.id === "behavior4" && <Behavior4 />}
          {selectedLesson.id === "behavior5" && <Behavior5 />}
        </div>
      )}
    </div>
  );
} 