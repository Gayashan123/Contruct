import React, { useState, useEffect } from 'react';

export default function Labour() {
  // Retrieve labour data from the API when the component mounts
  const loadLabourData = async () => {
    try {
      const response = await fetch('/api/labour', {
        method: 'GET',
      });
      const result = await response.json();

      if (response.ok) {
        // Ensure all data has 'unit' set to 'Day' if not present
        return result.map(item => ({
          ...item,
          unit: item.unit || 'Day',  // Default to 'Day' if unit is missing
        }));
      } else {
        alert('Failed to fetch labour data: ' + result.message);
        return []; // Return empty array in case of error
      }
    } catch (error) {
      alert('Error fetching data: ' + error.message);
      console.error('Error:', error);
      return []; // Return empty array in case of error
    }
  };

  const [labourData, setLabourData] = useState([]);

  // Fetch data from the API on component mount
  useEffect(() => {
    loadLabourData().then((data) => setLabourData(data));
  }, []);

  const addLabour = () => {
    // Add new labour row with default unit 'Day' for all fields
    setLabourData([...labourData, { description: '', price: '', unit: 'Day' }]);
  };

  const updatePrice = (index, newPrice) => {
    const updatedLabour = [...labourData];
    updatedLabour[index].price = newPrice;
    setLabourData(updatedLabour);
  };

  const updateDescription = (index, newDescription) => {
    const updatedLabour = [...labourData];
    updatedLabour[index].description = newDescription;
    setLabourData(updatedLabour);
  };

  const deleteRow = (index) => {
    const updatedLabour = labourData.filter((_, i) => i !== index);
    setLabourData(updatedLabour);
  };

  const saveData = async () => {
    try {
      const response = await fetch('/api/labour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(labourData),
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
      <div className="flex justify-center items-center py-12 text-white shadow-lg bg-gradient-to-r from-blue-800 via-gray-700 to-gray-600 rounded-lg">
        <h1 className="text-4xl font-bold uppercase">Labour Table</h1>
      </div>

      {/* Table */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="p-3">Description</th>
              <th className="p-3">Unit</th>
              <th className="p-3">Basic Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {labourData.map((labour, index) => (
              <tr key={index} className="border-b text-center hover:bg-gray-200">
                <td className="p-3">
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={labour.description}
                    onChange={(e) => updateDescription(index, e.target.value)}
                  />
                </td>
                <td className="p-3">{labour.unit}</td>
                <td className="p-3">
                  <input
                    type="number"
                    className="w-full p-2 border rounded"
                    value={labour.price}
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
          onClick={addLabour}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          Add Labour
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
