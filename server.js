var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');
var router = express.Router();
var connection = require('./config/connection.js');
var methodOverride = require("method-override");
var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



var routes = require("./controllers/burger_controller.js");

app.use("/", routes);


app.listen(port);