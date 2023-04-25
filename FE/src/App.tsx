import React, { useState } from "react";
import classes from "@src/App.module.css";
import SideBar from "@common/SideBar/SideBar";
import { useRecoilState } from "recoil";
import { authState } from "@store/auth";
import { Route, Routes } from "react-router-dom";
import Main from "@pages/main/Main";
import Admin from "@pages/admin/Admin";
import Drone from "@pages/drone/Drone";
import Picture from "@pages/picture/Picture";
import FlightInfo from "@pages/flightinfo/FlightInfo";
import { urls } from "@constant/values";

function App() {
  const [auth, setAuth] = useRecoilState(authState);

  return (
    <div className={classes.appWrap}>
      {auth.isAuthenticated ? <SideBar></SideBar> : <></>}
      <Routes>
        <Route path={urls.path.main} element={<Main />}></Route>
        <Route path={urls.path.admin} element={<Admin />}></Route>
        <Route path={urls.path.flightinfo} element={<FlightInfo />}></Route>
        <Route path={urls.path.picture} element={<Picture />}></Route>
        <Route path={urls.path.drone} element={<Drone />}></Route>
      </Routes>
    </div>
  );
}

export default App;
