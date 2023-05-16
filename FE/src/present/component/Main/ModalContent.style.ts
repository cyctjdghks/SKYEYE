import styled from "@emotion/styled";
import { theme } from "@constant/theme";
import { disconnect } from "process";

export const LoginModalWrap = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly"
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
  width: 100%;
  /* height: 50%; */
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
  margin-top: 2%;
`;

export const KaoKoButtonBox = styled.button`
  width: 68%;
  background: #f9e000;
  border: 1px solid #f9e000;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1vh;
  box-shadow: ${theme.shadows.shadow2};

  &:hover {
    background: ${theme.colors.point.pointLight};
    border: 1px solid ${theme.colors.point.pointLight};
  }

  & svg {
    width: 37px;
    height: 37px;
    min-width: 37px;
  }
`;
export const GoogleButtonBox = styled.button`
  width: 68%;
  background: ${theme.colors.greyscale.light2};
  border: 1px solid ${theme.colors.greyscale.light1};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1vh;
  box-shadow: ${theme.shadows.shadow2};

  &:hover {
    background: ${theme.colors.point.pointLight};
    border: 1px solid ${theme.colors.point.pointLight};
  }
  & svg {
    width: 33px;
    height: 33px;
    min-width: 33px;
  }
`;

export const ButtonText = styled("h1")({
  color: `${theme.colors.greyscale.dark1}`,
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "1vw",
});

export const signup = styled("p")({
  cursor: "pointer",
  // marginTop: "3%"
});

// export const LoginButton = styled("button")({
//   padding: "10px 20px",
//   border: "none",
//   backgroundColor: `${theme.colors.point.point}`,
//   borderRadius: "10px",
//   color: `${theme.colors.greyscale.light3}`,
//   fontWeight: "200",
//   cursor: "pointer",
//   "&:hover": {
//     backgroundColor: `${theme.colors.point.pointLight}`,
//   },

// });
