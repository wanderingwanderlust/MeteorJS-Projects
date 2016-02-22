/**
 * Created by goku on 2/21/16.
 */
//after removing autopublish we now need to publish them to show them
Meteor.publish('products', function(){
    return Products.find();
})

Meteor.publish('categories', function(){
    return Categories.find();
})