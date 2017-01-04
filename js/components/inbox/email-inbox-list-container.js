var React = require('react');
var InboxList = require('./email-inbox-list');

var EMAILS = require('../../emails');

var InboxListContainer = function() {
    return <InboxList emails={EMAILS} />;
};

module.exports = InboxListContainer;