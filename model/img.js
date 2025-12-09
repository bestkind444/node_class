
import mongoose from "mongoose";



const imgSchema = new mongoose.Schema({
    publicId: {
        type: String,
        required: true,

    },
    url: {
        type: String,
        required: true,

    }
});

export const imgTable  = mongoose.model("imgTable", imgSchema);