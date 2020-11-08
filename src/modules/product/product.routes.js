import { Router } from "express";

import * as productController from "./product.controller";

const routes = Router();

routes.get("/", productController.getAllProducts);

module.exports = routes;
