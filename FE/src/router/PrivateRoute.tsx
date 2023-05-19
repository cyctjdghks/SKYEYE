import { useRecoilValue } from "recoil";
import { authState } from "@src/store/auth";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isLogin = useRecoilValue(authState).isAuthenticated
  
  return !isLogin? <Navigate to="/" /> : <Outlet />;
};

export default PrivateRoute;
