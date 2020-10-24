import mongoose from "mongoose";
import constant from "./constants";

mongoose.Promise = global.Promise;

const MONGO_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useMongoClient: true,
};

mongoose
  .connect(constant.DB_URI, MONGO_OPTIONS)
  .then(() => {
    debug("...Database Connected...");
  })
  .catch((err) => {
    debug("Connection falied: ", err);
  });
