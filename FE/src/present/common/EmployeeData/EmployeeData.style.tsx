import styled from "@emotion/styled";
import { theme } from "@constant/theme";

interface DataProps {
  selected: boolean;
}

export const dataBox = styled("div")<DataProps>(
  {
    width: "97%",
    margin: "auto",
    display: "flex",
    cursor: "pointer",
    paddingTop: "1%",
    paddingBottom: "1%",
    marginTop: "1.5%",
    marginBottom: "1%",
    fontSize: "1vw",
    borderRadius: "12px",
    userSelect: "none",
  },
  (props) => ({
    background: `${
      props.selected
        ? theme.colors.greyscale.pointLight
        : theme.colors.greyscale.light3
    }`,
    color: `${
      props.selected
        ? theme.colors.greyscale.light3
        : theme.colors.greyscale.dark1
    }`,
  })
);

export const no = styled("div")({
  width: "8%",
});

export const number = styled("div")({
  width: "26%",
});

export const name = styled("div")({
  width: "22%",
});

export const job = styled("div")({
  width: "22%",
});

export const phone = styled("div")({
  width: "22%",
});
