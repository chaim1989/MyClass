const express = require("express");
var app = express();
function(params)
app.get("/",function(request,response){
    response.send("<html><body><u>hello world</u></body></html>");
   
})
app.get("/goodbye",function(request,response){
    response.send("goodbye");
})
app.listen(3000);
