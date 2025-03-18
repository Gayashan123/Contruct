import connectDB from "../../lib/mongodb";
import MaterialRate from "../../models/basic_pricemt"; // Correct model import

export default async function handler(req, res) {
  await connectDB();

  switch (req.method) {
    case "GET":
      try {
        const items = await MaterialRate.find({});
        return res.status(200).json({ status: "success", data: items });
      } catch (error) {
        console.error("GET Error:", error);
        return res.status(500).json({ message: "Error fetching material data", error: error.message });
      }

    case "POST":
      try {
        // Check if req.body is an array and is not empty
        if (!Array.isArray(req.body) || req.body.length === 0) {
          return res.status(400).json({ message: "Expected a non-empty array of material data" });
        }

        // Validate each item in the array (Trade, Material, unit, and basic_price)
        for (let item of req.body) {
          if (!item.Trade || !item.Material || !item.unit || item.basic_price == null) {
            return res.status(400).json({ message: "Each material data must have Trade, Material, unit, and basic_price" });
          }
        }

        // Clear existing data and insert new data
        await MaterialRate.deleteMany({});
        await MaterialRate.insertMany(req.body);

        return res.status(201).json({ message: "Material data updated successfully" });
      } catch (error) {
        console.error("POST Error:", error);
        return res.status(500).json({ message: "Error saving material data", error: error.message });
      }

    case "PUT":
      try {
        const { id, Trade, Material, unit, basic_price } = req.body;

        if (!id || !Trade || !Material || !unit || basic_price == null) {
          return res.status(400).json({ message: "Missing required fields for material update" });
        }

        const updatedMaterial = await MaterialRate.findByIdAndUpdate(
          id,
          { Trade, Material, unit, basic_price },
          { new: true }
        );

        if (!updatedMaterial) {
          return res.status(404).json({ message: "Material data not found" });
        }

        return res.status(200).json({ message: "Material data updated successfully", updatedMaterial });
      } catch (error) {
        console.error("PUT Error:", error);
        return res.status(500).json({ message: "Error updating material data", error: error.message });
      }

    case "DELETE":
      try {
        const { id } = req.query; // Get the id from query parameters

        if (!id) {
          return res.status(400).json({ message: "Missing ID for deletion" });
        }

        const deletedMaterial = await MaterialRate.findByIdAndDelete(id);
        if (!deletedMaterial) {
          return res.status(404).json({ message: "Material data not found" });
        }

        return res.status(200).json({ message: "Material data deleted successfully" });
      } catch (error) {
        console.error("DELETE Error:", error);
        return res.status(500).json({ message: "Error deleting material data", error: error.message });
      }

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}