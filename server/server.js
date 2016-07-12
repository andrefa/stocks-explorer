var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//controllers
var stockController = require("./controllers/stockController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json());
app.use("/api", stockController);

app.listen(3000, function () {
    console.log("Started listening on port", 3000);
});

// Connect to mongodb database
mongoose.connect("mongodb://stock-explorer:stock-explorer@ds055855.mlab.com:55855/stock-explorer");
