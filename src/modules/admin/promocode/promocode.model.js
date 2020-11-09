import { Schema, model } from "mongoose";

const promoCodeSchema = new Schema({
  title: {
    type: String,
    min: 4,
    max: 255,
    uppercase: true,
    trim: true,
    required: true,
  },
  useTime: {
    type: Number,
    required: true,
  },
  usage: {
    type: Number,
    required: true,
    default: 0,
  },
  discountRate: {
    type: Number,
    required: true,
  },
  createdDate: { type: Date, required: true, default: Date.now() },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  active: { type: Boolean, default: false, required: true },
});

export default model("Promocode", promoCodeSchema);
