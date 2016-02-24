Template.myplans.helpers({
    userplans: function(){
        return Subscribers.find({user_id: Meteor.userId()});
    }
});


//delete
Template.myplans.events({
    'click .cancel-plan': function(){
        if(confirm('Are you sure you want to cancel?')){
            Subscribers.remove(this._id);
            toastr.success('Subscription Cancelled');
            return false;
        }
        return false;
    }
});