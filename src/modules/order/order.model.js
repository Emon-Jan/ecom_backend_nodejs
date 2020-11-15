import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  orderId: { type: String, unique: true },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "confirm", "cancel"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default model("Order", orderSchema);
