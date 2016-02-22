Template.add_product.events({
    'submit .add_product': function(event){
        //first check for submission
        //console.log("Form Submit");

        var name = event.target.name.value;
        var category = event.target.category.value;
        var description = event.target.description.value;
        var is_featured = event.target.is_featured.value;

        //we set the get and files to 0 because we want to get the first and only image
        var file = $('#productImage').get(0).files[0];

        //after removing insecure we need to move this to our methods.js
        /*if(file){
            fsFile = new FS.File(file);

            ProductsImages.insert(fsFile, function(err, result){
                if(!err){
                    var productImage = '/cfs/files/ProductsImages/'+result._id;

                    Products.insert({
                        name: name,
                        category: category,
                        description: description,
                        is_featured: is_featured,
                        image: productImage,
                        createdAt: new Date()
                    });
                }
            });
        }else{
            var productImage = '/img/noimage.png';

            Products.insert({
                name: name,
                category: category,
                description: description,
                is_featured: is_featured,
                image: productImage,
                createdAt: new Date()
            });
        }
        */
        //now we need to call it
        Meteor.call('addProduct', file, name, category, description, is_featured);

        //clear form
        event.target.name.value = '';
        event.target.category.value = '';
        event.target.description.value = '';
        event.target.is_featured.value = '';

        FlashMessages.sendSuccess("Product Added");
        Router.go('/');

        //don't process form
        return false;
    }
});