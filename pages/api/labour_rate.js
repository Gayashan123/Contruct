// pages/api/labour_rate.js
import connectDB from "../../lib/mongodb";
import ConstructData from "../../models/labour_rate";

// Default API handler function
export default async function handler(req, res) {
  await connectDB();

  switch (req.method) {
    case "GET":
      try {
        const items = await ConstructData.find({});
        return res.status(200).json(items);
      } catch (error) {
        return res.status(500).json({ message: "Error fetching items" });
      }

    case "POST":
      try {
        const body = req.body;
        const newItem = new ConstructData(body);
        await newItem.save();
        return res.status(201).json(newItem);
      } catch (error) {
        return res.status(500).json({ message: "Error adding item" });
      }

    case "DELETE":
      try {
        const { id } = req.body;
        await ConstructData.findByIdAndDelete(id);
        return res.status(200).json({ message: "Item deleted successfully" });
      } catch (error) {
        return res.status(500).json({ message: "Error deleting item" });
      }

    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }
}
