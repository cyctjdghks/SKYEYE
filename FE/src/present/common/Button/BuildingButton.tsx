import React, { memo, useEffect, useState } from "react";
import { BuildingBtn } from "./Button.style";
import Arrow from "@assets/button/arrow.png";
import { Building } from "@src/types/FlightInfo";
import { getUserInfo } from "@src/action/api/User";

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
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getUserInfo(content.userId).then((res) => {
      if (res.isSuccess) setUserName(res.result.userName);
    });
  }, [content]);

  // 건축 일자 가공
  const setEstablishment = content.buildingEstablishment
    .slice(0, 10)
    .split("-")
    .join(".");

  const subContent = (
    <div>
      <div>
        <span>건축일자</span>
        <span>{setEstablishment}</span>
      </div>
      <div>
        <span>건축구조사</span>
        <span>{userName}</span>
      </div>
    </div>
  );

  return (
    <BuildingBtn className={isSelected && "Main"} onClick={handler}>
      <div>
        {content.buildingName}
        {isSelected && <img src={Arrow} alt={"select Crack type"} />}
      </div>
      {isSelected && subContent}
    </BuildingBtn>
  );
};

export default memo(BuildingButton);
