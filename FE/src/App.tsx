import React, { useState } from "react";
import * as style from "./App.style";
import InputLabel from "@common/InputLabel/InputLabel";
import SideBar from "@common/SideBar/SideBar";
import { DataInput } from "./action/hooks/Effectiveness";

function App() {
  return (
    <style.AppWrap>
      <SideBar></SideBar>
    </style.AppWrap>
  );
}

export default App;
