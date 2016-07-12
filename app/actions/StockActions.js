var dispatcher = require("../dispatcher");

module.exports = {
    addStock:function(stock){
        dispatcher.dispatch({
           stock:stock,
           type:"stock:addStock"
        });
    },
    deleteStock:function(stock){
        dispatcher.dispatch({
           stock:stock,
           type:"stock:deleteStock"
        });
    }
};
