import { Router } from "express";
import { carCreated, getAllCars, updatecars, deletedCars } from "../controller/car.controller.js";
const carRouter = Router();

carRouter.post("/create-car", carCreated);
carRouter.get("/get-all-cars", getAllCars);
carRouter.put("/update/:id", updatecars);
carRouter.delete("/delete/:id", deletedCars)




export default carRouter;

