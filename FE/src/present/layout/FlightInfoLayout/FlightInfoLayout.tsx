import SubTitle from "@src/present/common/SubTitle/SubTitle";
import React from "react";
import * as Style from "./FlightInfoLayout.style";
import FlightInfo from "@assets/FlightInfo.png";

const FlightInfoLayout = () => {
  return (
    <Style.Container>
      <Style.ImgContainer>
        <div>
          <img src={FlightInfo} alt={"비행 가능 공역"} />
          <Style.AboutMap>
            <Style.ColorBox>
              <div /> <div>비행 정보 구역</div>
            </Style.ColorBox>
            <Style.ColorBox>
              <div /> <div>비행 제한 구역</div>
            </Style.ColorBox>
            <Style.ColorBox>
              <div /> <div>비행 금지 구역</div>
            </Style.ColorBox>
          </Style.AboutMap>
        </div>
        <Style.InfoBox>
          <Style.LineBox>
            초경량비행장치 비행공역(UA)에서는 비행승인 없이 비행이 가능하며,
            기본적으로 그 외 지역은 비행승인 후 비행이 가능{" "}
          </Style.LineBox>
          <Style.LineBox>
            최대이륙중량 25kg 이하의 무인동력비행장치(드론)는 관제권 및 비행금지
            공역을 제외한 지역에서는 150m미만의 고도에서는 비행승인 없이 비행
            가능
          </Style.LineBox>
          <Style.AboutMapInfoBox>
            <div>
              <h3>
                비행 정보 구역<div>(국토교통부, 2020-11-06)</div>
              </h3>
              FIR(Flight Infromation Region)은 항공기의 안전하고 효율적인 비행과
              항공기의 수색 또는 구조에 필요한 정보를 제공하기 위한 공역(면적 :
              약 43만㎢)
            </div>
            <div>
              <h3>
                비행 제한 구역<div>(국토교통부, 2023-02-02)</div>
              </h3>
              항공사격, 대공사격 등으로 인한 위험으로부터 항공기의 안전을
              보호하거나 그 밖의 이유로 비행허가를 받지않는 항공기의 비행을
              제한하는 공역(개수 60, 통제운영 : 국방부)
            </div>
            <div>
              <h3>
                비행 금지 구역<div>(국토교통부, 2023-02-02)</div>
              </h3>
              안전.국방상 등의 이유로 항공기의 비행을 금지하는 공역(개수 5,
              통제운영 : 국방부)
            </div>
          </Style.AboutMapInfoBox>
        </Style.InfoBox>
      </Style.ImgContainer>
    </Style.Container>
  );
};

export default FlightInfoLayout;
