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
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-end"
});

export const profileTitle = styled("h3")({
  color: `${theme.colors.greyscale.dark2}`,
});


export const inputBox = styled("div")({
  display: "flex",
  width: "90%",
  justifyContent: "space-around",
  marginLeft: "5%"
})

export const buttonBox = styled("div")({
  display: "flex",
  float: "right",
  width: "50%"
});

export const deleteButton = styled("button")({
  width: "50%",
  height: "50px",
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
  marginTop: "20%"
});


export const eidtButton = styled("button")({
  width: "50%",
  height: "50px",
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
  marginLeft: "5%",
  marginTop: "20%"
});

export const logoText = styled("h2")({
  color: `${theme.colors.greyscale.light3}`,
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "1.1vw",
});
