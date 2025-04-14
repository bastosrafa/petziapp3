import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Notifications from "../pages/Notifications";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <PrivateRoute><Profile /></PrivateRoute>,
  },
  {
    path: "/notificacoes",
    element: <PrivateRoute><Notifications /></PrivateRoute>,
  },
]);

export default router; 