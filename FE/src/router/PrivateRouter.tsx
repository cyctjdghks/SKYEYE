import { useRecoilValue, useRecoilState } from "recoil";
import { toastListState } from "@src/store/toast";
import { authState } from "@src/store/auth";
import { Outlet, Navigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = () => {
  const isLogin = useRecoilValue(authState).isAuthenticated
  
  const [toastList, setToastList] = useRecoilState(toastListState);

  useEffect(()=>{
    if(!isLogin){
      const accessAdminToast = {
        type: "Error",
        sentence: "권한이 없습니다.",
      };
      setToastList({ list: [...toastList.list, accessAdminToast] });
    }
  }, [])
 
  return !isLogin? <Navigate to="/" /> : <Outlet />;
};

export default PrivateRoute;
