const fs= require("fs");
const path=require("path")
const fileName=process.argv[2];
const inputFilePath= path.join["input", fileName];
console.log("processing:", inputFilePath);
const data = fs.readFileSync("input/cart.json", "utf-8");
const jsonData= JSON.parse(data); 
console.log(data)
