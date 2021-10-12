const express = require("express");
var app = express();

app.get("/",function(request,response){
    response.send("<html><body><u>hello world</u></body></html>");
   
});

var goodbye = function(request,response){
    response.send("goodbye");
}
app.get("/goodbye",goodbye)
app.listen(3000);
