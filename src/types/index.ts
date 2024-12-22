export interface Weather {
  temperature: number;
  humidity: number;
  rainfall: number;
  forecast: string;
}

export interface CropInfo {
  name: string;
  season: string;
  waterRequirement: number;
  soilType: string[];
  harvestPeriod: number;
}

export interface MarketPrice {
  crop: string;
  price: number;
  market: string;
  date: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  district: string;
  state: string;
}

export interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

export interface ChatResponse {
  message: {
    content: string;
    role: string;
  };
}