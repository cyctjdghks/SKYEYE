import React, { memo } from "react";
import { ButtonProps } from "@src/types/Button";
import { DeleteBtn } from "./Button.style";
import Arrow from "@assets/button/arrow.png";

const DeleteButton = ({ content, handler }: ButtonProps) => {
  return (
    <DeleteBtn onClick={handler} >
      <>{content}</>
    </DeleteBtn>
  );
};

export default memo(DeleteButton);
