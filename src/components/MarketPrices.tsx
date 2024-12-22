import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import { MarketPrice } from '../types';

const MarketPrices: React.FC = () => {
  const [prices, setPrices] = useState<MarketPrice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPrices([
        { crop: 'Rice', price: 2000, market: 'Azadpur Mandi', date: '2024-03-15' },
        { crop: 'Wheat', price: 2500, market: 'Azadpur Mandi', date: '2024-03-15' },
        { crop: 'Cotton', price: 6000, market: 'Azadpur Mandi', date: '2024-03-15' },
        { crop: 'Sugarcane', price: 300, market: 'Azadpur Mandi', date: '2024-03-15' }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="text-center">Loading market prices...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="text-green-600" />
        <h2 className="text-xl font-semibold">Today's Market Prices</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (₹/quintal)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {prices.map((price, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{price.crop}</td>
                <td className="px-6 py-4 whitespace-nowrap">₹{price.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{price.market}</td>
                <td className="px-6 py-4 whitespace-nowrap">{price.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketPrices;