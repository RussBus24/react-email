var React = require('react');

var EMAILS = require('../emails');
var Email = require('./email');

var EmailContainer = function(props) {
    var email = EMAILS.inbox[props.params.emailId];
    return <Email id={email.id} name={email.from} subject={email.title}
                />;
};

module.exports = EmailContainer;