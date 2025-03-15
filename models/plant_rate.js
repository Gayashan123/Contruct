import mongoose from 'mongoose';

const PlantRateSchema = new mongoose.Schema({
  Item_No: { type: String, required: true },
  description: { type: String, required: true },
  Code_no: { type: String, required: true },
  unit: { type: String, required: true },
  price: { type: Number, required: true }
});

// Export the model to use in the API handler
export default mongoose.models.PlantRate || mongoose.model('PlantRate', PlantRateSchema);
