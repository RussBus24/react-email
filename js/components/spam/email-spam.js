var React = require('react');

var Inbox = function(props) {
    return (
        <div>
            <strong>
            {props.name}
            </strong>
            <p>{props.subject}</p>
            <p>{props.body}</p>
        </div>
    );
};

module.exports = Inbox;