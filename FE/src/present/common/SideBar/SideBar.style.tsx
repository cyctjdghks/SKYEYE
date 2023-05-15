import styled from "@emotion/styled";
import { theme } from "@constant/theme";

type OpenProps = {
  isOpen: boolean;
};

type SelectProps = {
  selected: boolean;
  isOpen: boolean;
};

export const Wrapper = styled.div<OpenProps>`
  --notOpenWidth: 80px;
  --openWidth: 300px;

  background: ${theme.colors.greyscale.dark1};
  color: ${theme.colors.greyscale.light2};
  height: 100vh;
  width: ${(props) =>
    props.isOpen ? "var(--openWidth)" : "var(--notOpenWidth)"};
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: ${theme.trans};
  border-radius: ${(props) => (props.isOpen ? "0px 25px 25px 0px" : "0px")};
  z-index: 9999;
`;

export const OpenButton = styled("div")<OpenProps>(
  {
    background: `${theme.colors.point.point}`,
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    cursor: "pointer",
    position: "absolute",
    top: "110px",
    right: "-16px",
    transition: `${theme.trans}`,
  },
  (props) => ({})
);

export const ProfileBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  margin-left: 25px;
  align-items: flex-end;

  & svg {
    width: 50px;
    min-width: 50px;
    height: 50px;
    margin-right: 15px;
    fill: ${theme.colors.greyscale.light3};
    transition: ${theme.trans};
  }
`;

export const ProfileText1 = styled("h1")<OpenProps>(
  {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "26px",
    lineHeight: "100%",
    whiteSpace: "nowrap",
    marginRight: "5px",
    marginBottom: "10px",
    color: `${theme.colors.greyscale.light3}`,
    transition: `${theme.trans}`,
  },
  (props) => ({
    opacity: `${props.isOpen ? "1" : "0"}`,
  })
);

export const ProfileText2 = styled("h1")<OpenProps>(
  {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "100%",
    whiteSpace: "nowrap",
    paddingLeft: "10px",
    marginBottom: "10px",
    color: `${theme.colors.greyscale.dark2}`,
    transition: "all 0.3s ease",
  },
  (props) => ({
    opacity: `${props.isOpen ? "1" : "0"}`,
  })
);
export const hrLine = styled.hr`
  width: 90%;
  color: ${theme.colors.greyscale.light3}; 
  margin-bottom: 25px;
  margin-top: 25px;
`

export const Body = styled("div")({
  width: "100%",
  // height: "50%",
});

export const BodyContent = styled("div")({
  width: "87.5%",
  height: "70px",
  display: "flex",
  marginLeft: "25px",
  alignItems: "center",
  cursor: "pointer",
});

export const SideBarText = styled("h1")<SelectProps>(
  {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "100%",
    whiteSpace: "nowrap",
    color: `${theme.colors.greyscale.light3}`,
    transition: `${theme.trans}`,
  },
  (props) => ({
    display: `${props.isOpen ? "" : "none"}`,
    color: `${
      props.selected
        ? theme.colors.greyscale.light3
        : theme.colors.greyscale.dark2
    }`,
  })
);

export const Upload = styled("div")({
  width: "87.5%",
  height: "70px",
});

export const ShowImage = styled("div")({
  width: "87.5%",
  height: "70px",
});

export const FlightInfo = styled("div")({
  width: "87.5%",
  height: "70px",
});

export const MenuItem = styled.div<SelectProps>`
  width: ${(props) => props.isOpen ? "270px" : "40px"};
  height: 70px;
  display: flex;
  margin-left: 5px;
  padding-left: 15px;
  margin-bottom: 10px;
  transition: ${theme.trans};
  padding-right: ${(props) => props.isOpen ? "0px" : "15px"};
  align-items: center;
  border-radius: ${(props) => props.isOpen ? "10px" : "50%"};
  cursor: pointer;
  color: ${(props) =>
    props.selected
      ? theme.colors.greyscale.light3
      : theme.colors.greyscale.dark2};
  background: ${(props) =>
    props.selected ? theme.colors.greyscale.dark2 : "none"};
  
  & svg {
    width: 40px;
    height: 40px;
    min-width: 40px;
    margin-right: 30px;
    transition: ${theme.trans};
  }

  & path {
    fill: ${(props) =>
      props.selected
        ? theme.colors.greyscale.light3
        : theme.colors.greyscale.dark2};
  }
`;

export const weatherBox = styled.div`
  
`
