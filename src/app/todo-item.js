/**
 * Created by Sestri4kina on 25.12.2016.
 */
import React from 'react';
require('./css/todo-item.css');
import Remove from 'react-icons/lib/fa/minus';
import Check from 'react-icons/lib/fa/check';
//create TodoItem
export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
    render(){
        return(
            <li>
                <div className="todo-item">
                    <span className={this.props.item.completed ? "item-name item-completed" : "item-name"}>{this.props.item.value}</span>
                    <span className="item-check" onClick={this.handleCheck}> <Check /> </span>
                    <span className="item-remove" onClick={this.handleDelete}> <Remove /> </span>
                </div>
            </li>
        );
    }
    //custom functions
    handleDelete() {
      var index = parseInt(this.props.index);
      this.props.onDelete(index);
    }

    handleCheck() {
      var index = parseInt(this.props.index);
      this.props.onCheck(index);
    }
}
