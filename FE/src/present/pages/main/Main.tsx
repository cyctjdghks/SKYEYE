import * as style from "@pages/main/Main.style";
import * as first from "@component/main/firstPage.style"
import logo from "@assets/main/logo.png";
import right from "@assets/main/right.png";
import skyImg from "@assets/main/skyImg.jpg"

const Main = () => {

  const scrollToBottm = () =>{

  }

  return (
    <style.mainWrapper>
      <style.topBox>
        <style.logo src={logo}></style.logo>
        <style.loginButton>
          <style.logoText>로그인하기</style.logoText>
          <style.logoRight src={right}></style.logoRight>
        </style.loginButton>
      </style.topBox>
      <first.firstPage>
        <first.skyImg src={skyImg}></first.skyImg>
        <first.mainTextFirst>건물안전,</first.mainTextFirst><br/>
        <first.mainTextSecond>SKYEYE</first.mainTextSecond>
        <first.mainTextThird>로 완성합니다.</first.mainTextThird>
      </first.firstPage>
      {/* <style.secondPage>
        
      </style.secondPage> */}
    </style.mainWrapper>
  );
};

export default Main;
