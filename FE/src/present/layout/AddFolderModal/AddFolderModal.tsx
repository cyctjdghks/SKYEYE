import { memo, useState } from "react";
import * as style from "./AddFolderModal.style";
import Input from "@src/present/Input/Input";
import PrimeTitle from "@src/present/common/PrimeTitle/PrimeTitle";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";
import { RegistFolder } from "@src/action/hooks/Folder";
import { AboutFolder } from "@src/types/FlightInfo";
import { GetFolderByUserId } from "@src/action/hooks/Folder";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "@src/store/auth";
import { folderListState } from "@src/store/folder";
import { toastListState } from "@src/store/toast";
import { Folder } from "@src/types/FlightInfo";

type FolerInfo = {
  onClose: () => void;
};

const AddFolderModal = ({ onClose }: FolerInfo) => {
  const user = useRecoilValue(authState).user;

  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth()+1;
  var day = today.getDate();
  
  var format = year+"-"+(("00"+month.toString()).slice(-2))+"-"+(("00"+day.toString()).slice(-2));

  const [folderName, setFolderName] = useState<string>("");
  const [folderMemo, setFolderMemo] = useState<string>("");
  const [folderBuilt, setFolderBuilt] = useState<string>(format);
  const [userId, setUserId] = useState<string>(user.userId);

  const [toastList, setToastList] = useRecoilState(toastListState);

  const [folderList, setFolderList] = useRecoilState<Folder[]>(folderListState);

  const updateFolder = () => {
    GetFolderByUserId(user?.userId).then((res) => {
      if (res.isSuccess) {
        setFolderList([...res.result]);
        const errToast = {
          type: "Success",
          sentence: "폴더가 추가되었습니다.",
        };
        setToastList({ list: [...toastList.list, errToast] });
      }
    });
  };


  return (
    <style.ModalContainer>
      <PrimeTitle content="폴더 추가" />
      <style.InputContainer
        placeholder="폴더 이름"
        onChange={(e) => setFolderName(e.target.value)}
        value={folderName}
      />
      <style.InputContainer
        placeholder="폴더 정보"
        onChange={(e) => setFolderMemo(e.target.value)}
        value={folderMemo}
      />
      <style.InputContainer
        placeholder="폴더 날짜"
        onChange={(e) => setFolderBuilt(e.target.value)}
        value={folderBuilt}
        readOnly
      />
      <style.InputContainer
        placeholder="담당자 ID"
        onChange={(e) => setUserId(e.target.value)}
        value={userId}
        readOnly
      />
      <PrimaryButton
        content={"추가하기"}
        handler={() => {
          RegistFolder({
            folderName,
            folderMemo,
            folderBuilt,
            userId,
          }),
            updateFolder(),
            onClose();
        }}
      />
    </style.ModalContainer>
  );
};

export default memo(AddFolderModal);
