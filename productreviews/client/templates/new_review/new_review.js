/**
 * Created by goku on 2/21/16.
 */
//Events
Template.new_review.events({
    'submit .new-review': function(event){
        var rating = event.target.rating.value;
        var body = event.target.body.value;

        //we need to do the same here after removing insecure
        //update products with review
        /*
        Products.update({
            //which product?
            _id: this._id
        },{
           $push:{
               reviews:{
                   rating: rating,
                   body: body
               }
           }
        });*/
        //we now need to call it after moving the above to methods
        Meteor.call('addReview', this._id, rating, body);

        FlashMessages.sendSuccess("Review Added");
        Router.go('/');

        return false;
    }
});