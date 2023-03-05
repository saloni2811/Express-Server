const express = require("express");

const app = express();

app.get("/" , function(req , res){
    res.send("<h1>Hello, World!</h1>");
});

app.get("/contacts" , function(req, res){
    res.send("Contact me at saloni@gmail.com");
});

app.get("/about", function(req, res){
    res.send("Hello, I am Saloni Singh. I am a UG student.");
});
app.get("/hobbies" , function(req, res){
    res.send("<ul><li>coffee</li> <li>Code</li> <li>Beer</li></ul>");
});


app.listen(5500 , function() {
    console.log("My server started on port 5500.")
});