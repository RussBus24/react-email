var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

var EmailListContainer = require('./components/email-list-container');
var EmailContainer = require('./components/email-container');
var InboxContainer = require('./components/inbox/email-inbox-container');
var SpamContainer= require('./components/spam/email-spam-container');
var App = require('./components/app');
var MailBox = require('./components/mailbox');

var IndexRoute = router.IndexRoute;

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={MailBox} />
            <Route component={MailBox} >
                <Route path="/:box" component={EmailListContainer} />
            </Route>
        </Route>
    </Router>
);
    
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});