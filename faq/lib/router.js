/**
 * Created by goku on 2/19/16.
 */
Router.configure({
   layoutTemplate: 'layout'
});


Router.map(function(){
    //Home Route
    this.route('questions', {
        path: '/',
        template: 'questions'
    });
});