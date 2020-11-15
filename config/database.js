import { extendWith } from "lodash";
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
    console.log("...Database Connected to:", constant.DB_URI);
  })
  .catch((err) => {
    debug("Connection falied: ", err);
    console.log("...Database connection failed", constant.DB_URI);
    process.exit(1);
  });
