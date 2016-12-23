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
        todos = todos.map((item) => {
            return(
                <li>{item}</li>
            );
        });//cycling through todos data
        return(
            <div id="todo-list">
                <p>Common plans for a day</p>
                <p>Ok, let's see how {this.state.age} years person spends a day </p>
                <ul>{todos}</ul>
            </div>
        );
    }//render
});


ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));

