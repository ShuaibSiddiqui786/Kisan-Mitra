import { API_FALLBACKS } from './constants';

export const API_CONFIG = {
  WEATHER_API: {
    key: import.meta.env.VITE_WEATHER_API_KEY || '',
    baseUrl: 'https://api.openweathermap.org/data/2.5',
    fallback: API_FALLBACKS.WEATHER
  },
  GEOCODING_API: {
    key: import.meta.env.VITE_GEOCODING_API_KEY || '',
    baseUrl: 'https://maps.googleapis.com/maps/api/geocode',
    fallback: API_FALLBACKS.LOCATION
  },
  TRANSLATION_API: {
    key: import.meta.env.VITE_TRANSLATION_API_KEY || '',
    baseUrl: 'https://translation.googleapis.com/language/translate/v2'
  },
  MARKET_API: {
    key: import.meta.env.VITE_MARKET_API_KEY || '',
    baseUrl: 'https://api.agmarknet.gov.in',
    fallback: API_FALLBACKS.MARKET
  },
  GROQ_API: {
    key: import.meta.env.VITE_GROQ_API_KEY || '',
    baseUrl: 'https://api.groq.com/v1'
  }
};