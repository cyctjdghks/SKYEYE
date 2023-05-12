import * as style from "./Weather.style";
import { GetWeather } from "@action/hooks/GetWeather";
import { useState } from "react";

import { ReactComponent as VideoIcon } from "@assets/sidebar/video.svg";

type WeatherProps = {
  isOpen: boolean;
};

const Weather = ({ isOpen }: WeatherProps) => {
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

  // 섭씨 온도로 변환
  const celsius = (temperature) => {
    const celsiusTemp = temperature - 273.15; // 섭씨 변환 공식: 절대 온도 - 273.15
    return celsiusTemp.toFixed(1); // 소수점 한 자리까지 반올림
  };

  const celsiusTemp = celsius(temp);

  // windDeg를 방향으로 변환
  const getWindDirection = (degree) => {
    const directions = [
      "N",
      "NE",
      "E",
      "SE",
      "S",
      "SW",
      "W",
      "NW",
    ];
    const index = Math.round(degree / 45) % 8;
    return directions[index];
  };

  // weather 설정
  const weather = [
    {
      image: <VideoIcon />,
      weatherText: "온도",
      weatherData: `${celsiusTemp}°C`,
      weatherData2: "",
    },
    {
      image: <VideoIcon />,
      weatherText: "습도/기압",
      weatherData: `${humidity}%`,
      weatherData2: `${pressure}hPa`,
    },
    {
      image: <VideoIcon />,
      weatherText: "풍속",
      weatherData: `${windSpeed}m/s`,
      weatherData2: getWindDirection(windDeg),
    },
    {
      image: <VideoIcon />,
      weatherText: "일출",
      weatherData: new Date(sunrise * 1000).toLocaleTimeString(),
      weatherData2: "",
    },
    {
      image: <VideoIcon />,
      weatherText: "일몰",
      weatherData: new Date(sunset * 1000).toLocaleTimeString(),
      weatherData2: "",
    },
  ];

  const weatherItem = weather.map((elem, idx) => {
    return (
      <style.weatherItem key={idx} isOpen={isOpen}>
        {elem.image}
        <style.weatherTextDataBox>
          <style.weatherText isOpen={isOpen}>
            {elem.weatherText}
          </style.weatherText>
          <style.weatherData isOpen={isOpen}>
            {elem.weatherData} {elem.weatherData2}
          </style.weatherData>
        </style.weatherTextDataBox>
      </style.weatherItem>
    );
  });

  return (
    <style.weatherbox>
      <style.innerbox>
        <style.weatherTitle onClick={logWeather}>날씨</style.weatherTitle>
        {weatherItem}
      </style.innerbox>
    </style.weatherbox>
  );
};

export default Weather;
