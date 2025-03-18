import mongoose from 'mongoose';

// Define the schema for MaterialRate
const MaterialRateSchema = new mongoose.Schema({
  Item_No: { type: String, required: true },       // Item number
  description: { type: String, required: true },    // Description of the material
  Code_no: { type: String, required: true },        // Code number of the material
  unit: { type: String, required: true },           // Unit of measurement
  price: { type: Number, required: true }           // Price of the material
});

// Check if the model already exists and export it
export default mongoose.models.Material_Rate ||
  mongoose.model('Material_Rate', MaterialRateSchema);