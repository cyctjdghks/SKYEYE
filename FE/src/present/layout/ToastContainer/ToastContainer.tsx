import React, { memo } from "react";
import { toastListState } from "@src/store/toast";
import { useRecoilState } from "recoil";
import * as Style from "./ToastContainer.style";
import ToastCompo from "@src/present/common/Toast/Toast";
import { Toast } from "@src/types/Toast";

const ToastContainer = () => {
  const [toastList, setToastList] = useRecoilState(toastListState);

  const removeHandler = (removeIdx: number) => {
    const newList = toastList.list.filter(
      (_, idx) => removeIdx !== idx
    );

    setToastList({ list: [...newList] });
  };

  const toastJSX = toastList.list.map((elem: Toast, idx) => {
    return (
      <ToastCompo
        type={elem.type}
        guidence={elem.sentence}
        handler={() => {
          removeHandler(idx);
        }}
        idx={idx}
        key={idx}
      />
    );
  });

  return <Style.Container>{toastJSX}</Style.Container>;
};

export default memo(ToastContainer);
