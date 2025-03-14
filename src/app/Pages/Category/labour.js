import React, { useState } from 'react';

export default function Labour() {
  const [labourData, setLabourData] = useState([
    { Item_No: 0, description: 'Painter', Code_no: 'L-001', unit: 'Day', price: '200.00' },
    { Item_No: 1, description: 'Plumber', Code_no: 'L-002', unit: 'Day', price: '500.00' },
    { Item_No: 2, description: 'SK Labour', Code_no: 'L-003', unit: 'Day', price: '600.00' },
    { Item_No: 3, description: 'SK Labour (Vibrator)', Code_no: 'L-004', unit: 'Day', price: '650.00' },
    { Item_No: 4, description: 'Tinker', Code_no: 'L-005', unit: 'Day', price: '700.00' },
    { Item_No: 5, description: 'Tiler', Code_no: 'L-006', unit: 'Day', price: '50.00' },
  ]);

  const addLabour = () => {
    const newItemNo = labourData.length;
    const newCodeNo = `L-${String(newItemNo + 1).padStart(3, '0')}`;
    setLabourData([...labourData, { Item_No: newItemNo, description: '', Code_no: newCodeNo, unit: 'Day', price: '' }]);
  };

  const updatePrice = (index, newPrice) => {
    const updatedLabour = [...labourData];
    updatedLabour[index].price = newPrice;
    setLabourData(updatedLabour);
  };

  const deleteRow = (index) => {
    const updatedLabour = labourData.filter((_, i) => i !== index);
    setLabourData(updatedLabour);
  };

  const saveData = () => {
    console.log("Saved Data:", labourData);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="flex justify-center items-center py-12 text-white shadow-lg bg-gradient-to-r from-green-800 via-brown-700 to-gray-700 rounded-lg">
        <h1 className="text-4xl font-bold uppercase">Labour Table</h1>
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
            {labourData.map((labour, index) => (
              <tr key={labour.Item_No} className="border-b text-center hover:bg-gray-200">
                <td className="p-3">{labour.Item_No}</td>
                <td className="p-3">{labour.Code_no}</td>
                <td className="p-3">
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={labour.description}
                    onChange={(e) => {
                      const updatedLabour = [...labourData];
                      updatedLabour[index].description = e.target.value;
                      setLabourData(updatedLabour);
                    }}
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
