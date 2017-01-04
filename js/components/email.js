var React = require('react');

var Email = function(props) {
    return (
        <div>
            <strong>
            {props.name}
            </strong>
            <p>{props.subject}</p>
        </div>
    );
};

module.exports = Email;