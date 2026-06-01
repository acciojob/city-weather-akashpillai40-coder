import React from "react";

const Weather = ({ data }) => {
  const icon =
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="weather">
      <h2>{data.name}, {data.sys.country}</h2>
      <img src={icon} alt={data.weather[0].description} />
      <p>{Math.round(data.main.temp)}°C</p>
      <p>{data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;