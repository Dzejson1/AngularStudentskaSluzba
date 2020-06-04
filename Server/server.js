const express = require("express");
const bodyParser=require("body-parser");
const predmet=require("./routes/predmet");
const profesor=require("./routes/profesor");

const mysqlConnection=require("./connection")

var app=express();
app.use(bodyParser.json());
app.use("/profesor",profesor);
app.listen(3000); 
