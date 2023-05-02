import PrimeTitle from "@src/present/common/PrimeTitle/PrimeTitle";
import React, { memo, useEffect, useState } from "react";
import * as Style from "./SelectBuilding.style";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";
import AddButton from "@src/present/common/Button/AddButton";
import BuildingDropdown from "@src/present/component/BuildingDropdown/BuildingDropdown";
import { useNavigate } from "react-router-dom";
import Modal from "@src/present/common/Modal/Modal";
import AddBuildingModal from "../AddBuildingModal/AddBuildingModal";
import { getBuildingList } from "@src/action/api/Building";
import { Building, InputBuilding } from "@src/types/FlightInfo";

const SelectBuilding = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectContent, setSelectContent] = useState<InputBuilding>({
    buildingId: null,
    buildingName: "건물 이름",
  });
  const navigate = useNavigate();
  const [buildingList, setBuildingList] = useState<Array<Building>>([]);

  useEffect(() => {
    getBuildingList("jhpdrone").then((res) => {
      if (res.isSuccess) {
        setBuildingList([...res.result]);
      }
    });
  }, []);

  const routeHandler = () => {
    if (selectContent.buildingName !== "건물 이름")
      navigate("/drone/camera", { state: selectContent });
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
      <BuildingDropdown
        options={buildingList}
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
          width="40vw"
          height="80vh"
          title="건물 추가"
          content={<AddBuildingModal />}
        />
      )}
    </Style.Container>
  );
};

export default memo(SelectBuilding);
