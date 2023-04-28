import InputLabel from "@common/InputLabel/InputLabel";
import { DataInput } from "@src/action/hooks/Effectiveness";
import * as style from "@component/main/modalContent.style";

const ModalContent = () => {
  const [id, setId, idError] = DataInput(/^[a-zA-z0-9]{5,20}$/);
  const [pwd, setPwd, pwdError] = DataInput(
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,16}$/
  );

  return (
    <style.loginModalWrap>
      <InputLabel
        placeholder="직원번호"
        width="55%"
        height="15%"
        value={id}
        fontSize="1vw"
        onChange={setId}
        errorFontSize="1vw"
        errorMessage={
          idError ? "" : "영어와 숫자로만 입력해주세요( 5~20 글자 )"
        }
      ></InputLabel>
      <InputLabel
        placeholder="비밀번호"
        width="55%"
        height="15%"
        value={pwd}
        fontSize="1vw"
        onChange={setPwd}
        errorFontSize="13px"
        errorMessage={
          pwdError
            ? ""
            : "영어,숫자 특수문자를 하나이상 입력해주세요( 9~16 글자 )"
        }
      ></InputLabel>
      <style.loginButton>로그인하기!</style.loginButton>
    </style.loginModalWrap>
  );
};

export default ModalContent;
