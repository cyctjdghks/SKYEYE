import { useState, useEffect } from "react";

import { adminState, selectedIdxState } from "@store/admin";

import Modal from "@src/present/common/Modal/Modal";
import EditModalContent from "@component/Adminpage/EditModalContent";
import RegistModalContent from "@src/present/component/Adminpage/RegistModalContent";
import UserTable from "@src/present/component/Adminpage/UserTable";

import * as style from "@src/present/pages/Admin/Admin.style";
import AdminButton from "@src/present/component/Adminpage/AdminPrimaryButton";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";
import PrimeTitle from "@src/present/common/PrimeTitle/PrimeTitle";
import right from "@assets/main/right.png";
import { ReactComponent as LogoutIcon } from "@assets/sidebar/logout.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { UserLogout } from "@src/action/hooks/User";
import { toastListState } from "@src/store/toast";

type UserInfo = {
  userId: string;
  userName: string;
  userPosition: string;
  userPhoneNumber: string;
  imageSrc: string;
};

const Admin = () => {
  const navigate = useNavigate();
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
  const [toastList, setToastList] = useRecoilState(toastListState);

  useEffect(() => {
    setChooseUser(users[selectedIdx]);
  }, [selectedIdx, users]);

  const onClickButton = () => {
    setIsOpen(true);
  };
  const onClickButton2 = () => {
    setIsOpen2(true);
  };

  const logoutSignal = () => {
    UserLogout()
      .then((res) => {
        navigate("/");
        const successAdminToast = {
          type: "Success",
          sentence: "로그아웃에 성공했습니다",
        };
        setToastList({ list: [...toastList.list, successAdminToast] });
      })
      .catch((err) => {
        const errorLogoutToast = {
          type: "Error",
          sentence: "로그아웃에 실패했습니다.",
        };
        setToastList({ list: [...toastList.list, errorLogoutToast] });
      });
  };

  return (
    <style.PageBox>
      <style.TopBox>
        <style.PageNameBox>

        <style.PageName>회원 정보</style.PageName>
        <style.LogoutBox>
          <style.logoutText onClick={logoutSignal}>로그아웃</style.logoutText>
          <LogoutIcon />
        </style.LogoutBox>
        </style.PageNameBox>
        <style.TopButtonBox>
          {selectedIdx !== null ? (
            <AdminButton
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
          <AdminButton
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
        <style.Number>직원 아이디</style.Number>
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
