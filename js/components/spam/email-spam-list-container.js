var React = require('react');
var SpamList = require('./email-spam-list');

var EMAILS = require('../../emails');

var SpamListContainer = function() {
    return <SpamList emails={EMAILS} />;
};

module.exports = SpamListContainer;