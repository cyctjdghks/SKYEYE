import React, { memo } from "react";
import * as Style from "./ButtonLayout.style";
import BuildingButton from "@src/present/common/Button/BuildingButton";

type ButtonLayout = {
  list: Array<object>;
  selected: number | null;
  handler: Function;
};

const ButtonLayout = ({ list, selected, handler }) => {
  const buttons = list.map((elem, idx) => {
    const isSelected = selected === idx ? true : false;

    return (
      <BuildingButton
        content={elem}
        isPrimary={true}
        isSelected={isSelected}
        handler={() => handler(idx)}
        key={idx}
      />
    );
  });

  return (
    <Style.Container>
      {buttons}
    </Style.Container>
  );
};

export default memo(ButtonLayout);
