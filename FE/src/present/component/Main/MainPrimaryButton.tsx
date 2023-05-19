import React, {memo} from "react";
import { ButtonProps } from "@src/types/Button";
import * as style from "@src/present/component/Main/MainButton.style"
import Arrow from "@assets/button/arrow.png";


const MainPrimaryButton = ({content, isArrow, disabled, handler}: ButtonProps) => {
  return(
    <style.MainPrimaryBtn className={isArrow && "arrowExist"} onClick={handler} disabled={disabled}>
      <>{content}</>
      {isArrow && <img src={Arrow} alt={content as string} />}
    </style.MainPrimaryBtn>
  )
}

export default memo(MainPrimaryButton)