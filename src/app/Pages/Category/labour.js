'use client';

import React, { useState, useEffect } from 'react';

export default function Labour() {
  const [labourData, setLabourData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Provided default data
  const defaultLabourData = [
    { Item_No: 1, description: 'Painter', Code_no: 'L-001', unit: 'Day', price: '2500.00' },
    { Item_No: 2, description: 'Plumber', Code_no: 'L-002', unit: 'Day', price: '2500.00' },
    { Item_No: 3, description: 'SK Labour', Code_no: 'L-003', unit: 'Day', price: '2000.00' },
    { Item_No: 4, description: 'SK Labour (Vibrator)', Code_no: 'L-004', unit: 'Day', price: '2000.00' },
    { Item_No: 5, description: 'Tinker', Code_no: 'L-005', unit: 'Day', price: '2500.00' },
    { Item_No: 6, description: 'Tiler', Code_no: 'L-006', unit: 'Day', price: '2500.00' },
    { Item_No: 7, description: 'U / SK Labourer', Code_no: 'L-007', unit: 'Day', price: '1800.00' },
    { Item_No: 8, description: 'Carpenter', Code_no: 'L-008', unit: 'Day', price: '2500.00' },
    { Item_No: 9, description: 'Mason', Code_no: 'L-009', unit: 'Day', price: '2500.00' },
    { Item_No: 10, description: 'Glazier', Code_no: 'L-010', unit: 'Day', price: '1800.00' }
  ];

  // Fetch data from the API on component mount
  const loadLabourData = async () => {
    try {
      const response = await fetch('/api/labour_rate', { method: 'GET' });
      const result = await response.json();

      if (response.ok) {
        // Set the fetched data
        setLabourData(result);
      } else {
        // If fetching fails, fallback to default data
        setLabourData(defaultLabourData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLabourData(defaultLabourData); // Fallback to default data in case of error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadLabourData();
  }, []); // Run only once when the component mounts

  const addLabour = () => {
    const newItemNo = labourData.length + 1;
    const newCodeNo = `L-${String(newItemNo).padStart(3, '0')}`;
    const newLabour = { Item_No: newItemNo, description: '', Code_no: newCodeNo, unit: 'Day', price: '' };
    setLabourData([...labourData, newLabour]);
  };

  const updateLabour = (index, key, value) => {
    const updatedLabour = [...labourData];
    updatedLabour[index][key] = value;
    setLabourData(updatedLabour);
  };

  const deleteRow = async (index) => {
    const deletedLabour = labourData[index];
    const updatedLabour = labourData.filter((_, i) => i !== index);
    setLabourData(updatedLabour);

    try {
      const response = await fetch(`/api/labour_rate?id=${deletedLabour.Item_No}`, { method: 'DELETE' });
      if (response.ok) {
        alert('Item deleted successfully');
      } else {
        throw new Error('Failed to delete item on server');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Error deleting item from server');
      setLabourData([...labourData]); // Restore the state if server delete fails
    }
  };

  const saveData = async () => {
    const invalidData = labourData.some(labour => !labour.price || labour.price <= 0);
    if (invalidData) {
      alert('Please make sure all price fields are filled with valid values.');
      return;
    }

    try {
      const response = await fetch('/api/labour_rate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(labourData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Data saved successfully!');
      } else {
        alert('Failed to save data: ' + result.message);
      }
    } catch (error) {
      alert('Error occurred: ' + error.message);
      console.error('Error:', error);
    }
  };

  
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-center items-center py-12 text-white shadow-lg bg-gradient-to-r from-blue-800 via-gray-700 to-gray-600 rounded-lg">
        <h1 className="text-4xl font-bold uppercase">Labour Table</h1>
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="p-3">Item No</th>
              <th className="p-3">Code No</th>
              <th className="p-3">Description</th>
              <th className="p-3">Unit</th>
              <th className="p-3">Price (Rs.)</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {labourData.map((labour, index) => (
              <tr key={index} className="border-b text-center hover:bg-gray-200">
                <td className="p-3">{labour.Item_No}</td>
                <td className="p-3">{labour.Code_no}</td>
                <td className="p-3">
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={labour.description}
                    onChange={(e) => updateLabour(index, 'description', e.target.value)}
                  />
                </td>
                <td className="p-3">{labour.unit}</td>
                <td className="p-3">
                  <input
                    type="number"
                    className="w-full p-2 border rounded"
                    value={labour.price}
                    onChange={(e) => updateLabour(index, 'price', e.target.value)}
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
