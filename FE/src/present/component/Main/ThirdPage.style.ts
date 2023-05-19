import styled from "@emotion/styled";
import { theme } from "@constant/theme";

export const ThirdPage = styled("div")({
  width: "100vw",
  height: "auto",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  position: "relative",
  alignItems: "center",
});

export const bottomBox1 = styled.div`
  width: 85%;
  height: fit-content;
  background-color: ${theme.colors.point.point};
  border-radius: 8px;
  margin-bottom: 3vh;
  margin-top: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const innerBox1 = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const title = styled.p`
  width: 100%;
  font-style: normal;
  font-size: 5vw;
  line-height: 10%;
  color: ${theme.colors.greyscale.light3};

`;

export const HrLine = styled("hr")({
  width: "100%",
  color: `${theme.colors.greyscale.dark1}`,
  marginBottom: "1vw",
});

export const lineBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1vh;
  margin-bottom: 1vh;
  align-items: end;
  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const sHrLineBox = styled.div`
  display: flex;
  margin-bottom: 0.7vh;
  height: fit-content;
`;

export const circle = styled("div")({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: `${theme.colors.greyscale.light3}`,
  marginRight: "1vw",
  marginTop: "1vw",

  "@media(max-width: 1024px)": {
    width: "7px",
    height: "7px",
  },
  "@media(max-width: 768px)": {
    width: "4px",
    height: "4px",
  },
});

export const lineText = styled.div`
  color: ${theme.colors.greyscale.light3};
  min-width: 42vw;
  border-bottom: 1.5px solid ${theme.colors.greyscale.light3};
  margin-top: 0.25vw;
  font-size: 1.5vw;
  height: fit-content;
  min-height: 20px;
  @media (max-width: 1024px) {
    min-width: 70vw;
  }
`;

export const bottomBox2 = styled("div")({
  width: "85vw",
  // height: "20vw",
  maxHeight: "300px",
  backgroundColor: `${theme.colors.point.point}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  borderRadius: "8px",
  marginBottom: "3vh",
  marginTop: "1vh",
});

export const textBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "90%",
});

export const text = styled("p")({
  color: `${theme.colors.greyscale.light2}`,
  fontSize: "1.2vw",
});

export const text2 = styled("p")({
  color: `${theme.colors.greyscale.light2}`,
  fontSize: "1.2vw",
  cursor: "pointer",
});
