import React, { memo, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SideBar from "@common/SideBar/SideBar";
import SideContent from "@layout/SideContent/SideContent";
import SelectFolder from "@src/present/layout/SelectFolder/SelectFolder";
import AddPicture from "@src/present/layout/AddPicture/AddPicture";
import { InputFolder } from "@src/types/FlightInfo";

const Upload = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedFolder, setSelectedFolder] = useState<InputFolder>();

  const titleProps =
    location.pathname === "/upload/addpicture"
      ? {
          isButton: true,
          btnInfo: {
            content: "종료하기",
            isArrow: false,
            handler: () => {
              navigate("/upload");
            },
          },
        }
      : { isButton: false };

  return (
    <>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideContent isOpen={isOpen} titleProps={titleProps}>
        <Routes>
          <Route
            path={"/"}
            element={<SelectFolder setSelectedFolder={setSelectedFolder} />}
          />
          <Route
            path={"/addpicture"}
            element={<AddPicture folderId={selectedFolder?.folderId} />}
          />
        </Routes>
      </SideContent>
    </>
  );
};

export default memo(Upload);
