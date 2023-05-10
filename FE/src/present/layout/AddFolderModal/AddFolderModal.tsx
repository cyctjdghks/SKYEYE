import { memo, useState } from "react";
import * as Style from "./AddFolderModal.style";
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
  const [aboutFolder, setAboutFolder] = useState<AboutFolder>({
    folderName: "폴더 이름",
    folderMemo: "폴더 정보",
    folderBuilt: "건축 일자(YYYY-MM-DD)",
    userId: "담당자ID",
  });

  const user = useRecoilValue(authState).user;

  const [toastList, setToastList] = useRecoilState(toastListState);

  const [folderList, setFolderList] = useRecoilState<Folder[]>(folderListState);

  const changeFolder = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setAboutFolder(() => {
      return { ...aboutFolder, [type]: e.target.value };
    });
  };

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

  const inputs = Object.keys(aboutFolder).map((elem, idx) => {
    return (
      <Input
        key={idx}
        placeholder={aboutFolder[elem]}
        handler={(e) => changeFolder(e, elem)}
      />
    );
  });

  return (
    <Style.ModalContainer>
      <PrimeTitle content="폴더 추가" />
      {inputs}
      <PrimaryButton
        content={"추가하기"}
        handler={() => {
          RegistFolder(aboutFolder), updateFolder(), onClose();
        }}
      />
    </Style.ModalContainer>
  );
};

export default memo(AddFolderModal);
