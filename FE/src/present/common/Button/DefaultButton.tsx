import React, { memo } from "react";
import { DefaultBtn } from "./Button.style";
import { ButtonProps } from "@src/types/Button";

const DefaultButton = ({ content, isPrimary }: ButtonProps) => {
  return (
    <DefaultBtn className={isPrimary ? "Main" : "Sub"}>{content}</DefaultBtn>
  );
};

export default memo(DefaultButton);
