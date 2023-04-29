import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

export const GuidanceDiv = styled.div`
  width: 95%;
  text-align: right;
  font-size: 1.25rem;
  font-family: "SCDream5";
  color: ${theme.colors.greyscale.dark3};
`;

export const CameraDiv = styled.div`
  width: 95%;
  height: 90%;
  margin-top: 2rem;
  background-color: ${theme.colors.greyscale.dark3};
  border-radius: 1rem;
  position: relative;

  & > button {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100% * 0.9);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
