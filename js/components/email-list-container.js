var React = require('react');
var EmailList = require('./email-list');

var EMAILS = require('../emails');

var EmailListContainer = function() {
    return <EmailList emails={EMAILS} />;
};

module.exports = EmailListContainer;