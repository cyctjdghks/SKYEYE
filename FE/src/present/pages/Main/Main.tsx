import { useState } from "react";
import * as style from "@src/present/pages/Main/Main.style";
import Modal from "@common/Modal/Modal";
import FirstPage from "@component/Main/FirstPage";
import SecondPage from "@component/Main/SecondPage";
import ThirdPage from "@src/present/component/Main/ThirdPage";
import ModalContent from "@component/Main/Modalcontent";
import logo from "@assets/main/logo.png";
import right from "@assets/main/right.png";
import { GetWeather } from "@action/hooks/GetWeather";

const Main = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClickButton = () => {
    setIsOpen(true);
    
  };
  return (
    <style.MainWrapper>
      <style.TopBox>
        <style.Logo src={logo} ></style.Logo>
        <style.LoginButton onClick={onClickButton}>
          <style.LogoText>로그인 하기</style.LogoText>
          <style.LogoRight src={right}></style.LogoRight>
        </style.LoginButton>
        {isOpen && (
          <Modal
            onClose={() => {
              setIsOpen(false);
            }}
            width="40vw"
            height="55vh"
            title="로그인"
            content={<ModalContent />}
          />
        )}
      </style.TopBox>
      <FirstPage />
      <SecondPage />
      <ThirdPage/>
    </style.MainWrapper>
  );
};

export default Main;
