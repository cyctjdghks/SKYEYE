const colors = {
  greyscale: {
    dark1: "#343843",
    dark2: "#787E8C",
    dark3: "#B2B5BE",
    light1: "#D9DDE8",
    light2: "#F8F9FD",
    light3: "#FFFFFF",
    point: "#0758B1",
    pointLight: "#75ACE8",
    pointLight2: "#96c2f2",
  },
};

const trans = "all 0.2s ease";

const shadows = {
  shadow1: "0px 1px 2px rgba(52, 87, 140, 0.14);",
  shadow2: "0px 4px 8px rgba(52, 87, 140, 0.12);",
  shadow3: "0px 8px 12px rgba(52, 87, 140, 0.12);",
  shadow4: "0px 12px 24px rgba(52, 87, 140, 0.12);",
  shadow5: "0px 24px 36px rgba(52, 87, 140, 0.12);",
  shadow6: "0px 36px 48px rgba(52, 87, 140, 0.2);",
}


const devices = {
  mobile: `@media only screen and (max-width: 426px)`,
  tablet: `@media only screen and (max-width: 1000px)`,
  desktop: `@media only screen and (max-width: 2000px)`,
};

export const theme = {
  colors,
  shadows,
  devices,
  trans,
};
