import React, { memo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sidebarState } from "@src/store/sidebar";

import SideBar from "@common/SideBar/SideBar";
import SideContent from "@layout/SideContent/SideContent";
import SelectFolder from "@src/present/layout/SelectFolder/SelectFolder";
import AddPicture from "@src/present/layout/AddPicture/AddPicture";
import { selectedFolderIdState } from "@src/store/folder";

const Upload = () => {
  const [isOpen, setIsOpen] = useRecoilState(sidebarState);
 

  const titleProps = { isButton: false };

  return (
    <>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideContent isOpen={isOpen} titleProps={titleProps}>
        <Routes>
          <Route
            path={"/"}
            element={<SelectFolder />}
          />
          <Route
            path={"/addpicture"}
            element={<AddPicture/>}
          />
        </Routes>
      </SideContent>
    </>
  );
};

export default memo(Upload);
