import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

export const AdminPrimaryBtn = styled.button`
  background-color: ${theme.colors.point.point};
  color: ${theme.colors.greyscale.light3};
  padding: 0.8vw 1vw;
  border: none;
  font-family: "SCDream5";
  font-size: 1vw;
  width: fit-content;
  min-width: 4rem;
  border-radius: 0.5rem;
  box-shadow: ${theme.shadows.shadow2};

  &.arrowExist {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    background-color: ${theme.colors.point.pointLight};
    cursor: pointer;
  }

  & img {
    height: 1.5rem;
  }

  &:disabled {
    background-color: ${theme.colors.greyscale.light1};
    cursor: not-allowed;
    color: ${theme.colors.greyscale.dark2};
  }
`;

export const AdminDeleteBtn = styled.button`
  background-color: ${theme.colors.greyscale.dark2};
  color: ${theme.colors.greyscale.light3};
  padding: 0.8vw 1vw;
  border: none;
  font-family: "SCDream5";
  font-size: 1vw;
  width: fit-content;
  min-width: 4rem;
  border-radius: 0.5rem;
  box-shadow: ${theme.shadows.shadow2};
  margin-right: 0.5vw;

  &:hover {
    background-color: ${theme.colors.greyscale.dark3};
    cursor: pointer;
  }
`;
