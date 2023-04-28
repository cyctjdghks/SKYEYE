import styled from "@emotion/styled";
import { theme } from "@constant/theme";
import main01 from "@assets/main/main01.png"
import main03 from "@assets/main/main03.jpg"

type HiddenProps = {
  hidden: boolean;
};

type ColorProps = {
  color: string;
};

type ImgProps = {
  image: string;
}

export const secondPage = styled("div")({
  width: "100vw",
  height: "100vh",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  position: "relative",
});

export const about = styled("div")({
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "1vw",
  lineHeight: "120%",
  paddingLeft: "7.5vw",
  marginTop: "3vh",
});

export const hrLine = styled("hr")({
  width: "85vw",
  color: `${theme.colors.greyscale.dark1}`,
});

export const pageText = styled("h1")({
  fontSize: "5vw",
  fontStyle: "normal",
  fontWeight: "300",
  lineHeight: "130%",
  margin: "0",
  color: `${theme.colors.greyscale.dark1}`,
  paddingLeft: "7.5vw",
});

export const imgBox = styled("div")({
  width: "85vw",
  height: "70vw",
  maxHeight: "1000px",
  backgroundColor: `${theme.colors.greyscale.light1}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "8px",
  marginLeft: "7.5vw",
  marginBottom: "5vh",
});

export const innerBox = styled("div")({
  marginTop: "0.8%",
  marginLeft: "2.5%",
  width: "95%",
  height: "30%",
  display: "flex",
  justifyContent: "space-around",
});

export const smallBox = styled("div")<HiddenProps>(
  {
    width: "24%",
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

export const boxImg = styled("img")<ImgProps>({
  width: "90%",
  height: "82%",
  borderRadius: "8px",
  marginTop: "8%",
  backgroundPosition: "center",
  backgroundSize: "cover",
},
(props) => ({
  backgroundImage: `url(${props.image})`,
})
);
export const largeBoxImg = styled("img")<ImgProps>({
  width: "90%",
  height: "82%",
  borderRadius: "8px",
  marginTop: "4%",
  backgroundImage: `url(${main03})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
},
(props) => ({
  backgroundImage: `url(${props.image})`,
})
);

export const colorBox = styled("div")<ColorProps>({
  width: "90%",
  height: "82%",
  borderRadius: "8px",
  marginTop: "8%",
},
(props) =>({
   backgroundColor : `${props.color}`
})
);

export const textBox = styled("div")({
  width: "90%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const boxText1 = styled("p")({
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "1vw",
  lineHeight: "120%",
  color: `${theme.colors.greyscale.dark1}`,
});

export const boxText2 = styled("p")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "1vw",
  lineHeight: "120%",
  color: `${theme.colors.greyscale.point}`,
});

export const largeBox = styled("div")({
  width: "49%",
  height: "100%",
  backgroundColor: `${theme.colors.greyscale.light3}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
});
