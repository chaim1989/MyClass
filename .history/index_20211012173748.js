const express = require("express");
var app = express();
app.use(function(req,res,next){
    console.log("req",req.url);
})
app.use(express.json());
app.use(express.static(__dirname+"/public"));
app.post("/login",function(request,response){
    console.log("username:" + request.body?.username);
})
// app.get("/",function(request,response){
//     // response.sendFile(__dirname+"/public/index.html");
//     response.send("helloworld");
// })
// app.get("/script.js",function(request,response){
//     response.sendFile(__dirname+"/public/script.js");
// })
// app.get("/goodbye",function(request,response){
//     response.send("goodbye");
// })
app.listen(3000);
