import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

interface CropYield {
  cropName: string;
  yieldPerAcre: number;
  pricePerUnit: number;
}

const cropData: Record<string, CropYield> = {
  rice: { cropName: 'Rice', yieldPerAcre: 2400, pricePerUnit: 20 },
  wheat: { cropName: 'Wheat', yieldPerAcre: 1800, pricePerUnit: 25 },
  cotton: { cropName: 'Cotton', yieldPerAcre: 400, pricePerUnit: 60 },
  sugarcane: { cropName: 'Sugarcane', yieldPerAcre: 30000, pricePerUnit: 3 }
};

const CropCalculator: React.FC = () => {
  const [acres, setAcres] = useState<number>(1);
  const [selectedCrop, setSelectedCrop] = useState<string>('rice');

  const calculateRevenue = () => {
    const crop = cropData[selectedCrop];
    const totalYield = crop.yieldPerAcre * acres;
    const totalRevenue = totalYield * crop.pricePerUnit;
    return { totalYield, totalRevenue };
  };

  const { totalYield, totalRevenue } = calculateRevenue();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="text-green-600" />
        <h2 className="text-xl font-semibold">Harvest Calculator</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Crop</label>
          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            {Object.entries(cropData).map(([key, { cropName }]) => (
              <option key={key} value={key}>{cropName}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Land Area (Acres)</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={acres}
            onChange={(e) => setAcres(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div className="mt-6 p-4 bg-green-50 rounded-md">
          <h3 className="font-semibold text-green-800 mb-2">Estimated Results</h3>
          <p>Expected Yield: {totalYield.toFixed(2)} kg</p>
          <p>Estimated Revenue: ₹{totalRevenue.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default CropCalculator;