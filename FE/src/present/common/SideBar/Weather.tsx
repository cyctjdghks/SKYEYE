import { useEffect, useState } from "react";
import getWeather from "@action/hooks/getWeather";
import * as style from "@common/SideBar/Weather.style";

const Weather = () => {
  const [lat, setLat] = useState<number>(36.110336);
  const [lng, setLng] = useState<number>(128.4112384);
  const [weatherInfo, setWeatherInfo] = useState<object>({});

  const getPosition = () => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  };

  useEffect(() => {
    getPosition();
    // setWeatherInfo(getWeather(lat, lng));
  }, []);
  // console.log(weatherInfo);
  console.log(lat, lng);

  return <style.Wrapper></style.Wrapper>;
};

export default Weather;
