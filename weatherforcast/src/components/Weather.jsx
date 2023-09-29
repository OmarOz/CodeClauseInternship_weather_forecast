import { useEffect, useState } from "react";
import searchIcon from "../assets/search-solid.svg";
import clear from "../assets/04 Weather App React Assets/Assets/clear.png";
import cloud from "../assets/04 Weather App React Assets/Assets/cloud.png";
import drizzle from "../assets/04 Weather App React Assets/Assets/drizzle.png";
import humidityy from "../assets/04 Weather App React Assets/Assets/humidity.png";
import rain from "../assets/04 Weather App React Assets/Assets/rain.png";
import snow from "../assets/04 Weather App React Assets/Assets/snow.png";
import winds from "../assets/04 Weather App React Assets/Assets/wind.png";
import temperature from "../assets/04 Weather App React Assets/Assets/temperature.png";
import "../style/weather.scss";
import axios from "axios";

const Weather = () => {
  const [name, setName] = useState(null);
  const [temp, setTemp] = useState(null);
  const [icon, setIcon] = useState(null);
  const [humidity, setHumidty] = useState(null);
  const [wind, setWind] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [location, setLocation] = useState("");

  useEffect((e) => {
    async function getDetails() {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=a23207e2b6d8c90e7555fe99ecc99fcd&units=metric"
      );
      console.log(response);
      setName(response.data.name);
      setTemp(response.data.main.temp);
      setHumidty(response.data.main.humidity);
      setPressure(response.data.main.pressure);
      setWind(response.data.wind.speed);

      if (
        response.data.weather[0].icon === "01d" ||
        response.data.weather[0].icon === "01n"
      ) {
        setIcon(clear);
      } else if (
        response.data.weather[0].icon === "02d" ||
        response.data.weather[0].icon === "02n"
      ) {
        setIcon(cloud);
      } else if (
        response.data.weather[0].icon === "03d" ||
        response.data.weather[0].icon === "03n"
      ) {
        setIcon(drizzle);
      } else if (
        response.data.weather[0].icon === "10d" ||
        response.data.weather[0].icon === "10n"
      ) {
        setIcon(rain);
      } else if (
        response.data.weather[0].icon === "13d" ||
        response.data.weather[0].icon === "13n"
      ) {
        setIcon(snow);
      }
    }
    getDetails();
  }, []);

  async function getlocation() {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a23207e2b6d8c90e7555fe99ecc99fcd&units=metric`
    );
    console.log("hello");
    console.log(response);
    setName(response.data.name);
    setTemp(response.data.main.temp);
    setHumidty(response.data.main.humidity);
    setPressure(response.data.main.pressure);
    setWind(response.data.wind.speed);
    if (
      response.data.weather[0].icon === "01d" ||
      response.data.weather[0].icon === "01n"
    ) {
      setIcon(clear);
    } else if (
      response.data.weather[0].icon === "02d" ||
      response.data.weather[0].icon === "02n"
    ) {
      setIcon(cloud);
    } else if (
      response.data.weather[0].icon === "03d" ||
      response.data.weather[0].icon === "03n"
    ) {
      setIcon(drizzle);
    } else if (
      response.data.weather[0].icon === "10d" ||
      response.data.weather[0].icon === "10n"
    ) {
      setIcon(rain);
    } else if (
      response.data.weather[0].icon === "13d" ||
      response.data.weather[0].icon === "13n"
    ) {
      setIcon(snow);
    }
  }

  return (
    <div className="Weather">
      <div className="top">
        <input
          type="text"
          className="city"
          placeholder="search"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className="search" onClick={() => getlocation()}>
          <img src={searchIcon}></img>
        </div>
      </div>
      <div className="weatherImage">
        <img src={icon} />
      </div>
      {name && <div className="location">{name}</div>}

      <div className="bottom-data">
        {temp && (
          <div className="temp">
            <img src={temperature} />
            <div className="text">{temp} C</div>
            <div className="label">Temperature</div>
          </div>
        )}
        <div className="element">
          <img src={humidityy} />
          <div className="data">
            {humidity && <div className="info">{humidity}</div>}
            <div className="label">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={winds} />
          <div className="data">
            {wind && <div className="info">{wind}</div>}
            <div className="label">wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
