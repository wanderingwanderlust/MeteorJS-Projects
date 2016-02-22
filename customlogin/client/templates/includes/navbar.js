/**
 * Created by goku on 2/21/16.
 */
Template.navbar.events({
    'click .logout-btn': function(event){
        Meteor.logout(function(err) {
            if (err) {
            FlashMessages.sendError(err.reason);
        }else
        {
            FlashMessages.sendSuccess('You are now logged out');
            Router.go('/');
        }
        });
    }
});