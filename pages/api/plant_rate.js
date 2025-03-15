import connectDB from "../../lib/mongodb";
import PlantRate from "../../models/plant_rate";

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
        // Extract body content for creating a new plant rate
        const { Item_No, description, Code_no, unit, price } = req.body;

        // Validate the required fields
        if (!Item_No || !description || !Code_no || !unit || !price) {
          return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new plant rate document
        const newPlantRate = new PlantRate({
          Item_No,
          description,
          Code_no,
          unit,
          price,
        });

        // Save to the database
        await newPlantRate.save();

        return res.status(201).json({ message: "Plant rate added successfully", newPlantRate });
      } catch (error) {
        console.error("Error adding plant rate:", error.message);
        return res.status(500).json({ message: "Failed to add plant rate" });
      }

    case "DELETE":
      try {
        const { id } = req.body;
        
        // Delete plant rate by ID
        await PlantRate.findByIdAndDelete(id);

        return res.status(200).json({ message: "Plant rate deleted successfully" });
      } catch (error) {
        return res.status(500).json({ message: "Error deleting plant rate" });
      }

    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }
}
