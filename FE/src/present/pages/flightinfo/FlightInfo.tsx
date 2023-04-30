import React, { memo, useState } from "react";
import SideBar from "@src/present/common/SideBar/SideBar";
import SideContent from "@layout/SideContent/SideContent";
import { Building } from "@src/types/Building";
import ButtonLayout from "@src/present/layout/ButtonLayout/ButtonLayout";

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

const FlightInfo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [building, setBuilding] = useState<number | null>(null);

  const bulidingHandler = (idx: number) => {
    setBuilding(idx);
  };

  return (
    <>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideContent isOpen={isOpen} titleProps={{ isButton: false }}>
        <>
          <ButtonLayout
            list={test}
            selected={building}
            handler={bulidingHandler}
          />
        </>
      </SideContent>
    </>
  );
};

export default memo(FlightInfo);
