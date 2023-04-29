import PrimaryButton from "@src/present/common/Button/PrimaryButton";
import React, { memo } from "react";
import * as Style from "./DroneCamera.style"

const DroneCamera = () => {
    return <Style.Container>
        <Style.CameraDiv>
            <PrimaryButton content={"사진 캡처"} isArrow={false} handler={()=>{}} />
        </Style.CameraDiv>
        <Style.GuidanceDiv>지금 구역은 비행 가능 구역입니다</Style.GuidanceDiv>
    </Style.Container>
}

export default memo(DroneCamera)