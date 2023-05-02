import { weatherGetAsync } from "../api/weatherApi";

const getWeather = async (lat: number, lng: number) => {
  const response = await weatherGetAsync(
    `?lat=${lat}&lon=${lng}&appid=c919542b81021ffba5f90695b75da25c`
  );
  
  return response.result;
};

export default getWeather;
