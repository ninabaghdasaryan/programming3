// var os = require("os");
// var message = "The platform is ";

// function main(){
// console.log(message + os.hostname());
// }


// var express = require("express");
// var app = express();

// app.get("/", function(req, res){

// res.send("Hello world");

// });

// app.listen(3000, function(){
// console.log("Example is running on port 3000");
// });

// var express = require("express");
// var app = express();

// app.get("/valod", function(req, res){
// res.send("<h1>Valod jan</h1>");

// });

// app.get("/name/:akula", function(req, res){
// var name = req.params.akula;
// res.send("<h1>Hello " + pix +"</h1>");

// });

// app.listen(3000, function(){
// console.log("Example is running on port 3000");
// });

// var express = require("express");
// var app = express();

// app.get("/google", function(req, res){
// res.redirect("https://google.com/")

// });

// app.get("/google/:name", function(req, res){
// let searchvalue = req.params.name;
// res.redirect(301, 'https://google.com/search?q=' + searchvalue)


// });

// app.listen(3000, function(){
// console.log("Example is running on port 3000");

// });

var express = require("express");
var app = express();
app.use(express.static("."));

app.get("/", function(req, res){
res.redirect("index.html");
});

app.listen(3000, function(){
console.log("Example is running on port 3000");

});