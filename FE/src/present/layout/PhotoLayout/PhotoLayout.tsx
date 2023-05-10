import React, { memo, useEffect } from "react";
import * as Style from "./PhotoLayout.style";
import SubTitle from "@src/present/common/SubTitle/SubTitle";
import { Picture } from "@src/types/FlightInfo";
import PictureCompo from "@src/present/component/PictureCompo/PictureCompo";

type PhotoLayoutProps = {
  photoList: Array<Picture>;
};

const PhotoLayout = ({ photoList }: PhotoLayoutProps) => {
  window.scrollTo(0, 0);
  
  const contentLength = photoList.length === 0 ? true : false;
  const guidence = <SubTitle content="분류된 사진이 없습니다" />;


  const Images = photoList.map((elem, idx) => {
    return <PictureCompo item={elem} key={idx} />;
  });

  return (
    <Style.Container contentLength={contentLength}>
      {contentLength ? guidence : <>{Images}</>}
    </Style.Container>
  );
};

export default memo(PhotoLayout);
