import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) return <p>No data available</p>;

  const { location, current } = weather;
  const { temp_c, humidity, condition, icon } = current;

 

  return (

    
    <div className="weather-card" >

      <div className="card-content">
        <h2 className="city-name">{location.name}, {location.country}</h2>
        <img
          className="weather-icon"
          src={weather.icon}
          alt={condition.text}
        />
        <p className="weather-condition">{condition.text}</p>
        <div className="weather-details">
          <p>Temperature: {temp_c}°C</p>
          <p>Humidity: {humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
