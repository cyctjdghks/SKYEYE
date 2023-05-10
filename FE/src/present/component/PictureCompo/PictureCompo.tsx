import React, { memo } from "react";
import * as Style from "./PictureCompo.style";

import { Picture } from "@src/types/FlightInfo";

type PictureCompoProps = {
  item: Picture;
};

const PictureCompo = ({ item }: PictureCompoProps) => {
  console.log(item);
  return <Style.ImgContainer img={item.storedFileName as string}>
    <Style.InfoContainer>
        <div>{item.createTime}</div>
        <div>{item.originalFileName}</div>
    </Style.InfoContainer>
  </Style.ImgContainer>;
};

export default memo(PictureCompo);
