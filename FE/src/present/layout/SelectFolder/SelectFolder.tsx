import React, { memo, useEffect, useState } from "react";
import * as Style from "./SelectFolder.style";
import { useNavigate } from "react-router-dom";
import { toastListState } from "@src/store/toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { folderListState } from "@src/store/folder";

import PrimeTitle from "@src/present/common/PrimeTitle/PrimeTitle";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";
import AddButton from "@src/present/common/Button/AddButton";
import FolderDropdown from "@src/present/component/FolderDropdown/FolderDropdown";
import Modal from "@src/present/common/Modal/Modal";
import AddFolderModal from "../AddFolderModal/AddFolderModal";
import { GetFolderByUserId } from "@src/action/hooks/Folder";
import { Folder, InputFolder } from "@src/types/FlightInfo";
import { Error } from "@src/action/api/api";
import { authState } from "@src/store/auth";

const SelectFolder = ({setSelectedFolder}: any) => {
  const navigate = useNavigate();
  const user = useRecoilValue(authState).user;
  const [toastList, setToastList] = useRecoilState(toastListState);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectContent, setSelectContent] = useState<InputFolder>({
    folderId: null,
    folderName: "폴더 이름",
  });
  const [folderList, setFolderList] = useRecoilState<Folder[]>(folderListState);

  useEffect(()=>{
    setSelectedFolder(selectContent)
  }, [selectContent])

  const getData = () =>{
    GetFolderByUserId(user?.userId).then((res) => {
      if (res.isSuccess) {
        setFolderList([...res.result]);
      } else {
        if (Error.response.status === 404) {
          const errToast = {
            type: "Error",
            sentence: "업로드 가능한 폴더가 없습니다.",
          };
          setToastList({ list: [...toastList.list, errToast] });
        } else if (Error.response.status === 403){
          const errToast = {
            type: "Error",
            sentence: "권한이 없는 사용자입니다.",
          };
          setToastList({ list: [...toastList.list, errToast] });
        }
      }
    });
  }
  useEffect(() => {
    getData()
  }, []);

  const routeHandler = () => {
    if (selectContent.folderName !== "폴더 이름")
      navigate("/upload/addpicture", { state: selectContent });
    else {
      alert("폴더를 선택해주세요");
    }
  };

  const onClickButton = () => {
    setIsOpen(true);
  };

  return (
    <Style.Container>
      <PrimeTitle content="폴더를 선택해주세요" />
      <FolderDropdown
        options={folderList}
        select={{ selectContent, setSelectContent }}
      />
      <AddButton content={"폴더 추가하기"} handler={onClickButton} />
      {isOpen && (
        <Modal
          onClose={() => {
            setIsOpen(false);
          }}
          width="40vw"
          height="80vh"
          title="폴더 추가"
          content={<AddFolderModal onClose={() => {
            setIsOpen(false); getData();
          }}/>}
        />
      )}
      <PrimaryButton
        content={"사진 추가하기"}
        isArrow={true}
        handler={routeHandler}
      />
    </Style.Container>
  );
};

export default memo(SelectFolder);
