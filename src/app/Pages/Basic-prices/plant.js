"use client";

import React, { useState, useEffect } from "react";

export default function Plant() {
  const [plantData, setPlantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    loadPlantData();
  }, []);

  const loadPlantData = async () => {
    try {
      const response = await fetch("/api/plant");
      const result = await response.json();
      if (response.ok) {
        setPlantData(result.data);
      } else {
        setPlantData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setPlantData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const addPlant = () => {
    setPlantData([...plantData, { description: "", basic_price: "", isNew: true }]);
    setHasChanges(true);
  };

  const updatePlant = (index, key, value) => {
    setPlantData((prev) =>
      prev.map((plant, i) => (i === index ? { ...plant, [key]: value } : plant))
    );
    setHasChanges(true);
  };

  const saveData = async () => {
    if (plantData.some((plant) => !plant.description || plant.basic_price == null)) {
      alert("Please fill all fields before saving.");
      return;
    }

    try {
      const formattedData = plantData.map(({ isNew, _id, ...rest }) => rest);
      const response = await fetch("/api/plant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        alert("Data saved successfully!");
        loadPlantData();
        setHasChanges(false);
      } else {
        alert("Failed to save data");
      }
    } catch (error) {
      console.error("Save error:", error);
      alert("Error saving data");
    }
  };

  const deleteRow = async (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this entry?");
    if (!confirmDelete) return;

    const id = plantData[index]._id;
    if (!id.startsWith("temp-")) {
      try {
        const response = await fetch(`/api/plant?id=${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Failed to delete");
      } catch (error) {
        console.error("Error deleting:", error);
        alert("Error deleting entry");
        return;
      }
    }

    setPlantData((prev) => prev.filter((_, i) => i !== index));
    setHasChanges(true);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-4xl font-bold text-center my-4 bg-gray-800 text-white py-2 rounded-lg">Plant Basic Price Table </h1>

        <div className="flex mb-4 space-x-4">
          <button onClick={addPlant} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Add Plant
          </button>
          {hasChanges && (
            <button onClick={saveData} className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400">
              Save Changes
            </button>
          )}
        </div>
        {isLoading ? (
  <div className="text-center">
    <div className="animate-spin border-t-4 border-blue-600 border-solid w-12 h-12 rounded-full mx-auto"></div>
    <p className="mt-4 text-xl text-gray-700">Loading data...</p>
  </div>
) : (
  <table className="w-full table-auto bg-white shadow-md rounded-lg">
    <thead className="bg-gray-700 text-white">
      <tr>
        <th className="py-2 px-4">Description</th>
        <th className="py-2 px-4">Basic Price</th>
        <th className="py-2 px-4">Actions</th>
      </tr>
    </thead>
    <tbody>
      {plantData.map((plant, index) => (
        <tr key={index} className="border-t hover:bg-gray-100">
          <td className="py-2 px-4">
            <input
              type="text"
              value={plant.description}
              onChange={(e) => updatePlant(index, "description", e.target.value)}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </td>
          <td className="py-2 px-4">
            <input
              type="number"
              value={plant.basic_price}
              onChange={(e) => updatePlant(index, "basic_price", e.target.value)}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </td>
          <td className="py-2 px-4 text-center">
            <button
              onClick={() => deleteRow(index)}
              className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)}

        
      </div>
    </div>
  );
}
