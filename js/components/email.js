var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Email = function(props) {
    return (
        <div>
            <strong>
            <Link to={'/' + props.id}>{props.name}</Link>
            </strong>
            <p>{props.subject}</p>
        </div>
    );
};

module.exports = Email;