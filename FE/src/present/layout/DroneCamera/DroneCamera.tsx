import React, { memo, useEffect, useState } from "react";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";
import * as Style from "./DroneCamera.style";

const DroneCamera = () => {
  // Prevent Go back
  const preventGoBack = () => {
    history.pushState(null, "", location.href);
    alert("종료하기 버튼을 눌러주세요");
  };

  // Prevent Reload
  const preventClose = (e: BeforeUnloadEvent) => {
    /*
    Blocked attempt to show a 'beforeunload' confirmation panel for a frame that never had a user gesture since its load

    -> 사용자가 페이지와 아무런 상호작용을 하지 않았을 때 발생하는 오류
    한 번 영상 심어보고 그래도 뜨면 처리할게요
    */

    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    (() => {
      history.pushState(null, "", location.href);
      window.addEventListener("popstate", preventGoBack);

      window.addEventListener("beforeunload", preventClose);
    })();

    return () => {
      window.removeEventListener("popstate", preventGoBack);

      window.removeEventListener("beforeunload", preventClose);
    };
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
