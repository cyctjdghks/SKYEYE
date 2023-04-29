import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

export const DefaultOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "SCDream5";
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-height: 10rem;
  overflow-y: scroll;

  ${theme.scroll};

  & * {
    font-family: "SCDream3";
    width: 100%;
    padding: 0.8rem 0;

    & img {
      display: none;
    }

    &:hover {
      width: calc(100% - 2rem);
      background-color: ${theme.colors.greyscale.pointLight};
      color: ${theme.colors.greyscale.light3};
      border-radius: 0.5rem;
      padding: 0.8rem 0 0.8rem 1rem;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;

      & img {
        padding: 0;
        width: 1.22rem;
        display: block;
        transform: rotate(0turn) !important;
      }
    }
  }
`;

export const DropdownDiv = styled.div<{ clicked: boolean }>`
  width: 20.6rem;
  border: solid
    ${(props) =>
      props.clicked
        ? `3px ${theme.colors.greyscale.point}`
        : `2px ${theme.colors.greyscale.dark3}`};
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  font-family: "SCDream5";
  font-size: 1.22rem;
  height: fit-content;

  color: ${(props) =>
    props.clicked
      ? theme.colors.greyscale.dark1
      : theme.colors.greyscale.dark2};
  cursor: pointer;
  transition: ${theme.trans};

  & img {
    height: 1.5rem;
    transform: ${(props) => props.clicked && "rotate(0.5turn)"};
    transition: ${theme.trans};
  }

  & > div:nth-child(1) {
    padding-bottom: ${(props) => (props.clicked ? "1rem" : "0")};
  }

  & > *:nth-child(2) {
    visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
    height: ${(props) => (props.clicked ? "fit-content" : "0")};
    padding: ${(props) => (props.clicked ? "0.8rem 0" : "0")};
  }
`;
