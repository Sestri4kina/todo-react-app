var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');
import {Router, Route, browserHistory, Link} from 'react-router';

var TodoItem = require('./todo-item');
var AddItem = require('./add-item');
var About = require('./about');

var App = React.createClass({
    render: function(){
        return(
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
        );
    }
});

var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['solve a task', 'go for a run', 'write some more code']
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
                <Link to={'/about'}>About</Link>
                <h2>Plans</h2>
                <p>Success doesn't just happen. It's planned for.</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd}/>
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
    },
    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    }
});


ReactDOM.render(<App />, document.getElementById('todo-wrapper'));

