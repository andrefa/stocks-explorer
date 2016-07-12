var mongoose = require("mongoose");
var Stock = require("../data/stock");
var _ = require("underscore");
var router = require("express").Router();

router.route("/stocks/:id?")
    .get(getStocks)
    .post(addStock)
    .delete(deleteStock);

function getStocks(req, res) {
    Stock.find(function (err, stocks) {
        answer(res, err, stocks);
    });
}

function addStock(req, res) {
    var stock = new Stock(_.extend({}, req.body));
    stock.save(function (err) {
        answer(res, err, stock);
    });
}

function deleteStock(req, res) {
    var id = req.params.id;
    Stock.remove({ _id: id }, function (err, removed) {
        answer(res, err, removed);
    });
}

function answer(res, err, val) {
    if (err)
        res.send(err);
    else
        res.json(val);
}

module.exports = router;
