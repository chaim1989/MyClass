const express = require("express");
var app = express();
app.use(express.static())
// app.get("/",function(request,response){
//     response.sendFile(__dirname+"/public/index.html");

// })
// app.get("/script.js",function(request,response){
//     response.sendFile(__dirname+"/public/script.js");
// })
// app.get("/goodbye",function(request,response){
//     response.send("goodbye");
// })
app.listen(3000);
