import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import { ThemeProvider } from "./providers/ThemeProvider";
import { useAuthContext } from "./hooks/useAuthContext";
import Loading from "./components/Loading";
import Profile from "./pages/Profile/Profile";
import { useEffect, useRef, useState } from "react";
import { Toaster } from "@/shadcn/components/ui/toaster";
import { UserDocProvider } from "./contexts/UserDocContext";
import useMediaQuery from "./hooks/useMediaQuery";
import Topbar from "./components/Topbar";
import PasswordRecovery from "./pages/Recover/Recover";
import Help from "./pages/Help/index";
import Training from "./pages/Content/Training/index";
import { ReferrerDocProvider } from "./contexts/ReferrerDocContext";
import { db } from "./firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import Home from "./pages/Home/Home";
import TopbarMobile from "./components/TopbarMobile";
import BottomBar from "./components/BottomBar";
import Content from "./pages/Content/Content";
import StartHereModule from "./pages/Content/Training/StartHere/index";
import BehaviorModule from "./pages/Content/Training/Behavior/index";
import SocializationModule from "./pages/Content/Training/Socialization/index";
import HygieneModule from "./pages/Content/Training/Hygiene/index";
import BadHabitsModule from "./pages/Content/Training/BadHabits/index";
import MentalModule from "./pages/Content/Training/Mental/index";
import Behavior1 from "./pages/Content/Training/Behavior/Lessons/Behavior1";
import Behavior2 from "./pages/Content/Training/Behavior/Lessons/Behavior2";
import Behavior3 from "./pages/Content/Training/Behavior/Lessons/Behavior3";
import Behavior4 from "./pages/Content/Training/Behavior/Lessons/Behavior4";
import Behavior5 from "./pages/Content/Training/Behavior/Lessons/Behavior5";
import Vaccines from "./pages/Content/Vaccines";
import { VaccineProvider } from "./pages/Content/Vaccines/contexts/VaccineContext";
import Diary from "./pages/Content/Diary";
import Dashboard from "./pages/Dashboard";
import { DashboardProvider } from "./pages/Dashboard/contexts/DashboardContext";
import Notifications from "./pages/Notifications";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Report from "./pages/Report";
import ReportSuccess from "./pages/Report/Success";
import ReportProblem from "./pages/ReportProblem";

export default function AppRoutes() {
  const { user } = useAuthContext();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [rerender, setRerender] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [isWatching, setIsWatching] = useState(false);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Toaster />
      <BrowserRouter>
        {user ? (
          <UserDocProvider user={user}>
            <ReferrerDocProvider user={user}>
              <VaccineProvider>
                <DashboardProvider>
                {isMobile ? (
                  <TopbarMobile setRerender={setRerender} />
                ) : (
                  <Topbar setRerender={setRerender} />
                )}
                {isMobile ? null : (
                  <div
                    className={`${
                      sidebarExpanded ? "w-[284px]" : "w-[90px]"
                    } w-[286px] h-[calc(100vh_-_120px)] fixed top-24 left-5 bottom-5 overflow-y-hidden border rounded-md`}
                  >
                    <Sidebar
                      rerender={rerender}
                      setRerender={setRerender}
                      sidebarExpanded={sidebarExpanded}
                      setSidebarExpanded={setSidebarExpanded}
                      isWatching={isWatching}
                      setIsWatching={setIsWatching}
                    />
                  </div>
                )}
                <div
                  className={`${
                    isMobile
                      ? "w-full"
                      : sidebarExpanded
                      ? "w-[calc(100%_-_300px)]"
                      : "w-[calc(100%_-_100px)]"
                  } ${isMobile ? "mt-20" : "mt-24"} ${
                    isMobile ? "mb-20" : "mb-5"
                  } ${
                    isMobile ? "mx-0" : "mx-5"
                  } float-right overflow-y-auto h-[calc(100vh_-_120px)]`}
                >
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/content" element={<Content />} />
                    <Route path="/content/training" element={<Training />} />
                    <Route
                      path="/content/training/start-here"
                      element={<StartHereModule />}
                    />
                    <Route
                      path="/content/training/behavior"
                      element={<BehaviorModule />}
                    />
                    <Route
                      path="/content/training/socialization"
                      element={<SocializationModule />}
                    />
                    <Route
                      path="/content/training/hygiene"
                      element={<HygieneModule />}
                    />
                    <Route
                      path="/content/training/badhabits"
                      element={<BadHabitsModule />}
                    />
                    <Route
                      path="/content/training/mental"
                      element={<MentalModule />}
                    />
                    <Route
                      path="/content/training/behavior/lessons/behavior1"
                      element={<Behavior1 />}
                    />
                    <Route
                      path="/content/training/behavior/lessons/behavior2"
                      element={<Behavior2 />}
                    />
                    <Route
                      path="/content/training/behavior/lessons/behavior3"
                      element={<Behavior3 />}
                    />
                    <Route
                      path="/content/training/behavior/lessons/behavior4"
                      element={<Behavior4 />}
                    />
                    <Route
                      path="/content/training/behavior/lessons/behavior5"
                      element={<Behavior5 />}
                    />
                    <Route path="/content/vaccines" element={<Vaccines />} />
                    <Route path="/content/diary" element={<Diary />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/report-problem" element={<ReportProblem />} />
                    <Route path="/report" element={<Report />} />
                    <Route
                      path="/report/success"
                      element={<ReportSuccess />}
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                </div>
                {isMobile && <BottomBar />}
                </DashboardProvider>
              </VaccineProvider>
            </ReferrerDocProvider>
          </UserDocProvider>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/recover" element={<PasswordRecovery />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}
