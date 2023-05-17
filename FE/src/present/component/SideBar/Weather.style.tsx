import styled from "@emotion/styled";
import { theme } from "@constant/theme";

type OpenProps = {
  isOpen: boolean;
};

export const weatherbox = styled.div`
  width: 85%;
  text-align: center;
  overflow: hidden;
  background-color: #787e8c33;
  border-radius: 15px;
`;

export const innerbox = styled.div`
  margin-left: 0;
`;

export const weatherTitle = styled("p")({
  fontSize: "15px",
  fontWeight: "bold",
  color: `${theme.colors.greyscale.dark2}`,
});

export const weatherItem = styled.div<OpenProps>`
  margin-left: 15px;
  margin-bottom: 5px;
  min-height: 50px;
  transition: ${theme.trans};
  align-items: center;
  display: ${(props) => (props.isOpen ? "flex" : "")};
  & svg {
    width: 33px;
    height: 33px;
    min-width: 33px;
    margin-right: 10px;
  }
  & path {
    fill: ${theme.colors.greyscale.light3};
  }
`;

export const weatherTextDataBox = styled("div")({
  display: "flex",
  transition: `${theme.trans}`,
});

export const weatherText = styled.p<OpenProps>`
  font-weight: bold;
  color: ${theme.colors.greyscale.dark2};
  transition: ${theme.trans};
  margin: 0;
  margin-right: 3px;
  display: ${(props) => (props.isOpen ? "" : "none")};
  font-size: ${(props) => (props.isOpen ? "15px" : "10px")};
`;

export const weatherData = styled.p<OpenProps>`
  font-weight: bold;
  color: ${theme.colors.greyscale.dark3};
  transition: none;
  margin: 0;
  font-size: ${(props) => (props.isOpen ? "15px" : "10px")};
  margin-left: ${(props) => (props.isOpen ? "0" : "-15px")};
`;
