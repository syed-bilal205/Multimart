import useAuth from "../custom-hook/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { currentUser } = useAuth();

  return <>{currentUser ? children : <Navigate to="/login" />}</>;
};
export default ProtectedRoutes;
