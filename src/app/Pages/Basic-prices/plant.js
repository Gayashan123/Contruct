import React, { useState, useEffect } from 'react';

export default function Plants() {
  // State to hold the plant data
  const [plantData, setPlantData] = useState([]);

  // Fetch plant data from the API when the component mounts
  useEffect(() => {
    const fetchPlantData = async () => {
      try {
        const response = await fetch('/api/plants', {
          method: 'GET',
        });
        const result = await response.json();
        
        if (response.ok) {
          // Ensure description and basicPrice are always strings
          const normalizedData = result.map((plant) => ({
            description: plant.description || '',
            basicPrice: plant.basicPrice || '',
          }));
          setPlantData(normalizedData);  // Set the plant data from the response
        } else {
          alert('Failed to fetch plant data: ' + result.message);
        }
      } catch (error) {
        alert('Error fetching data: ' + error.message);
        console.error('Error:', error);
      }
    };

    fetchPlantData();
  }, []);

  // Add a new plant
  const addPlant = () => {
    setPlantData([
      ...plantData,
      { description: '', basicPrice: '' },
    ]);
  };

  // Update the plant's basic price
  const updatePrice = (index, newPrice) => {
    const updatedPlants = [...plantData];
    updatedPlants[index].basicPrice = newPrice;
    setPlantData(updatedPlants);
  };

  // Delete a plant
  const deleteRow = (index) => {
    const updatedPlants = plantData.filter((_, i) => i !== index);
    setPlantData(updatedPlants);
  };

  // Save plant data to the API
  const saveData = async () => {
    try {
      const response = await fetch('/api/plants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(plantData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Data saved successfully!');
        console.log('Success:', result.message);
      } else {
        alert('Failed to save data: ' + result.message);
        console.log('Error:', result.message);
      }
    } catch (error) {
      alert('Error occurred: ' + error.message);
      console.error('Error:', error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="flex justify-center items-center py-12 text-white shadow-lg bg-gradient-to-r from-green-800 via-gray-700 to-gray-600 rounded-lg">
        <h1 className="text-4xl font-bold uppercase">Plants Table</h1>
      </div>

      {/* Table */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="p-3">Description</th>
              <th className="p-3">Basic Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plantData.map((plant, index) => (
              <tr key={index} className="border-b text-center hover:bg-gray-200">
                <td className="p-3">
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={plant.description}
                    onChange={(e) => {
                      const updatedPlants = [...plantData];
                      updatedPlants[index].description = e.target.value;
                      setPlantData(updatedPlants);
                    }}
                  />
                </td>
                <td className="p-3">
                  <input
                    type="number"
                    className="w-full p-2 border rounded"
                    value={plant.basicPrice}
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
