import styled from "@emotion/styled";
import { theme } from "@constant/theme";
import main01 from "@assets/main/main01.png";
import main03 from "@assets/main/main03.jpg";

type HiddenProps = {
  hidden: boolean;
};

type ColorProps = {
  color: string;
};

type ImgProps = {
  image: string;
};

export const SecondPage = styled("div")({
  width: "100vw",
  // height: "100vh",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  position: "relative",
});

export const About = styled("div")({
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "1.5vw",
  lineHeight: "120%",
  paddingLeft: "7.5vw",
  marginTop: "3vh",
});

export const HrLine = styled("hr")({
  width: "85vw",
  color: `${theme.colors.greyscale.dark1}`,
});

export const PageText = styled("h1")({
  fontSize: "4.7vw",
  fontStyle: "normal",
  fontWeight: "300",
  lineHeight: "130%",
  margin: "0",
  color: `${theme.colors.greyscale.dark1}`,
  paddingLeft: "7.5vw",
});

export const ImgBox = styled("div")({
  width: "85vw",
  height: "70vw",
  // minHeight: "700px",
  backgroundColor: `${theme.colors.greyscale.light1}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  borderRadius: "8px",
  marginLeft: "7.5vw",
  marginBottom: "3vh",
  marginTop: "2vh",
});

export const InnerBox = styled("div")({
  // marginLeft: "2.5%",
  width: "100%",
  height: "30.5%",
  display: "flex",
  justifyContent: "space-evenly",
});

export const SmallBox = styled("div")<HiddenProps>(
  {
    width: "23%",
    height: "100%",
    backgroundColor: `${theme.colors.greyscale.light3}`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "8px",
  },
  (props) => ({
    visibility: `${props.hidden ? "visible" : "hidden"}`,
  })
);

export const BoxImg = styled("img")<ImgProps>(
  {
    width: "90%",
    height: "82%",
    borderRadius: "8px",
    marginTop: "5%",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  (props) => ({
    backgroundImage: `url(${props.image})`,
  })
);

export const LargeBoxImg = styled("img")<ImgProps>(
  {
    width: "95%",
    height: "82%",
    borderRadius: "8px",
    marginTop: "2.5%",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  (props) => ({
    backgroundImage: `url(${props.image})`,
  })
);

export const ColorBox = styled("div")<ColorProps>(
  {
    width: "90%",
    height: "82%",
    borderRadius: "8px",
    marginTop: "5%",
  },
  (props) => ({
    backgroundColor: `${props.color}`,
  })
);

export const TextBox = styled("div")({
  width: "90%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const BoxText1 = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 1vw;
  line-height: 120%;
  color: ${theme.colors.greyscale.dark1};
  @media(max-width: 500px){
    display: none;
  }
`;

export const BoxText2 = styled("p")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "1vw",
  lineHeight: "120%",
  color: `${theme.colors.point.point}`,
});

export const LargeBox = styled("div")({
  width: "47.6%",
  height: "100%",
  backgroundColor: `${theme.colors.greyscale.light3}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
});
