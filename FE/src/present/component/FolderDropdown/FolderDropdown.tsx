import React, { useState } from "react";
import * as Style from "./FolderDropdown.style";
import Arrow from "@assets/dropdown/arrow.png";
import HoverArrow from "@assets/button/arrow.png";
import { Building, InputBuilding } from "@src/types/FlightInfo";

type DropdownProps = {
  options: Array<Building>;
  select: {
    selectContent: InputBuilding;
    setSelectContent: Function;
  };
};

const BuildingDropdown = ({ options, select }: DropdownProps) => {
  const [clicked, setClicked] = useState(false);

  //   Handler
  const clickHandler = () => {
    setClicked(!clicked);
  };

  const selectHandler = (selected: InputBuilding) => {
    select.setSelectContent({ ...selected });
  };

  //   Options
  const optionsDiv = () => {
    const lst: Array<JSX.Element> = [];

    for (const i of options) {
      const input = { buildingId: i.buildingId, buildingName: i.buildingName };
      const elem = (
        <div key={i.buildingId} onClick={() => selectHandler(input)}>
          <img src={HoverArrow} alt={i.buildingName} />
          <>{i.buildingName}</>
        </div>
      );

      lst.push(elem)
    }

    return lst
  };

  return (
    <Style.DropdownDiv onClick={clickHandler} clicked={clicked}>
      <Style.DefaultOption>
        <>{select.selectContent.buildingName}</>
        <img src={Arrow} alt={select.selectContent.buildingName} />
      </Style.DefaultOption>
      <Style.OptionContainer>{optionsDiv()}</Style.OptionContainer>
    </Style.DropdownDiv>
  );
};

export default BuildingDropdown;
