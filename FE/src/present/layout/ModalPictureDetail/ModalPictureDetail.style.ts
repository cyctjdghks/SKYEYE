import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

export const ModiCompo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;

  & button {
    width: 9rem;
    font-size: 1.22rem;
  }

  & button:nth-of-type(2) {
    background-color: ${theme.colors.point.pointLight};
  }

  & button:nth-of-type(2):hover {
    background-color: ${theme.colors.point.pointLight2};
  }
  & button:nth-of-type(2):disabled {
    color: ${theme.colors.greyscale.light3};
  }
`;

export const SubCompo = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 1rem;
  width: 100%;
  align-items: center;
  margin-bottom: 1.1rem;

  &:nth-of-type(2) {
    margin-bottom: 1.2rem;
  }

  & input {
    width: calc(100% - 2rem);
    padding: 0.8rem 1rem;
    box-shadow: ${theme.shadows.shadow1};
  }

  & div {
    font-size: 1.2rem;
    font-family: "SCDream5";
  }

  & div:nth-of-type(1) {
    color: ${theme.colors.greyscale.dark3};
  }
  & div:nth-of-type(2) {
    padding: 0.3rem 0;
  }

  & button {
    text-decoration: none;
    background-color: ${theme.colors.point.point};
    color: ${theme.colors.greyscale.light3};
    border: none;
    font-family: "SCDream5";
    font-size: 1.22rem;
    width: calc(100% - 2rem);
    padding: 0.8rem 1rem;
    border-radius: 0.5rem;
    box-shadow: ${theme.shadows.shadow2};

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      background-color: ${theme.colors.point.pointLight};
      cursor: pointer;
    }

    & div {
      font-size: 1.22rem;
      color: ${theme.colors.greyscale.light3} !important;
    }

    & img {
      height: 1.5rem;
    }
  }
`;

export const InfoCompo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 17fr 20fr;
  gap: 2rem;

  width: calc(100% - 6rem);
  height: 70%;
  padding: 1rem 3rem;

  & > img {
    width: auto;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    border: solid 1px ${theme.colors.greyscale.dark3};
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Container = styled.div`
  width: inherit;
  height: inherit;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
