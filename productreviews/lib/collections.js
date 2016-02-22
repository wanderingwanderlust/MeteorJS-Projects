/**
 * Created by goku on 2/21/16.
 */
//Categories for our products users cant create categories in this app (relies on admin/programmer)
Categories = new Mongo.Collection('categories');

//Products
Products = new Mongo.Collection('products');

//Product Images
ProductsImages = new FS.Collection('ProductsImages', {
    stores: [new FS.Store.GridFS('ProductsImages')]
});

//after removing insecure images go a little crazy
ProductsImages.allow({
    insert: function(fileId, doc){
         return true;
    },
    download: function(fileId, doc){
        return true;
    }
});