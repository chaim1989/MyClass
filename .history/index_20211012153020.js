const express = require("express");
var app = express();

app.get("/",function(request,response){
    response.send("hello world");
})
app.get("/goodbye",function(request,response){
    response.send("goodbye");
})
app.listen(3000);
