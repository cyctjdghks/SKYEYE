import React, { memo } from "react";
import { CrackBtn } from "./Button.style";
import Arrow from "@assets/button/arrowBlue.png";
import { Crack } from "@src/types/FlightInfo";

type CrackButtonProps = {
  content: Crack;
  handler: any;
  isSelected: boolean;
};

const CrackButton = ({
  content,
  handler,
  isSelected
}: CrackButtonProps) => {
  const crackSub = (
    <div>
        <span>사진 수</span>
        <span>10256장</span>
    </div>
  );

  return (
    <CrackBtn
      className={isSelected && "Sub"}
      onClick={handler}
    >
      <div>
        {/* {content.crackType} */}
        대충 아무말
        {isSelected && <img src={Arrow} alt={"select Crack type"} />}
      </div>
      {isSelected && crackSub}
    </CrackBtn>
  );
};

export default memo(CrackButton);
