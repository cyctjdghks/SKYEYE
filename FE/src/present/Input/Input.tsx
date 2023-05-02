import { theme } from "@src/constant/theme";
import React, { memo, useEffect, useRef } from "react";
import * as Style from "./Input.style";

type InputProps = {
  placeholder: string;
  handler: any;
};

const Input = ({ placeholder, handler }: InputProps) => {
  return (
    <Style.Container type="text" placeholder={placeholder} onChange={handler} />
  );
};

export default memo(Input);
