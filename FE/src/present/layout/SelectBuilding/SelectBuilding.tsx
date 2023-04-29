import PrimeTitle from "@src/present/common/PrimeTitle/PrimeTitle";
import React, { memo } from "react";
import * as Style from "./SelectBuilding.style";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";
import AddButton from "@src/present/common/Button/AddButton";
import Dropdown from "@src/present/common/Dropdown/Dropdown";

const testBuildings = [
  "A 건물",
  "B 건물",
  "C 건물",
  "D 건물",
  "E 건물",
  "A 건물",
  "B 건물",
  "C 건물",
  "D 건물",
  "E 건물",
];

const SelectBuilding = () => {
  return (
    <Style.Container>
      <PrimeTitle content="건물을 선택해주세요" />
      <Dropdown content={"건물 이름"} options={testBuildings} />
      <AddButton content={"건물 추가하기"} />
      <div>
        <PrimaryButton content={"촬영하기"} isArrow={true} />
      </div>
    </Style.Container>
  );
};

export default memo(SelectBuilding);
