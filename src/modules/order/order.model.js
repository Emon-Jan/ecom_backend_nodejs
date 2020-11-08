import { Schema, model } from "mongoose";
import shortid from "shortid";

const orderSchema = new Schema({
  orderId: { type: String, default: shortid.generate() },
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
