Router.configure({
    layoutTemplate: 'layout'
});

//this is checking to see if a user is logged in
var OnBeforeActions = {
    loginRequired: function () {
        if (!Meteor.userId()) {
        Router.go('/');
    }else{
        this.next();
        }
    }
}
//This tells meteor what pages non users cannot see
Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['add_product', 'new_review']
});


Router.map(function(){
   //home
    this.route('home',{
      path: '/',
        template:'home',
        data: function(){
            templateData = {
                products: Products.find({is_featured: '1'})
            };
            return templateData;
        }
    });

    //Products
    this.route('products', {
        path: '/products',
        template: 'products',
        data: function(){
            templateData = {
                products: Products.find()
            };
            return templateData;
        }
    });

    //add product
    this.route('add_product',{
        path:'/add_product',
        template: 'add_product',
        data: function(){
            templateData = {
                categories: Categories.find()
            };
            return templateData;
        }
    });

    //Category Products
    this.route('category_products', {
       path: '/categories/:slug',
        template: 'category_products',
        data: function(){
            templateData = {
                category_products: Products.find({
                    category: this.params.slug
                })
            };
            return templateData;
        }
    });

    //new Review we want to find the id that is provided in the url
    this.route('new_review', {
        path: '/new-review/:_id',
        template: 'new_review',
        data: function(){
            return Products.findOne(this.params._id)
        }
    });


    //Individual product
    this.route('product',{
        path: '/products/:_id',
        template: 'product',
        data: function(){
            return Products.findOne(this.params._id)
        }
    });

});