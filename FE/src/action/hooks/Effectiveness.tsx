import React, { useCallback, useState } from "react";
import axios from "axios";

// 입력 값 저장 및 유효성 검사 진행
type DataInputReturn = [
  inputData: string,
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void,
  dataError: boolean
];

export const DataInput = (regExp: RegExp): DataInputReturn => {
  const [inputData, setInputData] = useState("");
  const [dataError, setError] = useState(true);

  const handler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const data = event.target.value;
      setInputData(data);
      if (data === "") {
        setError(true);
      } else if (!regExp.test(data)) {
        setError(false);
      } else {
        setError(true);
      }
    },
    [regExp]
  );

  return [inputData, handler, dataError];
};

