import { Router } from "express";

import * as userController from "./user.controller";

const routes = Router();

routes.get("/", userController.getAllUsers);
routes.post("/signUp", userController.signUp);

module.exports = routes;
