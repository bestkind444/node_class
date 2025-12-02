import { Router } from "express";
import { carCreated, getAllCars, updatecars, deletedCars } from "../controller/car.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const carRouter = Router();

carRouter.post("/create-car", authMiddleware, carCreated);
carRouter.get("/get-all-cars", getAllCars);
carRouter.put("/update/:id", updatecars);
carRouter.delete("/delete/:id", deletedCars)




export default carRouter;

