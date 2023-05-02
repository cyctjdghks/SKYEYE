import React, { memo } from "react";
import * as Style from "./Title.style";
import { ButtonProps } from "@src/types/Button";
import PrimaryButton from "../Button/PrimaryButton";

type titleProps = {
  title: string;
  titleBtnProps : {
      isButton: boolean;
      btnInfo?: ButtonProps;
  }
};

const Title = ({ title, titleBtnProps }: titleProps) => {
  return (
    <Style.Title>
      <>{title}</>
      {titleBtnProps.isButton && <PrimaryButton {...titleBtnProps.btnInfo} />}
    </Style.Title>
  );
};

export default memo(Title);
