// Destructuring
// async await / promise
// const data = {
//     name: "kingsley",
//     age: 11,
//     state: "Enugu"
// }
// const arr = ["kingsley", "best", "man"];
// const [boy, nam] = arr;
// console.log(nam);

// const { name } = data;
// console.log(name);
// asyc await
// async function asy() {
//    const res = await fetch("name.json");
//    const data = await res.json();

//    console.log(data);  
// }
// asy()
// npm module, require 

// const lodash = require("lodash");
// const arr = ["kingsley", "chimezie", "bestkind", "boy"];
// const result  = lodash.map(arr, lodash.upperCase)
// console.log(result);

// path
// // __fileName __dirname
// console.log(path.format({
//   root: 'C:\\',
//   dir: 'C:\\Users\\USER\\OneDrive\\Desktop\\nodejs_class',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }));
// const path = require("path");
// const fs = require("fs");
// const fname = path.join(__dirname, "data");
// const file = path.join(fname, "example.txt");
// if (fs.existsSync(fname)) {
//    const read =  fs.rmdirSync(fname);
//     console.log("file created successfully");
    
// }

// const http = require("http");

// const server = http.createServer((req, res) => { 
//     const url = req.url;
//     if (url === "/about") {
//         res.writeHead(200, {"content-type": "text/plain"})
//     res.end("hello welcome to nodejs, this is about page")
//     }else if(url === "/users"){
//         res.writeHead(200, {"content-type": "text/plain"})
//     res.end("hello welcome to nodejs, this is users page ")
//     }else{
//         res.writeHead(400, {"content-type": "text/plain"})
//     res.end("404 not found")
//     }



// })


// server.listen(3000, ()=>{
//     console.log("server runing")
// })








