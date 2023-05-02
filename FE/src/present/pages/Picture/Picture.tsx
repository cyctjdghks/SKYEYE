import React, { memo, useState, useEffect } from "react";
import * as Style from "./Picture.style";

import SideBar from "@src/present/common/SideBar/SideBar";
import SideContent from "@layout/SideContent/SideContent";
import { Building, Crack } from "@src/types/FlightInfo";
import ButtonLayout from "@src/present/layout/ButtonLayout/ButtonLayout";
import SubTitle from "@src/present/common/SubTitle/SubTitle";
import { getBuildingList } from "@src/action/api/Building";
import { getCrackList } from "@src/action/api/Crack";

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

const Picture = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [building, setBuilding] = useState<number | null>(null);
  const [crack, setCrack] = useState<number | null>(null);
  
  // List
  const [buildingList, setBuildingList] = useState([]);
  const [crackList, setCrackList] = useState([]);

  useEffect(() => {
    getBuildingList("jhpdrone").then((res) => {
      if (res.isSuccess) {
        setBuildingList([...res.result]);
      }
    });
  }, []);

  useEffect(() => {
    if (building !== null) {
      getCrackList(building).then((res) => {
        if (res.isSuccess) {
          console.log(res)
          setCrackList([...res.result])
        }
      });
    }
  }, [building]);

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
              list={buildingList}
              type={"building"}
              selected={building}
              handler={bulidingHandler}
            />
          </div>
          {building !== null && (
            <div>
              <SubTitle content="균열 유형" />
              <ButtonLayout
                list={crackList}
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

export default memo(Picture);
