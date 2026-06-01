import React from "react";
import "./../styles/App.css";
import Weather from "./Weather";

import { useState, useEffect } from "react";

const App = () => {
  const API_KEY = "b0a10253368799355d01524e2d58072e";

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = () => {
    if (!query.trim()) return;

    setError("");
    setWeather(null);

     fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
    )
    .then((res) => {
      if(!res.ok) throw new Error("Couldn't found!");
      //console.log(res)
      return res.json()
    })
    .then((data) => {
      setWeather(data)
    })
    .catch((err) => {
      setError(err.message)
    });
  };
 console.log("Weather from API", weather)
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Enter a city"
        value={query}
        onChange={(e) => setQuery(e.target.value)} //query = "London"
        onKeyDown={(e) => {
          if (e.key === "Enter") fetchWeather();
        }}
      />
      {error && <p className="error" style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {weather && <Weather data={weather} />}
    </div>
  );
};

export default App;
