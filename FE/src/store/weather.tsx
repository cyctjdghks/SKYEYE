import { atom } from "recoil";

interface weather {
  temp: number;
  main: string;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windDeg: number;
  sunrise: number;
  sunset: number;
}

export const weatherState = atom<weather>({
  key: "weatherState",
  default: {
    temp: 273.15,
    main: "Sunny",
    humidity: 0,
    pressure: 0,
    windSpeed: 0,
    windDeg: 0,
    sunrise: 0,
    sunset: 0,
  },
});
