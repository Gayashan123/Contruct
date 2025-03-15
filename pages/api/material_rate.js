import connectDB from "../../lib/mongodb";  // MongoDB connection
import MaterialRate from "../../models/material_rate";  // MaterialRate model

// Default API handler function
export default async function handler(req, res) {
  await connectDB();  // Establish database connection

  switch (req.method) {
    case "GET":
      try {
        const items = await MaterialRate.find({});  // Fetch all material rates
        return res.status(200).json(items);  // Return material rates as response
      } catch (error) {
        return res.status(500).json({ message: "Error fetching material rates" });
      }

    case "POST":
      try {
        const body = req.body;  // Get the material rate details from the request body
        const newItem = new MaterialRate(body);  // Create a new MaterialRate instance
        await newItem.save();  // Save the new material rate in the database
        return res.status(201).json(newItem);  // Return the new item as response
      } catch (error) {
        return res.status(500).json({ message: "Error adding material rate" });
      }

    case "DELETE":
      try {
        const { id } = req.body;  // Get the ID from the request body
        await MaterialRate.findByIdAndDelete(id);  // Delete the material rate by ID
        return res.status(200).json({ message: "Material rate deleted successfully" });
      } catch (error) {
        return res.status(500).json({ message: "Error deleting material rate" });
      }

    default:
      return res.status(405).json({ message: "Method Not Allowed" });  // Handle unsupported methods
  }
}
