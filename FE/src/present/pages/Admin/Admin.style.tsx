import styled from "@emotion/styled";
import { theme } from "@constant/theme";

export const PageBox = styled("div")({
  width: "80%",
  height: "100vh",
  margin: "auto",
  overflow: "hidden",
});

export const TopBox = styled("div")({
  marginTop: "50px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

export const TopButtonBox = styled("div")({
  height: "50px",
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
})

export const PageName = styled("h1")({
  fontSize: "1.7vw",
  textAlign: "left",
  userSelect: "none",
});

export const HiddenBox = styled("div")({
  width: "100px",
  visibility: "hidden",
  userSelect: "none"
})


export const DataTitle = styled("div")({
  display: "flex",
  width: "100%",
  height: "50px",
  alignItems: "center",
  color: `${theme.colors.greyscale.dark1}`,
  userSelect: "none",
  fontSize: "1.3vw",
});

export const No = styled("div")({
  // fontSize: "20px",
  width: "8%",
});

export const Number = styled("div")({
  // fontSize: "20px",
  width: "26%",
});

export const Name = styled("div")({
  // fontSize: "20px",
  width: "22%",
});

export const Job = styled("div")({
  // fontSize: "20px",
  width: "22%",
});

export const Phone = styled("div")({
  // fontSize: "20px",
  width: "22%",
});

export const HrLine = styled("div")({
  width: "100%",
  height: "1px",
  background: `${theme.colors.greyscale.dark1}`,
});

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
    backgroundColor: `${theme.colors.point.point}`,
  
  },
});
