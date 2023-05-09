import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

export const Day = styled.div`
  color: ${theme.colors.greyscale.dark3};
  font-family: "SCDream5";
  font-size: 1.2rem;
  width: 3vw;
  height: 3vw;
  text-align: center;
  cursor: pointer;;

  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-of-type(1) {
    color: ${theme.colors.point.warningLight};
  }

  &:nth-of-type(7) {
    color: ${theme.colors.point.pointLight};
  }

  &.days {
    &:nth-of-type(1) {
      color: #e3a1a1;
    }

    &:nth-of-type(7) {
      color: #a9c2de;
    }
  }

  &.selected {
    background-color: ${theme.colors.point.pointLight};
    border-radius: 50%;

    & span {
      color: ${theme.colors.greyscale.light3};
    }
  }

  &.disabled {
    visibility: hidden;
  }
`;

export const Days = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:nth-of-type(1) {
    margin: 2rem 0;
  } 
`;

export const SelectMonth = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  color: ${theme.colors.greyscale.dark2};
  padding: 0;

  & div {
    font-family: "SCDream5";
  }

  & img {
    height: 1.5rem;
  }

  & img.Prev {
    transform: rotate(180deg);
  }
`;

export const Body = styled.div``;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 2rem;
  gap: 2rem;

  & * {
    margin: 0;
  }

  & *:nth-of-type(2) {
    color: ${theme.colors.greyscale.dark2};
  }
`;

export const Wrapper = styled.div`
  width: 25vw;
  height: fit-content;
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 1rem);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
