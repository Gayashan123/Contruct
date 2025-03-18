import connectDB from "../../lib/mongodb";  // MongoDB connection
import MaterialRate from "../../models/material_rate";  // MaterialRate model

// Default API handler function
export default async function handler(req, res) {
  await connectDB();  // Connect to the database

  switch (req.method) {
    case "GET":
      try {
        // Fetch all material rates from the database
        const items = await MaterialRate.find({});
        return res.status(200).json(items);
      } catch (error) {
        return res.status(500).json({ message: "Error fetching material rates" });
      }

    case "POST":
      try {
        // Check if the request body is an array and not empty
        if (!Array.isArray(req.body) || req.body.length === 0) {
          return res.status(400).json({ message: "Expected a non-empty array of material data" });
        }

        // Delete all existing material rates and insert the new ones
        await MaterialRate.deleteMany({});
        await MaterialRate.insertMany(req.body);

        return res.status(201).json({ message: "Material rates updated successfully" });
      } catch (error) {
        return res.status(500).json({ message: "Error saving material rates" });
      }

    case "PUT":
      try {
        const { id, Item_No, description, Code_no, unit, price } = req.body;
        if (!id) {
          return res.status(400).json({ message: "Missing material rate ID" });
        }

        const updatedMaterialRate = await MaterialRate.findByIdAndUpdate(
          id,
          { Item_No, description, Code_no, unit, price },
          { new: true }
        );

        if (!updatedMaterialRate) {
          return res.status(404).json({ message: "Material rate not found" });
        }

        return res.status(200).json({ message: "Material rate updated", updatedMaterialRate });
      } catch (error) {
        return res.status(500).json({ message: "Error updating material rate" });
      }

    case "DELETE":
      try {
        const { id } = req.body;
        if (!id) {
          return res.status(400).json({ message: "Missing ID for deletion" });
        }

        await MaterialRate.findByIdAndDelete(id);
        return res.status(200).json({ message: "Material rate deleted successfully" });
      } catch (error) {
        return res.status(500).json({ message: "Error deleting material rate" });
      }

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
