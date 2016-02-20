Router.configure({
   layoutTemplate: 'layout'
});


Router.map(function(){
   //post route
    this.route('posts',{
        path: '/',
        template: 'posts'
    });


    //About Route
    this.route('about');

    //Profile Route
    this.route('profile');

});

