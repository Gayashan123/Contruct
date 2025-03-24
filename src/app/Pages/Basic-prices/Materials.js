'use client';

import React, { useState, useEffect } from "react";

export default function Materials() {
  const [materialsData, setMaterialsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    loadMaterialsData();
  }, []);

  const loadMaterialsData = async () => {
    try {
      const response = await fetch("/api/materials");
      const result = await response.json();
      if (response.ok) {
        setMaterialsData(result.data);
      } else {
        setMaterialsData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMaterialsData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const addMaterial = () => {
    setMaterialsData([...materialsData, { Trade: "", Material: "", unit: "", basic_price: "", isNew: true }]);
    setHasChanges(true);
  };

  const updateMaterial = (index, key, value) => {
    setMaterialsData((prev) =>
      prev.map((material, i) => (i === index ? { ...material, [key]: value } : material))
    );
    setHasChanges(true);
  };

  const saveData = async () => {
    if (materialsData.some((material) => !material.Trade || !material.Material || !material.unit || material.basic_price == null)) {
      alert("Please fill all fields before saving.");
      return;
    }

    try {
      const formattedData = materialsData.map(({ isNew, _id, ...rest }) => rest);
      const response = await fetch("/api/materials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        alert("Data saved successfully!");
        loadMaterialsData();
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
    const confirmDelete = window.confirm("Are you sure you want to delete this material?");
    if (!confirmDelete) return;

    const id = materialsData[index]._id;
    if (!id.startsWith("temp-")) {
      try {
        const response = await fetch(`/api/materials?id=${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Failed to delete");
      } catch (error) {
        console.error("Error deleting:", error);
        alert("Error deleting material");
        return;
      }
    }
    setMaterialsData((prev) => prev.filter((_, i) => i !== index));
    setHasChanges(true);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center my-4 bg-gray-800 text-white py-2 rounded-lg">Materials Basic Price Table</h1>

      <button onClick={addMaterial} className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
        Add Material
      </button>

      {hasChanges && (
        <button onClick={saveData} className="ml-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
          Save Changes
        </button>
      )}

      {isLoading ? (
        <div className="text-center mt-4">
          {/* Loading Spinner */}
          <div className="animate-spin border-t-4 border-blue-600 border-solid w-12 h-12 rounded-full mx-auto"></div>
          <p className="mt-4 text-xl text-gray-700">Loading data...</p>
        </div>
      ) : (
        <table className="w-full mt-4 border bg-white shadow-md">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="p-3">Trade</th>
              <th className="p-3">Material</th>
              <th className="p-3">Unit</th>
              <th className="p-3">Basic Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {materialsData.map((material, index) => (
              <tr key={material._id || `temp-${index}`} className="border-b text-center hover:bg-gray-200">
                <td className="p-3"><input type="text" value={material.Trade} onChange={(e) => updateMaterial(index, "Trade", e.target.value)} className="border p-2 w-full" /></td>
                <td className="p-3"><input type="text" value={material.Material} onChange={(e) => updateMaterial(index, "Material", e.target.value)} className="border p-2 w-full" /></td>
                <td className="p-3"><input type="text" value={material.unit} onChange={(e) => updateMaterial(index, "unit", e.target.value)} className="border p-2 w-full" /></td>
                <td className="p-3"><input type="number" value={material.basic_price} onChange={(e) => updateMaterial(index, "basic_price", e.target.value)} className="border p-2 w-full" /></td>
                <td className="p-3"><button onClick={() => deleteRow(index)} className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
