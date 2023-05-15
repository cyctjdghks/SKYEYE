import React, { memo, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { sidebarState } from "@src/store/sidebar";

import SideBar from "@src/present/common/SideBar/SideBar";
import SideContent from "@layout/SideContent/SideContent";
import FlightInfoLayout from "@src/present/layout/FlightInfoLayout/FlightInfoLayout";

const FlightInfo = () => {
  const [isOpen, setIsOpen] = useRecoilState(sidebarState);

  return (
    <>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideContent isOpen={isOpen} titleProps={{ isButton: false }}>
        <FlightInfoLayout />
      </SideContent>
    </>
  );
};

export default memo(FlightInfo);
