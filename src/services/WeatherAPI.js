import axios from 'axios';

const API_KEY = '2ab48c3159bf4f22846113219240506';
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: city,
        aqi: 'no', // Optional: Disable air quality data if not needed
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};
