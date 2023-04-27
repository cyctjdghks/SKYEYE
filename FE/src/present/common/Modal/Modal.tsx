import * as style from "./Modal.style";
import {useEffect, useRef} from "react";
import useOutSideClick from "@src/action/hooks/UseOutSideClick";

type modalProps = {
  onClose: () => void;
  width: string;
  height: string;
  title: string;
};

const Modal = ({ onClose, width, height, title }: modalProps) => {
  const modalRef = useRef(null)

  const handleClose = () => {
    onClose?.();
  };

  // 스크롤 막아주기 
  useEffect(()=>{
    const $body = document.querySelector("body");
    const overflow = $body.style.overflow;
    $body.style.overflow = "hidden";
    return () => {
      $body.style.overflow = overflow
    };
  }, []);

  useOutSideClick(modalRef, handleClose);

  return (
    <style.Overlay>
      <style.ModalWrap ref={modalRef} width={width} height={height} title={title}>
        <style.Contents>
          <style.Button onClick={handleClose}>close</style.Button>
        </style.Contents>
      </style.ModalWrap>
    </style.Overlay>
  );
};

export default Modal;
