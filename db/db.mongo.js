import mongoose from "mongoose";

async function databaseConnection() {
    try {
        // DATABASE_URL
    await mongoose.connect(process.env.DATABASE_URL);
      console.log("database connected successfully");
      
    } catch (error) {
        console.log(error);
        
    }
}

export default databaseConnection;