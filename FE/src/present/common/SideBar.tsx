import styled from "@emotion/styled";
import { theme } from "@constant/theme";

type heightProps = {
  height: string;
};

export const SideBar = styled("div")<heightProps>(
  {
    background: `${theme.colors.greyscale.dark1}`,
    color: `${theme.colors.greyscale.light2}`,
    width: "100px",
    height: '100vh',
    position: "absolute",
    left: "0px",
    top: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: `${theme.trans}`,
  },
  {
    "&:hover": {
      width: "400px",
      borderRadius: "0px 50px 50px 0px",
    },
  }
);
