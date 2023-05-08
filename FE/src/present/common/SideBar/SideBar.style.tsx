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
    --notOpenWidth : 100px;
    --openWidth : 400px;

    background: ${theme.colors.greyscale.dark1};
    color: ${theme.colors.greyscale.light2};
    height: 100vh;
    width: ${props => props.isOpen ? "var(--openWidth)" : "var(--notOpenWidth)"};
    position: absolute;
    left: 0px;
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: ${theme.trans};
    border-radius: ${props => props.isOpen ? "0px 50px 50px 0px" : "0px"};
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
    top: "100px",
    right: "-16px",
    transition: `${theme.trans}`,
  },
  (props) => ({})
);

export const ProfileBox = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  margin-left: 50px;
  align-items: center;

  & svg {
    width: 50px;
    min-width: 50px;
    height: 50px;
    margin-right: 30px;
    fill: ${theme.colors.greyscale.light3};
    transition: ${theme.trans};
  }
`;

export const ProfileText1 = styled("h1")<OpenProps>(
  {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "100%",
    whiteSpace: "nowrap",
    marginRight: "5px",
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
    fontSize: "16px",
    lineHeight: "100%",
    whiteSpace: "nowrap",
    color: `${theme.colors.greyscale.dark2}`,
    transition: "all 0.3s ease",
  },
  (props) => ({
    opacity: `${props.isOpen ? "1" : "0"}`,
  })
);

export const Body = styled("div")({
  width: "100%",
  height: "50%",
});

export const BodyContent = styled("div")({
  width: "87.5%",
  height: "70px",
  display: "flex",
  marginLeft: "33px",
  alignItems: "center",
  cursor: "pointer",
});

export const SideBarText = styled("h1")<OpenProps>(
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
    opacity: `${props.isOpen ? "1" : "0"}`,
  })
);

export const Drone = styled("div")({
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
  width: 87.5%;
  height: 70px;
  display: flex;
  margin-left: 33px;
  align-items: center;
  cursor: pointer;
  color: ${(props) =>
    props.selected
      ? theme.colors.greyscale.light3
      : theme.colors.greyscale.dark2};
  background: ${(props) =>
    props.selected ? theme.colors.greyscale.dark2 : "none"};

  & svg {
    width: 33px;
    height: 33px;
    min-width: 33px;
    margin-right: 33px;
    transition: ${theme.trans};
  }

  & path {
    fill: ${(props) =>
      props.selected
        ? theme.colors.greyscale.light3
        : theme.colors.greyscale.dark2};
  }
`;
