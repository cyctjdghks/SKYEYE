import { useState, useEffect } from "react";

import { adminState, selectedIdxState } from "@store/admin";

import Modal from "@src/present/common/Modal/Modal";
import EditModalContent from "@component/Adminpage/EditModalContent";
import RegistModalContent from "@src/present/component/Adminpage/RegistModalContent";
import UserTable from "@src/present/component/Adminpage/UserTable";

import * as style from "@src/present/pages/Admin/Admin.style";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";
import PrimeTitle from "@src/present/common/PrimeTitle/PrimeTitle";
import right from "@assets/main/right.png";
import { useRecoilValue } from "recoil";

type UserInfo = {
  userId: string;
  userName: string;
  userPosition: string;
  userPhoneNumber: string;
  imageSrc: string;
};

const Admin = () => {
  const selectedIdx = useRecoilValue(selectedIdxState).idx;
  const users = useRecoilValue(adminState).users;
  const [chooseUser, setChooseUser] = useState<UserInfo>({
    userId: "",
    userName: "",
    userPosition: "",
    userPhoneNumber: "",
    imageSrc: "",
  });
  //모달
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  useEffect(() => {
    setChooseUser(users[selectedIdx]);
  }, [selectedIdx, users]);

  const onClickButton = () => {
    setIsOpen(true);
  };
  const onClickButton2 = () => {
    setIsOpen2(true);
  };

  return (
    <style.PageBox>
      <style.TopBox>
        <style.PageName>사원 정보</style.PageName>
        <style.TopButtonBox>
          {selectedIdx !== null ? (
            <PrimaryButton
              content={"수정 하기"}
              isArrow={true}
              handler={onClickButton}
              disabled={false}
            />
          ) : (
            <style.HiddenBox></style.HiddenBox>
          )}
          {isOpen && (
            <Modal
              onClose={() => {
                setIsOpen(false);
              }}
              width="50vw"
              height="70vh"
              title="회원 정보 수정"
              content={
                <EditModalContent
                  data={chooseUser}
                  onClose={() => {
                    setIsOpen(false);
                  }}
                />
              }
            />
          )}
          <style.HiddenBox></style.HiddenBox>
          <PrimaryButton
            content={"등록 하기"}
            isArrow={true}
            handler={onClickButton2}
            disabled={false}
          />
          {isOpen2 && (
            <Modal
              onClose={() => {
                setIsOpen2(false);
              }}
              width="50vw"
              height="70vh"
              title="회원 등록 하기"
              content={
                <RegistModalContent
                  onClose={() => {
                    setIsOpen2(false);
                  }}
                />
              }
            />
          )}
        </style.TopButtonBox>
      </style.TopBox>
      <style.DataTitle>
        <style.Number>직원 번호</style.Number>
        <style.Name>이름</style.Name>
        <style.Job>직책</style.Job>
        <style.Phone>연락처</style.Phone>
      </style.DataTitle>
      <style.HrLine></style.HrLine>
      <UserTable />
    </style.PageBox>
  );
};

export default Admin;
