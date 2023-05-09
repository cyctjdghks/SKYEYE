import React, { memo, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SideBar from "@common/SideBar/SideBar";
import SideContent from "@layout/SideContent/SideContent";
import SelectFolder from "@src/present/layout/SelectFolder/SelectFolder";
import AddPicture from "@src/present/layout/AddPicture/AddPicture";

const Drone = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const titleProps =
    location.pathname === "/drone/addpicture"
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
          <Route path={"/"} element={<SelectFolder />} />
          <Route path={"/addpicture"} element={<AddPicture />} />
        </Routes>
      </SideContent>
    </>
  );
};

export default memo(Drone);
