import React, { memo } from "react";
import * as Style from "./PhotoLayout.style";
import SubTitle from "@src/present/common/SubTitle/SubTitle";
import { Picture } from "@src/types/FlightInfo";

type PhotoLayoutProps = {
  photoList: Array<Picture>;
};

const PhotoLayout = ({ photoList }: PhotoLayoutProps) => {
  const contentLength = photoList.length === 0 ? true : false;
  const guidence = <SubTitle content="분류된 사진이 없습니다" />;

  console.log(photoList);
  const Images = photoList.map((elem, idx) => {
    return <div>{elem.originalFileName}</div>;
  });

  return (
    <Style.Container contentLength={contentLength}>
      {contentLength ? guidence : <>{Images}</>}
    </Style.Container>
  );
};

export default memo(PhotoLayout);
