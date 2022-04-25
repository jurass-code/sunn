import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  category: [{ type: String, required: true }],
  description: [{ type: String, required: true }],
  price: { type: Number, required: true },
  photos: [{ type: String, default: null }],
  isActive: { type: Boolean, default: true },
  isReserved: { type: Boolean, default: false },
  excerpt: { type: String, required: true },
  compositionCare: [{ type: String, required: true }],
});

export default mongoose.model("Product", schema);
