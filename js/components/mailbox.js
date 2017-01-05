var React = require('react');
var router = require('react-router');
var Navigation = require('./navigation');

var MailBox = function(props) {
    return (
        <div>
            <div className="nav">
                <Navigation/>
            </div>
            <div className="boxes">
                {props.children}
            </div>
        </div>
    );
};

module.exports = MailBox;