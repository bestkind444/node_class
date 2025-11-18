
import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    carType: {
        type: String, 
        required: true
    },
    yearOfProduction:{
        type: String,
        required: true
    },

    date:{
        type:Date,
        default: Date.now
    }

}, {timestamp: true});

const Car  =  mongoose.model("car", carSchema);
export default Car;