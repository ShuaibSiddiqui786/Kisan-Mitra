import { useState, useEffect } from 'react';
import { Weather, Location } from '../types';

export const useWeather = (location: Location | null) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      try {
        // In production, make an API call to get weather data
        // Simulated weather data for now
        setWeather({
          temperature: 25,
          humidity: 65,
          rainfall: 0,
          forecast: 'Partly cloudy'
        });
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  return { weather, loading, error };
};