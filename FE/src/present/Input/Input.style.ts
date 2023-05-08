import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

export const Container = styled.input`
  width: 20.6rem;
  border: solid 2px ${theme.colors.greyscale.dark3};
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  font-family: "SCDream5";
  font-size: 1.22rem;
  height: fit-content;

  color: ${theme.colors.greyscale.dark2};
  cursor: pointer;
  box-shadow: ${theme.shadows.shadow3};

  &:focus {
    outline: none !important;
    border: solid 3px ${theme.colors.point.point} !important;
    color: ${theme.colors.greyscale.dark1};
  }
`;
