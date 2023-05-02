import React, { memo } from "react";
import * as Style from "./SubTitle.style";

type titleProps = {
  content: string;
};

const SubTitle = ({ content }: titleProps) => {
  return (
    <Style.SubTitleContainer>
      <>{content}</>
    </Style.SubTitleContainer>
  );
};

export default memo(SubTitle);
