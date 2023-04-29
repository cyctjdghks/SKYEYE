import React, { memo, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SideBar from "@common/SideBar/SideBar";
import SideContent from "@layout/SideContent/SideContent";
import SelectBuilding from "@src/present/layout/SelectBuilding/SelectBuilding";
import { urls } from "@src/constant/values";
import DroneCamera from "@src/present/layout/DroneCamera/DroneCamera";

const Drone = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const titleProps =
    location.pathname === "/drone/camera"
      ? {
          isButton: true,
          btnInfo: {
            content: "종료하기",
            isArrow: false,
            handler: () => {
              navigate('/drone')
            },
          },
        }
      : { isButton: false };

  return (
    <>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideContent isOpen={isOpen} titleProps={titleProps}>
        <Routes>
          <Route path={"/"} element={<SelectBuilding />} />
          <Route path={"/camera"} element={<DroneCamera />} />
        </Routes>
      </SideContent>
    </>
  );
};

export default memo(Drone);
