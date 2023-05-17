import React, { memo } from "react";
import * as Style from "./PictureCompo.style";
import { Picture } from "@src/types/FlightInfo";

type PictureCompoProps = {
  item: Picture;
  handler: any;
};

const PictureCompo = ({ item, handler }: PictureCompoProps) => {
  return (
    <Style.ImgContainer img={item.storedFileName} onClick={() => handler(item)}>
      <Style.InfoContainer>
        <div>{item.createTime}</div>
        <div>{item.originalFileName}</div>
      </Style.InfoContainer>
    </Style.ImgContainer>
  );
};

export default memo(PictureCompo);
