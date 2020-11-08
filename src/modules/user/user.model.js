import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    min: 4,
    max: 255,
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    min: 4,
    max: 255,
    required: true,
  },
  phone: {
    type: String,
    min: 7,
    max: 255,
    required: true,
  },
  address: {
    presentAddress: { type: String },
    parmanentAddress: { type: String },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default model("User", userSchema);
