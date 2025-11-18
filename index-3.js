// const express = require("express");
// const mongoose = require("mongoose")
// const app = express()

// mongoose.connect("mongodb+srv://ayoguchimezie00_db_user:ayoguchimezie00_db_4444@cluster0.9d51xsk.mongodb.net/?appName=Cluster0").then(() => console.log("database connected successfully")).catch(err => console.log(err))


// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number,
//     isActive: Boolean,
//     tags: [String],
//     date: { type: Date, default: Date.now }

// });

// const User = mongoose.model("User", userSchema);

// async function queryUserTable() {
//     try {
//         const newUser = await User.create({
//             name: "john",
//             email: "john44400@gmail.com",
//             age: 14,
//             isActive: true,
//             tags: ["nodejs", "reactjs", "php"],
//         })

//         const allUsers = await User.findByIdAndDelete(newUser._id);
//         console.log(allUsers);
        

//         // console.log(newUser);


//     } catch (error) {
//         console.log(error);

//     }

// }
// // queryUserTable()
// const fectAllusers = async () => {
//     try {

//         const allUsers = await User.findOne({name:"mezie"});

//         console.log(allUsers);


//     } catch (error) {
//         console.log(error);

//     }

// }

// fectAllusers();
import { add } from "./index-2.js";
console.log(add(2, 8));



// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`server running on ${PORT}`);

// })