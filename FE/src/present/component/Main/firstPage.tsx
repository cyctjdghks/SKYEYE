import * as style from "@src/present/component/Main/FirstPage.style";
import backVideo from "@assets/main/coverVideo.mp4";

const FirstPage = () => {
  return (
    <style.FirstPage>
      <style.BackVideo muted autoPlay loop src={backVideo}></style.BackVideo>
      <style.MainTextFirst>건물안전,</style.MainTextFirst>
      <br />
      <style.MainTextSecond>
        SKYEYE
        <style.MainTextThird>로 완성합니다.</style.MainTextThird>
      </style.MainTextSecond>
    </style.FirstPage>
  );
};

export default FirstPage;
