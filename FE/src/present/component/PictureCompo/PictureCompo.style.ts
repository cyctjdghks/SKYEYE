import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";
import { urls } from "@src/constant/values";

export const InfoContainer = styled.div`
  position: relative;
  width: calc(100% - 3rem);
  height: 2rem;
  top: calc(100% - 4.5rem);
  left: 0.5rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  color: ${theme.colors.greyscale.light3};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 1rem;

  & div {
    font-family: "SCDream5";
  }

  & div:nth-of-type(1) {
    font-size: 0.8rem;
  }
`;

export const ImgContainer = styled.div<{ img: string }>`
  background-color: ${theme.colors.greyscale.light1};
  height: 40vh;
  width: calc(100% / 3 - 1rem);
  border-radius: 0.5rem;
  background-image: url(${props => urls.API+'/'+props.img});
  border: solid 1px ${theme.colors.greyscale.light1};

  cursor: pointer;
`;
