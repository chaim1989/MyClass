const express = require("express");
var app = express();
app.use(express.static(__dirname+"/public"));
app.post("/login",function(request,response){
    console.log("usernamerequest.body.username);
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
