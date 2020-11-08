import { Router } from "express";

import * as userController from "./user.controller";

const routes = Router();

routes.post("/signUp", userController.signUp);

module.exports = routes;
