import React, { memo } from "react";
import { ButtonProps } from "@src/types/Button";
import * as style from "@src/present/component/Adminpage/AdminButton.style"

const DeleteButton = ({ content, handler }: ButtonProps) => {
  return (
    <style.AdminDeleteBtn onClick={handler} >
      <>{content}</>
    </style.AdminDeleteBtn>
  );
};

export default memo(DeleteButton);
