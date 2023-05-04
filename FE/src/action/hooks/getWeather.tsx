import { weatherGetAsync } from "../api/weatherApi";

const getWeather = async (lat: number, lng: number) => {
  const response = await weatherGetAsync(
    `?lat=${lat}&lon=${lng}&appid=d32f160f0bf1b0fcb75582e3190eaffc`
  );

  return response;
};

export default getWeather;
