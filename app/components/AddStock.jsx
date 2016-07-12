var React = require("react");
var actions = require("../actions/StockActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          price:""
      }
    },
    addStock:function(e){
        e.preventDefault();
        actions.addStock(this.state);
        this.state = {
            name:"",
            price:""
        };
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addStock}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Stock Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Stock Name" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="price">Price:</label>
                    <input type="number" className="form-control" id="price" name="price" value={this.state.price} onChange={this.handleInputChange} placeholder="Price" />
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Stock</button>
                </div>
            </form>
        )
    }
})
