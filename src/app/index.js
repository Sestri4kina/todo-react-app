var React = require('react');
var ReactDOM = require('react-dom');

var TodoComponent = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Want to make a todo-list?</h1>
                <p>{this.props.mssg}</p>
                <p>Title: {this.props.test.title}</p>
                <p>Text: {this.props.test.text}</p>
            </div>
        );
    }
});

var testMessage = {title: "Message", text: "This props works just fine."};
ReactDOM.render(<TodoComponent mssg="Testing props so far." test={testMessage}/>, document.getElementById('todo-wrapper'));

