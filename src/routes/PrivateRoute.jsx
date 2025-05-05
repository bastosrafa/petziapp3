import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, authIsReady } = useAuthContext();
  const location = useLocation();

  if (!authIsReady) {
    return <div>Carregando...</div>;
  }

  if (!user && location.pathname !== "/login") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute; 