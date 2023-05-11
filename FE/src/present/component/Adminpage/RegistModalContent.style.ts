import styled from "@emotion/styled";
import { theme } from "@constant/theme";

export const ModalBox = styled("div")({
  width: "90%",
  margin: "auto",
  height: "90%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const ModalTitle = styled("h1")({
  textAlign: "center",
  color: `${theme.colors.point.point}`,
  fontSize: "2.5vw",
  marginTop: "3.5vw",
  marginBottom: "2.5vw"
});

export const ContentBox = styled("div")({
  width: "100%",
  display: "flex",
});

export const ProfileBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  // overflow: "hidden",
  justifyContent: "center",
  position: "relative",
  alignItems: "center",
});

export const ProfileImage = styled.div<{ image: string }>`
  width: 15vw;
  height: 20vw;
  border-radius: 8px;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.image});
`;

export const SaveLabel = styled("label")({
  position: "absolute",
  bottom: "-13%",
  cursor: "pointer",
  fontSize: "1.1vw",
});
export const SaveInput = styled("input")({
  display: "none",
});

export const DataBox = styled("div")({
  width: "50%",
  height: "35vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-end",
});

export const ProfileTitle = styled("h3")({
  color: `${theme.colors.greyscale.dark2}`,
});

export const ButtonBox = styled("div")({
  display: "flex",
  float: "right",
  width: "50%",
});

export const DeleteButton = styled("button")({
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
    background: `${theme.colors.point.pointLight}`,
    border: `1px solid ${theme.colors.point.pointLight}`,
  },
  marginTop: "20%",
});

export const SubmitButton = styled("div")({
  marginTop: "5vh",
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "3.5vw"
});

export const LogoText = styled("h2")({
  color: `${theme.colors.greyscale.light3}`,
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "1.1vw",
});

export const UnderButton = styled("div")({
  width: "100%",
  marginTop: "6vh",
  height: "6vh",
  display: "flex",
  justifyContent: "flex-end",
});

