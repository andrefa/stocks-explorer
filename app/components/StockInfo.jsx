var React = require("react");
var actions = require("../actions/StockActions");

module.exports = React.createClass({
    deleteStock: function(e){
        e.preventDefault();
        actions.deleteStock(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteStock}>&times;</span>
                </div>
                <div className="panel-body">
                    {this.props.info.price}
                </div>
            </div>
        )
    }
})
