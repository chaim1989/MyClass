const express = require("express");
var app = express();

app.get("/",function(request,response){
    response.send("hello world");
})
app.get("/googbye",function(request,response){
    response.send("hello world");
})
app.listen(3000);
