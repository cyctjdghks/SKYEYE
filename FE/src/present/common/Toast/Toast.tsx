import React, { memo, useEffect, useRef, useState } from "react";
import * as Style from "./Toast.style";
import { ToastItem } from "@src/types/Toast";
import Close from "@assets/toast/Close.png";

type ToastProps = {
  type: string;
  guidence: string;
  handler: any;
  idx: number;
};

const Toast = ({ type, guidence, handler, idx }: ToastProps) => {
  const toastRef = useRef(null);
  const [isAppear, setIsAppear] = useState<boolean>(true)
  const [item, setItem] = useState<ToastItem>({
    icon: "",
    color: "",
    main: "",
  });

  useEffect(() => {
    setItem({ ...Style.typeObj[type] });
  }, []);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setIsAppear(false)
    }, 4000);
    
    const apperTimer = setTimeout(() => {
      handler(idx);
    }, 5000);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(apperTimer);
    };
  }, [item]);

  return (
    <Style.ToastContainer color={item.color} isAppear={isAppear} ref={toastRef}>
      <img src={Close} alt={"close"} className="Close" onClick={handler} />
      <img src={item.icon} alt={type} className="Type" />
      <Style.Sentence>
        <div>{item.main}</div>
        <div>{guidence}</div>
      </Style.Sentence>
    </Style.ToastContainer>
  );
};

export default memo(Toast);
