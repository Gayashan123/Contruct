// pages/api/save-prices.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const priceData = req.body; // Get the price data sent from the frontend

      // Handle the price data here (e.g., save to database, log, etc.)
      console.log(priceData);

      // Respond with success
      return res.status(200).json({ message: 'Data saved successfully!' });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Server Error' });
    }
  } else {
    // Respond with Method Not Allowed if the request isn't POST
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
