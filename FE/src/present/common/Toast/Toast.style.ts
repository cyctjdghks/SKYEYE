import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";
import { keyframes } from "@emotion/react";

import Error from "@assets/toast/Error.png";
import Info from "@assets/toast/Info.png";
import Select from "@assets/toast/Select.png";
import Success from "@assets/toast/Success.png";

const fadein = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to{
    opacity: 1;
    transform: translateZ(0);
  }
`;

export const fadeout = keyframes`
  from {
    opacity: 1;
    transform: translateZ(0);
  }
  to{
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;

export const typeObj = {
  Error: {
    icon: Error,
    color: theme.colors.point.warning,
    main: "확인해주세요!",
  },
  Success: {
    icon: Success,
    color: theme.colors.point.point,
    main: "성공했습니다!",
  },
  Info: {
    icon: Info,
    color: theme.colors.point.pointLight,
    main: "알려드립니다!",
  },
  Select: {
    icon: Select,
    color: theme.colors.point.pointLight,
    main: "알려드립니다!",
  },
};

export const Sentence = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  color: ${theme.colors.greyscale.light3};

  & div:nth-of-type(1) {
    font-size: 1.25rem;
    font-family: "SCDream7";
  }

  & div:nth-of-type(2) {
    font-size: 1rem;
    font-family: "SCDream5";
  }
`;

export const ToastContainer = styled.div<{ color: string; isAppear: boolean }>`
  min-width: 18rem;
  min-height: 8rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;

  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  grid-gap: 1.5rem;

  background-color: ${(props) => props.color};
  box-shadow: ${theme.shadows.shadow3};
  animation: ${(props) => (props.isAppear ? fadein : fadeout)} 1s;

  --imgwidth: 3.5rem;
  --closewidth: 1.2rem;

  & img.Type {
    width: var(--imgwidth);
    height: var(--imgwidth);
  }

  & img.Close {
    width: var(--closewidth);
    height: var(--closewidth);

    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    cursor: pointer;
  }
`;
