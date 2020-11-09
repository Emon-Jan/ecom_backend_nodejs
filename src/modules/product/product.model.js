import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    min: 2,
    max: 255,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  discount: Number,
  shippingCharge: Number,
  color: String,
  size: String,
  active: { type: Boolean, default: false },
});

export default model("Product", productSchema);
