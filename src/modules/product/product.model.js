import { Schema, model } from "mongoose";

const productSchema = new Schema({
  pName: {
    type: String,
    min: 2,
    max: 255,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: Number,
  shippingCharge: Number,
  color: String,
  size: String,
  active: { type: Boolean, default: true },
});

export default model("Product", productSchema);
