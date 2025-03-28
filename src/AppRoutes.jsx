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
import Help from "./pages/Help/Help";
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
                  <div className="sm:w-[calc(100%_-_300px)] sm:ml-[310px] mt-[80px] px-2.5 sm:px-5 sm:mt-[112px]">
                    <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route path="/adestramento" element={<Content />} />
                      <Route path="/content/training" element={<Training />} />
                      <Route path="/content/training/starthere" element={<StartHereModule />} />
                      <Route path="/content/training/behavior/*" element={<BehaviorModule />} />
                      <Route path="/content/training/socialization" element={<SocializationModule />} />
                      <Route path="/content/training/hygiene" element={<HygieneModule />} />
                      <Route path="/content/training/badhabits" element={<BadHabitsModule />} />
                      <Route path="/content/training/mental" element={<MentalModule />} />
                      <Route path="/vacinas" element={<Vaccines />} />
                      <Route path="/diario" element={<Diary />} />
                      <Route path="/rota2" element={<Content />} />
                      <Route path="/rota3" element={<Content />} />
                      <Route path="/rota4" element={<Content />} />
                      <Route
                        path="/conta"
                        element={
                          <Profile
                            rerender={rerender}
                            setRerender={setRerender}
                          />
                        }
                      />
                      <Route path="/help" element={<Help />} />
                      <Route path="*" element={<Home />} />
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
              <Route path="/password/recovery" element={<PasswordRecovery />} />
              <Route path="*" element={<Login />} />
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default AppRoutes;
