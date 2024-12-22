import React from 'react';
import { Cloud, Droplets, Thermometer, Umbrella } from 'lucide-react';
import { Weather } from '../types';

interface WeatherCardProps {
  weather: Weather;
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Thermometer className="text-red-500" />
          <div>
            <p className="text-sm text-gray-600">Temperature</p>
            <p className="font-semibold">{weather.temperature}°C</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Droplets className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-600">Humidity</p>
            <p className="font-semibold">{weather.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Umbrella className="text-purple-500" />
          <div>
            <p className="text-sm text-gray-600">Rainfall</p>
            <p className="font-semibold">{weather.rainfall}mm</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Cloud className="text-gray-500" />
          <div>
            <p className="text-sm text-gray-600">Forecast</p>
            <p className="font-semibold">{weather.forecast}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;