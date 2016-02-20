/**
 * Created by goku on 2/19/16.
 */
//this allows us to make posts available on the posts.html
Template.posts.helpers({
    posts: function(){
        return Posts.find({}, {sort: {createdAt: -1}});
    }
});