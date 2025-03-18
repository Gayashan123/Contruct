import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
  description: { type: String, required: true },
  basic_price: { type: Number, required: true }
});

const Plant = mongoose.models.Plant || mongoose.model("Plant", plantSchema);

export default Plant;
