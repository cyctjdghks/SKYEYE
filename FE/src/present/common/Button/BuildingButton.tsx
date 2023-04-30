import React, { memo } from "react";
import { BuildingBtn } from "./Button.style";
import Arrow from "@assets/button/arrow.png";
import { Building } from "@src/types/FlightInfo";

type BuildingButtonProps = {
  content: Building;
  handler: any;
  isSelected: boolean;
};

const BuildingButton = ({
  content,
  handler,
  isSelected,
}: BuildingButtonProps) => {
  const subContent = (
    <div>
      <div>
        <span>건축일자</span>
        <span>{content.buildingEstablishment}</span>
      </div>
      <div>
        <span>건축구조사</span>
        <span>{content.userId}</span>
      </div>
    </div>
  );

  return (
    <BuildingBtn
      className={isSelected && "Main"}
      onClick={handler}
    >
      <div>
        {content.buildingName}
        {isSelected && <img src={Arrow} alt={"select Crack type"} />}
      </div>
      {isSelected && subContent}
    </BuildingBtn>
  );
};

export default memo(BuildingButton);
