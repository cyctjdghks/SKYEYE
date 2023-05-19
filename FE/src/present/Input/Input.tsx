import React, { memo } from "react";
import * as Style from "./Input.style";

type InputProps = {
  placeholder?: string;
  handler?: any;
  value?: any;
  readonly? : boolean
};

const Input = ({ placeholder, handler, value, readonly }: InputProps) => {
  return (
    <Style.Container
      type="text"
      placeholder={placeholder}
      onChange={handler}
      value={value}
      readOnly={readonly}
    />
  );
};

export default memo(Input);
