import React, { memo, useEffect, useState } from "react";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";
import * as Style from "./DroneCamera.style";
import { useLocation, useNavigate } from "react-router-dom";
import { Capture } from "@src/types/FlightInfo";
import TestImg from "@assets/test.jpg"

const DroneCamera = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [crackInfo, setCrackInfo] = useState<Capture>({
    profile: "any",
    crack: { crackType: "", crackPosition: "", buildingId: null },
  });

  useEffect(() => {
    if (state === null) navigate("/drone");
    else {
      setCrackInfo((prev) => {
        return {
          profile: prev.profile,
          crack: { ...prev.crack, buildingId: state.buildingId },
        };
      });
    }
  }, [state]);

  // Prevent Go back
  const preventGoBack = () => {
    history.pushState(null, "", location.href);
    alert("종료하기 버튼을 눌러주세요");
  };

  // Prevent Reload
  const preventClose = (e: BeforeUnloadEvent) => {
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
