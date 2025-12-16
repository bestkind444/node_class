import { cloudUploadHelper } from "../helper/cloud.helper.js";
import multer from "multer";
import { imgTable } from "../model/img.js";

const storage = multer.memoryStorage();
export const upload = multer({ storage });
console.log(upload);


export const uploadController = async (req, res) => {
    try {
        // console.log(req.file);
        
        const resFromCloud = await cloudUploadHelper(req.file.buffer);
       
        if (!resFromCloud) {
            return res.status(400).json({
                success: false,
                message: "failed to upload to cloud"
            });
        }
        return res.status(201).json({
            success:true,
            message:"image uploaded successfully",
            data:{
                imgUlr: resFromCloud.secure_url,
                publicId: resFromCloud.public_id
            }
        })
        





    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "server error"
        });

    }




}