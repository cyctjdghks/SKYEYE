import React, { memo } from "react";
import { ButtonProps } from "@src/types/Button";
import { PrimaryBtn } from "./Button.style";
import Arrow from "@assets/button/arrow.png";

/**
* 평소 point 색감, hover할 시 pointLight 색깔로 변경되는 기본 버튼

  @param content 버튼 안에 들어갈 내용
  @param isArrow 화살표 png 유무
*/
const PrimaryButton = ({ content, isArrow }: ButtonProps) => {
  return (
    <PrimaryBtn className={isArrow && "arrowExist"}>
      <>{content}</>
      {isArrow && <img src={Arrow} alt={content as string} />}
    </PrimaryBtn>
  );
};

export default memo(PrimaryButton);
