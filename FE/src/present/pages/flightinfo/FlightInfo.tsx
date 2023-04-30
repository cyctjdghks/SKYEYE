import React, { memo, useState } from "react";
import SideBar from "@src/present/common/SideBar/SideBar";
import SideContent from "@layout/SideContent/SideContent";
import { Building, Crack } from "@src/types/FlightInfo";
import ButtonLayout from "@src/present/layout/ButtonLayout/ButtonLayout";
import SubTitle from "@src/present/common/SubTitle/SubTitle";
import * as Style from "./FlightInfo.style";

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
    imageSrc: "./././"
  },
  {
    crackId: 0,
    crackType: "박리",
    crackPosition: "",
    buildingId: 0,
    imageSrc: "./././"
  },
  {
    crackId: 0,
    crackType: "박리",
    crackPosition: "",
    buildingId: 0,
    imageSrc: "./././"
  },
]

const FlightInfo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [building, setBuilding] = useState<number | null>(null);
  const [crack, setCrack] = useState<number | null>(null);

  const bulidingHandler = (idx: number) => {
    setBuilding(idx);
  };
  
  const crackHandler = (idx: number) => {
    setCrack(idx);
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
          <div>
            <SubTitle content="균열 유형" />
            <ButtonLayout
              list={test}
              type={"crack"}
              selected={crack}
              handler={crackHandler}
            />
          </div>
        </Style.Layout>
      </SideContent>
    </>
  );
};

export default memo(FlightInfo);
