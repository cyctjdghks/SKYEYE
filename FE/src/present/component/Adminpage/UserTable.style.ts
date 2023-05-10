import styled from "@emotion/styled";
import { theme } from "@constant/theme";

export const AllDataBox = styled("div")({
  width: "100%",
  overflowY: "scroll",
  height: "75.5vh",
  // 스크롤바 디자인 시작
  "&::-webkit-scrollbar": {
    width: "0.7vw",
    borderRadius: "6px",
    backgroundColor: `${theme.colors.greyscale.light1}`,
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "6px",
    backgroundColor: `${theme.colors.point.point}`,
  },
});

export const DataBox = styled("div")({
  background: `${theme.colors.greyscale.light1}`,
  width: "98%",
  height: "75.5vh",
  marginLeft: "1%",
  paddingTop: "1.5%",
  // borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  marginBottom: "1%",
  borderRadius: "5px",
});
