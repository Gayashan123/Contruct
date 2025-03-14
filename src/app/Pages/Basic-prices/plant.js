'use client';

import React, { useState } from 'react';

export default function Plant() {
  const [plantData, setPlantData] = useState([
    { plant: 'Concrete Mixer', unit: 'Day', price: '' },
    { plant: 'Vibrator', unit: 'Day', price: '' },
  ]);

  const addPlant = () => {
    setPlantData([...plantData, { plant: '', unit: '', price: '' }]);
  };

  const updatePrice = (index, newPrice) => {
    const updatedPlant = [...plantData];
    updatedPlant[index].price = newPrice;
    setPlantData(updatedPlant);
  };

  const deleteRow = (index) => {
    const updatedPlant = plantData.filter((_, i) => i !== index);
    setPlantData(updatedPlant);
  };

  const saveData = () => {
    console.log("Saved Data:", plantData);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="flex justify-center items-center py-12 text-white shadow-lg bg-gradient-to-r from-blue-800 via-gray-700 to-gray-600 rounded-lg">
        <h1 className="text-4xl font-bold uppercase">Plant Equipment Table</h1>
      </div>
      
      {/* Table */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="p-3">Plant</th>
              <th className="p-3">Unit</th>
              <th className="p-3">Basic Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plantData.map((plant, index) => (
              <tr key={index} className="border-b text-center hover:bg-gray-200">
                <td className="p-3">{plant.plant}</td>
                <td className="p-3">{plant.unit}</td>
                <td className="p-3">
                  <input
                    type="number"
                    className="w-full p-2 border rounded"
                    value={plant.price}
                    onChange={(e) => updatePrice(index, e.target.value)}
                  />
                </td>
                <td className="p-3">
                  <button 
                    onClick={() => deleteRow(index)} 
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button 
          onClick={addPlant} 
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          Add Plant
        </button>
        <button 
          onClick={saveData} 
          className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition-all"
        >
          Save Data
        </button>
      </div>
    </div>
  );
}
