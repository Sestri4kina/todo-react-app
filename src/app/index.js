var React = require('react');
var ReactDOM = require('react-dom');

var TodoComponent = React.createClass({
    render: function(){
        return <h1>Hello there!</h1>;
    }
});

ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));

