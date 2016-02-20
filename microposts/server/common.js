/**
 * Created by goku on 2/19/16.
 */
//after removing autopblish nothing is posted so we need to publish our posts

Meteor.publish('posts', function(){
   return Posts.find();
});


//we need to do the same for profile images
Meteor.publish('ProfileImages', function(){
    return ProfileImages.find();
});

//let do it again for the users
Meteor.publish('UserImages', function(){
    return UserImages.find();
});