var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Navigation = function(props) {
    return(
        <ul>
            <li><Link to={'/inbox'}>Inbox</Link></li>
            <li><Link to={'/spam'}>Spam</Link></li>
        </ul>
    );
};

module.exports = Navigation;