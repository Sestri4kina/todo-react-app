/**
 * Created by Sestri4kina on 25.12.2016.
 */
var React = require('react');

var AddItem = React.createClass({
    render: function(){
        return(
            <form id="add-todo">
                <input type="text" required />
                <input type="submit" value="Add a task" />
            </form>
        );
    }
});

module.exports = AddItem;
