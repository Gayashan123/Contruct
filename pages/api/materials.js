let materialsData = [
  { trade: 'CONCRETE', material: 'Cement', unit: 'gal', price: '' },
  { trade: 'CONCRETE', material: 'Sand', unit: 'cube.', price: '' },
  { trade: 'CONCRETE', material: 'Metal 3/4 "', unit: 'cube.', price: '' },
  { trade: 'CONCRETE', material: 'Metal 1 "', unit: 'cube.', price: '' },
  { trade: 'CONCRETE', material: 'Metal 2 "', unit: 'cube.', price: '' },
  { trade: 'CONCRETE', material: 'Water', unit: 'gal.', price: '' },
];

export default async function handler(req, res) {
  // Handle GET request: Fetch saved materials
  if (req.method === 'GET') {
    try {
      res.status(200).json(materialsData); // Send the stored materials
    } catch (error) {
      console.error('Error fetching materials data:', error);
      res.status(500).json({ message: 'Error fetching materials data' });
    }
  }

  // Handle PUT request: Update the price of a material
  else if (req.method === 'PUT') {
    try {
      const { index, price } = req.body; // Get the index and price from the request body

      // Update the price for the material
      materialsData[index].price = price;

      res.status(200).json({ message: 'Price updated successfully' });
    } catch (error) {
      console.error('Error updating materials data:', error);
      res.status(500).json({ message: 'Error updating materials data' });
    }
  }

  // Handle POST request: Save the materials data (e.g., adding a new material)
  else if (req.method === 'POST') {
    try {
      const newMaterials = req.body; // Get new materials from the request body

      // Save the new materials to in-memory storage
      materialsData = newMaterials;

      res.status(200).json({ message: 'Materials data saved successfully' });
    } catch (error) {
      console.error('Error saving materials data:', error);
      res.status(500).json({ message: 'Error saving materials data' });
    }
  } else {
    // Handle unsupported methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
