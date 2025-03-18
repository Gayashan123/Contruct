import connectDB from "../../lib/mongodb";
import Plant from "../../models/basic_pricept";

export default async function handler(req, res) {
  await connectDB();

  try {
    switch (req.method) {
      case "GET":
        const plantData = await Plant.find({});
        return res.status(200).json({ status: "success", data: plantData });

      case "POST":
        if (!Array.isArray(req.body) || req.body.length === 0) {
          return res.status(400).json({ message: "Expected a non-empty array of plant data" });
        }

        for (let item of req.body) {
          if (!item.description || item.basic_price == null) {
            return res.status(400).json({ message: "Each plant entry must have a description and basic_price" });
          }
        }

        await Plant.deleteMany({});
        await Plant.insertMany(req.body);
        return res.status(201).json({ message: "Plant data updated successfully" });

      case "PUT":
        const { id, description, basic_price } = req.body;

        if (!id || !description || basic_price == null) {
          return res.status(400).json({ message: "Missing required fields for update" });
        }

        const updatedPlant = await Plant.findByIdAndUpdate(
          id,
          { description, basic_price },
          { new: true }
        );

        if (!updatedPlant) return res.status(404).json({ message: "Plant entry not found" });

        return res.status(200).json({ message: "Plant entry updated successfully", updatedPlant });

      case "DELETE":
        const { id: deleteId } = req.query;
        if (!deleteId) return res.status(400).json({ message: "Missing ID for deletion" });

        const deletedPlant = await Plant.findByIdAndDelete(deleteId);
        if (!deletedPlant) return res.status(404).json({ message: "Plant entry not found" });

        return res.status(200).json({ message: "Plant entry deleted successfully" });

      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        return res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
}
