import PrimeTitle from "@src/present/common/PrimeTitle/PrimeTitle";
import React, { memo } from "react";
import * as Style from "./SelectBuilding.style"

const SelectBuilding = () => {
    return <Style.Container>
        <PrimeTitle content="건물을 선택해주세요" />
    </Style.Container>
}

export default memo(SelectBuilding);