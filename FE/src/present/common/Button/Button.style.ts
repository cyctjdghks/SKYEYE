import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

export const PrimaryBtn = styled.button`
  background-color: ${theme.colors.point.point};
  color: ${theme.colors.greyscale.light3};
  padding: 0.8rem 1rem;
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
    background-color: ${theme.colors.point.pointLight};
    cursor: pointer;
  }


  & img {
    height: 1.5rem;
  }

  &:disabled{
    background-color: ${theme.colors.greyscale.light1};
    cursor: not-allowed;;
    color: ${theme.colors.greyscale.dark2};
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
  background-color: ${theme.colors.point.pointLight};
  color: ${theme.colors.greyscale.light3};
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: ${theme.shadows.shadow2};

  &:hover {
    background-color: ${theme.colors.point.pointLight2};
    cursor: pointer;
  }

  & img {
    height: 1.22rem;
  }
`;

export const DefaultBtn = styled.button`
  padding: 0.8rem 1.2rem;
  font-family: "SCDream5";
  font-size: 1rem;
  width: 15rem;
  background-color: ${theme.colors.greyscale.light3};
  color: ${theme.colors.greyscale.dark2};
  border: solid 1.5px ${theme.colors.greyscale.dark3};
  border-radius: 0.5rem;
  box-shadow: ${theme.shadows.shadow2};
  text-align: left;

  &:hover {
    background-color: ${theme.colors.greyscale.light1};
    border: none;
  }
`;

export const BuildingBtn = styled.button`
  padding: 0.8rem 1.2rem;
  font-family: "SCDream5";
  font-size: 1.25rem;
  width: 16rem;
  background-color: ${theme.colors.greyscale.light3};
  color: ${theme.colors.greyscale.dark2};
  border: solid 1.5px ${theme.colors.greyscale.dark3};
  border-radius: 0.5rem;
  box-shadow: ${theme.shadows.shadow2};
  text-align: left;
  padding: 0.8rem 1.2rem;

  & div {
    font-family: "SCDream5";
  }

  &:hover {
    background-color: ${theme.colors.greyscale.light1};
    border: solid 1.5px ${theme.colors.greyscale.light1};
  }

  &.Main {
    background-color: ${theme.colors.point.point};
    color: ${theme.colors.greyscale.light3};
    border: solid 1.5px ${theme.colors.point.point};
    padding: 1.2rem;

    & > div:nth-of-type(1) {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        height: 1.5rem;
      }
    }

    & > div:nth-of-type(2) {
      padding-top: 0.3rem;
      font-size: 1rem;
      width: 100%;

      & div {
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: inherit;

        & > span:nth-of-type(1) {
          color: ${theme.colors.point.pointLight2};
        }

        & > span:nth-of-type(2) {
          color: ${theme.colors.greyscale.light1};
        }
      }
    }
  }
`;

export const CrackBtn = styled.button`
  padding: 0.8rem 1.2rem;
  font-family: "SCDream5";
  font-size: 1.25rem;
  width: 16rem;
  background-color: ${theme.colors.greyscale.light3};
  color: ${theme.colors.greyscale.dark2};
  border: solid 1.5px ${theme.colors.greyscale.dark3};
  border-radius: 0.5rem;
  box-shadow: ${theme.shadows.shadow2};
  text-align: left;
  padding: 0.8rem 1.2rem;

  & div {
    font-family: "SCDream5";
  }

  &:hover {
    background-color: ${theme.colors.greyscale.light1};
    border: solid 1.5px ${theme.colors.greyscale.light1};
  }

  &.Sub {
    background-color: ${theme.colors.point.pointLight};
    color: ${theme.colors.greyscale.light3};
    border: solid 1.5px ${theme.colors.point.pointLight};
    padding: 1.2rem;

    & > div:nth-of-type(1) {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        height: 1.5rem;
      }
    }

    & > div:nth-of-type(2) {
      margin-top: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: inherit;
      font-size: 1rem;
      width: 100%;

      & > span:nth-of-type(1) {
        color: ${theme.colors.point.point};
      }

      & > span:nth-of-type(2) {
        color: ${theme.colors.greyscale.light3};
      }
    }
  }
`;


export const DeleteBtn = styled.button`
  background-color: ${theme.colors.greyscale.dark2};
  color: ${theme.colors.greyscale.light3};
  padding: 0.8rem 1rem;
  border: none;
  font-family: "SCDream5";
  font-size: 1.22rem;
  width: fit-content;
  min-width: 10rem;
  border-radius: 0.5rem;
  box-shadow: ${theme.shadows.shadow2};

  &:hover {
    background-color: ${theme.colors.greyscale.dark3};
    cursor: pointer;
  }
`;