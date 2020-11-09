import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";
import constant from "../../../config/constants";

const userSchema = new Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    min: 4,
    max: 255,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    min: 4,
    max: 1024,
    required: true,
  },
  phone: {
    type: String,
    min: 7,
    max: 255,
    required: true,
  },
  role: {
    type: String,
    default: "guest",
    enum: ["guest", "user", "admin"],
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

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      userId: this.userId,
      scope: this.role,
    },
    constant.SECRET_KEY
  );
  return token;
};

export default model("User", userSchema);
