import { Router } from "express";

import * as productController from "../product/product.controller";
import * as userController from "../user/user.controller";
import * as promoCodeController from "./promocode/promocode.controller";
import { auth } from "../../middleware/auth";

const routes = Router();

routes.post("/login", userController.loginForAdmin);
routes.get("/products", auth, productController.getAllProducts);
routes.post("/product", auth, productController.createProduct);
routes.patch("/product/edit/:id", auth, productController.editProduct);
routes.get("/promocodes", promoCodeController.getAllPromoCodes);
routes.post("/promocode", promoCodeController.createPromoCode);
routes.patch("/promocode/edit/:id", promoCodeController.editPromoCode);

module.exports = routes;
