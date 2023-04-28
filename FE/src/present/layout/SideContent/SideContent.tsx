import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Title from "@src/present/common/Title/Title";
import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import * as Style from "./SideContent.style";

type SideContentProps = {
  isOpen: boolean;
  children: ReactJSXElement;
};

const SideContent = ({ isOpen, children }: SideContentProps) => {
  const pathname = useLocation().pathname;
  const title = pathname === "/drone" ? "드론 영상 보기" : "저장된 사진 보기";

  return (
    <Style.ContentBody isOpen={isOpen}>
      <Title content={title} />
      {children}
    </Style.ContentBody>
  );
};

export default memo(SideContent);
