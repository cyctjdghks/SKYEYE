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
              <style.sHrLine></style.sHrLine>
            </style.sHrLineBox>
            <style.sHrLineBox>
              <style.circle></style.circle>
              <style.sHrLine></style.sHrLine>
            </style.sHrLineBox>
            <style.sHrLineBox>
              <style.circle></style.circle>
              <style.sHrLine></style.sHrLine>
            </style.sHrLineBox>
          </style.lineBox>
        </style.innerBox1>
      </style.bottomBox1>
      <style.bottomBox2>
        <style.textBox>
          <style.text>Copyright by SKYEYE</style.text>
          <style.text2 onClick={scrollToTop}>Top</style.text2>
          <style.text>2023.04.10 ~ 2023.05.10</style.text>
        </style.textBox>
      </style.bottomBox2>
    </style.ThirdPage>
  );
};

export default ThirdPage;
