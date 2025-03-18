import connectDB from "../../lib/mongodb";
import LabourRate from "../../models/basic_pricelb"; // Correct model import

export default async function handler(req, res) {
  try {
    // Establish DB connection
    await connectDB();

    switch (req.method) {
      // ✅ GET: Fetch all labour data
      case "GET":
        try {
          const items = await LabourRate.find({});
          return res.status(200).json({ status: "success", data: items });
        } catch (error) {
          console.error("Error fetching data:", error);
          return res.status(500).json({ message: "Error fetching data", error: error.message });
        }

      // ✅ POST: Insert or update multiple labour data records
      case "POST":
        try {
          // Ensure the request body is an array
          if (!Array.isArray(req.body) || req.body.length === 0) {
            return res.status(400).json({ message: "Expected a non-empty array of labour data" });
          }

          // Clear existing data before inserting new data (if needed)
          await LabourRate.deleteMany({});
          const result = await LabourRate.insertMany(req.body);

          return res.status(201).json({ message: "Labour rates updated successfully", result });
        } catch (error) {
          console.error("Error saving data:", error);
          return res.status(500).json({ message: "Error saving data", error: error.message });
        }

      // ✅ PUT: Update an existing labour data record
      case "PUT":
        try {
          const { id, description, unit, price } = req.body;

          if (!id || !description || !unit || price == null) {
            return res.status(400).json({ message: "Missing required fields: id, description, unit, and price" });
          }

          const updatedLabour = await LabourRate.findByIdAndUpdate(
            id,
            { description, unit, price },
            { new: true } // Return the updated document
          );

          if (!updatedLabour) {
            return res.status(404).json({ message: "Labour rate not found" });
          }

          return res.status(200).json({ message: "Labour rate updated", updatedLabour });
        } catch (error) {
          console.error("Error updating data:", error);
          return res.status(500).json({ message: "Error updating data", error: error.message });
        }

      // ✅ DELETE: Delete a specific labour data record by ID
      case "DELETE":
        try {
          const { id } = req.body;

          if (!id) {
            return res.status(400).json({ message: "Missing ID for deletion" });
          }

          const deletedLabour = await LabourRate.findByIdAndDelete(id);

          if (!deletedLabour) {
            return res.status(404).json({ message: "Labour rate not found" });
          }

          return res.status(200).json({ message: "Labour rate deleted successfully" });
        } catch (error) {
          console.error("Error deleting data:", error);
          return res.status(500).json({ message: "Error deleting data", error: error.message });
        }

      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        return res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.error("Error in request handler:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
}