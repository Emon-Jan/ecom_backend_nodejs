import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import createError from "http-errors";
import express, { Router } from "express";
import cors from "cors";
import logger from "morgan";
import path from "path";

import "../config/database";
import modules from "./modules";

const app = express();

app.use(logger("dev"));
app.use(cors({ origin: true }));
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "30mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Passing the express instance to modules for handling requests
modules(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
