import styled from "@emotion/styled";
import { theme } from "@constant/theme";

export const mainWrapper = styled("div")({
  width: "100vw",
});

export const topBox = styled("div")({
  width: "calc(100vw - 76px)",
  height: "134px",
  display: "flex",
  alignItems: "center",
  marginLeft: "38px",
  marginRight: "38px",
  justifyContent: "space-between",
});

export const logo = styled("img")({
  width: "180px",
});

export const loginButton = styled("button")({
  width: "164px",
  height: "58px",
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

export const logoText = styled("h1")({
  color: `${theme.colors.greyscale.light3}`,
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "20px",
});

export const logoRight = styled("img")({
  width: "15px",
});

export const firstPage = styled("div")({
  width: "100vw",
  height: "calc(100vh - 134px)",
  textAlign: "left",
});

export const mainTextFirst = styled("h1")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "64px",
  lineHeight: "80%",
  margin: "0",
  color: `${theme.colors.greyscale.dark2}`,
  paddingLeft: "100px"
});

export const mainTextSecond = styled("h1")({
  fontStyle: "normal",
  fontWeight: "900",
  fontSize: "200px",
  lineHeight: "120%",
  margin: "0",
  color: `${theme.colors.greyscale.point}`,
  display: "inline",
  paddingLeft: "100px"
});

export const mainTextThird = styled("h1")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "64px",
  lineHeight: "80%",
  margin: "0",
  color: `${theme.colors.greyscale.dark2}`,
  display: "inline",
});

export const skyImg = styled("img")({
  position: "relative",
  top: "30px",
  left: "40vw",
  width: "50vw",
  height: "30vw"
})


export const secondPage = styled("div")({
  width: "100vw",
  height: "100vh",
})