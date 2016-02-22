/**
 * Created by goku on 2/21/16.
 */
Template.login.events({
    'submit .form-signin': function(event){
        var email = event.target.email.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(email, password, function(err){
            if(err){
                event.target.email.value = email;
                event.targetpassword.value = password;
                FlashMessages.sendError(err.reason);
            }else{
                FlashMessages.sendSuccess('You are now logged in');
                Router.go('/dashboard');
            }
        });

        //prevent submit
        return false;

    }
});