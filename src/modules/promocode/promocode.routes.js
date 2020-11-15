import { Router } from "express";

import * as promoCodeController from "./promocode.controller";

const routes = Router();

routes.post("/", promoCodeController.applyPromocode);

module.exports = routes;
