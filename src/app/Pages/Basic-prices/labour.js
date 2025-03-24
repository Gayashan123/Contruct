'use client';

import React, { useState, useEffect } from "react";

export default function LabourRate() {
  const [labourData, setLabourData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasChanges, setHasChanges] = useState(false);

  // Load Labour Data on initial render
  useEffect(() => {
    loadLabourData();
  }, []);

  const loadLabourData = async () => {
    try {
      const response = await fetch("/api/labour"); // Ensure correct endpoint
      const result = await response.json();
      if (response.ok) {
        setLabourData(result.data); // Populate state with fetched data
      } else {
        setLabourData([]); // Handle any errors by setting an empty array
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLabourData([]); // Handle errors in fetching
    } finally {
      setIsLoading(false); // Stop the loading indicator when data is ready
    }
  };

  const addLabour = () => {
    const newLabour = {
      description: "",
      unit: "Day", // Default unit set to "Day"
      price: "",
      isNew: true,
      _id: `temp-${Date.now()}`, // Temporary ID for new data
    };
    setLabourData([...labourData, newLabour]);
    setHasChanges(true); // Track changes
  };

  const updateLabour = (index, key, value) => {
    setLabourData((prev) =>
      prev.map((labour, i) =>
        i === index ? { ...labour, [key]: value } : labour
      )
    );
    setHasChanges(true); // Track changes
  };

  const saveData = async () => {
    if (labourData.some((labour) => !labour.description || !labour.unit || labour.price == null)) {
      alert("Please fill all fields before saving.");
      return;
    }

    try {
      const formattedData = labourData.map(({ isNew, _id, ...rest }) => rest); // Remove temp _id
      const response = await fetch("/api/labour", { // Ensure correct endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData), // Send updated data to the backend
      });

      const result = await response.json();
      if (response.ok) {
        alert("Data saved successfully!");
        loadLabourData(); // Reload data after saving
        setHasChanges(false); // Reset changes after save
      } else {
        console.error("Save failed:", result.message);  // Log error message from the server
        alert("Failed to save: " + result.message);
      }
    } catch (error) {
      console.error("Save error:", error);  // Log unexpected errors
      alert("Error saving data");
    }
  };

  const deleteRow = async (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this labour rate?");
    if (!confirmDelete) return;

    const id = labourData[index]._id;
    if (!id.startsWith("temp-")) {
      try {
        const response = await fetch("/api/labour", { // Ensure correct endpoint
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }), // Send the ID to delete the entry
        });

        const result = await response.json();
        if (!response.ok) throw new Error(result.message || "Failed to delete");
      } catch (error) {
        console.error("Error deleting:", error);
        alert("Error deleting labour rate");
        return;
      }
    }
    setLabourData((prev) => prev.filter((_, i) => i !== index)); // Remove the row from the state
    setHasChanges(true); // Track changes
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center my-4 bg-gray-800 text-white py-2 rounded-lg">Labour Basic Prices Table</h1>

      <button onClick={addLabour} className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
        Add Labour
      </button>

      {hasChanges && (
        <button onClick={saveData} className="ml-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
          Save Changes
        </button>
      )}

{isLoading ? (
  <div className="text-center">
    <div className="animate-spin border-t-4 border-blue-600 border-solid w-12 h-12 rounded-full mx-auto"></div>
    <p className="mt-4 text-xl text-gray-700">Loading data...</p>
  </div>
) : (
  <table className="w-full mt-4 border bg-white shadow-md">
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
        <tr key={labour._id || `temp-${index}`} className="border-b text-center hover:bg-gray-200">
          <td className="p-3">
            <input
              type="text"
              value={labour.description}
              onChange={(e) => updateLabour(index, "description", e.target.value)}
              className="border p-2 w-full"
            />
          </td>
          <td className="p-3">
            <select
              value={labour.unit}
              onChange={(e) => updateLabour(index, "unit", e.target.value)}
              className="border p-2 w-full"
            >
              <option value="Day">Day</option>
              <option value="Hour">Hour</option>
            </select>
          </td>
          <td className="p-3">
            <input
              type="number"
              value={labour.price}
              onChange={(e) => updateLabour(index, "price", e.target.value)}
              className="border p-2 w-full"
            />
          </td>
          <td className="p-3">
            <button onClick={() => deleteRow(index)} className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)}



      
    </div>
  );
}