import React, {useState, useEffect, memo} from "react";
import * as Style from "./AllPictures.style";
import { Building, Crack } from "@src/types/FlightInfo";
import ButtonLayout from "@src/present/layout/ButtonLayout/ButtonLayout";
import SubTitle from "@src/present/common/SubTitle/SubTitle";
import { getBuildingList } from "@src/action/api/Building";
import { getCrackList } from "@src/action/api/Crack";


const AllPictures = () => {
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
          console.log(res);
          setCrackList([...res.result]);
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
          폴더를
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
    <Style.Layout>
      <div>
        <SubTitle content="폴더명" />
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
  );
};

export default memo(AllPictures);
