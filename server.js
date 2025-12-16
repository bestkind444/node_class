import Dotenv  from "dotenv";
Dotenv.config();
import express from "express";
import databaseConnection from "./db/db.mongo.js";
import carRouter from "./routes/car.route.js";
import registeredRouter from "./routes/auth.routes.js";
import cors from "cors"
import imgRouter from "./routes/img.routes.js";
import { v2 as cloudinary } from "cloudinary";
databaseConnection();
const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME ,
  api_key: process.env.CLOUD_API_KEY ,
  api_secret: process.env.CLOUD_SECRET_KEY,
  secure: true
});



app.use(cors())

app.use("/api/v2", carRouter);
app.use("/api/v2", registeredRouter);

app.use("/api/v2", imgRouter);
// async  function  deletes(){
// const deleted = await cloudinary.uploader.destroy("myImgae/ekhqlamppabcp0t1e1n3")
// console.log(deleted + "deleted");

// }

// deletes()

app.use(express.json());


app.listen(3000, () =>{
    console.log("server is running");
})
