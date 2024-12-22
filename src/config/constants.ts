// API Fallback Values
export const API_FALLBACKS = {
  WEATHER: {
    temperature: 25,
    humidity: 60,
    rainfall: 0,
    forecast: 'Sunny'
  },
  MARKET: [
    { crop: 'Rice', price: 2000, market: 'Sample Market', date: new Date().toISOString().split('T')[0] },
    { crop: 'Wheat', price: 2500, market: 'Sample Market', date: new Date().toISOString().split('T')[0] }
  ],
  LOCATION: {
    latitude: 28.6139,  // New Delhi coordinates as fallback
    longitude: 77.2090,
    district: 'New Delhi',
    state: 'Delhi'
  }
};