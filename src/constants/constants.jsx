import {
  AlignJustifyIcon,
  BookOpenIcon,
  BrainCogIcon,
  HomeIcon,
  MessagesSquareIcon,
  PawPrintIcon,
  PictureInPicture2Icon,
  SyringeIcon,
} from "lucide-react";

export const routeOptions = [
  {
    route: "/",
    name: "Início",
    icon: <HomeIcon className="h-6 sm:h-5" />,
  },
  {
    route: "/adestramento",
    name: "Adestramento",
    // badge: "🔥 hot",
    // miniBadge: "🔥",
    icon: <PawPrintIcon className="h-6 sm:h-5" />,
  },
  {
    route: "/diario",
    name: "Diário",
    icon: <BookOpenIcon className="h-6 sm:h-5" />,
  },
  {
    route: "/vacinas",
    name: "Vacinas",
    icon: <SyringeIcon className="h-6 sm:h-5" />,
  },
  {
    route: "/mais",
    name: "Mais",
    icon: <AlignJustifyIcon className="h-6 sm:h-5" />,
  },
];

const corsOptions = {
  origin: ['http://localhost:5173', 'https://seu-dominio.com'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
