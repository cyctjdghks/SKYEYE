import * as style from "@component/Main/ThirdPage.style";

const ThirdPage = () => {
  const scrollToTop = (): void => {
    const scrollTop: number = window.scrollY;
    const scrollStep: number = Math.PI / (500 / 15);
    const cosParameter: number = scrollTop / 2;

    let scrollCount: number = 0;
    let scrollMargin: number;

    const scrollInterval: number = window.setInterval(() => {
      if (window.scrollY !== 0) {
        scrollCount = scrollCount + 1;
        scrollMargin =
          cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
        window.scrollTo(0, scrollTop - scrollMargin);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <style.ThirdPage>
      <style.bottomBox1>
        <style.innerBox1>
          <style.title>ABOUT US</style.title>
          <style.HrLine></style.HrLine>
          <style.lineBox>
            <style.sHrLineBox>
              <style.circle></style.circle>
              <style.lineText>주소 : 경상북도 구미시 3공단3로 302 정담원 4층 D202 </style.lineText>
            </style.sHrLineBox>
            <style.sHrLineBox>
              <style.circle></style.circle>
              <style.lineText>이메일 : skyeyed202@gmail.com</style.lineText>
            </style.sHrLineBox>
            <style.sHrLineBox>
              <style.circle></style.circle>
              <style.lineText>번호 :  02-3429-5100</style.lineText>
            </style.sHrLineBox>
          </style.lineBox>
        </style.innerBox1>
        <style.textBox>
          <style.text>Copyright by SKYEYE</style.text>
          <style.text2 onClick={scrollToTop}>Top</style.text2>
          <style.text>2023.04.10 ~ 2023.05.19</style.text>
        </style.textBox>
      </style.bottomBox1>
    </style.ThirdPage>
  );
};

export default ThirdPage;
