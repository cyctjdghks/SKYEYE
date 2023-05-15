import React, { memo, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sidebarState } from "@src/store/sidebar";

import Calendar from "@src/present/layout/Calendar/Calendar";
import AllPictures from "@src/present/layout/AllPictures/AllPictures";

import SideBar from "@src/present/common/SideBar/SideBar";
import SideContent from "@layout/SideContent/SideContent";

const Picture = () => {
  const [isOpen, setIsOpen] = useRecoilState(sidebarState);

  return (
    <>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideContent isOpen={isOpen} titleProps={{ isButton: false }}>
        <Routes>
          <Route path={"/"} element={<Calendar />} />
          <Route path={"/all"} element={<AllPictures />} />
        </Routes>
      </SideContent>
    </>
  );
};

export default memo(Picture);
