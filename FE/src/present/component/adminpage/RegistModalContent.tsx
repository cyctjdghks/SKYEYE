import { useState } from "react";
import InputLabel from "@common/InputLabel/InputLabel";
import { DataInput } from "@action/hooks/Effectiveness";

import * as style from "@component/adminpage/RegistModalContent.style";
import { RegistUser } from "@src/action/hooks/authHooks";

type UserInfo = {
  onClose: () => void;
};

const AdimModalContent = ({ onClose }: UserInfo) => {
  const [userId, setId, idError] = DataInput(/^[a-zA-z0-9]{5,20}$/);
  const [userName, setName, nameError] = DataInput(/^[ㄱ-ㅎ|가-힣]+$/);
  const [userPosition, setPosition, positionError] =
    DataInput(/^[ㄱ-ㅎ|가-힣]+$/);
  const [userPhoneNumber, setPhone, phoneError] = DataInput(
    /^([0-9]+)-([0-9]+)-([0-9]+)/
  );
  const [userPw, setPassword, pwdError] = DataInput(
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,16}$/
  );
  const [profile, setProfile] = useState<any | null>("");
  const [fileName, setFileName] = useState("");

  const saveProfile = (event) => {
    event.preventDefault();
    console.log(event.target.elements.files.files);
    setProfile(event.target.elements.files.files[0]);

    setFileName(URL.createObjectURL(event.target.elements.files.files[0]));
  };

  const submitRegist = (event) => {
    event.preventDefault();
    const user = {
      userId,
      userPw,
      userName,
      userPosition,
      userPhoneNumber,
    };
    const formData = new FormData();
    for (let i: number; i < profile.length; i++) {
      formData.append("profile", profile[i]);
    }
    const userBlob = new Blob([JSON.stringify(user)], {
      type: "application/json",
    });
    formData.append("user", userBlob, "user.json");
    RegistUser(formData).then((res) => {
      console.log(res);
    });
  };

  return (
    <style.modalBox>
      <style.modalTitle>회원 등록 하기</style.modalTitle>
      <form onSubmit={saveProfile}>
        <label htmlFor="file"></label>
        <input type="file" id="file" name="files" multiple />
        <button type="submit"> 저장</button>
      </form>
      <style.contentBox onSubmit={submitRegist}>
        <style.profileBox>
          <style.profileImage src={fileName}></style.profileImage>
        </style.profileBox>
        <style.dataBox>
          <button type="submit">ddd</button>
          <InputLabel
            placeholder="직원번호"
            width="100%"
            height="100%"
            value={userId}
            fontSize="1vw"
            onChange={setId}
            type="text"
            errorMessage=""
            errorFontSize="0.01vw"
          />
          <style.inputBox>
            <InputLabel
              placeholder="이름"
              width="50%"
              height="100%"
              value={userName}
              fontSize="1vw"
              type="text"
              onChange={setName}
              errorMessage=""
              errorFontSize="0.01vw"
            />
            <InputLabel
              placeholder="직책"
              width="50%"
              height="90%"
              type="text"
              value={userPosition}
              fontSize="1vw"
              onChange={setPosition}
              errorMessage=""
              errorFontSize="0.01vw"
            />
          </style.inputBox>
          <InputLabel
            placeholder="전화번호"
            width="100%"
            height="90%"
            type="text"
            value={userPhoneNumber}
            fontSize="1vw"
            onChange={setPhone}
            errorMessage=""
            errorFontSize="0.01vw"
          />
          <InputLabel
            placeholder="비밀번호"
            width="100%"
            height="90%"
            type="password"
            value={userPw}
            fontSize="1vw"
            onChange={setPassword}
            errorMessage=""
            errorFontSize="0.01vw"
          />
        </style.dataBox>
      </style.contentBox>
      <style.buttonBox>
        <style.editButton>
          <style.logoText>수정하기</style.logoText>
        </style.editButton>
      </style.buttonBox>
    </style.modalBox>
  );
};

export default AdimModalContent;
