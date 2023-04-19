import "./App.css";
import React, { useState } from "react";
import accountCircle from "@assets/accountCircle.png"
import * as button from "@common/Button";
import * as sidebar from "@common/SideBar";



function App() {
  return (
    <div className="App">
      <sidebar.SideBar></sidebar.SideBar>
    </div>
  );
}

export default App;
