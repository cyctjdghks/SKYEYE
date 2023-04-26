import * as second from "@component/main/secondPage.style";
import logo from "@assets/main/logo.png";

const SecondPage = () => {
  return (
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
  );
};

export default SecondPage;
