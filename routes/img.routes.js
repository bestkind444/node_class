import { uploadController, upload } from "../controller/imgUpload.controller.js";
import multer from "multer";
import { Router } from "express";

const imgRouter = Router();

imgRouter.post("/uploads", upload.single("image"), uploadController)

export default imgRouter