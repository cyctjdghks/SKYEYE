import styled from "@emotion/styled";
import { theme } from "@constant/theme";

export const firstPage = styled("div")({
  width: "100vw",
  height: "calc(100vh - 100px)",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
});

export const backVideo = styled("video")({
  position: "absolute",
  width: "100vw",
  objectFit: "cover",
  height: "auto",
  zIndex: "-1",
  overflow: "hidden",
  "@media screen and (max-aspect-ratio: 1219/685)": {
    width: "100vw",
    height: "100vh",
  },
});

export const mainTextFirst = styled("h1")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "6vw",
  lineHeight: "100%",
  margin: "0",
  color: `${theme.colors.greyscale.light3}`,
  marginTop: "40vh",
  marginLeft: "7.5vw",
  textShadow: `2px 2px 2px gray;`,
});

export const mainTextSecond = styled("h1")({
  fontStyle: "normal",
  fontWeight: "900",
  fontSize: "9vw",
  lineHeight: "120%",
  margin: "0",
  color: `${theme.colors.greyscale.point}`,
  display: "inline-block",
  marginLeft: "7.5vw",
  textShadow: `2px 2px 2px gray;`,
});

export const mainTextThird = styled("span")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "6vw",
  lineHeight: "80%",
  margin: "0",
  color: `${theme.colors.greyscale.light3}`,
  display: "inline-block",
  textShadow: `2px 2px 2px gray;`,
});
