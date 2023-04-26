import * as first from "@component/main/firstPage.style";
import backVideo  from "@assets/main/coverVideo.mp4";

const FirstPage = () => {
  return (
    <first.firstPage>
      <first.backVideo muted autoPlay loop src={backVideo}></first.backVideo>
      <first.mainTextFirst>건물안전,</first.mainTextFirst>
      <br />
      <first.mainTextSecond>
        SKYEYE
        <first.mainTextThird>로 완성합니다.</first.mainTextThird>
      </first.mainTextSecond>
    </first.firstPage>
  );
};

export default FirstPage;
