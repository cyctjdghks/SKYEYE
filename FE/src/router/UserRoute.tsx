import { useRecoilValue, useRecoilState } from "recoil";
import { toastListState } from "@src/store/toast";
import { authState } from "@src/store/auth";
import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UserRoute = () => {
  const userType = useRecoilValue(authState).userType
  const [toastList, setToastList] = useRecoilState(toastListState);

  useEffect(()=>{
    if(!userType){
      const accessAdminToast = {
        type: "Error",
        sentence: "권한이 없습니다.",
      };
      setToastList({ list: [...toastList.list, accessAdminToast] });
    }
  }, [])
 
  return !userType? <Navigate to="/admin" /> : <Outlet />;
};

export default UserRoute;
