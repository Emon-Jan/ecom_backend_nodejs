import { Router } from "express";
import * as orderController from "./order.controller";

const routes = Router();

routes.post("/", orderController.createOrder);

module.exports = routes;
