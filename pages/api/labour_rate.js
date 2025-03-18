import connectDB from "../../lib/mongodb";
import LabourRate from "../../models/labour_rate";

export default async function handler(req, res) {
  await connectDB();

  switch (req.method) {
    case "GET":
      try {
        const items = await LabourRate.find({});
        return res.status(200).json(items);
      } catch (error) {
        return res.status(500).json({ message: "Error fetching data" });
      }

    case "POST":
      try {
        if (!Array.isArray(req.body) || req.body.length === 0) {
          return res.status(400).json({ message: "Expected a non-empty array of labour data" });
        }
        await LabourRate.deleteMany({});
        await LabourRate.insertMany(req.body);
        return res.status(201).json({ message: "Labour rates updated successfully" });
      } catch (error) {
        return res.status(500).json({ message: "Error saving data" });
      }

    case "PUT":
      try {
        const { id, description, unit, price } = req.body;
        if (!id) {
          return res.status(400).json({ message: "Missing labour rate ID" });
        }

        const updatedLabour = await LabourRate.findByIdAndUpdate(
          id,
          { description, unit, price },
          { new: true }
        );

        if (!updatedLabour) {
          return res.status(404).json({ message: "Labour rate not found" });
        }

        return res.status(200).json({ message: "Labour rate updated", updatedLabour });
      } catch (error) {
        return res.status(500).json({ message: "Error updating data" });
      }

    case "DELETE":
      try {
        const { id } = req.body;
        if (!id) {
          return res.status(400).json({ message: "Missing ID for deletion" });
        }

        await LabourRate.findByIdAndDelete(id);
        return res.status(200).json({ message: "Labour rate deleted successfully" });
      } catch (error) {
        return res.status(500).json({ message: "Error deleting data" });
      }

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
