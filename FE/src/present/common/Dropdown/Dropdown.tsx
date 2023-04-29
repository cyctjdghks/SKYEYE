import React, { useState } from "react";
import * as Style from "./Dropdown.style";
import Arrow from "@assets/dropdown/arrow.png";
import HoverArrow from "@assets/button/arrow.png";

type DropdownProps = {
  options: Array<any>;
  select: {
    selectContent: string;
    setSelectContent: Function;
  };
};

const Dropdown = ({ options, select }:DropdownProps) => {
  const [clicked, setClicked] = useState(false);

  //   Handler
  const clickHandler = () => {
    setClicked(!clicked);
  };

  const selectHandler = (selected: string) => {
    select.setSelectContent(selected);
  };

  //   Options
  const optionsDiv = options.map((elem, idx) => {
    return (
      <div key={idx} onClick={() => selectHandler(elem)}>
        <img src={HoverArrow} alt={elem} />
        <>{elem}</>
      </div>
    );
  });

  return (
    <Style.DropdownDiv onClick={clickHandler} clicked={clicked}>
      <Style.DefaultOption>
        <>{select.selectContent}</>
        <img src={Arrow} alt={select.selectContent} />
      </Style.DefaultOption>
      <Style.OptionContainer>{optionsDiv}</Style.OptionContainer>
    </Style.DropdownDiv>
  );
};

export default Dropdown;
