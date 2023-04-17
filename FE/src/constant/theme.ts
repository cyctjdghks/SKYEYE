const colors = {
    main: {
      pink: "#f9afc7",
      red: "#f47676",
      yellow: "#ffcc66",
      skyblue: "#54bddd",
      blue: "#4340b5",
      purple: {
        light_1: "#EBEBFF",
        dark_1: "#9494E0",
        dark_2: "#6565D8",
        dark_3: "#4340B5",
        dark_4: "#4242CE",
      },
      grey: "#ABAFC4",
    },
    character: {
      spicy: "#FF7473",
      sweet: "#FFC952",
      salty: "#47B8E0",
      oily: "#ABAFC4",
      etc:"#71D171"
    },
    characterLevel: {
      spicy: {
        level_1: "#ABAFC4",
        level_2: "#C7959E",
        level_3: "#E37C79",
        level_4: "#E05D60",
        level_5: "#DC3C47",
      },
      sweet: {
        level_1: "#ABAFC4",
        level_2: "#D6BE94",
        level_3: "#FFCC66",
        level_4: "#FFBB4C",
        level_5: "#FFAA33",
      },
      salty: {
        level_1: "#ABAFC4",
        level_2: "#77B4D2",
        level_3: "#47B8E0",
        level_4: "#3E9CE0",
        level_5: "#3681E0",
      },
      oily: {
        level_1: "#ABAFC4",
        level_2: "#b4b4b4",
        level_3: "#767676",
        level_4: "#3b3b3b",
        level_5: "#242424",
      },
    },
  
    mono: {
      light_1: "#ffffff",
      light_2: "#b4b4b4",
      light_3: "#767676",
      dark_0: "#D1D5E0",
      dark_1: "#3b3b3b",
      dark_2: "#33314a",
      dark_3: "#34314C",
    },
    background: {
      pink: "#FFF3F5",
      violet: "#EBEBFF",
      gray: "#E8EAEF",
    },
  };
  
  const trans = "all 0.2s ease-out";
  
  const devices = {
    mobile: `@media only screen and (max-width: 426px)`,
    tablet: `@media only screen and (max-width: 1000px)`,
    desktop: `@media only screen and (max-width: 2000px)`,
  };
  
  export const theme = {
    colors,
    devices,
    trans
  };
  
  