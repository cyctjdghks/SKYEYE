import React, { useState } from "react";
import classes from "@src/App.module.css";
import SideBar from "@common/SideBar/SideBar";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "@store/auth";
import { Route, Routes } from "react-router-dom";
import Main from "@src/present/pages/Main/Main";
import Admin from "@src/present/pages/Admin/Admin";
import Drone from "@src/present/pages/Drone/Drone";
import Picture from "@src/present/pages/Picture/Picture";
import FlightInfo from "@src/present/pages/Flightinfo/FlightInfo";
import { urls } from "@constant/values";
import ToastContainer from "./present/layout/ToastContainer/ToastContainer";
import AdminRoute from "./router/AdminRouter";
import NotFound from "./present/pages/NotFound/NotFound";

function App() {
  const userType = useRecoilValue(authState).userType;
  
  return (
    <div className={classes.appWrap}>
      <Routes>
        <Route path={urls.path.main} element={<Main />}></Route>
        <Route path={urls.path.flightinfo} element={<FlightInfo />}></Route>
        <Route path={urls.path.picture} element={<Picture />}></Route>
        <Route path={urls.path.drone} element={<Drone />}></Route>
        <Route element={<AdminRoute />}>
          <Route path={urls.path.admin} element={<Admin />}></Route>
        </Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
