import { Router } from "express";

import * as productController from "../product/product.controller";
import * as userController from "../user/user.controller";
import * as promoCodeController from "../promocode/promocode.controller";
import * as orderController from "../order/order.controller";
import { auth } from "../../middleware/auth";

const routes = Router();

routes.post("/login", userController.loginForAdmin);

// admin product routes
routes.get("/products", auth, productController.getAllProducts);
routes.post("/product", auth, productController.createProduct);
routes.put("/product/edit/:id", auth, productController.editProduct);

// admin promocode routes
routes.get("/promocodes", auth, promoCodeController.getAllPromoCodes);
routes.post("/promocode", auth, promoCodeController.createPromoCode);
routes.put("/promocode/edit/:id", auth, promoCodeController.editPromoCode);
routes.patch("/promocode/:id", auth, promoCodeController.setActive);

//admin order routes
routes.get("/orders", auth, orderController.getAllOrders);
routes.patch("/order/:id", auth, orderController.setOrderStatus);

module.exports = routes;
