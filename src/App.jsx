  import { useState } from "react";
  import "./App.css";
  function App() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const getWeather = async () => {
      const api_key = import.meta.env.VITE_API_KEY;

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
      );
      const data = await response.json();
      setWeather(data);
    };
    return (
      <div className="app">
        <h1>Weather App</h1>
        <input type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />


        <button onClick={getWeather}>Search</button>


        {weather && (
          <div className="weather-card">
            <h2>{weather.name}</h2>
            <h3>{weather.main.temp}°C</h3>
            <p>{weather.weather[0].main}</p>

            <p>Humidity : {weather.main.humidity}%</p>
            <p>Wind : {weather.wind.speed} km/h</p>
          </div>
        )}


      </div>

    );
  }
  export default App;