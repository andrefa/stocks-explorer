var React = require("react");
var ReactDOM = require("react-dom");
var StockList = require("./components/StockList.jsx");
var StockStore = require("./stores/StockStore");

var _stocks = [];
var getStocksCallback = function(stocks){
    console.log(stocks)
    _stocks = stocks;
    render();
};

StockStore.onChange(getStocksCallback);

function render(){
    ReactDOM.render(<StockList stocks={_stocks} />, document.getElementById("container"));
}
