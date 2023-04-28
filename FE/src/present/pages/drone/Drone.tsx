import React, {memo, useState} from "react";
import SideBar from "@common/SideBar/SideBar";
import SideContent from "@layout/SideContent/SideContent"

const Drone = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
  <>
    <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
    <SideContent isOpen={isOpen}>
      <div>HI</div>
    </SideContent>
  </>
  )
};

export default memo(Drone);
