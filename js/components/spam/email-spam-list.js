var React = require('react');
var Email = require('./email');

var SpamList = function(props) {
    var emails = Object.keys(props.emails.spam).map(function(emailId, index) {
            var email = props.emails.inbox[emailId];
        return (
            <li key={index}>
                <Email id={email.id} name={email.from} subject={email.title}
                />
            </li>
        );
    });
    
    return (
        <ul>
            {emails}
        </ul>
    );
};

module.exports = SpamList;