import { weatherGetAsync } from "../api/weatherApi";

export const GetWeather = async (lat: number, lng: number) => {
  const response = await weatherGetAsync(
    `?lat=${lat}&lon=${lng}&appid=d32f160f0bf1b0fcb75582e3190eaffc`
  );

  return response;
};
