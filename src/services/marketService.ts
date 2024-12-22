import { API_CONFIG } from '../config/api';
import { MarketPrice } from '../types';

export const fetchMarketPrices = async (state: string): Promise<MarketPrice[]> => {
  if (!API_CONFIG.MARKET_API.key) {
    console.warn('Market API key not found, using fallback data');
    return API_CONFIG.MARKET_API.fallback;
  }

  try {
    const url = `${API_CONFIG.MARKET_API.baseUrl}/prices?state=${encodeURIComponent(state)}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${API_CONFIG.MARKET_API.key}`
      }
    });
    
    if (!response.ok) throw new Error('Market API request failed');
    
    const data = await response.json();
    return data.map((item: any) => ({
      crop: item.commodity,
      price: item.modal_price,
      market: item.market,
      date: item.arrival_date
    }));
  } catch (error) {
    console.error('Market service error:', error);
    return API_CONFIG.MARKET_API.fallback;
  }
};