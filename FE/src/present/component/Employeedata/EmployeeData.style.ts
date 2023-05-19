import styled from "@emotion/styled";
import { theme } from "@constant/theme";
import { wrap } from "module";

interface DataProps {
  selected: boolean;
}

export const DataBox = styled("div")<DataProps>(
  {
    width: "97%",
    display: "flex",
    cursor: "pointer",
    paddingTop: "1%",
    marginLeft: "1.5%",
    paddingBottom: "1%",
    marginBottom: "1.5%",
    fontSize: "1vw",
    borderRadius: "12px",
    userSelect: "none",
  },
  (props) => ({
    background: `${
      props.selected
        ? theme.colors.point.pointLight
        : theme.colors.greyscale.light3
    }`,
    color: `${
      props.selected
        ? theme.colors.greyscale.light3
        : theme.colors.greyscale.dark1
    }`,
  })
);


export const Number = styled("div")({
  width: "26%",
  overflow: "hidden",
});

export const Name = styled("div")({
  width: "22%",
  overflow: "hidden",
});

export const Job = styled("div")({
  width: "22%",
  overflow: "hidden",
});

export const Phone = styled("div")({
  width: "22%",
  overflow: "hidden",
});
