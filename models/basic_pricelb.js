import mongoose from "mongoose";

const labourRateSchema = new mongoose.Schema({
  description: { type: String, required: true },
  unit: { type: String, required: true },
  price: { type: Number, required: true }
});

// Ensure the model is mapped to the correct collection name
const LabourRate = mongoose.models.LabourRate || mongoose.model("LabourRate", labourRateSchema);

export default LabourRate;