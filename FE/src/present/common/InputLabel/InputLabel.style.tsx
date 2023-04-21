import styled from "@emotion/styled";
import { theme } from "@constant/theme";
import SCDream4 from "../../../assets/fonts/SCDream4.otf";

const fontStyles = `
@font-face{
  font-family: "SCDream4";
  src:url(${SCDream4});
}`;

export const inputBox = styled.div<{ width: string }>`
  width: ${(props) => (props.width ? `${props.width}px` : "300px")};
  margin: auto;
`;

export const label = styled.label`
  width: 300px;
`;

export const input = styled.input<{ width: string; height: string }>`
  ${fontStyles}
  font-family:"SCDream4";
  font-size: 23px;
  width: ${(props) => (props.width ? `${props.width}px` : "300px")};
  height: ${(props) => (props.height ? `${props.height}px` : "60px")};
  border-radius: 8px;
  padding-left: 15px;
  border: ${theme.colors.greyscale.dark3} 2px solid;
  &:focus {
    outline: none;
    border: ${theme.colors.greyscale.point} 2px solid;
    &::placeholder {
      color: black;
    }
  }
`;

export const p = styled.p`
  ${fontStyles}
  font-family:"SCDream4";
  color: #ff0000;
  font-size: 13px;
  margin-top: 7px;
  text-align: left;
  margin-left: 8px;
`;
export const pp = styled.p`
  ${fontStyles}
  font-family:"SCDream4";
  color: #ffff;
  font-size: 13px;
  margin-top: 7px;
  margin-left: 8px;
`;
