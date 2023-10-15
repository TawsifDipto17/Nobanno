
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.css'

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = '25446c1d53e44b73ae0160606231009';
    const location = 'Dhaka';

    axios
      .get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
    <div>
      {weatherData ? (
        <>
          <h2 className='weather-location'>{weatherData.location.name}, {weatherData.location.country}</h2>
          <p >তাপমাত্রা: <span className='weather-temperature'>{weatherData.current.temp_c}°C</span></p>
          <p> জলীয়বাষ্প: <span className='weather-humidity'>{weatherData.current.humidity}%</span></p>
          আবহাওয়া: 
          <div className="cond">
          <p className='weather-conditions'>{weatherData.current.condition.text}</p>
           <img className='wicon' src={weatherData.current.condition.icon} alt="icon" />  
           </div>
           <p >বাতাসের বেগ(kph): <span className='weather-wind'>{weatherData.current.wind_kph}</span></p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
