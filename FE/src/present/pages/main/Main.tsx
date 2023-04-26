import * as style from "@pages/main/Main.style";
import * as first from "@component/main/firstPage.style"
import logo from "@assets/main/logo.png";
import right from "@assets/main/right.png";
import backVideo from "@assets/main/coverVideo.mp4"

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
      <first.firstPage>
        <first.backVideo muted autoPlay loop src={backVideo}></first.backVideo>
        <first.mainTextFirst>건물안전,</first.mainTextFirst><br/>
        <first.mainTextSecond>SKYEYE
        <first.mainTextThird>로 완성합니다.</first.mainTextThird>
        </first.mainTextSecond>
      </first.firstPage>
      <style.secondPage>
        
      </style.secondPage>
    </style.mainWrapper>
  );
};

export default Main;
