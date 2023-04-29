import React, { memo } from "react";
import * as Style from "./PrimeTitle.style";

type titleProps = {
  content: string;
};

const PrimeTitle = ({ content }: titleProps) => {

  return (
    <Style.PrimeTitle>
      <>{content}</>
    </Style.PrimeTitle>
  );
};

export default memo(PrimeTitle);
