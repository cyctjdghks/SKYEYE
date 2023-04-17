import styled from '@emotion/styled'
import { theme } from "@constant/theme"


export const SidBar = styled.div`
  background: ${theme.colors.greyscale.dark1};
  color: ${theme.colors.greyscale.light2};
  width: 100px;
  height: 100vh;
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: ${theme.trans};
  &:hover {
    width: 400px;
    border-radius: 0px 50px 50px 0px;
  }
`