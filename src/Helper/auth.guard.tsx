import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  return !!localStorage.getItem("token"); // Replace with actual auth logic
};

const AuthGuard = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuard;
