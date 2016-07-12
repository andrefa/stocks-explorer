var React = require("react");
var StockInfo = require("./StockInfo.jsx");
var AddStock = require("./AddStock.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    <AddStock />
                </div>
                <div className="col-md-6">
                    {
                        this.props.stocks.map(function(stock,index){
                            return(
                                <StockInfo info={stock} key={"stock-"+index} />
                            )
                        })
                    }
                </div>
           </div>
       )
   }
});
