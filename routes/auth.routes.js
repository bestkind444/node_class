import { Router } from "express";
import { registeredUsers, loginUser } from "../controller/auth.controller.js";
const registeredRouter = Router();

registeredRouter.post("/register-user", registeredUsers);
registeredRouter.post("/login", loginUser);

export default registeredRouter;