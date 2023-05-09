import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% * 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const SelectedImages = styled.div`
  width: 95%;
  height: 90%;
  margin-top: 2rem;
  background-color: ${theme.colors.greyscale.light1};
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-evenly;
  justify-content: stretch;
  overflow: auto;
`;

export const blackWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 128px;
  height: 172px;
  overflow: hidden;
  margin: 10px;
  text-align: center;

  img {
    width: 128px;
    height: 128px;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 120%;
  }

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::after {
    content: "X";
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 48px;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  &::before {
    transition: opacity 0.3s ease-in-out;
  }

  &::after {
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  &:hover::before {
    opacity: 0.5;
  }
`;

export const SaveLabel = styled.label`
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  background-color: ${theme.colors.point.point};
  color: ${theme.colors.greyscale.light3};
  padding: 0.8rem 1rem;
  border: none;
  font-family: "SCDream5";
  font-size: 1.22rem;
  width: fit-content;
  border-radius: 0.5rem;
  box-shadow: ${theme.shadows.shadow2};

  &:hover {
    background-color: ${theme.colors.point.pointLight};
    cursor: pointer;
  }
`;

export const SaveInput = styled.input`
  display: none;
`;

export const BottomBox = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
