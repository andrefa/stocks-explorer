var dispatcher = require("../dispatcher");
var stockService = require("../services/stockService");

function StockStore() {
    var listeners = [];

    function onChange(listener) {
        getStocks(listener);
        listeners.push(listener);
    }

    function getStocks(cb) {
        stockService.getStocks().then(function (res) {
            cb(res);
        });
    }

    function addStock(stock) {
        stockService.addStock(stock).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteStock(stock) {
        stockService.deleteStock(stock).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getStocks(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "stock") {
            switch (split[1]) {
                case "addStock":
                    addStock(payload.stock);
                    break;
                case "deleteStock":
                    deleteStock(payload.stock);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    };
}

module.exports = StockStore();
