import styled from "@emotion/styled";
import { theme } from "@constant/theme";

export const loginModalWrap = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const loginButton = styled("button")({
  padding: "10px 20px",
  border: "none",
  backgroundColor: `${theme.colors.greyscale.point}`,
  borderRadius: "10px",
  color: `${theme.colors.greyscale.light3}`,
  fontWeight: "200",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: `${theme.colors.greyscale.pointLight}`,
  },
});
