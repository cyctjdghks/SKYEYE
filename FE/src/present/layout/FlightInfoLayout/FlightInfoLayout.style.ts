import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

export const AboutMapInfoBox = styled.div`
  margin-top: 3rem;

  & div {
    margin-bottom: 1rem;

    &:nth-of-type(1) > h3 {
      color: #0000b3;
    }

    &:nth-of-type(2) > h3 {
      color: #277701;
    }

    &:nth-of-type(3) > h3 {
      color: #e71819;
    }

    & h3 {
      font-family: "SCDream5";
      color: ${theme.colors.greyscale.dark3};
      padding: 0;
      margin: 0;
      display: flex;
      gap: 1rem;
      align-items: flex-end;

      & > div {
        color: ${theme.colors.greyscale.dark3};
        font-size: 0.8rem;
        padding: 0;
        margin: 0;
      }
    }
  }
`;

export const LineBox = styled.div`
  margin-bottom: 1rem;

  &:before {
    content: "●";
    font-size: 0.5rem;
    margin-right: 1rem;
    color: ${theme.colors.point.pointLight};
    display: inline-block;
  }
`;

export const InfoBox = styled.div`
  line-height: 180%;
  width: 90% !important;
`;

export const ColorBox = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;

  & > div:nth-of-type(1) {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
  }

  &:nth-of-type(1) > div:nth-of-type(1) {
    background-color: #0000b3;
  }

  &:nth-of-type(2) > div:nth-of-type(1) {
    background-color: #277701;
  }

  &:nth-of-type(3) > div:nth-of-type(1) {
    background-color: #e71819;
  }
`;

export const AboutMap = styled.div`
  background-color: ${theme.colors.greyscale.light3};
  width: fit-content;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: ${theme.shadows.shadow1};

  position: absolute;
  bottom: 2rem;
  right: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 0;
  grid-gap: 2rem;

  & > div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
  }
`;

export const Container = styled.div`
  padding: 1rem;
  overflow: auto;
  height: calc(100vh - 6rem);

  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.scroll};
`;
