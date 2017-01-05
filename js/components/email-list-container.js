var React = require('react');
var EmailList = require('./email-list');

var EMAILS = require('../emails');

var EmailListContainer = function(props) {
    return <EmailList emails={EMAILS[props.params.box]} />;
};

module.exports = EmailListContainer;