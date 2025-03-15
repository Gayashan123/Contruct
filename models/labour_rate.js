import mongoose from "mongoose";

const LabourSchema = new mongoose.Schema({
  Item_No: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  Code_no: { type: String, required: true },
  unit: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
});

// Prevent duplicate model registration
export default mongoose.models.LabourData || mongoose.model("LabourData", LabourSchema);
