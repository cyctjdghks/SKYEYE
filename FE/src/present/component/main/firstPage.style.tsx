import styled from "@emotion/styled";
import { theme } from "@constant/theme";

export const firstPage = styled("div")({
  width: "100vw",
  height: "calc(100vh - 134px)",
  textAlign: "left",
});

export const mainTextFirst = styled("h1")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "6vw",
  lineHeight: "80%",
  margin: "0",
  color: `${theme.colors.greyscale.dark2}`,
  paddingLeft: "7.5vw"
});

export const mainTextSecond = styled("h1")({
  fontStyle: "normal",
  fontWeight: "900",
  fontSize: "9vw",
  lineHeight: "120%",
  margin: "0",
  color: `${theme.colors.greyscale.point}`,
  display: "inline-block",
  paddingLeft: "7.5vw",

});

export const mainTextThird = styled("h1")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "6vw",
  lineHeight: "80%",
  margin: "0",
  color: `${theme.colors.greyscale.dark2}`,
  display: "inline-block",
});

export const skyImg = styled("img")({
  position: "relative",
  top: "30px",
  left: "40vw",
  width: "50vw",
  height: "30vw",
  borderRadius: "8px",
  maxWidth: "780px",
  "@media (max-width: 1024px)" : {
    position: "static",
    marginLeft: "7.5vw",
    marginBottom: "5vh",
    width: "85vw",
    height: "51vw",
    borderRadius: "8px",
  }
})