import * as style from "@pages/main/Main.style";
import FirstPage from "@component/main/firstPage";
import SecondPage from "@component/main/secondPage";
import ThirdPage from "@component/main/thirdPage";
import logo from "@assets/main/logo.png";
import right from "@assets/main/right.png";
import backVideo from "@assets/main/coverVideo.mp4";

const Main = () => {
  return (
    <style.mainWrapper>
      <style.topBox>
        <style.logo src={logo}></style.logo>
        <style.loginButton>
          <style.logoText>로그인하기</style.logoText>
          <style.logoRight src={right}></style.logoRight>
        </style.loginButton>
      </style.topBox>
      <FirstPage />
      <SecondPage />
    </style.mainWrapper>
  );
};

export default Main;
