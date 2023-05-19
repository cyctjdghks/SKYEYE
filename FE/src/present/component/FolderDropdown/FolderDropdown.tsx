import React, { useState } from "react";
import * as Style from "./FolderDropdown.style";
import Arrow from "@assets/dropdown/arrow.png";
import HoverArrow from "@assets/button/arrow.png";

import { Folder, InputFolder } from "@src/types/FlightInfo";

type DropdownProps = {
  options: Array<Folder>;
  select: {
    selectContent: InputFolder;
    setSelectContent: Function;
  };
};


const FolderDropdown = ({ options, select }: DropdownProps) => {
  const [clicked, setClicked] = useState(false);

  //   Handler
  const clickHandler = () => {
    setClicked(!clicked);
  };

  const selectHandler = (selected: InputFolder) => {
    select.setSelectContent({ ...selected });
  };

  //   Options
  const optionsDiv = () => {
    const lst: Array<JSX.Element> = [];

    for (const i of options) {
      const input = { folderId: i.folderId, folderName: i.folderName };
      const elem = (
        <div key={i.folderId} onClick={() => selectHandler(input)}>
          <img src={HoverArrow} alt={i.folderName} />
          <>{i.folderName}</>
        </div>
      );

      lst.push(elem);
    }

    return lst;
  };

  return (
    <Style.DropdownDiv onClick={clickHandler} clicked={clicked}>
      <Style.DefaultOption>
        <>{select.selectContent.folderName}</>
        <img src={Arrow} alt={select.selectContent.folderName} />
      </Style.DefaultOption>
      <Style.OptionContainer>{optionsDiv()}</Style.OptionContainer>
    </Style.DropdownDiv>
  );
};

export default FolderDropdown;
