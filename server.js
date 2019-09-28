//Initial App setup variables
var express = require('express');
var path = require("path")
var PORT = process.env.PORT || 8080;
var app = express();

//This line essentially serves up the 'static' content in our public directory with the rest of the app
//version in 'solved' folder
app.use(express.static(path.join(__dirname, "public")));

//version in 'unsolved' folder
// app.use(express.static("public"));

//parse body of application
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Setup Handlebars as templating engine
var exphbs= require('express-handlebars');

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Import routes(Do this later
var router = require('./controllers/burgers_controller.js')

app.use(router)

//setup listener
app.listen(PORT, function(){
    console.log("Server listening at http://localhost:" + PORT);
})