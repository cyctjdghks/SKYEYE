import styled from "@emotion/styled";
import { theme } from "@constant/theme";

export const MainWrapper = styled("div")({
  width: "100%",
  overflowX: "hidden",
  userSelect: "none",
});

export const TopBox = styled("div")({
  width: "calc(100vw - 76px)",
  height: "100px",
  display: "flex",
  alignItems: "center",
  marginLeft: "38px",
  marginRight: "38px",
  justifyContent: "space-between",
  overflow: "hidden",
});

export const Logo = styled("img")({
  width: "180px",
});

export const LoginButton = styled("button")({
  maxWidth: "164px",
  width: "20vw",
  height: "55px",
  background: `${theme.colors.point.point}`,
  border: `1px solid ${theme.colors.point.point}`,
  borderRadius: "8px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  "&:hover": {
    background: `${theme.colors.point.pointLight}`,
    border: `1px solid ${theme.colors.point.pointLight}`,
  },
});

export const LogoText = styled("h1")({
  color: `${theme.colors.greyscale.light3}`,
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "20px",
  "@media only screen and (max-width: 1024px)": {
    fontSize: "17px",
  },
  "@media only screen and (max-width: 768px)": {
    fontSize: "14px",
  },
});

export const LogoRight = styled("img")({
  width: "15px",
  "@media only screen and (max-width: 1024px)": {
    width: "12px"
  },
  "@media only screen and (max-width: 768px)": {
    width: "9px"
  },
});
