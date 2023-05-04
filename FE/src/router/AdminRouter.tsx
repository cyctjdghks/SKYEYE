import { useRecoilValue } from "recoil";
import { authState } from "@src/store/auth";
import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminRoute = () => {
  const userType = useRecoilValue(authState).userType
  const isLogin = useRecoilValue(authState).isAuthenticated
  const [navLink, setNavLink] = useState<string>("/")
  useEffect(() => {
    if(userType === 1){
      setNavLink("/flightInfo")
    }else if(userType === 2){
      setNavLink("/drone")
    }else{
      setNavLink("/")
    }
  }, [userType])
  return !isLogin? <Navigate to={navLink} /> : <Outlet />;
};

export default AdminRoute;
