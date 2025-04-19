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
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useAuthContext } from "@/hooks/useAuthContext";
import Subscriptions from "../Subscriptions/Subscriptions";
import Dashboard from "../Dashboard";
import { DashboardProvider } from "../Dashboard/contexts/DashboardContext";

export default function Home() {
  const { user } = useAuthContext();
  const { userDoc } = useUserContext();
  const isWideScreen = useMediaQuery("(min-width: 1920px)");
  const navigate = useNavigate();

  const options = [
    {
      name: "Comece aqui",
      icon: (
        <MapPinIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const options2 = [
    {
      name: "Name 1",
      icon: (
        <HandCoinsIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Name 2",
      icon: (
        <BadgePercentIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Name 3",
      icon: (
        <PiggyBankIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  if (!userDoc) return <Loading />;
  if (userDoc.plan.status !== "active") return <Subscriptions />;

  return (
    <div className="w-full">
      <Dashboard />
    </div>
  );
}
