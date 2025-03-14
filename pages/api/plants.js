// /pages/api/plants.js

let plantData = [
  { description: 'Concrete Mixer', basicPrice: '50' },
  { description: 'Vibrator', basicPrice: '30' },
];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const updatedPlantData = req.body;
      console.log('Received Plant Data:', updatedPlantData);

      // Update the in-memory plantData (for now, since no DB is used)
      plantData = updatedPlantData;

      res.status(200).json({ message: 'Plant data saved successfully' });
    } catch (error) {
      console.error('Error saving plant data:', error);
      res.status(500).json({ message: 'Error saving plant data' });
    }
  } else if (req.method === 'GET') {
    try {
      res.status(200).json(plantData);
    } catch (error) {
      console.error('Error fetching plant data:', error);
      res.status(500).json({ message: 'Error fetching plant data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
