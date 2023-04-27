import styled from "@emotion/styled";
import { theme } from "@constant/theme";

export const modalBox = styled("div")({
  width: "70%",
  margin: "auto",
});

export const modalTitle = styled("h1")({
  textAlign: "center",
  color: `${theme.colors.greyscale.point}`,
  fontSize: "1.2vw",
});

export const contentBox = styled("form")({
  width: "100%",
  display: "flex",
});

export const profileBox = styled("div")({
  width: "50%",
});

export const dataBox = styled("div")({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "right"
});

export const profileTitle = styled("h3")({
  color: `${theme.colors.greyscale.dark2}`,
});

export const inputBox1 = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start"
});

export const inputBox2 = styled("div")({
  width: "100%",
  display: "flex",
});

export const buttonBox = styled("div")({
  display: "flex",
  float: "right"
});

export const deleteButton = styled("button")({
  width: "60%",
  height: "55px",
  background: `${theme.colors.greyscale.dark3}`,
  border: `1px solid ${theme.colors.greyscale.dark3}`,
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


export const eidtButton = styled("button")({
  width: "60%",
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

export const logoText = styled("h2")({
  color: `${theme.colors.greyscale.light3}`,
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "20px",
});
