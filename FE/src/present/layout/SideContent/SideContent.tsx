import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Title from "@src/present/common/Title/Title";
import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import * as Style from "@layout/SideContent/SideContent.Style";
import { ButtonProps } from "@src/types/Button";

type SideContentProps = {
  isOpen: boolean;
  titleProps: {
    isButton: boolean;
    btnInfo?: ButtonProps;
  };
  children: ReactJSXElement;
};

const SideContent = ({ isOpen, titleProps, children }: SideContentProps) => {
  const pathname = useLocation().pathname;
  const title = pathname.includes("upload")
    ? "사진 추가 하기"
    : pathname.includes("picture")
    ? "저장된 사진 보기"
    : "비행금지구역 정보";

  return (
    <Style.ContentBody isOpen={isOpen}>
      <Title title={title} titleBtnProps={titleProps} />
      {children}
    </Style.ContentBody>
  );
};

export default memo(SideContent);
