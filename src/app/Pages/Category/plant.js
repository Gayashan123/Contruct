import React, { useState } from 'react';

export default function Plant() {
  const [plantData, setPlantData] = useState([
    { Item_No: 0, description: 'Painter', Code_no: 'P-001', unit: 'Day', price: '200.00' },
    { Item_No: 1, description: 'Plumber', Code_no: 'P-002', unit: 'Day', price: '500.00' },
    { Item_No: 2, description: 'SK Labour', Code_no: 'P-003', unit: 'Day', price: '600.00' },
    { Item_No: 3, description: 'SK Labour (Vibrator)', Code_no: 'P-004', unit: 'Day', price: '650.00' },
    { Item_No: 4, description: 'Tinker', Code_no: 'P-005', unit: 'Day', price: '700.00' },
    { Item_No: 5, description: 'Tiler', Code_no: 'P-006', unit: 'Day', price: '50.00' },
  ]);

  const addPlant = () => {
    const newItemNo = plantData.length;
    const newCodeNo = `P-${String(newItemNo + 1).padStart(3, '0')}`;
    setPlantData([...plantData, { Item_No: newItemNo, description: '', Code_no: newCodeNo, unit: 'Day', price: '' }]);
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
      <div className="flex justify-center items-center py-12 text-white shadow-lg bg-gradient-to-r from-green-800 via-brown-700 to-gray-700 rounded-lg">
        <h1 className="text-4xl font-bold uppercase">Plant Table</h1>
      </div>
      
      {/* Table */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="p-3">Item No</th>
              <th className="p-3">Code No</th>
              <th className="p-3">Description</th>
              <th className="p-3">Unit</th>
              <th className="p-3">Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plantData.map((plant, index) => (
              <tr key={plant.Item_No} className="border-b text-center hover:bg-gray-200">
                <td className="p-3">{plant.Item_No}</td>
                <td className="p-3">{plant.Code_no}</td>
                <td className="p-3">
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={plant.description}
                    onChange={(e) => {
                      const updatedPlant = [...plantData];
                      updatedPlant[index].description = e.target.value;
                      setPlantData(updatedPlant);
                    }}
                  />
                </td>
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
