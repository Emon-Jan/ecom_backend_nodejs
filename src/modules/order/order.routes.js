import { Router } from "express";
import * as orderController from "./order.controller";
const routes = Router();

routes.post("/", orderController.storeOrder);

module.exports = routes;
