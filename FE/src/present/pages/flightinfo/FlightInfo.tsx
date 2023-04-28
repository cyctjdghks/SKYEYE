import React, { memo, useState } from "react";
import SideBar from "@src/present/common/SideBar/SideBar";
import SideContent from "@layout/SideContent/SideContent";

const FlightInfo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideContent isOpen={isOpen}>
        <div>HI</div>
      </SideContent>
    </>
  );
};

export default memo(FlightInfo);
