import React, { useState } from 'react';
// import SearchBar from '../components/SearchBar';
// import WeatherCard from '../components/WeatherCard';
// import WeatherCard from '../components/weatherCard';
// import { fetchWeatherData } from '../services/weatherAPI';
import { fetchWeatherData } from '../services/WeatherAPI.js';
// import WeatherCard from '../components/weatherCard';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';

const Home = () => {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    const data = await fetchWeatherData(city);
    setWeather(data);
  };

  return (
    <div className="home">
      <h1>Weather App</h1>
     <SearchBar onSearch={handleSearch}/>
     <WeatherCard weather={weather}/>
    </div>
  );
};

export default Home;
