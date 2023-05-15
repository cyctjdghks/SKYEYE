import InputLabel from "@common/InputLabel/InputLabel";
import { DataInput } from "@src/action/hooks/Effectiveness";
import * as style from "@src/present/component/Main/ModalContent.style";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";
import MainPrimaryButton from "./MainPrimaryButton";
import { LoginUser } from "@src/action/hooks/User";
import { LoginAdmin } from "@src/action/hooks/Admin";
import { toastListState } from "@src/store/toast";
import { useRecoilState } from "recoil";
import { authState } from "@store/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCallback } from "react";
import {ReactComponent as GoogleIcon} from "@assets/main/googlelogo.svg";
import {ReactComponent as KakaoIcon} from "@assets/main/kakaologo.svg";

const ModalContent = () => {
  const navigate = useNavigate();
  const [id, setId, idError] = DataInput(/^[a-zA-z0-9]{5,20}$/);
  const [pwd, setPwd, pwdError] = DataInput(
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,16}$/
  );

  const [auth, setAuth] = useRecoilState(authState);
  const [toastList, setToastList] = useRecoilState(toastListState);

  const clickLogin = (event) => {
    event.preventDefault();
    if (id === "skyadmin") {
      LoginAdmin(id, pwd).then((res) => {
        if (res.isSuccess === true) {
          setAuth({
            isAuthenticated: true,
            user: res.result,
            userType: 0,
          });
          navigate("/admin");
          const successAdminToast = {
            type: "Success",
            sentence: "로그인에 성공했습니다",
          };
          setToastList({ list: [...toastList.list, successAdminToast] });
        } else {
          const errorAdminToast = {
            type: "Error",
            sentence: "비밀번호를 확인해주세요",
          };
          setToastList({ list: [...toastList.list, errorAdminToast] });
        }
      });
    } else {
      LoginUser(id, pwd)
        .then((res) => {
          if (res.isSuccess === true) {
            setAuth({
              isAuthenticated: true,
              user: res.result,
              userType: 1,
            });
            navigate("/upload");
            const successUserToast = {
              type: "Success",
              sentence: "로그인에 성공했습니다",
            };
            setToastList({ list: [...toastList.list, successUserToast] });
          } else {
            const errorUserToast = {
              type: "Error",
              sentence: "아이디와 비밀번호를 확인해주세요",
            };
            setToastList({ list: [...toastList.list, errorUserToast] });
          }
        })
        .catch((err) => {
          // console.log(err);
        });
    }
  };

  const toKaKaoLogin = (e) => {
    e.preventDefault()
    window.location.href = "https://k8d202.p.ssafy.io/be/oauth2/authorization/kakao";
  }

  const toGoogleLogin = (e) => {
    e.preventDefault()
    window.location.href = "https://k8d202.p.ssafy.io/be/oauth2/authorization/google";
  }

 
  const nullError = !!id && !!pwd;
  const effectiveError = idError && pwdError;
  const submitError = nullError && effectiveError;

  return (
    <style.LoginModalWrap>
      <style.ModalTitle>로그인</style.ModalTitle>
      <style.LoginForm>
        <InputLabel
          placeholder="직원번호"
          width="90%"
          height="30%"
          type="text"
          value={id}
          fontSize="1vw"
          onChange={setId}
          errorFontSize="13px"
          errorMessage={
            idError ? "" : "영어와 숫자로만 입력해주세요(5 ~ 20 글자)"
          }
        ></InputLabel>
        <InputLabel
          placeholder="비밀번호"
          width="90%"
          height="30%"
          type="password"
          value={pwd}
          fontSize="1vw"
          onChange={setPwd}
          errorFontSize="13px"
          errorMessage={
            pwdError
              ? ""
              : "영어, 숫자 특수문자를 하나이상 입력해주세요(9 ~ 16 글자)"
          }
        ></InputLabel>
        <style.ButtonBox>
          <MainPrimaryButton
          content={"로그인"}
          isArrow={true}
          handler={clickLogin}
          disabled={!submitError}
          />
        </style.ButtonBox>
        <style.KaoKoButtonBox onClick={(e) => toKaKaoLogin(e)}>
          <KakaoIcon/>
          <style.ButtonText>카카오 로그인</style.ButtonText>
        </style.KaoKoButtonBox>
        <style.GoogleButtonBox onClick={(e) => toGoogleLogin(e)}>
          <GoogleIcon />
          <style.ButtonText>구글 로그인</style.ButtonText>
        </style.GoogleButtonBox>

      </style.LoginForm>
    </style.LoginModalWrap>
  );
};

export default ModalContent;
