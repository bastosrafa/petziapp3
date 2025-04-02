import React, { useEffect, useMemo, useState, useRef } from "react";
import { useCollection } from "@/hooks/useCollection";
import { useDocument } from "@/hooks/useDocument";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@/hooks/useQuery";
import Row from "@/reusable/Row";
import { useAuthContext } from "@/hooks/useAuthContext";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
} from "@radix-ui/react-icons";
import "./VideoPlayer.css";
import VideoPlayer from "./VideoPlayer";
import { Button } from "@/shadcn/components/ui/button";
import { useFirestore } from "@/hooks/useFirestore";
import { useUserContext } from "@/hooks/useUserContext";
import { useDashboard } from "@/pages/Dashboard/contexts/DashboardContext";

export default function Training({
  redirectToRoute,
  sidebarExpanded,
  scrollToTop,
}) {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { document: course } = useDocument("courses", "9DwWIAtShVCPXyRPSbqF");
  const { addDocument: addProgress, updateDocument: updateProgress } =
    useFirestore("progress");
  const { updateDocument: updateUser } = useFirestore("users");
  const { documents: lessons } = useCollection("lessons", [
    "courseId",
    "==",
    "9DwWIAtShVCPXyRPSbqF",
  ]);
  const { updateTraining, refreshData } = useDashboard();

  const { userDoc } = useUserContext();

  const [selectedLesson, setSelectedLesson] = useState(null);
  const [isPaused, setIsPaused] = useState(true);

  const { documents: progressDocs } = useCollection(
    "progress",
    ["userId", "==", user.uid],
    null,
    ["courseId", "==", "9DwWIAtShVCPXyRPSbqF"]
  );

  const watchLesson = (moduleId, lesson) => {
    setIsPaused(true);
    localStorage.setItem(`lastModuleWatched-9DwWIAtShVCPXyRPSbqF`, moduleId);
    localStorage.setItem(`lastWatchedLesson-9DwWIAtShVCPXyRPSbqF`, lesson.id);
    setSelectedLesson(lesson);
    scrollToTop.current.scrollIntoView({ behavior: "smooth" });
  };

  const previousLesson = () => {
    const moduleId = selectedLesson.moduleId;
    const lesson = selectedLesson;

    const previousLesson = lessons.find(
      (l) => l.moduleId === moduleId && l.index === lesson.index - 1
    );

    if (previousLesson) {
      watchLesson(moduleId, previousLesson);
    } else {
      const module = course.modules.find(
        (m) => m.id === selectedLesson.moduleId
      );

      const previousModule = course.modules.find(
        (m) => m.index === module.index - 1
      );

      if (previousModule) {
        const previousLesson = lessons.find(
          (l) => l.moduleId === previousModule.id && l.index === 0
        );
        watchLesson(previousModule.id, previousLesson);
      }
    }
  };

  const nextLesson = () => {
    const moduleId = selectedLesson.moduleId;
    const lesson = selectedLesson;

    const nextLesson = lessons.find(
      (l) => l.moduleId === moduleId && l.index === lesson.index + 1
    );

    if (nextLesson) {
      watchLesson(moduleId, nextLesson);
    } else {
      const module = course.modules.find(
        (m) => m.id === selectedLesson.moduleId
      );

      const nextModule = course.modules.find(
        (m) => m.index === module.index + 1
      );

      if (nextModule) {
        const nextLesson = lessons.find(
          (l) => l.moduleId === nextModule.id && l.index === 0
        );
        watchLesson(nextModule.id, nextLesson);
      }
    }
  };

  const completeLesson = async () => {
    try {
      console.log("Iniciando conclusão da lição:", selectedLesson.id);
      
      // Verificar se a lição já está marcada como concluída
      const progress = progressDocs.find(
        (doc) => doc.lessonId === selectedLesson.id
      );
      
      console.log("Progresso existente:", progress);

      // Atualizar ou adicionar o progresso da lição
      if (progress) {
        console.log("Atualizando progresso existente:", progress.id);
        await updateProgress(progress.id, {
          status: "completed",
          completedAt: new Date(),
        });
      } else {
        console.log("Criando novo progresso para lição:", selectedLesson.id);
        await addProgress({
          lessonId: selectedLesson.id,
          moduleId: selectedLesson.moduleId,
          courseId: course.id,
          userId: user.uid,
          status: "completed",
          completedAt: new Date(),
        });
      }

      // Atualizar a lista de progresso após a operação
      const updatedProgressDocs = [...progressDocs];
      if (progress) {
        const index = updatedProgressDocs.findIndex(doc => doc.id === progress.id);
        if (index !== -1) {
          updatedProgressDocs[index] = {
            ...updatedProgressDocs[index],
            status: "completed",
            completedAt: new Date()
          };
        }
      } else {
        updatedProgressDocs.push({
          id: "temp-" + Date.now(),
          lessonId: selectedLesson.id,
          moduleId: selectedLesson.moduleId,
          courseId: course.id,
          userId: user.uid,
          status: "completed",
          completedAt: new Date()
        });
      }

      // Calcular o progresso total do treinamento
      const completedLessons = updatedProgressDocs.filter(doc => doc.status === "completed").length;
      console.log("Total de lições completadas:", completedLessons);
      
      // Determinar o nível atual com base no número de lições concluídas
      const currentLevel = completedLessons < 10 ? 'beginner' : 
                          completedLessons < 20 ? 'intermediate' : 
                          completedLessons < 30 ? 'advanced' : 'expert';
      console.log("Nível atual:", currentLevel);

      // Calcular o tempo total de treinamento
      const totalTime = updatedProgressDocs.reduce((acc, doc) => acc + (doc.duration || 0), 0) + 
        (selectedLesson.duration || 0);
      console.log("Tempo total de treinamento:", totalTime);

      // Atualizar os dados de treinamento no dashboard
      console.log("Atualizando dashboard com:", {
        completedLessons,
        currentLevel,
        lastSession: new Date(),
        totalTime
      });
      
      await updateTraining({
        completedLessons,
        currentLevel,
        lastSession: new Date(),
        totalTime
      });
      
      // Forçar atualização do dashboard
      await refreshData();
      console.log("Dashboard atualizado com sucesso");

      // Verificar se o módulo atual foi completado
      const currentModule = course.modules.find(m => m.id === selectedLesson.moduleId);
      const moduleLessons = lessons.filter(l => l.moduleId === currentModule.id);
      const completedModuleLessons = moduleLessons.filter(lesson => 
        updatedProgressDocs.some(doc => doc.lessonId === lesson.id && doc.status === "completed")
      ).length;
      
      console.log(`Módulo ${currentModule.id}: ${completedModuleLessons}/${moduleLessons.length} lições completadas`);

      // Se o módulo foi completado, desbloquear o próximo módulo
      if (completedModuleLessons === moduleLessons.length) {
        console.log(`Módulo ${currentModule.id} completado!`);
        
        // Desbloquear o próximo módulo
        if (currentModule.index < course.modules.length - 1) {
          const nextModule = course.modules.find(m => m.index === currentModule.index + 1);
          if (nextModule) {
            console.log(`Desbloqueando módulo: ${nextModule.id}`);
            localStorage.setItem(`${nextModule.id}_unlocked`, "true");
          }
        }
      }

      // Navegar para a próxima lição
      let nextLesson = lessons.find(
        (l) =>
          l.moduleId === selectedLesson.moduleId &&
          l.index === selectedLesson.index + 1
      );

      const module = course.modules.find((m) => m.id === selectedLesson.moduleId);

      if (!nextLesson && course.modules.length > module.index + 1) {
        const nextModule = course.modules.find(
          (m) => m.index === module.index + 1
        );
        if (nextModule) {
          const firstLesson = lessons.find(
            (l) => l.moduleId === nextModule.id && l.index === 0
          );
          setIsPaused(true);
          watchLesson(nextModule.id, firstLesson);
          return;
        }
      }

      if (nextLesson) {
        setIsPaused(true);
        watchLesson(selectedLesson.moduleId, nextLesson);
      }
    } catch (error) {
      console.error("Erro ao completar lição:", error);
    }
  };

  useEffect(() => {
    if (lessons && lessons.length) {
      const lastWatchedLesson = localStorage.getItem(
        "lastWatchedLesson-9DwWIAtShVCPXyRPSbqF"
      );
      const lesson =
        lessons.find((lesson) => lesson.id === lastWatchedLesson) || lessons[0];
      setSelectedLesson(lesson);
    }
  }, [lessons]);

  const sortedLessons = lessons?.sort((a, b) => {
    const moduleA = course?.modules.find((module) => module.id === a.moduleId);
    const moduleB = course?.modules.find((module) => module.id === b.moduleId);

    if (!moduleA || !moduleB) return 0;

    if (moduleA.index === moduleB.index) {
      return a.index - b.index;
    }
    return moduleA.index - moduleB.index;
  });

  useEffect(() => {
    async function resetRedirect() {
      await updateUser(user.uid, {
        redirectToRoute: {
          active: false,
          path: null,
        },
      });
    }

    if (redirectToRoute && redirectToRoute.active) {
      resetRedirect();
      navigate(redirectToRoute.path);
    }
  }, [redirectToRoute]);

  if (!course || !selectedLesson || !userDoc) return;

  const isLatam = userDoc.latam;

  return (
    <div
      className={`-mt-16 ${
        sidebarExpanded ? "sm:-mt-[16px] " : "sm:-mt-[16px] "
      }w-full sm:flex sm:gap-6`}
    >
      <div className="sm:w-2/3 mt-12 sm:mt-0">
        <VideoPlayer
          videoId={isLatam ? selectedLesson.latamId : selectedLesson.videoId}
          videoThumb={selectedLesson.videoThumb}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
        />
        <div className="w-full flex items-center justify-between px-2 sm:px-0 sm:mt-2.5">
          <h3 className="sm:hidden font-medium text-[17px]">
            {selectedLesson.title}
          </h3>
          <div className="sm:w-full flex justify-between items-center">
            <div className="hidden sm:flex gap-2.5">
              <Button variant="secondary" size="lg" onClick={previousLesson}>
                <Row className="gap-2.5 items-center pl-2 text-md">
                  <ChevronLeftIcon className="h-5 w-5" />
                  Anterior
                </Row>
              </Button>
              <Button
                className="hidden sm:block"
                variant="secondary"
                size="lg"
                onClick={nextLesson}
              >
                <Row className="gap-2.5 items-center pl-2 text-md">
                  {isLatam ? "Siguiente" : "Próxima"}{" "}
                  <ChevronRightIcon className="h-5 w-5" />
                </Row>
              </Button>
            </div>
            <Button size="md" onClick={completeLesson}>
              <Row className="gap-0.5 items-center">
                <CheckIcon className="w-5 h-5" />
                <p className="hidden sm:block">Marcar como concluída</p>
                <p className="sm:hidden">Concluir aula</p>
              </Row>
            </Button>
          </div>
        </div>
        <div className="hidden sm:block sm:mt-5 px-2.5">
          <h3 className="text-lg font-medium mb-4">
            {isLatam ? selectedLesson.titleLatam : selectedLesson.title}
          </h3>
          <div
            className="font-light"
            dangerouslySetInnerHTML={{
              __html: isLatam
                ? selectedLesson.descriptionLatam
                : selectedLesson.description,
            }}
          ></div>
          {selectedLesson.title === "A matemática da prosperidade" && (
            <div
              role="button"
              onClick={async () => {
                const meaningfulActions = userDoc.meaningfulActions || {};
                await updateUser(user.uid, {
                  meaningfulActions: {
                    ...meaningfulActions,
                    downloadedSheet: {
                      status: true,
                      status_date: new Date().getTime(),
                    },
                  },
                });
                window.open(
                  "https://firebasestorage.googleapis.com/v0/b/steady-gainz.firebasestorage.app/o/documentos%2FOrc%CC%A7amento%20Pessoal.xlsx?alt=media&token=9f8d4f3c-83f4-4815-a63d-944796f19a38",
                  "_blank"
                );
              }}
            >
              <p>Clique no link abaixo para baixar a planilha</p>
              <p className="text-brand underline">Clique aqui para baixar</p>
            </div>
          )}
          {selectedLesson.title === "Abra sua conta na corretora" && (
            <TutorialDialog tutorialName="OpenAccount">
              <div
                role="button"
                onClick={async () => {
                  const meaningfulActions = userDoc.meaningfulActions || {};
                  const accountTutorial =
                    meaningfulActions.accountTutorial || {};

                  if (accountTutorial.open?.status) {
                    return;
                  }

                  await updateUser(user.uid, {
                    meaningfulActions: {
                      ...meaningfulActions,
                      accountTutorial: {
                        ...accountTutorial,
                        open: {
                          status: true,
                          status_date: new Date().getTime(),
                        },
                        step: 1,
                      },
                    },
                  });
                }}
              >
                <p className="text-brand underline">
                  Clique aqui para ver o tutorial
                </p>
              </div>
            </TutorialDialog>
          )}
          {selectedLesson.title === "Comece a investir com IA" && (
            <TutorialDialog tutorialName="CopyTrading">
              <div role="button">
                <p className="text-brand underline">
                  Clique aqui para ver o tutorial
                </p>
              </div>
            </TutorialDialog>
          )}
        </div>
        <div className="pl-2 sm:hidden">
          {selectedLesson.title === "Abra sua conta na corretora" && (
            <TutorialDialog tutorialName="OpenAccount">
              <div role="button">
                <p className="text-brand underline">
                  Clique aqui para ver o tutorial
                </p>
              </div>
            </TutorialDialog>
          )}
          {selectedLesson.title === "Comece a investir com IA" && (
            <TutorialDialog tutorialName="CopyTrading">
              <div role="button">
                <p className="text-brand underline">
                  Clique aqui para ver o tutorial
                </p>
              </div>
            </TutorialDialog>
          )}
        </div>
        <div className="my-5 flex gap-2.5 sm:hidden">
          <Button
            variant="secondary"
            className="w-full"
            onClick={previousLesson}
          >
            <Row className="gap-2.5 items-center pl-2 text-md">
              <ChevronLeftIcon className="h-5 w-5" />
              Aula anterior
            </Row>
          </Button>
          <Button variant="secondary" className="w-full" onClick={nextLesson}>
            <Row className="gap-2.5 items-center pl-2 text-md">
              {isLatam ? "Siguiente" : "Próxima aula"}{" "}
              <ChevronRightIcon className="h-5 w-5" />
            </Row>
          </Button>
        </div>
      </div>
      <div
        className={`${
          sidebarExpanded ? "sm:mr-5" : "sm:mr-0"
        } sm:w-1/3 px-2.5 mt-8 sm:mt-0`}
      >
        <div className="w-full">
          {course?.modules.map((module, idx) => {
            return (
              <div key={module.id} className={idx === 0 ? undefined : "pt-5"}>
                <h3 className="text-start">{module.name}</h3>
                <div>
                  <div>
                    {sortedLessons
                      ?.filter((lesson) => lesson.moduleId === module.id)
                      .map((lesson, lidx) => (
                        <div
                          key={lidx}
                          role="button"
                          className={`${
                            lidx !== sortedLessons.length - 1
                              ? "border-b border-border"
                              : ""
                          } pt-5 px-2.5 pb-5 flex items-center gap-2.5 hover:bg-muted/25 transition-all duration-300 relative`}
                          onClick={() => watchLesson(module.id, lesson)}
                        >
                          {progressDocs &&
                          progressDocs.some(
                            (doc) =>
                              doc.lessonId === lesson.id &&
                              doc.status === "completed"
                          ) ? (
                            <div className="h-4 w-4 rounded-sm bg-emerald-500 flex justify-center items-center text-white">
                              <CheckIcon />
                            </div>
                          ) : (
                            <div className="h-4 w-4 rounded-sm border border-border flex justify-center items-center text-primary">
                              <CheckIcon className="invisible" />
                            </div>
                          )}

                          {/* <img
                            src={lesson.videoThumb}
                            alt="thumb da aula"
                            className="w-12 h-10 rounded-md border border-border"
                          /> */}

                          <div className="sm:w-5"></div>

                          <div>
                            <p className="relative">
                              {lesson.title}
                              {lesson.status === "hot" && (
                                <span className="absolute text-xs text-red-500 rounded-full -top-2 -right-3">
                                  🔥
                                </span>
                              )}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {lesson.subtitle}
                            </p>
                            <div className="flex items-center gap-1.5 mt-2 bg-brand/5 text-brand w-fit text-xs px-2 py-0.5 rounded-lg">
                              <ClockIcon className="h-3 w-3" />
                              <p>{lesson.duration || "3 min"}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-24"></div>
    </div>
  );
}
