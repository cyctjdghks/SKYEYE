import * as second from "@component/main/secondPage.style";
import { theme } from "@constant/theme";
import main01 from "@assets/main/main01.jpg"
import main02 from "@assets/main/main02.png"
import main03 from "@assets/main/main03.jpg"


const SecondPage = () => {
  return (
    <second.secondPage>
      <second.about>about</second.about>
      <second.hrLine></second.hrLine>
      <second.pageText>WHAT CAN WE DO</second.pageText>
      <second.pageText>with SKYEYE?</second.pageText>
      <second.imgBox>
        <second.innerBox>
          <second.smallBox hidden={true}>
            <second.colorBox color={theme.colors.greyscale.point}></second.colorBox>
            <second.textBox>
              <second.boxText1>AIoT</second.boxText1>
              <second.boxText2>01</second.boxText2>
            </second.textBox>
          </second.smallBox>
          <second.largeBox>
            <second.largeBoxImg image={main01}></second.largeBoxImg>
            <second.textBox>
              <second.boxText1>실시간 드론 영상 시청</second.boxText1>
              <second.boxText2>02</second.boxText2>
            </second.textBox>
          </second.largeBox>
          <second.smallBox hidden={false}></second.smallBox>
        </second.innerBox>
        <second.innerBox>
          <second.smallBox hidden={false}></second.smallBox>
          <second.smallBox hidden={true}>
            <second.boxImg image={main02}></second.boxImg>
            <second.textBox>
              <second.boxText1>AI가 균열의 종류를 인식</second.boxText1>
              <second.boxText2>03</second.boxText2>
            </second.textBox>
          </second.smallBox>
          <second.smallBox hidden={false}></second.smallBox>
          <second.smallBox hidden={true}>
            <second.colorBox color={theme.colors.greyscale.dark3}></second.colorBox>
            <second.textBox>
              <second.boxText1>보고 있는 영상을 캡처</second.boxText1>
              <second.boxText2>04</second.boxText2>
            </second.textBox>
          </second.smallBox>
        </second.innerBox>
        <second.innerBox>
          <second.smallBox hidden={true}>
            <second.colorBox color={theme.colors.greyscale.pointLight}></second.colorBox>
            <second.textBox>
              <second.boxText1>정보와 함께 내용을 저장</second.boxText1>
              <second.boxText2>05</second.boxText2>
            </second.textBox>
          </second.smallBox>
          <second.smallBox hidden={false}></second.smallBox>
          <second.largeBox>
            <second.largeBoxImg image={main03}></second.largeBoxImg>
            <second.textBox>
              <second.boxText1>저장된 사진을 모아두고 확인</second.boxText1>
              <second.boxText2>06</second.boxText2>
            </second.textBox>
          </second.largeBox>
        </second.innerBox>
      </second.imgBox>
    </second.secondPage>
  );
};

export default SecondPage;
