import * as style from "@component/Main/SecondPage.style";
import { theme } from "@constant/theme";
import main01 from "@assets/main/main01.jpg";
import main02 from "@assets/main/main02.png";
import main03 from "@assets/main/main03.jpg";

const SecondPage = () => {
  return (
    <style.SecondPage>
      <style.About>about</style.About>
      <style.HrLine></style.HrLine>
      <style.PageText>WHAT CAN WE DO</style.PageText>
      <style.PageText>with SKYEYE?</style.PageText>
      <style.ImgBox>
        <style.InnerBox>
          <style.SmallBox hidden={true}>
            <style.ColorBox
              color={theme.colors.point.point}
            ></style.ColorBox>
            <style.TextBox>
              <style.BoxText1>AIoT</style.BoxText1>
              <style.BoxText2>01</style.BoxText2>
            </style.TextBox>
          </style.SmallBox>
          <style.LargeBox>
            <style.LargeBoxImg image={main01}></style.LargeBoxImg>
            <style.TextBox>
              <style.BoxText1>실시간 드론 영상 시청</style.BoxText1>
              <style.BoxText2>02</style.BoxText2>
            </style.TextBox>
          </style.LargeBox>
          <style.SmallBox hidden={false}></style.SmallBox>
        </style.InnerBox>
        <style.InnerBox>
          <style.SmallBox hidden={false}></style.SmallBox>
          <style.SmallBox hidden={true}>
            <style.BoxImg image={main02}></style.BoxImg>
            <style.TextBox>
              <style.BoxText1>AI가 균열의 종류를 인식</style.BoxText1>
              <style.BoxText2>03</style.BoxText2>
            </style.TextBox>
          </style.SmallBox>
          <style.SmallBox hidden={false}></style.SmallBox>
          <style.SmallBox hidden={true}>
            <style.ColorBox
              color={theme.colors.greyscale.dark3}
            ></style.ColorBox>
            <style.TextBox>
              <style.BoxText1>보고 있는 영상을 캡처</style.BoxText1>
              <style.BoxText2>04</style.BoxText2>
            </style.TextBox>
          </style.SmallBox>
        </style.InnerBox>
        <style.InnerBox>
          <style.SmallBox hidden={true}>
            <style.ColorBox
              color={theme.colors.point.pointLight}
            ></style.ColorBox>
            <style.TextBox>
              <style.BoxText1>정보와 함께 내용을 저장</style.BoxText1>
              <style.BoxText2>05</style.BoxText2>
            </style.TextBox>
          </style.SmallBox>
          <style.SmallBox hidden={false}></style.SmallBox>
          <style.LargeBox>
            <style.LargeBoxImg image={main03}></style.LargeBoxImg>
            <style.TextBox>
              <style.BoxText1>저장된 사진을 모아두고 확인</style.BoxText1>
              <style.BoxText2>06</style.BoxText2>
            </style.TextBox>
          </style.LargeBox>
        </style.InnerBox>
      </style.ImgBox>
    </style.SecondPage>
  );
};

export default SecondPage;
