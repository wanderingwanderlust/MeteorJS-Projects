//add events to submit form
Template.profile.events({
    'submit .edit-profile': function(event){
        //grabs file we are submitting
        var file = $('#profileImage').get(0).files[0];
        //console.log(file);
        if(file) {
            fsFile = new FS.File(file);

            ProfileImages.insert(fsFile, function (err, result) {
                if (err) {
                    throw new Meteor.Error(err);
                } else {
                    //create url for image
                    var imageLoc = '/cfs/files/ProfileImages/' + result._id;

                    UserImages.insert({
                        userId: Meteor.userId(),
                        username: Meteor.user().username,
                        image: imageLoc
                    });

                    Router.go('/');
                }
            });
        }

        //stops form from submitting
        return false;
    }
});