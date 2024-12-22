import { API_CONFIG } from '../config/api';
import { Location } from '../types';

export const getLocationDetails = async (lat: number, lon: number): Promise<Location> => {
  if (!API_CONFIG.GEOCODING_API.key) {
    console.warn('Geocoding API key not found, using fallback data');
    return API_CONFIG.GEOCODING_API.fallback;
  }

  try {
    const url = `${API_CONFIG.GEOCODING_API.baseUrl}/json?latlng=${lat},${lon}&key=${API_CONFIG.GEOCODING_API.key}`;
    const response = await fetch(url);
    
    if (!response.ok) throw new Error('Geocoding API request failed');
    
    const data = await response.json();
    
    const addressComponents = data.results[0]?.address_components || [];
    const district = addressComponents.find(c => c.types.includes('administrative_area_level_2'))?.long_name 
      || API_CONFIG.GEOCODING_API.fallback.district;
    const state = addressComponents.find(c => c.types.includes('administrative_area_level_1'))?.long_name 
      || API_CONFIG.GEOCODING_API.fallback.state;
    
    return { 
      latitude: lat, 
      longitude: lon, 
      district, 
      state 
    };
  } catch (error) {
    console.error('Geocoding service error:', error);
    return API_CONFIG.GEOCODING_API.fallback;
  }
};