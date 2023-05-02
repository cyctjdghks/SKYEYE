import React, { memo, useState } from "react";
import SideBar from "@src/present/common/SideBar/SideBar";
import SideContent from "@layout/SideContent/SideContent";
import { Building, Crack } from "@src/types/FlightInfo";
import ButtonLayout from "@src/present/layout/ButtonLayout/ButtonLayout";
import SubTitle from "@src/present/common/SubTitle/SubTitle";
import * as Style from "@pages/Flightinfo/FlightInfo.style";

const test: Array<Building> = [
  {
    buildingId: 0,
    buildingEstablishment: "0000.00.00",
    userId: "hj1000",
    buildingName: "소담빌",
    buildingAddress: "GS 뒤",
  },
  {
    buildingId: 0,
    buildingEstablishment: "0000.00.00",
    userId: "hj1000",
    buildingName: "소담빌",
    buildingAddress: "GS 뒤",
  },
  {
    buildingId: 0,
    buildingEstablishment: "0000.00.00",
    userId: "hj1000",
    buildingName: "소담빌",
    buildingAddress: "GS 뒤",
  },
  {
    buildingId: 0,
    buildingEstablishment: "0000.00.00",
    userId: "hj1000",
    buildingName: "소담빌",
    buildingAddress: "GS 뒤",
  },
  {
    buildingId: 0,
    buildingEstablishment: "0000.00.00",
    userId: "hj1000",
    buildingName: "소담빌",
    buildingAddress: "GS 뒤",
  },
  {
    buildingId: 0,
    buildingEstablishment: "0000.00.00",
    userId: "hj1000",
    buildingName: "소담빌",
    buildingAddress: "GS 뒤",
  },
  {
    buildingId: 0,
    buildingEstablishment: "0000.00.00",
    userId: "hj1000",
    buildingName: "소담빌",
    buildingAddress: "GS 뒤",
  },
  {
    buildingId: 0,
    buildingEstablishment: "0000.00.00",
    userId: "hj1000",
    buildingName: "소담빌",
    buildingAddress: "GS 뒤",
  },
  {
    buildingId: 0,
    buildingEstablishment: "0000.00.00",
    userId: "hj1000",
    buildingName: "소담빌",
    buildingAddress: "GS 뒤",
  },
];

const test2: Array<Crack> = [
  {
    crackId: 0,
    crackType: "박리",
    crackPosition: "",
    buildingId: 0,
    imageSrc: "./././",
  },
  {
    crackId: 0,
    crackType: "박리",
    crackPosition: "",
    buildingId: 0,
    imageSrc: "./././",
  },
  {
    crackId: 0,
    crackType: "박리",
    crackPosition: "",
    buildingId: 0,
    imageSrc: "./././",
  },
];

const FlightInfo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [building, setBuilding] = useState<number | null>(null);
  const [crack, setCrack] = useState<number | null>(null);

  // Handler
  const bulidingHandler = (idx: number) => {
    setBuilding(idx);
  };

  const crackHandler = (idx: number) => {
    setCrack(idx);
  };

  // Sentence
  const guidence = () => {
    if (building === null) {
      return (
        <>
          건물을
          <br />
          선택해주세요
        </>
      );
    } else if (crack === null) {
      return (
        <>
          손상 유형을
          <br />
          선택해주세요
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideContent isOpen={isOpen} titleProps={{ isButton: false }}>
        <Style.Layout>
          <div>
            <SubTitle content="건물명" />
            <ButtonLayout
              list={test}
              type={"building"}
              selected={building}
              handler={bulidingHandler}
            />
          </div>
          {building !== null && (
            <div>
              <SubTitle content="균열 유형" />
              <ButtonLayout
                list={test}
                type={"crack"}
                selected={crack}
                handler={crackHandler}
              />
            </div>
          )}

          <Style.Guidence>{guidence()}</Style.Guidence>
        </Style.Layout>
      </SideContent>
    </>
  );
};

export default memo(FlightInfo);
