import React, {memo} from "react";
import { ButtonProps } from "@src/types/Button";
import * as style from "@src/present/component/Adminpage/AdminButton.style"
import Arrow from "@assets/button/arrow.png";


const AdminPrimaryButton = ({content, isArrow, disabled, handler}: ButtonProps) => {
  return(
    <style.AdminPrimaryBtn className={isArrow && "arrowExist"} onClick={handler} disabled={disabled}>
      <>{content}</>
      {isArrow && <img src={Arrow} alt={content as string} />}
    </style.AdminPrimaryBtn>
  )
}

export default memo(AdminPrimaryButton)