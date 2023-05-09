import React, { memo } from "react";
import * as Style from "./ButtonLayout.style";
import FolderButton from "@src/present/common/Button/FolderButton";
import { Crack, Folder } from "@src/types/FlightInfo";
import CrackButton from "@src/present/common/Button/CrackButton";
import NullData from "@src/present/component/NullData/NullData";

type ButtonLayout = {
  list: Array<Folder | Crack>;
  selected: number | null;
  handler: Function;
  type: string;
};

const ButtonLayout = ({ list, selected, handler, type }) => {
  const buttons = list.map((elem, idx) => {
    const isSelected = selected === idx ? true : false;
    console.log(elem)
    switch (type) {
      case "folder":
        return (
          <FolderButton
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
