import { v2 as cloudinary } from "cloudinary";


export const cloudUploadHelper = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ folder: "myImgae", overwrite: true }, (err, result) => {
            if (err) return reject(err);
            resolve(result)
        }).end(fileBuffer)

    })
}




// const storage = multer.memoryStorage();
// const upload = multer({ storage,  limits:{ fileSize: 10 * 1024 * 1024 }, });

// const uploadToCloudinary = (fileBuffer)=> {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload_stream({ folder: "my_app_uploads", resource_type: "image", overwrite:true}, (error, result) => {
//       if (error) return reject(error);
//       if (!result) return reject(new Error("Upload failed"));
//       resolve(result);
//     })
//       .end(fileBuffer)
//   })
// }



// app.post("/uploads", upload.single("image"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "Please upload an image" });
//     }
//     const uploadRes = await uploadToCloudinary(req.file.buffer);
//     const saveToDb =  await imgTable.create({
//         url: uploadRes.secure_url,
//         publicId: uploadRes.public_id
//     });
//     return res.status(201).json({
//       success: true,
//       message: "uploaded successfully",
//       url: saveToDb.url,
//       publicId: saveToDb.publicId
//     })




//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "sever error"
//     })

//   }

// })


