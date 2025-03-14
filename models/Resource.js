import mongoose from 'mongoose';

const ResourceSchema = new mongoose.Schema({
  category: { type: String, required: true }, // 'Materials', 'Labour', or 'Plant'
  name: { type: String, required: true }, // Name of the resource
  quantity: { type: Number, required: true }, // Quantity of materials/equipment/labour
  dateAdded: { type: Date, default: Date.now }
});

export default mongoose.models.Resource || mongoose.model('Resource', ResourceSchema);
