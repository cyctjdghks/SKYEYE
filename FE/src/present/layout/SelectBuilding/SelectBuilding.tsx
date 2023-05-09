import React, { memo, useEffect, useState } from "react";
import * as Style from "./SelectBuilding.style";
import { useNavigate } from "react-router-dom";
import { toastListState } from "@src/store/toast";
import { useRecoilState } from "recoil";

import PrimeTitle from "@src/present/common/PrimeTitle/PrimeTitle";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";
import AddButton from "@src/present/common/Button/AddButton";
import BuildingDropdown from "@src/present/component/FolderDropdown/FolderDropdown";
import Modal from "@src/present/common/Modal/Modal";
import AddBuildingModal from "../AddBuildingModal/AddBuildingModal";
import { getBuildingList } from "@src/action/api/Building";
import { Building, InputBuilding } from "@src/types/FlightInfo";
import { Error } from "@src/action/api/api";

const SelectBuilding = () => {
  const navigate = useNavigate();
  const [toastList, setToastList] = useRecoilState(toastListState);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectContent, setSelectContent] = useState<InputBuilding>({
    buildingId: null,
    buildingName: "건물 이름",
  });
  const [buildingList, setBuildingList] = useState<Array<Building>>([]);

  useEffect(() => {
    getBuildingList("jhpdrone").then((res) => {
      if (res.isSuccess) {
        setBuildingList([...res.result]);
      } else {
        console.log(Error);
        const errToast = { type: "Error", sentence: "권한이 없는 사용자입니다." };
        setToastList({ list: [...toastList.list, errToast] });
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
