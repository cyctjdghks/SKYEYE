import styled from "@emotion/styled";
import { theme } from "@constant/theme";

export const mainWrapper = styled("div")({
  width: "100%",
  overflowX: "hidden",
  scrollSnapType: "y mandatory",
  // overflowY: "scroll"
});

export const topBox = styled("div")({
  width: "calc(100vw - 76px)",
  height: "100px",
  display: "flex",
  alignItems: "center",
  marginLeft: "38px",
  marginRight: "38px",
  justifyContent: "space-between",
  overflow: "hidden"
});

export const logo = styled("img")({
  width: "180px",
});

export const loginButton = styled("button")({
  width: "164px",
  height: "55px",
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


export const secondPage = styled("div")({
  scrollSnapAlign: "start",
  height: "100vh",
})