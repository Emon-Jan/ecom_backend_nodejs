import mongoose from "mongoose";
import constant from "./constants";

const debug = require("debug")("ecommerce-backend:server");

mongoose.Promise = global.Promise;

const MONGO_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

mongoose
  .connect(constant.DB_URI, MONGO_OPTIONS)
  .then(() => {
    debug("...Database Connected...");
  })
  .catch((err) => {
    debug("Connection falied: ", err);
  });
