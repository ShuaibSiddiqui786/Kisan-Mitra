import { API_CONFIG } from '../config/api';
import { Weather } from '../types';

export const fetchWeatherData = async (lat: number, lon: number): Promise<Weather> => {
  if (!API_CONFIG.WEATHER_API.key) {
    console.warn('Weather API key not found, using fallback data');
    return API_CONFIG.WEATHER_API.fallback;
  }

  try {
    const url = `${API_CONFIG.WEATHER_API.baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${API_CONFIG.WEATHER_API.key}&units=metric`;
    const response = await fetch(url);
    
    if (!response.ok) throw new Error('Weather API request failed');
    
    const data = await response.json();
    
    return {
      temperature: data.main.temp,
      humidity: data.main.humidity,
      rainfall: data.rain?.['1h'] || 0,
      forecast: data.weather[0].description
    };
  } catch (error) {
    console.error('Weather service error:', error);
    return API_CONFIG.WEATHER_API.fallback;
  }
};