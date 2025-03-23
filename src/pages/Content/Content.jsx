import Loading from "@/components/Loading";
import { useUserContext } from "@/hooks/useUserContext";
import {
  BadgePercentIcon,
  BrainCogIcon,
  FlameIcon,
  HandCoinsIcon,
  LockIcon,
  MapPin,
  MapPinIcon,
  PictureInPicture2Icon,
  PiggyBankIcon,
  DogIcon,
  HeartIcon,
  UsersIcon,
  DropletsIcon,
  AlertTriangleIcon,
  BrainIcon,
  Lock,
  Unlock,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useAuthContext } from "@/hooks/useAuthContext";
import Subscriptions from "../Subscriptions/Subscriptions";

function Content() {
  const { user } = useAuthContext();
  const { userDoc } = useUserContext();
  const isWideScreen = useMediaQuery("(min-width: 1920px)");
  const navigate = useNavigate();
  const [isContentLocked, setIsContentLocked] = useState(!userDoc?.startHere);
  const [behaviorUnlocked, setBehaviorUnlocked] = useState(false);
  const [socializationUnlocked, setSocializationUnlocked] = useState(false);
  const [hygieneUnlocked, setHygieneUnlocked] = useState(false);
  const [badhabitsUnlocked, setBadhabitsUnlocked] = useState(false);

  useEffect(() => {
    const isBehaviorUnlocked = localStorage.getItem("behavior_unlocked") === "true";
    const isSocializationUnlocked = localStorage.getItem("socialization_unlocked") === "true";
    const isHygieneUnlocked = localStorage.getItem("hygiene_unlocked") === "true";
    const isBadhabitsUnlocked = localStorage.getItem("badhabits_unlocked") === "true";
    const isContentLocked = localStorage.getItem("isContentLocked") === "true";
    setBehaviorUnlocked(isBehaviorUnlocked);
    setSocializationUnlocked(isSocializationUnlocked);
    setHygieneUnlocked(isHygieneUnlocked);
    setBadhabitsUnlocked(isBadhabitsUnlocked);
    setIsContentLocked(isContentLocked);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const isContentLocked = localStorage.getItem("isContentLocked") === "true";
      setIsContentLocked(isContentLocked);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleContentLock = () => {
    setIsContentLocked(!isContentLocked);
  };

  const options = [
    {
      name: "Comece aqui",
      icon: (
        <MapPinIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "Fundamentos essenciais para treinar seu cão e estabelecer uma comunicação efetiva.",
      route: "/content/training/starthere",
    },
  ];

  const trainingModules = [
    {
      name: "Comportamento Essencial",
      icon: <HeartIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />,
      description: "Desenvolva comportamentos essenciais para uma convivência harmoniosa com seu cão.",
      route: "/content/training/behavior",
      isLocked: !behaviorUnlocked,
    },
    {
      name: "Socialização e Controle",
      icon: <UsersIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />,
      description: "Aprenda a socializar seu cão e controlar seus impulsos em diferentes situações.",
      route: "/content/training/socialization",
      isLocked: !socializationUnlocked,
    },
    {
      name: "Higiene e Rotina",
      icon: <DropletsIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />,
      description: "Estabeleça uma rotina saudável e hábitos de higiene com seu cão.",
      route: "/content/training/hygiene",
      isLocked: !hygieneUnlocked,
    },
    {
      name: "Evitando Maus Hábitos",
      icon: <AlertTriangleIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />,
      description: "Aprenda a prevenir e corrigir comportamentos indesejados.",
      route: "/content/training/badhabits",
      isLocked: !badhabitsUnlocked,
    },
    {
      name: "Exercícios Mentais",
      icon: <BrainIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />,
      description: "Mantenha seu cão mentalmente ativo e feliz com jogos e atividades.",
      route: "/content/training/mental",
      isLocked: isContentLocked,
    },
  ];

  if (!userDoc) return <Loading />;
  if (userDoc.plan.status !== "active") return <Subscriptions />;

  return (
    <div className="h-[200vh] py-2.5 px-2.5 sm:px-0 lg:w-1/2">
      {/* Botão temporário para controle de bloqueio */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleContentLock}
          className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-md hover:bg-brand/90 transition-colors"
        >
          {isContentLocked ? (
            <>
              <Unlock className="h-4 w-4" />
              Desbloquear Conteúdo
            </>
          ) : (
            <>
              <Lock className="h-4 w-4" />
              Bloquear Conteúdo
            </>
          )}
        </button>
      </div>

      <div className="flex gap-3 items-center">
        <MapPinIcon className="text-brand" />
        <h1 className="text-xl font-medium text-black/75">Comece aqui</h1>
      </div>
      <div className="mt-3 sm:mt-5 flex gap-6">
        {options.map((option) => (
          <div
            key={option.name}
            className="flex items-center sm:gap-5 border p-3 sm:p-6 bg-white rounded-md cursor-pointer"
            onClick={() => navigate(option.route)}
          >
            <div className="flex flex-col gap-1.5">
              <p className="text-md font-medium text-brand">{option.name}</p>
              <p className="text-black/75 text-[13px] sm:text-sm">
                {option.description}
              </p>
            </div>
            {option.icon}
          </div>
        ))}
      </div>

      <div className="mt-5 flex gap-3 items-center">
        <PictureInPicture2Icon className="text-brand" />
        <h1 className="text-xl font-medium text-black/75">Módulos de Treinamento</h1>
      </div>
      <div className="mt-1">
        <p className="text-xs text-muted-foreground">
          Conclua o módulo "Comece por aqui" para desbloquear o restante do conteúdo.
        </p>
      </div>
      <div className="mt-2.5 flex flex-col lg:flex-row gap-2.5 sm:gap-6 flex-wrap">
        {trainingModules.map((module) => (
          <div
            key={module.name}
            className={`${
              module.isLocked ? "opacity-50 grayscale" : ""
            } relative flex flex-nowrap items-center gap-2.5 sm:gap-5 border p-3 sm:p-6 bg-white rounded-md cursor-pointer`}
            onClick={() => {
              if (!module.isLocked) {
                console.log("Navegando para:", module.route);
                navigate(module.route);
              }
            }}
          >
            <div className="flex flex-col gap-1.5">
              <p className="text-md font-medium text-brand">{module.name}</p>
              <p className="text-black/75 text-sm">{module.description}</p>
            </div>
            {module.isLocked ? (
              <LockIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0" />
            ) : (
              module.icon
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
