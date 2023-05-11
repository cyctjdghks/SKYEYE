import styled from "@emotion/styled";
import { theme } from "@constant/theme";
import { disconnect } from "process";

export const LoginModalWrap = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const ModalTitle = styled("h1")({
  textAlign: "center",
  color: `${theme.colors.point.point}`,
  fontSize: "50px",
  marginBottom: "7%",
  display: "flex",
  "@media only screen and (max-width: 1024px)": {
    fontSize: "40px",
  },
  "@media only screen and (max-width: 768px)": {
    fontSize: "30px",
  },
});

export const LoginForm = styled.form`
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonBox = styled.div`
  width: 85%;
  display: flex;
  /* margin-right: 5% */
  justify-content: flex-end;
  
`;

export const LoginButton = styled("button")({
  padding: "10px 20px",
  border: "none",
  backgroundColor: `${theme.colors.point.point}`,
  borderRadius: "10px",
  color: `${theme.colors.greyscale.light3}`,
  fontWeight: "200",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: `${theme.colors.point.pointLight}`,
  },
  
});
