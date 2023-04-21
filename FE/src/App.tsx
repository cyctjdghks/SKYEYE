import React, { useState } from "react";
import * as style from "./App.style";
import InputLabel from "./present/common/InputLabel/InputLabel";
import { DataInput } from "./action/hooks/Effectiveness";

function App() {
  const [id, setId, idError] = DataInput(/^[a-zA-z0-9]{5,20}$/);
  const [password, setPassword, passwordError] = DataInput(
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,16}$/
  );

  return (
    <style.AppWrap>
      <p>App Test</p>
      <InputLabel
        placeholder="직원번호"
        width="370"
        height="60"
        errorMessage={idError ? "" : "영어와 숫자로만 입력해주세요.(5-20자)"}
        value={id}
        onChange={setId}
      />
      <InputLabel
        placeholder="비밀번호"
        width="370"
        height="60"
        errorMessage={passwordError ? "" : "영어와 숫자 그리고 특수문자를 조합해 입력해주세요.(9-16자)"}
        value={password}
        onChange={setPassword}
      />
    </style.AppWrap>
  );
}

export default App;
