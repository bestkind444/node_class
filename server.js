import Dotenv  from "dotenv";
Dotenv.config();
import express from "express";
import databaseConnection from "./db/db.mongo.js";
import carRouter from "./routes/car.route.js";
import registeredRouter from "./routes/auth.routes.js";
databaseConnection()
const app = express()

// use middleware 
app.use(express.json());

app.use("/api/v2", carRouter);
app.use("/api/v2", registeredRouter)









app.listen(3000, () =>{
    console.log("server is running");
})
// Crud