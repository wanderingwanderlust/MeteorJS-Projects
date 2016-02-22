Router.configure({
    layoutTemplate: 'form_layout'
});


Router.map(function(){
   //login home
    this.route('login',{
        path:'/',
        template: 'login'
    });

    //register
    this.route('register');

    this.route('dashboard',{
        layoutTemplate:'dashboard_layout',
        path: '/dashboard',
        template: 'dashboard',
        //on before prevents people who are not users from logging in
        onBeforeAction: function(){
            if(Meteor.user() == null){
                Router.go('/');
            }
            this.next();
        }
    });
});