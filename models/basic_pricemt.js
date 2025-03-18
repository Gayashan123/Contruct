import mongoose from "mongoose";

const materialRateSchema = new mongoose.Schema({
  Trade: { type: String, required: true },
  Material: { type: String, required: true },
  unit: { type: String, required: true },
  basic_price: { type: Number, required: true },
});

// Ensure the model is mapped to the correct collection name
const MaterialRate = mongoose.models.MaterialRate || mongoose.model("MaterialRate", materialRateSchema);

export default MaterialRate;