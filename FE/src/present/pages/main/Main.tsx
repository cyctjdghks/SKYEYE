import * as style from "@pages/main/Main.style";
import * as first from "@component/main/firstPage.style";
import * as second from "@component/main/secondPage.style";
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
      <first.firstPage>
        <first.backVideo muted autoPlay loop src={backVideo}></first.backVideo>
        <first.mainTextFirst>건물안전,</first.mainTextFirst>
        <br />
        <first.mainTextSecond>
          SKYEYE
          <first.mainTextThird>로 완성합니다.</first.mainTextThird>
        </first.mainTextSecond>
      </first.firstPage>
      <second.secondPage>
        <second.about>about</second.about>
        <second.hrLine></second.hrLine>
        <second.pageText>WHAT CAN WE DO</second.pageText>
        <second.pageText>with SKYEYE?</second.pageText>
        <second.imgBox>
          <second.innerBox>
            <second.smallBox>
              <second.boxImg src={logo}></second.boxImg>
              <second.textBox>
                <second.boxText1>AIoT</second.boxText1>
                <second.boxText2>02</second.boxText2>
              </second.textBox>
            </second.smallBox>
            <second.largeBox>
              <second.boxImg src={logo}></second.boxImg>
              <second.textBox>
                <second.boxText1>AIoT</second.boxText1>
                <second.boxText2>02</second.boxText2>
              </second.textBox>
            </second.largeBox>
            <second.smallBox></second.smallBox>
          </second.innerBox>
          <second.innerBox>
            <second.largeBox></second.largeBox>
            <second.smallBox>
              <second.boxImg src={logo}></second.boxImg>
              <second.textBox>
                <second.boxText1>AIoT</second.boxText1>
                <second.boxText2>02</second.boxText2>
              </second.textBox>
            </second.smallBox>
            <second.smallBox></second.smallBox>
          </second.innerBox>
          <second.innerBox>
            <second.smallBox>
              <second.boxImg src={logo}></second.boxImg>
              <second.textBox>
                <second.boxText1>AIoT</second.boxText1>
                <second.boxText2>02</second.boxText2>
              </second.textBox>
            </second.smallBox>
            <second.smallBox></second.smallBox>
            <second.largeBox>
              <second.boxImg src={logo}></second.boxImg>
              <second.textBox>
                <second.boxText1>AIoT</second.boxText1>
                <second.boxText2>02</second.boxText2>
              </second.textBox>
            </second.largeBox>
          </second.innerBox>
        </second.imgBox>
      </second.secondPage>
    </style.mainWrapper>
  );
};

export default Main;
