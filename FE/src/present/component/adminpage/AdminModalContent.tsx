import { useState } from "react";
import InputLabel from "@common/InputLabel/InputLabel";
import { urls } from "@constant/values";

import * as style from "@component/adminpage/AdminModalContent.style";
import { DeleteUser } from "@src/action/hooks/authHooks";

type UserInfo = {
  data: {
    userId: string;
    userName: string;
    userPosition: string;
    userPhoneNumber: string;
    imageSrc: string;
  };
  onClose: () => void;
};

const AdimModalContent = ({ data, onClose }: UserInfo) => {
  const [userId, setUserId] = useState<string>(data?.userId || "");
  const [name, setName] = useState<string>(data.userName || "");
  const [job, setJob] = useState<string>(data.userPosition || "");
  const [phone, setPhone] = useState<string>(data.userPhoneNumber || "");
  const [password, setPassword] = useState<string>("");
  const [imgSrc, setImgSrc] = useState<string>(
    `${urls.API}/${data.imageSrc}` || ""
  );

  const clickDelete = () => {
    DeleteUser(userId);
    onClose();
    location.reload();
  };

  return (
    <style.modalBox>
      <style.modalTitle>회원 정보 수정</style.modalTitle>
      <style.contentBox>
        <style.profileBox>
          <img src={imgSrc} alt="이미지" />
          <style.profileTitle>프로필 사진</style.profileTitle>
        </style.profileBox>
        <style.dataBox>
          <InputLabel
            placeholder="직원번호"
            width="100%"
            height="100%"
            value={userId}
            fontSize="1vw"
            onChange={(e) => setUserId(e.target.value)}
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
          <style.logoText onClick={clickDelete}>회원삭제</style.logoText>
        </style.deleteButton>
        <style.editButton>
          <style.logoText>수정하기</style.logoText>
        </style.editButton>
      </style.buttonBox>
    </style.modalBox>
  );
};

export default AdimModalContent;
