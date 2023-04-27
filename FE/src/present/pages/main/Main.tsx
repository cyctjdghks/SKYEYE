import { useState } from "react";
import * as style from "@pages/main/Main.style";
import Modal from "@common/Modal/Modal";
import FirstPage from "@component/main/firstPage";
import SecondPage from "@component/main/secondPage";
import ModalContent from "@component/main/modalcontent";
import logo from "@assets/main/logo.png";
import right from "@assets/main/right.png";

const Main = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClickButton = () => {
    setIsOpen(true);
  };


  return (
    <style.mainWrapper>
      <style.topBox>
        <style.logo src={logo}></style.logo>
        <style.loginButton onClick={onClickButton}>
          <style.logoText>로그인하기</style.logoText>
          <style.logoRight src={right}></style.logoRight>
        </style.loginButton>
          {isOpen && (
            <Modal
              onClose={() => {
                setIsOpen(false);
              }}
              width="50vw"
              height="60vh"
              title="로그인"
              content={<ModalContent/>}
            />
          )}
      </style.topBox>
      <FirstPage />
      <SecondPage />
    </style.mainWrapper>
  );
};

export default Main;
