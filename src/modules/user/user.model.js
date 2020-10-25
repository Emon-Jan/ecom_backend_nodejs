import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    min: 4,
    max: 255,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    min: 4,
    max: 255,
    required: true,
  },
  phone: {
    type: String,
    min: 4,
    max: 255,
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
