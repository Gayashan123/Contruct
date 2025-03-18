import connectDB from "../../lib/mongodb";  // MongoDB connection
import PlantRate from "../../models/plant_rate";  // PlantRate model

// Default API handler function
export default async function handler(req, res) {
  await connectDB();  // Connect to the database

  switch (req.method) {
    case "GET":
      try {
        // Fetch all plant rates from the database
        const items = await PlantRate.find({});
        return res.status(200).json(items);
      } catch (error) {
        return res.status(500).json({ message: "Error fetching plant rates" });
      }

    case "POST":
      try {
        // Check if the request body is an array and not empty
        if (!Array.isArray(req.body) || req.body.length === 0) {
          return res.status(400).json({ message: "Expected a non-empty array of plant data" });
        }

        // Delete all existing plant rates and insert the new ones
        await PlantRate.deleteMany({});
        await PlantRate.insertMany(req.body);

        return res.status(201).json({ message: "Plant rates updated successfully" });
      } catch (error) {
        return res.status(500).json({ message: "Error saving plant rates" });
      }

    case "PUT":
      try {
        const { id, Item_No, description, Code_no, unit, price } = req.body;
        if (!id) {
          return res.status(400).json({ message: "Missing plant rate ID" });
        }

        const updatedPlantRate = await PlantRate.findByIdAndUpdate(
          id,
          { Item_No, description, Code_no, unit, price },
          { new: true }
        );

        if (!updatedPlantRate) {
          return res.status(404).json({ message: "Plant rate not found" });
        }

        return res.status(200).json({ message: "Plant rate updated", updatedPlantRate });
      } catch (error) {
        return res.status(500).json({ message: "Error updating plant rate" });
      }

    case "DELETE":
      try {
        const { id } = req.body;
        if (!id) {
          return res.status(400).json({ message: "Missing ID for deletion" });
        }

        await PlantRate.findByIdAndDelete(id);
        return res.status(200).json({ message: "Plant rate deleted successfully" });
      } catch (error) {
        return res.status(500).json({ message: "Error deleting plant rate" });
      }

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
