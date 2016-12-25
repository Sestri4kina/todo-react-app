var React = require('react');
var ReactDOM = require('react-dom');
var TodoItem = require('./todo-item');
var AddItem = require('./add-item');
require('./css/index.css');

var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['solve a task', 'go for a run', 'write some more code'],
            age: 29
        }
    },
    render: function(){
        var todos = this.state.todos; //local version
        todos = todos.map((item, index) => {
            return(
                <TodoItem item={item} key={index} onDelete={this.onDelete}/>
            );
        });//cycling through todos data
        return(
            <div id="todo-list">
                <p>Common plans for a day</p>
                <p>Ok, let's see how {this.state.age} years person spends a day </p>
                <ul>{todos}</ul>
                <AddItem />
            </div>
        );
    },//render
    //custom functions
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter((val, index)=> {
            return item !== val;
        });
        this.setState({
            todos: updatedTodos
        });
    }
});


ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));

