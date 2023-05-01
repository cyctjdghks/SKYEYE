import PrimeTitle from "@src/present/common/PrimeTitle/PrimeTitle";
import React, { memo, useState } from "react";
import * as Style from "./SelectBuilding.style";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";
import AddButton from "@src/present/common/Button/AddButton";
import Dropdown from "@src/present/common/Dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
import Modal from "@src/present/common/Modal/Modal";
import AddBuildingModal from "../AddBuildingModal/AddBuildingModal";

const testBuildings = ["A 건물", "B 건물"];

const SelectBuilding = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectContent, setSelectContent] = useState<string>("건물 이름");
  const navigate = useNavigate();

  const routeHandler = () => {
    if (selectContent !== "건물 이름") navigate("/drone/camera");
    else {
      alert("건물을 선택해주세요");
    }
  };

  const onClickButton = () => {
    setIsOpen(true);
  };

  return (
    <Style.Container>
      <PrimeTitle content="건물을 선택해주세요" />
      <Dropdown
        options={testBuildings}
        select={{ selectContent, setSelectContent }}
      />
      <AddButton content={"건물 추가하기"} handler={onClickButton} />
      <div>
        <PrimaryButton
          content={"촬영하기"}
          isArrow={true}
          handler={routeHandler}
        />
      </div>

      {isOpen && (
        <Modal
          onClose={() => {
            setIsOpen(false);
          }}
          width="50vw"
          height="60vh"
          title="로그인"
          content={<AddBuildingModal />}
        />
      )}
    </Style.Container>
  );
};

export default memo(SelectBuilding);
