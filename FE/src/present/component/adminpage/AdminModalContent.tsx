import { useState } from "react";
import InputLabel from "@src/present/common/InputLabel/InputLabel";

import * as style from "@present/component/adminpage/AdimModalContent.style";

import right from "@assets/main/right.png";

const AdimModalContent = () => {
  const [employeeNumber, setEmployeeNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <style.modalBox>
      <style.modalTitle>회원 정보 수정</style.modalTitle>
      <style.contentBox>
        <style.profileBox>
          <img src="" alt="이미지" />
          <style.profileTitle>프로필 사진</style.profileTitle>
        </style.profileBox>
        <style.dataBox>
          <InputLabel
            placeholder="직원번호"
            width="100%"
            height="100%"
            value={employeeNumber}
            fontSize="1vw"
            onChange={(e) => setEmployeeNumber(e.target.value)}
            errorMessage=""
            errorFontSize="0.01vw"
          />
          <style.inputBox>
            <InputLabel
              placeholder="이름"
              width="50%"
              height="100%"
              value={name}
              fontSize="1vw"
              onChange={(e) => setName(e.target.value)}
              errorMessage=""
              errorFontSize="0.01vw"
            />
            <InputLabel
              placeholder="직책"
              width="50%"
              height="90%"
              value={job}
              fontSize="1vw"
              onChange={(e) => setJob(e.target.value)}
              errorMessage=""
              errorFontSize="0.01vw"
            />
          </style.inputBox>
          <InputLabel
            placeholder="전화번호"
            width="100%"
            height="90%"
            value={phone}
            fontSize="1vw"
            onChange={(e) => setPhone(e.target.value)}
            errorMessage=""
            errorFontSize="0.01vw"
          />
          <InputLabel
            placeholder="비밀번호"
            width="100%"
            height="90%"
            value={password}
            fontSize="1vw"
            onChange={(e) => setPassword(e.target.value)}
            errorMessage=""
            errorFontSize="0.01vw"
          />
        </style.dataBox>
      </style.contentBox>
      <style.buttonBox>
        <style.deleteButton>
          <style.logoText>회원삭제</style.logoText>
        </style.deleteButton>
        <style.eidtButton>
          <style.logoText>수정하기</style.logoText>
        </style.eidtButton>
      </style.buttonBox>
    </style.modalBox>
  );
};

export default AdimModalContent;
