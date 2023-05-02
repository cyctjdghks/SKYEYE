import styled from "@emotion/styled"
export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.42);
  z-index: 9999;
`;

export const ModalWrap = styled.div<{ width: string, height:string }>`
  width: ${(props) => props.width || "600px"};
  height: ${(props)=> props.height || "500px"};
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden
`;
