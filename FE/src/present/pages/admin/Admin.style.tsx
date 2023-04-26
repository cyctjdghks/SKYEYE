import styled from "@emotion/styled";
import { theme } from "@constant/theme";

export const pageBox = styled("div")({
  width: "80%",
  margin: "auto",
});

export const pageName = styled("h1")({
  fontSize: "1.7vw",
  textAlign: "left",
  marginTop: " 4%",
});

export const dataTitle = styled("div")({
  display: "flex",
  width: "100%",
  height: "50px",
  alignItems: "center",
  color: `${theme.colors.greyscale.dark1}`,
  userSelect: "none",
  fontSize:"1.3vw",
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
  marginTop: "2%",
  borderRadius: "8px",
  display:"flex",
  flexDirection: "column",

})
