import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

export const PrimaryBtn = styled.button`
  background-color: ${theme.colors.greyscale.point};
  color: ${theme.colors.greyscale.light3};
  padding: 0.8rem;
  border: none;
  font-family: "SCDream5";
  font-size: 1.22rem;
  width: fit-content;
  min-width: 10rem;
  border-radius: 0.5rem;
  box-shadow: ${theme.shadows.shadow2};

  &.arrowExist {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    background-color: ${theme.colors.greyscale.pointLight};
    cursor: pointer;
  }

  & img {
    height: 1.5rem;
  }
`;

export const AddBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "SCDream5";
  font-size: 1.22rem;
  width: fit-content;
  min-width: 23rem;
  background-color: ${theme.colors.greyscale.pointLight};
  color: ${theme.colors.greyscale.light3};
  padding: 0.8rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: ${theme.shadows.shadow2};

  &:hover {
    background-color: ${theme.colors.greyscale.pointLight2};
    cursor: pointer;
  }

  & img {
    height: 1.22rem;
  }
`;
