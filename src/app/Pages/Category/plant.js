import React, { useState, useEffect } from 'react';

export default function Plant() {
  const [plantData, setPlantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasChanges, setHasChanges] = useState(false);

  // Load data from the API when the component mounts
  useEffect(() => {
    loadPlantData();
  }, []);

  const loadPlantData = async () => {
    try {
      const response = await fetch('/api/plant_rate');
      const result = await response.json();
      if (response.ok) {
        setPlantData(result);
      } else {
        setPlantData([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setPlantData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const addPlant = () => {
    const newItemNo = plantData.length + 1;
    const newCodeNo = `P-${String(newItemNo).padStart(3, '0')}`;
    const newPlant = {
      _id: "temp-" + newItemNo,
      Item_No: newItemNo,
      description: "",
      Code_no: newCodeNo,
      unit: "Day", // Default unit can be something like 'Day', but the user can change it
      price: "",
      isNew: true,
    };
    setPlantData([...plantData, newPlant]);
    setHasChanges(true);
  };

  const updatePlant = (id, key, value) => {
    setPlantData((prev) =>
      prev.map((plant) =>
        plant._id === id ? { ...plant, [key]: value } : plant
      )
    );
    setHasChanges(true);
  };

  const saveData = async () => {
    if (plantData.some((plant) => !plant.description || !plant.Code_no || !plant.unit || !plant.price)) {
      alert("Please fill all fields before saving.");
      return;
    }

    try {
      const formattedData = plantData.map(({ isNew, _id, ...rest }) => rest);
      const response = await fetch("/api/plant_rate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Data saved successfully!");
        loadPlantData();
        setHasChanges(false);
      } else {
        alert("Failed to save: " + result.message);
      }
    } catch (error) {
      console.error("Save error:", error);
      alert("Error saving data");
    }
  };

  const deleteRow = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this plant?");
    if (!confirmDelete) return;

    if (!id.startsWith("temp-")) {
      try {
        const response = await fetch("/api/plant_rate", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });

        const result = await response.json();
        if (!response.ok) throw new Error(result.message || "Failed to delete");
      } catch (error) {
        console.error("Error deleting:", error);
        alert("Error deleting plant");
        return;
      }
    }

    setPlantData((prev) => prev.filter((plant) => plant._id !== id));
    setHasChanges(true);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center my-4 bg-gray-800 text-white py-2 rounded-lg">Plant Table</h1>

      <button onClick={addPlant} className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
        Add Plant
      </button>

      {hasChanges && (
        <button onClick={saveData} className="ml-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
          Save Changes
        </button>
      )}

      <table className="w-full mt-4 border bg-white shadow-md">
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
          {plantData.map((plant) => (
            <tr key={plant._id} className="border-b text-center hover:bg-gray-200">
              <td className="p-3">{plant.Item_No}</td>
              <td className="p-3">{plant.Code_no}</td>
              <td className="p-3">
                <input
                  type="text"
                  value={plant.description}
                  onChange={(e) => updatePlant(plant._id, "description", e.target.value)}
                  className="border p-2 w-full"
                />
              </td>
              <td className="p-3">
                <input
                  type="text"
                  value={plant.unit}
                  onChange={(e) => updatePlant(plant._id, "unit", e.target.value)}
                  className="border p-2 w-full"
                />
              </td>
              <td className="p-3">
                <input
                  type="number"
                  value={plant.price}
                  onChange={(e) => updatePlant(plant._id, "price", e.target.value)}
                  className="border p-2 w-full"
                />
              </td>
              <td className="p-3">
                <button onClick={() => deleteRow(plant._id)} className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
