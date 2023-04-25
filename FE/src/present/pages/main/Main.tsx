import * as style from "@pages/main/Main.style";
import logo from "@assets/main/logo.png";
import right from "@assets/main/right.png";
import skyImg from "@assets/main/skyImg.jpg"

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
      <style.firstPage>
        <style.skyImg src={skyImg}></style.skyImg>
        <style.mainTextFirst>건물안전,</style.mainTextFirst>
        <style.mainTextSecond>SKYEYE</style.mainTextSecond>
        <style.mainTextThird>로 완성합니다.</style.mainTextThird>
      </style.firstPage>
      <style.secondPage>
        
      </style.secondPage>
    </style.mainWrapper>
  );
};

export default Main;
