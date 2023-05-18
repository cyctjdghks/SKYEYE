import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import * as style from "@src/present/pages/Main/Main.style";
import Modal from "@common/Modal/Modal";
import FirstPage from "@component/Main/FirstPage";
import SecondPage from "@component/Main/SecondPage";
import ThirdPage from "@src/present/component/Main/ThirdPage";
import ModalContent from "@component/Main/Modalcontent";
import SignUpModal from "@src/present/component/Main/SignUpModal";
import logo from "@assets/main/logo.png";
import right from "@assets/main/right.png";
import { authState } from "@src/store/auth";
import { GetOAuthData } from "@src/action/hooks/User";

const Main = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const onClickButton = () => {
    setIsOpen(true);
  };

  const [auth, setAuth] = useRecoilState(authState);

  const authLogin = () => {
    GetOAuthData().then((res) => {
      if (res.isSuccess) {
        setAuth({
          isAuthenticated: true,
          user: res.result,
          userType: 0,
        });
      }
    });
  };

  const modalhandler = (e) => {
    e.preventDefault();
    setModalState(!modalState);
  };

  useEffect(() => {
    setModalState(false);
  }, [isOpen])

  useEffect(() => {
    const token = Cookies.get("AuthorizationToken");
    // token 값이 존재하면 accessToken에 할당하고, 그렇지 않으면 빈 문자열 할당
    const accessToken = token || "";
    if (accessToken) {
      authLogin();
      navigate("/upload");
    }
  }, []);

  return (
    <style.MainWrapper>
      <style.TopBox>
        <style.Logo src={logo}></style.Logo>
        <style.LoginButton onClick={onClickButton}>
          <style.LogoText>로그인 하기</style.LogoText>
          <style.LogoRight src={right}></style.LogoRight>
        </style.LoginButton>
        {isOpen && (
          <Modal
            onClose={() => {
              setIsOpen(false);
            }}
            width={modalState ? "40vw" : "30vw"}
            height={modalState ? "70vh" : "70vh"}
            title={modalState ? "회원가입" : "로그인"}
            content={
              modalState ? (
                <SignUpModal
                  handler={(e) => modalhandler(e)}
                  onClose={() => {
                    setIsOpen(false);
                  }}
                />
              ) : (
                <ModalContent handler={(e) => modalhandler(e)} />
              )
            }
          />
        )}
      </style.TopBox>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </style.MainWrapper>
  );
};

export default Main;
