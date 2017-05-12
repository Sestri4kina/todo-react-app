/**
 * Created by Sestri4kina on 25.12.2016.
 */
import React from 'react';
require('./css/add-item.css');

export default class AddItem extends React.Component {
    render(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" required ref="newItem"/>
                <input type="submit" value="Add a task" />
            </form>
        );
    }
    //custom functions
    handleSubmit(e){
        e.preventDefault();
        var newItem = this.refs.newItem.value;
        this.props.onAdd(newItem);
    }
}
