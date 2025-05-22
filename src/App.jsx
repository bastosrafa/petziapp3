import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { OnboardingProvider, ProtectedRoute } from './contexts/OnboardingContext';
import { ThemeProvider } from './providers/ThemeProvider';
import { Toaster } from '@/shadcn/components/ui/toaster';
import { UserDocProvider } from './contexts/UserDocContext';
import { ReferrerDocProvider } from './contexts/ReferrerDocContext';
import { VaccineProvider } from './pages/Content/Vaccines/contexts/VaccineContext';
import { DashboardProvider } from './pages/Dashboard/contexts/DashboardContext';
import useMediaQuery from './hooks/useMediaQuery';
import { useAuthContext } from './hooks/useAuthContext';

// Componentes
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import TopbarMobile from './components/TopbarMobile';
import BottomBar from './components/BottomBar';
import Loading from './components/Loading';

// Lazy load para páginas principais
const Login = lazy(() => import('./pages/Login/Login'));
const Signup = lazy(() => import('./pages/Signup/Signup'));
const PasswordRecovery = lazy(() => import('./pages/Recover/Recover'));
const Home = lazy(() => import('./pages/Home/Home'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Onboarding = lazy(() => import('./components/Onboarding/Onboarding'));
const ResetOnboarding = lazy(() => import('./pages/ResetOnboarding'));
const Content = lazy(() => import('./pages/Content/Content'));
const Training = lazy(() => import('./pages/Content/Training/index'));
const StartHereModule = lazy(() => import('./pages/Content/Training/StartHere/index'));
const BehaviorModule = lazy(() => import('./pages/Content/Training/Behavior/index'));
const SocializationModule = lazy(() => import('./pages/Content/Training/Socialization/index'));
const HygieneModule = lazy(() => import('./pages/Content/Training/Hygiene/index'));
const BadHabitsModule = lazy(() => import('./pages/Content/Training/BadHabits/index'));
const MentalModule = lazy(() => import('./pages/Content/Training/Mental/index'));
const Vaccines = lazy(() => import('./pages/Content/Vaccines'));
const Diary = lazy(() => import('./pages/Content/Diary'));
const Help = lazy(() => import('./pages/Help/index'));
const Notifications = lazy(() => import('./pages/Notifications'));
const About = lazy(() => import('./pages/About'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Report = lazy(() => import('./pages/Report'));
const ReportSuccess = lazy(() => import('./pages/Report/Success'));
const ReportProblem = lazy(() => import('./pages/ReportProblem'));

// Lições
const Behavior1 = lazy(() => import('./pages/Content/Training/Behavior/Lessons/Behavior1'));
const Behavior2 = lazy(() => import('./pages/Content/Training/Behavior/Lessons/Behavior2'));
const Behavior3 = lazy(() => import('./pages/Content/Training/Behavior/Lessons/Behavior3'));
const Behavior4 = lazy(() => import('./pages/Content/Training/Behavior/Lessons/Behavior4'));
const Behavior5 = lazy(() => import('./pages/Content/Training/Behavior/Lessons/Behavior5'));

function App() {
  const { user, authIsReady } = useAuthContext();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [rerender, setRerender] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [isWatching, setIsWatching] = useState(false);

  if (!authIsReady) {
    return <Loading />;
  }

  return (
    <div className="App">
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Toaster />
        <OnboardingProvider>
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
                        className={`$${
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
                      className={`$$${
                        isMobile
                          ? "w-full"
                          : sidebarExpanded
                          ? "w-[calc(100%_-_300px)]"
                          : "w-[calc(100%_-_100px)]"
                      } pt-20 $$${
                        isMobile ? "mb-20" : "mb-5"
                      } $$${
                        isMobile ? "mx-0" : "mx-5"
                      } float-right overflow-y-auto h-[calc(100vh_-_76px)]`}
                    >
                      <Suspense fallback={<Loading />}>
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/dashboard" element={<Dashboard />} />
                          <Route path="/content" element={<Content />} />
                          <Route path="/content/training" element={<Training />} />
                          <Route path="/training" element={<Navigate to="/content/training" />} />
                          <Route path="/content/training/start-here" element={<StartHereModule />} />
                          <Route path="/content/training/behavior" element={<BehaviorModule />} />
                          <Route path="/content/training/socialization" element={<SocializationModule />} />
                          <Route path="/content/training/hygiene" element={<HygieneModule />} />
                          <Route path="/content/training/badhabits" element={<BadHabitsModule />} />
                          <Route path="/content/training/mental" element={<MentalModule />} />
                          <Route path="/content/training/behavior/lessons/behavior1" element={<Behavior1 />} />
                          <Route path="/content/training/behavior/lessons/behavior2" element={<Behavior2 />} />
                          <Route path="/content/training/behavior/lessons/behavior3" element={<Behavior3 />} />
                          <Route path="/content/training/behavior/lessons/behavior4" element={<Behavior4 />} />
                          <Route path="/content/training/behavior/lessons/behavior5" element={<Behavior5 />} />
                          <Route path="/content/vaccines" element={<Vaccines />} />
                          <Route path="/content/diary" element={<Diary />} />
                          <Route path="/notifications" element={<Notifications />} />
                          <Route path="/profile" element={<Profile />} />
                          <Route path="/help" element={<Help />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/terms" element={<Terms />} />
                          <Route path="/privacy" element={<Privacy />} />
                          <Route path="/report-problem" element={<ReportProblem />} />
                          <Route path="/report" element={<Report />} />
                          <Route path="/report/success" element={<ReportSuccess />} />
                          <Route path="/onboarding" element={<Onboarding />} />
                          <Route path="/reset-onboarding" element={<ResetOnboarding />} />
                          <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                      </Suspense>
                    </div>
                    {isMobile && <BottomBar />}
                  </DashboardProvider>
                </VaccineProvider>
              </ReferrerDocProvider>
            </UserDocProvider>
          ) : (
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/recover" element={<PasswordRecovery />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </Suspense>
          )}
        </OnboardingProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
