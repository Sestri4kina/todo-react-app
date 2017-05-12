import React from 'react';
import ReactDOM from 'react-dom';
require('./css/index.css');
import {Router, Route, browserHistory, Link} from 'react-router';

import TodoItem from './todo-item';
import AddItem from './add-item';
import About from './about';

class App extends React.Component {
    render(){
        return(
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
        );
    }
}

class TodoComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [
          {index: 1, value: 'solve a task on codewars', completed: false},
          {index: 2, value: 'go for a run', completed: false},
          {index: 3, value: 'write some more code', completed: false}]
        }
    }

    render(){
        var todos = this.state.todos; //local version
        todos = todos.map((item, index) => {
            return(
                <TodoItem
                  item={item}
                  key={index}
                  index={index}
                  onCheck={this.onCheck.bind(this)}
                  onDelete={this.onDelete.bind(this)}
                />
            );
        });
        return(
            <div id="todo-list">
                <Link to={'/about'}>About</Link>
                <h2>Plans</h2>
                <p>Success doesn't just happen. It's planned for.</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd.bind(this)}/>
            </div>
        );
    }//render
    //custom functions
    onCheck(itemIndex) {
      var todos = this.state.todos;
      var item = todos[itemIndex];
      todos.splice(itemIndex, 1);
      item.completed = !item.completed;
      item.completed ? todos.push(item) : todos.unshift(item);
      this.setState({
          todos: todos
      });
    }

    onDelete(itemIndex) {
      var todos = this.state.todos;
        todos.splice(itemIndex, 1);
        this.setState({
            todos: todos
        });
    }

    onAdd(item) {
      var todos = this.state.todos;
        todos.unshift({
          index: todos.length + 1,
          value: item,
          completed: false
        });
        this.setState({
            todos: todos
        })
    }
}


ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
