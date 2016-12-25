/**
 * Created by Sestri4kina on 25.12.2016.
 */
var React = require('react');
require('./css/add-item.css');

var AddItem = React.createClass({
    render: function(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newItem"/>
                <input type="submit" value="Add a task" />
            </form>
        );
    },
    //custom functions
    handleSubmit: function(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }
});

module.exports = AddItem;
