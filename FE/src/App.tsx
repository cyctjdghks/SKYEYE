import React, { useState } from "react";
import classes from "@src/App.module.css";
import SideBar from "@common/SideBar/SideBar";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "@store/auth";
import { Route, Routes } from "react-router-dom";
import Main from "@src/present/pages/Main/Main";
import Admin from "@src/present/pages/Admin/Admin";
import Upload from "@src/present/pages/Upload/Upload";
import Picture from "@src/present/pages/Picture/Picture";
import FlightInfo from "@src/present/pages/Flightinfo/FlightInfo";
import { urls } from "@constant/values";
import ToastContainer from "./present/layout/ToastContainer/ToastContainer";
import AdminRoute from "./router/AdminRouter";
import PrivateRoute from "./router/PrivateRouter";
import NotFound from "./present/pages/NotFound/NotFound";

function App() {
  const userType = useRecoilValue(authState).userType;

  return (
    <div className={classes.appWrap}>
      <Routes>
        <Route path={urls.path.main} element={<Main />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path={urls.path.flightinfo} element={<FlightInfo />}></Route>
          <Route path={urls.path.picture} element={<Picture />}></Route>
          <Route path={urls.path.upload} element={<Upload />}></Route>
          <Route element={<AdminRoute />}>
            <Route path={urls.path.admin} element={<Admin />}></Route>
          </Route>
        </Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
