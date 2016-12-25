/**
 * Created by Sestri4kina on 25.12.2016.
 */
var React = require('react');
require('./css/todo-item.css');

//create TodoItem
var TodoItem = React.createClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-remove" onClick={this.handleDelete}> <strong>X</strong> </span>
                </div>
            </li>
        );
    },
    //custom functions
    handleDelete: function(){
        this.props.onDelete(this.props.item);
    }
});

module.exports = TodoItem;