var React = require('react');
var ReactDOM = require('react-dom');

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

//create TodoItem
var TodoItem = React.createClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}> <strong>X</strong> </span>
                </div>
            </li>
        );
    },
    //custom functions
    handleDelete: function(){
        this.props.onDelete(this.props.item);
    }
});


ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));

