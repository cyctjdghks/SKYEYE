import React, { memo } from "react";
import * as Style from "./NullData.style";

const NullData = () => {
  return (
    <Style.Container>
      할당된 데이터가
      <br />
      없습니다.
    </Style.Container>
  );
};

export default memo(NullData);
