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

function AppRoutes() {
  const { user, authIsReady } = useAuthContext();
  const [rerender, setRerender] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [isWatching, setIsWatching] = useState(false);
  const [redirectToRoute, setRedirectToRoute] = useState(null);
  const [userDoc, setUserDoc] = useState(null);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const scrollToTop = useRef(null);
  const [activeRoute, setActiveRoute] = useState("/");

  if (!authIsReady) {
    console.log("Not auth is ready");
    return <Loading />;
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div
        ref={scrollToTop}
        className="App flex flex-col sm:flex-row bg-background "
      >
        <Toaster />
        <BrowserRouter>
          {user ? (
            <UserDocProvider user={user}>
              <ReferrerDocProvider user={user}>
                <VaccineProvider>
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
                  <div className="w-full sm:w-[calc(100%_-_300px)] sm:ml-[310px] mt-[80px] px-2 sm:px-5 sm:mt-[112px] main-content">
                    <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route path="/dashboard" element={
                        <DashboardProvider>
                          <Dashboard />
                        </DashboardProvider>
                      } />
                      <Route path="/notifications" element={<Notifications />} />
                      <Route path="/adestramento" element={<Content />} />
                      <Route path="/content/training" element={
                        <DashboardProvider>
                          <Training />
                        </DashboardProvider>
                      } />
                      <Route path="/content/training/starthere" element={
                        <DashboardProvider>
                          <StartHereModule />
                        </DashboardProvider>
                      } />
                      <Route path="/content/training/behavior" element={
                        <DashboardProvider>
                          <BehaviorModule />
                        </DashboardProvider>
                      } />
                      <Route path="/content/training/socialization" element={
                        <DashboardProvider>
                          <SocializationModule />
                        </DashboardProvider>
                      } />
                      <Route path="/content/training/hygiene" element={
                        <DashboardProvider>
                          <HygieneModule />
                        </DashboardProvider>
                      } />
                      <Route path="/content/training/badhabits" element={
                        <DashboardProvider>
                          <BadHabitsModule />
                        </DashboardProvider>
                      } />
                      <Route path="/content/training/mental" element={
                        <DashboardProvider>
                          <MentalModule />
                        </DashboardProvider>
                      } />
                      <Route path="/content/training/behavior/1" element={
                        <DashboardProvider>
                          <Behavior1 />
                        </DashboardProvider>
                      } />
                      <Route path="/content/training/behavior/2" element={
                        <DashboardProvider>
                          <Behavior2 />
                        </DashboardProvider>
                      } />
                      <Route path="/content/training/behavior/3" element={
                        <DashboardProvider>
                          <Behavior3 />
                        </DashboardProvider>
                      } />
                      <Route path="/content/training/behavior/4" element={
                        <DashboardProvider>
                          <Behavior4 />
                        </DashboardProvider>
                      } />
                      <Route path="/content/training/behavior/5" element={
                        <DashboardProvider>
                          <Behavior5 />
                        </DashboardProvider>
                      } />
                      <Route path="/content/vaccines" element={
                        <DashboardProvider>
                          <Vaccines />
                        </DashboardProvider>
                      } />
                      <Route path="/content/diary" element={
                        <DashboardProvider>
                          <Diary />
                        </DashboardProvider>
                      } />
                      <Route path="/diario" element={<Navigate to="/content/diary" replace />} />
                      <Route path="/vacinas" element={<Navigate to="/content/vaccines" replace />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/help" element={<Help />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/terms" element={<Terms />} />
                      <Route path="/privacy" element={<Privacy />} />
                      <Route path="/recover" element={<PasswordRecovery />} />
                      <Route path="/report" element={<Report />} />
                      <Route path="/report/success" element={<ReportSuccess />} />
                      <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                  </div>
                  {isMobile ? (
                    <div className="h-16 fixed bottom-0 left-0">
                      <BottomBar
                        activeRoute={activeRoute}
                        setActiveRoute={setActiveRoute}
                      />
                    </div>
                  ) : null}
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
      </div>
    </ThemeProvider>
  );
}

export default AppRoutes;
