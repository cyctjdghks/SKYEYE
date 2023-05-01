import { memo, useState } from "react";
import InputLabel from "@common/InputLabel/InputLabel";
import { DataInput } from "@src/action/hooks/Effectiveness";
import * as Style from "./AddBuildingModal.style";
import Input from "@src/present/Input/Input";

const AddBuildingModal = () => {
  const [aboutBuilding, setAboutBuilding] = useState({
    buildingName: "건물 이름",
    buildingEstablishment: "",
    userId: "",
  });

  const changeBuilding = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setAboutBuilding(() => {
      return { ...aboutBuilding, [type]: e.target.value };
    });
  };

  return (
    <Style.ModalContainer>
      <Input
        placeholder={aboutBuilding.buildingName}
        handler={(e) => changeBuilding(e, "buildingName")}
      />
    </Style.ModalContainer>

    // <style.loginModalWrap>
    //   <InputLabel
    //     placeholder="직원번호"
    //     width="55%"
    //     height="15%"
    //     value={id}
    //     fontSize="1vw"
    //     onChange={setId}
    //     errorFontSize="1vw"
    //     errorMessage={
    //       idError ? "" : "영어와 숫자로만 입력해주세요( 5~20 글자 )"
    //     }
    //   ></InputLabel>
    //   <InputLabel
    //     placeholder="비밀번호"
    //     width="55%"
    //     height="15%"
    //     value={pwd}
    //     fontSize="1vw"
    //     onChange={setPwd}
    //     errorFontSize="13px"
    //     errorMessage={
    //       pwdError
    //         ? ""
    //         : "영어,숫자 특수문자를 하나이상 입력해주세요( 9~16 글자 )"
    //     }
    //   ></InputLabel>
    //   <style.loginButton>로그인하기!</style.loginButton>
    // </style.loginModalWrap>
  );
};

export default memo(AddBuildingModal);
