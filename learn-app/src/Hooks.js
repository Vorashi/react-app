import './Hooks.css'; 
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Hooks = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { city } = useParams();

  const KEY = 'f8443b4fe64b06850ccb6081ddb26a7c';
  const URL = `https://api.openweathermap.org/data/2.5/weather`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(URL, {
          params: {
            q: city || 'Moscow', 
            appid: KEY,
            units: 'metric', 
            lang: 'ru', 
          },
        });
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, URL]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="weather-container">
    <h1>Погода в городе {data.name}</h1>
    <div className="weather-info">
      <p>
        <strong>Температура:</strong> {data.main.temp} °C
      </p>
      <p>
        <strong>Ощущается как:</strong> {data.main.feels_like} °C
      </p>
      <p>
        <strong>Погода:</strong> {data.weather[0].description}
      </p>
      <p>
        <strong>Влажность:</strong> {data.main.humidity}%
      </p>
      <p>
        <strong>Ветер:</strong> {data.wind.speed} м/с
      </p>
    </div>
  </div>
  );
};

export default Hooks;