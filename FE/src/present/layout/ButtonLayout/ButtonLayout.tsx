import React, { memo } from "react";
import * as Style from "./ButtonLayout.style";
import BuildingButton from "@src/present/common/Button/BuildingButton";
import { Building, Crack } from "@src/types/FlightInfo";
import CrackButton from "@src/present/common/Button/CrackButton";
import NullData from "@src/present/component/NullData/NullData";

type ButtonLayout = {
  list: Array<Building | Crack>;
  selected: number | null;
  handler: Function;
  type: string;
};

const ButtonLayout = ({ list, selected, handler, type }) => {
  const buttons = list.map((elem, idx) => {
    const isSelected = selected === idx ? true : false;

    switch (type) {
      case "building":
        return (
          <BuildingButton
            content={elem}
            isSelected={isSelected}
            handler={() => handler(idx)}
            key={idx}
          />
        );

      default:
        return (
          <CrackButton
            content={elem}
            isSelected={isSelected}
            handler={() => handler(idx)}
            key={idx}
          />
        );
    }
  });

  return (
    <Style.Container>
      {list.length === 0 ? <NullData /> : buttons}
    </Style.Container>
  );
};

export default memo(ButtonLayout);
