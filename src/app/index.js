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
        var ager = setTimeout(function(){
            this.setState({
                age: 25
            });
        }.bind(this), 5000);
        return(
            <div id="todo-list">
                <p>My plans for a day</p>
                <p>Ok, let's see how {this.state.age} years person spend a day </p>
                <ul>
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>
                </ul>
            </div>
        );
    }//render
});


ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));

