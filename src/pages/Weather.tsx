import React from 'react';
import { useGeolocation } from '../hooks/useGeolocation';
import { useWeather } from '../hooks/useWeather';
import WeatherCard from '../components/WeatherCard';
import { MapPin } from 'lucide-react';

const Weather: React.FC = () => {
  const { location, loading: locationLoading, error: locationError } = useGeolocation();
  const { weather, loading: weatherLoading, error: weatherError } = useWeather(location);

  if (locationLoading || weatherLoading) {
    return <div className="text-center">Loading weather information...</div>;
  }

  if (locationError || weatherError) {
    return <div className="text-center text-red-500">Error loading weather data</div>;
  }

  if (!location || !weather) {
    return <div className="text-center">No weather data available</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="text-green-600" />
        <h2 className="text-xl font-semibold">Weather for {location.district}, {location.state}</h2>
      </div>
      
      <WeatherCard weather={weather} />
      
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">Crop Recommendations</h3>
        <p className="text-gray-700">
          Based on current weather conditions, consider planting:
          {weather.temperature > 25 ? ' Rice, Cotton' : ' Wheat, Vegetables'}
        </p>
      </div>
    </div>
  );
};

export default Weather;