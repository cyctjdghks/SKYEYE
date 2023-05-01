import { memo, useState } from "react";
import * as Style from "./AddBuildingModal.style";
import Input from "@src/present/Input/Input";
import PrimeTitle from "@src/present/common/PrimeTitle/PrimeTitle";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";

const AddBuildingModal = () => {
  const [aboutBuilding, setAboutBuilding] = useState({
    buildingName: "건물 이름",
    buildingEstablishment: "건축 일자",
    userId: "담당자",
  });

  const changeBuilding = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setAboutBuilding(() => {
      return { ...aboutBuilding, [type]: e.target.value };
    });
  };

  const inputs = Object.keys(aboutBuilding).map((elem, idx) => {
    return (
      <Input
        key={idx}
        placeholder={aboutBuilding[elem]}
        handler={(e) => changeBuilding(e, elem)}
      />
    );
  });

  return (
    <Style.ModalContainer>
      <PrimeTitle content="건물 추가" />
      {inputs}
      <PrimaryButton content={"추가하기"} handler={() => {}} />
    </Style.ModalContainer>
  );
};

export default memo(AddBuildingModal);
