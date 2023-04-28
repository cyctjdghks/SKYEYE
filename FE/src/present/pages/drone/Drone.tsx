import React, {memo, useState} from "react";
import SideBar from "@common/SideBar/SideBar";
import SideContent from "@layout/SideContent/SideContent"
import SelectBuilding from "@src/present/layout/SelectBuilding/SelectBuilding";

const Drone = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
  <>
    <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
    <SideContent isOpen={isOpen}>
      <SelectBuilding />
    </SideContent>
  </>
  )
};

export default memo(Drone);
