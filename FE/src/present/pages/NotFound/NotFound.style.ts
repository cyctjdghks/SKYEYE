import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  user-select: none;
  background-color: ${theme.colors.greyscale.light1};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;;
  align-items: center;
`
export const LogoImg = styled.img`
  width: 70%;
  max-width: 700px;
  margin-top: 10%;
`

export const TextBox = styled.div`
  width: 70%;
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;;
`

export const Text = styled.h1`
  font-size: 4rem;
  margin: 0;
  font-weight: 900;
  color: ${theme.colors.greyscale.dark1};
`
export const Text2 = styled.h1`
  font-size: 2rem;
  margin: 0;
  margin-top: 20px;
  font-weight: 600;
  color: ${theme.colors.greyscale.dark1};
`


export const ToHomeBtn = styled.button`
  width: 200px;
  height: 80px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 8px;
  border: 1px ${theme.colors.point.point} solid;
  background-color: ${theme.colors.point.point};
  color: ${theme.colors.greyscale.light3};
  &:hover{
    background-color: ${theme.colors.point.pointLight};
    border: 1px ${theme.colors.point.pointLight} solid;
  }
`