var mongoose = require("mongoose");

var stockSchema = mongoose.Schema({
    name: String,
    price: Number
});

module.exports = mongoose.model("stock", stockSchema);
