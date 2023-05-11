import React, { memo, useState, useEffect } from "react";

import SideBar from "@src/present/common/SideBar/SideBar";
import SideContent from "@layout/SideContent/SideContent";
import FlightInfoLayout from "@src/present/layout/FlightInfoLayout/FlightInfoLayout";

const FlightInfo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
