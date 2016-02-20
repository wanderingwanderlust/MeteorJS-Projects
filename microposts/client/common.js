/**
 * Created by goku on 2/19/16.
 */
//now after publishing on the server we need to subscribe
Meteor.subscribe('posts');
Meteor.subscribe('ProfileImages');
Meteor.subscribe('UserImages');



Meteor.startup(function () {
    AccountsEntry.config({
        //logo: 'logo.png',                          // if set displays logo above sign-in options
        //privacyUrl: '/privacy-policy',             // if set adds link to privacy policy and 'you agree to ...' on sign-up page
        //termsUrl: '/terms-of-use',                 // if set adds link to terms  'you agree to ...' on sign-up page
        homeRoute: '/',                            // mandatory - path to redirect to after sign-out
        dashboardRoute: '/',              // mandatory - path to redirect to after successful sign-in
        //profileRoute: 'profile',                   // if set adds link to User Profile
        passwordSignupFields: 'USERNAME_AND_EMAIL',        // One of 'USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL', 'USERNAME_ONLY', or 'EMAIL_ONLY' (default).
        //showSignupCode: true,                      // when true you need to set the 'signupCode' setting in the server (see below)
        //showOtherLoginServices: true,              // Set to false to hide oauth login buttons on the signin/signup pages. Useful if you are using something like accounts-meld or want to oauth for api access
        //passwordminLength: 7,                      // Password minimun lenght
        //requireOneAlpha: true,                     // enforce the use of at least 1 char [a-z] while building the password
        //requireOneDigit: true,                     // enforce the use of at least 1 digit while building the password
        //requirePasswordConfirmation: true,         // enforce user to confirm password on signUp and resetPassword templates
        waitEmailVerification: false,               // Set to true to wait until newly created user's email has been verified.
        //extraSignUpFields: [{                      // Add extra signup fields on the signup page
            //field: "name",                           // The database property you want to store the data in
            //name: "This Will Be The Initial Value",  // An initial value for the field, if you want one
            //label: "Full Name",                      // The html lable for the field
            //placeholder: "John Doe",                 // A placeholder for the field
            //type: "text",                            // The type of field you want
            //required: true                           // Adds html 5 required property if true
        //}]
    });


    Accounts.ui.config({
        passwordSignupFields: 'USERNAME_AND_EMAIL'
    });
});

//create a global function to get profile image
Template.registerHelper('getProfileImg', function(userId){
    //need to interact with users imagge collection
    var imgUrl = UserImages.findOne({userId: userId}).image;
    return imgUrl;
});

