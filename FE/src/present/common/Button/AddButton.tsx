import React, { memo } from "react";
import { ButtonProps } from "@src/types/Button";
import { AddBtn } from "./Button.style";
import Add from "@assets/button/add.png";

/**
* 평소 point 색감, hover할 시 pointLight 색깔로 변경되는 기본 버튼

  @param content 버튼 안에 들어갈 내용
  @param isArrow 화살표 png 유무
*/
const AddButton = ({ content }: ButtonProps) => {
  return (
    <AddBtn>
      <>{content}</>
      <img src={Add} alt={content as string} />
    </AddBtn>
  );
};

export default memo(AddButton);
