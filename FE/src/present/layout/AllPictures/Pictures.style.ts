import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

export const Guidence = styled.div`
  font-size: 5.5rem;
  font-family: "SCDream5";
  color: ${theme.colors.greyscale.light1};
  text-align: right;
  line-height: 6.3rem;

  position: absolute;

  bottom: 3rem;
  right: 4rem;

  z-index: -1;
  
`;

export const Layout = styled.div`
  display: flex;
  height: calc(100% - 1rem);
  gap: 1.5rem;
  
  & > div {
    display: block;
  }
`;
