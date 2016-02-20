/**
 * Created by goku on 2/19/16.
 */
//Profile Images collection
ProfileImages = new FS.Collection('ProfileImages', {
    stores: [new FS.Store.GridFS('ProfileImages')]
});

//after removing insecure our images dissapear so we need to allow it
ProfileImages.allow({
    insert: function(userId,doc){
        return true;
    },
    update: function(userId,doc,fields,modifier){
        return true;
    },
    //remove: function(userId,doc){
    //    return true;
    //},
    download: function(){
        return true;
    }
});



//Desginate Image for individual user
UserImages = new Mongo.Collection('UserImages');

//Creating Posts
Posts = new Mongo.Collection('posts');

//create schema for our database
Posts.attachSchema(new SimpleSchema({
    body: {
        type: String,
        max: 500
    },
    userId:{
        type: String,
        //to help with autoform we need to create autovalues
        autoValue: function(){return Meteor.userId()}
    },
    username:{
        type:String,
        autoValue: function(){return Meteor.users.findOne({_id:this.userId}).username}
    },
    createdAt:{
        type: Date,
        autoValue: function(){return new Date()}

    }
}));

//now we need to allow posts to be posted after removing insecure
Posts.allow({
    insert: function(userId,doc){
        return true;
    }
    /*update: function(userId,doc,fields,modifier){
        return true;
    },
    //remove: function(userId,doc){
    //    return true;
    //},
    download: function(){
        return true;
    }*/
});