import styled from "@emotion/styled";
import { theme } from "@constant/theme";

export const DataBox = styled("div")({
  background: `${theme.colors.greyscale.light1}`,
  width: "100%",
  height: "70vh",
  marginTop: "2%",
  paddingTop: "1.5%",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  overflowY: "scroll",

  // 스크롤바 디자인 시작
  "&::-webkit-scrollbar": {
    width: "10px",
    backgroundColor: `${theme.colors.greyscale.light1}`,
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "6px",
    backgroundColor: `${theme.colors.greyscale.point}`,
  },
});
