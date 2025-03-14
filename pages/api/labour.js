// /pages/api/labour.js

let labourData = [
  { description: 'Skilled Labour', unit: 'Day', price: '1000.00' },
  { description: 'Unskilled Labour', unit: 'Day', price: '600.00' },
  { description: 'Vibrator Operator', unit: 'Day', price: '1000.00' },
  { description: 'Concrete Mixer Operator', unit: 'Day', price: '1000.00' },
];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const updatedLabourData = req.body;
      console.log('Received Labour Data:', updatedLabourData);

      // Here you can handle the data, for example, save it to a database.
      // For simplicity, we're just logging it here, and you can update the in-memory data.
      labourData = updatedLabourData; // Update the in-memory data (if needed)

      // Send a success response
      res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error saving data' });
    }
  } else if (req.method === 'GET') {
    try {
      // Send the current labour data as a response
      res.status(200).json(labourData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ message: 'Error fetching data' });
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
