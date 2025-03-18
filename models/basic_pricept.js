import mongoose from "mongoose";

const labourSchema = new mongoose.Schema({
  description: { type: String, required: true },
  basic_price: { type: Number, required: true }
});

const Basicprice_lbData = mongoose.models.Basicprice_lbData || mongoose.model("Basicprice_lbData", labourSchema);

export default Basicprice_lbData;
