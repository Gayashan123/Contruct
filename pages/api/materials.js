import connectDB from "../../lib/mongodb";
import MaterialRate from "../../models/basic_pricemt"; // Corrected model import

export default async function handler(req, res) {
  await connectDB();

  try {
    switch (req.method) {
      case "GET":
        const items = await MaterialRate.find({});
        return res.status(200).json({ status: "success", data: items });

      case "POST":
        if (!Array.isArray(req.body) || req.body.length === 0) {
          return res.status(400).json({ message: "Expected a non-empty array of material data" });
        }

        for (let item of req.body) {
          if (!item.Trade || !item.Material || !item.unit || item.basic_price == null) {
            return res.status(400).json({ message: "Each material must have Trade, Material, unit, and basic_price" });
          }
        }

        await MaterialRate.deleteMany({});
        await MaterialRate.insertMany(req.body);
        return res.status(201).json({ message: "Material data updated successfully" });

      case "PUT":
        const { id, Trade, Material, unit, basic_price } = req.body;

        if (!id || !Trade || !Material || !unit || basic_price == null) {
          return res.status(400).json({ message: "Missing required fields for material update" });
        }

        const updatedMaterial = await MaterialRate.findByIdAndUpdate(
          id,
          { Trade, Material, unit, basic_price },
          { new: true }
        );

        if (!updatedMaterial) return res.status(404).json({ message: "Material not found" });

        return res.status(200).json({ message: "Material updated successfully", updatedMaterial });

      case "DELETE":
        const { id: deleteId } = req.query;
        if (!deleteId) return res.status(400).json({ message: "Missing ID for deletion" });

        const deletedMaterial = await MaterialRate.findByIdAndDelete(deleteId);
        if (!deletedMaterial) return res.status(404).json({ message: "Material not found" });

        return res.status(200).json({ message: "Material deleted successfully" });

      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        return res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
}
