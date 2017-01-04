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

var IndexRoute = router.IndexRoute;

var routes = (
    <Router history={hashHistory}>
        <Route path="/emails" component={App}>
            <IndexRoute component={EmailListContainer} />
            <Route path=":emailId" component={EmailContainer} />
        </Route>
        <Route path="/emails/inbox" component={App}>
            <Route path="/" component={InboxContainer} />
        </Route>
        <Route path="/email/spam" component={App}>
            <Route path="/" component={SpamContainer} />
        </Route>
    </Router>
);
    
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});