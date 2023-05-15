import styled from "@emotion/styled";
import { theme } from "@constant/theme";

type OpenProps = {
  isOpen: boolean;
};

export const weatherbox = styled("div")({
  width: "90%",
  textAlign: "center",
  height: "47.3%",
  overflow: "hidden",

  backgroundColor: "#787E8C33",
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
  min-height: 72px;
  overflow: hidden;
  transition: ${theme.trans};
  display: ${(props) => (props.isOpen ? "flex" : "")};
  & svg {
    width: 33px;
    height: 33px;
    min-width: 33px;
    margin-right: 33px;
  }
  & path {
    fill: ${theme.colors.greyscale.light3}
  } 
`;

export const weatherTextDataBox = styled("div")({
  display: "flex",
  transition: `${theme.trans}`,
  // flexDirection: "column", // 세로로 배열
});

export const weatherText = styled("p")<OpenProps>(
  {
    fontWeight: "bold",
    color: `${theme.colors.greyscale.dark2}`,
    marginLeft: "15px",
    marginRight: "5px",
    marginTop: "10px",
    transition: `${theme.trans}`,
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
    transition: "none",
  },
  (props) => ({
    fontSize: `${props.isOpen ? "20px" : "10px"}`,
  })
);
