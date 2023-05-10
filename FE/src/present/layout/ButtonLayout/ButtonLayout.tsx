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
  console.log(list)
  const buttons = list.map((elem, idx) => {
    let isSelected:boolean;

    switch (type) {
      case "folder":
        isSelected = (selected === list[idx].folderId) ? true : false;
        return (
          <FolderButton
            content={elem}
            isSelected={isSelected}
            handler={() => handler(idx)}
            key={idx}
          />
        );

      default:
        isSelected = (selected === list[idx].crackType) ? true : false;
        return (
          <CrackButton
            content={elem}
            isSelected={isSelected}
            handler={() => handler(list[idx].crackType)}
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
