import mongoose from "mongoose";
import constant from "./constants";

mongoose.Promise = global.Promise;

mongoose
  .connect(constant.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("...Database Connected...");
  })
  .catch((err) => {
    console.log("Connection falied: ", err);
  });
