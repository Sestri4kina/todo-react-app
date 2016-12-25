/**
 * Created by Sestri4kina on 25.12.2016.
 */
var React = require('react');
import {Link} from 'react-router';

var About = React.createClass({
    render: function(){
        return(
            <div>
                <Link to={'/'}>Home</Link>
                <h2>This is todo-app for those who treasure their time.</h2>
            </div>
        );
    }
});

module.exports = About;
