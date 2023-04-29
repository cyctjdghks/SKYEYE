import React, { useState } from "react";
import * as Style from "./Dropdown.style";
import Arrow from "@assets/dropdown/arrow.png";
import HoverArrow from "@assets/button/arrow.png";

const Dropdown = ({ content, options }) => {
  const [clicked, setClicked] = useState(false);
  const [selectContent, setSelectContent] = useState(content);

  //   Handler
  const clickHandler = () => {
    setClicked(!clicked);
  };

  const selectHandler = (selected : string) => {
    setSelectContent(selected);
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
        <>{selectContent}</>
        <img src={Arrow} alt={content} />
      </Style.DefaultOption>
      <Style.OptionContainer>{optionsDiv}</Style.OptionContainer>
    </Style.DropdownDiv>
  );
};

export default Dropdown;
