const express = require("express");
const ejs = require("ejs");

const app = express();

//Setup pages (views) with ejs and bodyParser
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

///////// Home Screen /////////
app.get("/", (req, res)=>{
   res.render("home"); 
});












app.listen(3000, ()=>{
    console.log("Server has started on port 3000")
});