import styled from "@emotion/styled";
import { theme } from "@constant/theme";

type OpenProps = {
  isOpen: boolean;
};

export const weatherbox = styled("div")({
  width: "90%",
  textAlign: "center",
  // position: "absolute",
  // top: "40%",
  // backgroundColor: `${theme.colors.greyscale.dark2}`
});

export const innerbox = styled("div")({
  marginLeft: "10px",
});

export const weatherTitle = styled("p")({
  fontSize: "25px",
  fontWeight: "bold",
  color: `${theme.colors.greyscale.dark2}`,
});

export const weatherItem = styled.div<OpenProps>`
  margin-bottom: "10px";
  display: ${(props) => (props.isOpen ? "flex" : "")};
`;

export const weatherTextDataBox = styled("div")({
  display: "flex",
  // flexDirection: "column", // 세로로 배열
});

export const weatherText = styled("p")<OpenProps>(
  {
    fontWeight: "bold",
    color: `${theme.colors.greyscale.dark2}`,
    marginLeft: "15px",
    marginRight: "5px",
    marginTop: "10px",
  },
  (props) => ({
    display: `${props.isOpen ? "" : "none"}`,
    fontSize: `${props.isOpen ? "20px" : "10px"}`,
  })
);

export const weatherData = styled("p")<OpenProps>(
  {
    fontWeight: "bold",
    color: `${theme.colors.greyscale.dark3}`,
    marginTop: "10px",
    order: 2, // isOpen이 false일 때 weatherData를 아래로 이동
  },
  (props) => ({
    fontSize: `${props.isOpen ? "20px" : "10px"}`,
  })
);
