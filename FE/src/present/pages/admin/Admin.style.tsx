import styled from "@emotion/styled";
import { theme } from "@constant/theme";

export const pageBox = styled("div")({
  width: "80%",
  height: "100vh",
  margin: "auto",
  overflow: "hidden",
});

export const topBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const pageName = styled("h1")({
  fontSize: "1.7vw",
  textAlign: "left",
  marginTop: " 4%",
  marginBottom: "2%",
  userSelect: "none",
});

export const editButton = styled("button")({
  marginTop: " 4%",
  marginBottom: "2%",
  width: "15%",
  height: "12%",
  background: `${theme.colors.greyscale.point}`,
  border: `1px solid ${theme.colors.greyscale.point}`,
  borderRadius: "8px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  "&:hover": {
    background: `${theme.colors.greyscale.pointLight}`,
    border: `1px solid ${theme.colors.greyscale.pointLight}`,
  },
});

export const editButtontmp = styled("button")({
  marginTop: " 4%",
  marginBottom: "2%",
  width: "15%",
  height: "12%",
  background: `${theme.colors.greyscale.light3}`,
  border: `1px solid ${theme.colors.greyscale.light3}`,
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  userSelect: "none",
  
})

export const editText = styled("h1")({
  color: `${theme.colors.greyscale.light3}`,
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "1vw",
});

export const editRight = styled("img")({
  width: "10%",
});

export const dataTitle = styled("div")({
  display: "flex",
  width: "100%",
  height: "50px",
  alignItems: "center",
  color: `${theme.colors.greyscale.dark1}`,
  userSelect: "none",
  fontSize: "1.3vw",
});

export const no = styled("div")({
  // fontSize: "20px",
  width: "8%",
});

export const number = styled("div")({
  // fontSize: "20px",
  width: "26%",
});

export const name = styled("div")({
  // fontSize: "20px",
  width: "22%",
});

export const job = styled("div")({
  // fontSize: "20px",
  width: "22%",
});

export const phone = styled("div")({
  // fontSize: "20px",
  width: "22%",
});

export const hrLine = styled("div")({
  width: "100%",
  height: "1px",
  background: `${theme.colors.greyscale.dark1}`,
});

export const dataBox = styled("div")({
  
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
