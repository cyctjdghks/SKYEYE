import { useState, useEffect } from "react";

import { adminState, selectedIdxState } from "@store/admin";

import Modal from "@src/present/common/Modal/Modal";
import AdminModalContent from "../../component/adminpage/AdminModalContent";
import RegistModalContent from "@component/adminpage/RegistModalContent";
import UserTable from "@src/present/component/adminpage/UserTable";

import * as style from "@pages/admin/Admin.style";
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
    <style.pageBox>
      <style.topBox>
        <style.pageName>사원 정보</style.pageName>
        {selectedIdx !== null ? (
          <style.editButton onClick={onClickButton}>
            <style.editText>회원 정보 수정</style.editText>
            <style.editRight src={right}></style.editRight>
          </style.editButton>
        ) : (
          <style.editButtontmp>
            <style.editText>회원 정보 수정</style.editText>
            <style.editRight src={right}></style.editRight>
          </style.editButtontmp>
        )}
        {isOpen && (
          <Modal
            onClose={() => {
              setIsOpen(false);
            }}
            width="50vw"
            height="60vh"
            title="회원 정보 수정"
            content={
              <AdminModalContent
                data={chooseUser}
                onClose={() => {
                  setIsOpen(false);
                }}
              />
            }
          />
        )}
        <style.editButton onClick={onClickButton2}>
          <style.editText>회원 등록 하기</style.editText>
          <style.editRight src={right}></style.editRight>
        </style.editButton>
        {isOpen2 && (
          <Modal
            onClose={() => {
              setIsOpen2(false);
            }}
            width="50vw"
            height="60vh"
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
      </style.topBox>
      <style.dataTitle>
        <style.no>No</style.no>
        <style.number>직원 번호</style.number>
        <style.name>이름</style.name>
        <style.job>직책</style.job>
        <style.phone>연락처</style.phone>
      </style.dataTitle>
      <style.hrLine></style.hrLine>
      <UserTable />
    </style.pageBox>
  );
};

export default Admin;
