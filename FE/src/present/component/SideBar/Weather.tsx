import * as style from "./Weather.style";
import { GetWeather } from "@action/hooks/GetWeather";
import { useState, useEffect } from "react";

import { ReactComponent as SunnyIcon } from "@assets/sidebar/weather/sunny.svg";
import { ReactComponent as CloudIcon } from "@assets/sidebar/weather/cloud.svg";
import { ReactComponent as SnowIcon } from "@assets/sidebar/weather/snow.svg";
import { ReactComponent as RainIcon } from "@assets/sidebar/weather/rain.svg";
import { ReactComponent as MistIcon } from "@assets/sidebar/weather/mist.svg";
import { ReactComponent as ThnderStormIcon } from "@assets/sidebar/weather/thunderstorm.svg";
import { ReactComponent as WindIcon } from "@assets/sidebar/weather/wind.svg";
import { ReactComponent as ThermostatIcon } from "@assets/sidebar/weather/thermostat.svg";
import { ReactComponent as SunriseIcon } from "@assets/sidebar/weather/sunrise.svg";
import { ReactComponent as NightIcon } from "@assets/sidebar/weather/night.svg";

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
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(degree / 45) % 8;
    return directions[index];
  };


  const setMainIcon = () => {
    if (main === "Clear") {
      return <SunnyIcon />;
    } else if (main === "Rain") {
      return <RainIcon />;
    } else if (main === "Snow") {
      return <SnowIcon />;
    } else if (main === "Clouds") {
      return <CloudIcon />;
    } else if (main === "Drizzle") {
      return <RainIcon />;
    } else if (main === "ThunderStorm") {
      return <ThnderStormIcon />;
    } else {
      return <MistIcon />;
    }
  };
  // weather 설정
  const weather = [
    {
      image: setMainIcon(),
      weatherText: "온도",
      weatherData: `${celsiusTemp}°C`,
      weatherData2: "",
    },
    {
      image: <ThermostatIcon />,
      weatherText: "습도/기압",
      weatherData: `${humidity}%`,
      weatherData2: `${pressure}hPa`,
    },
    {
      image: <WindIcon />,
      weatherText: "풍속",
      weatherData: `${windSpeed}m/s`,
      weatherData2: getWindDirection(windDeg),
    },
    {
      image: <SunriseIcon />,
      weatherText: "일출",
      weatherData: new Date(sunrise * 1000).toLocaleTimeString(),
      weatherData2: "",
    },
    {
      image: <NightIcon />,
      weatherText: "일몰",
      weatherData: new Date(sunset * 1000).toLocaleTimeString(),
      weatherData2: "",
    },
  ];

  useEffect(() =>{
    logWeather()
  }, [])

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
