import styled from "@emotion/styled";
import { theme } from "@constant/theme";

export const secondPage = styled("div")({
  width: "100vw",
  height: "auto",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  position: "relative",
});

export const about = styled("div")({
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "1vw",
  lineHeight: "120%",
  paddingLeft: "7.5vw",
  marginTop: "3vh",
});

export const hrLine = styled("hr")({
  width: "85vw",
  color: `${theme.colors.greyscale.dark1}`,
});

export const pageText = styled("h1")({
  fontSize: "5vw",
  fontStyle: "normal",
  fontWeight: "300",
  lineHeight: "130%",
  margin: "0",
  color: `${theme.colors.greyscale.dark1}`,
  paddingLeft: "7.5vw",
});

export const imgBox = styled("div")({
  width: "85vw",
  height: "70vw",
  maxHeight: "1000px",
  backgroundColor: `${theme.colors.greyscale.light1}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "8px",
  marginLeft: "7.5vw",
});

export const innerBox = styled("div")({
  marginTop: "0.8%",
  marginLeft: "2.5%",
  width: "95%",
  height: "30%",
  display: "flex",
  justifyContent: "space-around"
});

export const smallBox = styled("div")({
  width: "24%",
  height: "100%",
  backgroundColor: `${theme.colors.greyscale.light3}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const boxImg = styled("img")({
  width: "90%",
});

export const textBox = styled("div")({
  width: "90%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
})

export const boxText1 = styled("p")({
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "1vw",
  lineHeight: "120%",
  color: `${theme.colors.greyscale.dark1}`
});
export const boxText2 = styled("p")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "1vw",
  lineHeight: "120%",
  color : `${theme.colors.greyscale.point}`
});

export const largeBox = styled("div")({
  width: "49%",
  height: "100%",
  backgroundColor: `${theme.colors.greyscale.light3}`,
  display: "flex",
  flexDirection: "column",
});

