import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

export const Container = styled.div`
  min-width: 15vw;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  font-family: "SCDream5";
  color: ${theme.colors.greyscale.dark3};
`;
