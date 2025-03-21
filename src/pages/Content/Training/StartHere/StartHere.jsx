import { useUserContext } from "@/hooks/useUserContext";
import {
  BrainIcon,
  MessageSquareIcon,
  HandIcon,
  UserIcon,
  MousePointerClickIcon,
} from "lucide-react";
import React, { useState } from "react";
import StartHere1 from "./Lessons/StartHere1";
import StartHere2 from "./Lessons/StartHere2";
import StartHere3 from "./Lessons/StartHere3";
import StartHere4 from "./Lessons/StartHere4";
import StartHere5 from "./Lessons/StartHere5";

export default function StartHere() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const { userDoc } = useUserContext();
  const lessons = [
    {
      name: "Como os cães aprendem",
      icon: <BrainIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />,
      description: "Entenda os princípios básicos do aprendizado canino e como usar o reforço positivo.",
      component: <StartHere1 onNextLesson={() => goToNextLesson()} />,
    },
    {
      name: "Comunicação eficaz com o cão",
      icon: <MessageSquareIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />,
      description: "Aprenda a se comunicar de forma clara com seu pet através do tom de voz e linguagem corporal.",
      component: <StartHere2 onNextLesson={() => goToNextLesson()} />,
    },
    {
      name: "Como usar a linguagem corporal?",
      icon: <HandIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />,
      description: "Aprenda a usar gestos e posturas para se comunicar com seu cão de forma efetiva.",
      component: <StartHere3 onNextLesson={() => goToNextLesson()} />,
    },
    {
      name: "Ensinar o cão a reconhecer o próprio nome",
      icon: <UserIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />,
      description: "Aprenda a ensinar seu cão a responder ao nome de forma positiva e consistente.",
      component: <StartHere4 onNextLesson={() => goToNextLesson()} />,
    },
    {
      name: "Introdução ao Clicker ou Recompensas",
      icon: <MousePointerClickIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />,
      description: "Aprenda a usar o clicker ou recompensas verbais para treinar seu cão de forma mais eficiente.",
      component: <StartHere5 onNextLesson={() => goToNextLesson()} />,
    },
  ];

  const goToNextLesson = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(prev => prev + 1);
      setSelectedLesson(lessons[currentLessonIndex + 1].name);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-semibold">Comece aqui</h1>
      <div className="mt-2.5 flex flex-col lg:flex-row gap-2.5 sm:gap-6 flex-wrap">
        {!selectedLesson
          ? lessons.map((lesson) => (
              <div
                key={lesson.name}
                className="relative flex flex-nowrap items-center gap-2.5 sm:gap-5 border p-3 sm:p-6 bg-white rounded-md cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => {
                  setSelectedLesson(lesson.name);
                  setCurrentLessonIndex(lessons.findIndex(l => l.name === lesson.name));
                }}
              >
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    {lesson.icon}
                    <p className="text-md font-medium text-brand">
                      {lesson.name}
                    </p>
                  </div>
                  <p className="text-black/75 text-sm">{lesson.description}</p>
                </div>
              </div>
            ))
          : lessons.find((lesson) => lesson.name === selectedLesson).component}
      </div>
    </div>
  );
}
