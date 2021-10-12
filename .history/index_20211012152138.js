//console.log("hello World");\
const express = require("express");
//console.log(express);
var app = express();
app.get("/",(request,response)=>{
    response.send("hello world")
})
app.listen(3000);
