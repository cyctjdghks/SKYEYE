import * as Style from "./Weather.style";
import { GetWeather } from "@action/hooks/GetWeather";
import { useState } from "react";

const Weather = () => {
  const [lat, setLat] = useState<number>(36.110336);
  const [lng, setLng] = useState<number>(128.4112384);

  const [main, setMain] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [pressure, setPressure] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDeg, setWindDeg] = useState("");
  const [sunset, setSunset] = useState<number>(0);
  const [sunrise, setSunrise] = useState<number>(0);

  const getPosition = () => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  };

  const logWeather = () => {
    getPosition();
    GetWeather(lat, lng).then((res) => {
      console.log(res.result);
      setTemp(res.result.main.temp);
      setMain(res.result.weather[0].main);
      setHumidity(res.result.main.humidity);
      setPressure(res.result.main.pressure);
      setWindSpeed(res.result.wind.speed);
      setWindDeg(res.result.wind.deg);
      setSunset(parseInt(res.result.sys.sunset));
      setSunrise(parseInt(res.result.sys.sunrise));
    });


  };

  return (
    <Style.weatherbox>
      <Style.weatherTitle onClick={logWeather}>날씨</Style.weatherTitle>
      <Style.temp>
        온도 {temp} {main}
      </Style.temp>
      <Style.humidity>
        습도/기압 {humidity} {pressure}
      </Style.humidity>
      <Style.wind>
        풍속 {windSpeed} {windDeg}
      </Style.wind>
      <Style.sunrise>일출 {new Date(sunrise * 1000).toLocaleTimeString()}</Style.sunrise>
      <Style.sunset>일몰 {new Date(sunset * 1000).toLocaleTimeString()}</Style.sunset>
    </Style.weatherbox>
  );
};

export default Weather;
