import React, { memo, useEffect, useState } from "react";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";
import * as Style from "./DroneCamera.style";

const DroneCamera = () => {
  const preventGoBack = () => {
    history.pushState(null, "", location.href);
    alert("종료하기 버튼을 눌러주세요");
  };

  useEffect(() => {
    (() => {
      history.pushState(null, "", location.href);
      window.addEventListener("popstate", preventGoBack);
    })();

    return () => {
      window.removeEventListener("popstate", preventGoBack);
    }
  }, []);

  return (
    <Style.Container>
      <Style.CameraDiv>
        <PrimaryButton
          content={"사진 캡처"}
          isArrow={false}
          handler={() => {}}
        />
      </Style.CameraDiv>
      <Style.GuidanceDiv>지금 구역은 비행 가능 구역입니다</Style.GuidanceDiv>
    </Style.Container>
  );
};

export default memo(DroneCamera);
