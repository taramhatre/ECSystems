export const Products = new Mongo.Collection("products");

if(Meteor.isServer){

  Meteor.publish("allProducts", function(){
    return Products.find({});
  });

  Meteor.publish("findProducts", function(productsId){
    return Products.find({"_id":productsId});
  });

}

Meteor.methods({

  'addNewProduct' : function(formvalues) {
	var productsId = Products.insert({
										'productName'      : formvalues.productName,
										'brand'            : formvalues.brand,
										'shortDescription' : formvalues.shortDescription,
										'materialCare'     : formvalues.materialCare,
										'description'      : formvalues.description,
										'price'            : parseFloat(formvalues.price),
										'discount'         : parseFloat(formvalues.discount),
										'category'         : formvalues.category,
										'topProduct'       : false,
										"createdAt"        : new Date(),
							          }); 
	return productsId;						          	
  },

  'deleteProduct' : function(dltId) {
	Products.remove({'_id': dltId}); 				          	
  },

  'updateProduct' : function(formvalues) {
    Products.update(
      { '_id': formvalues.productid },
      {
        $set:{
				'productName'      : formvalues.productName,
				'brand'            : formvalues.brand,
				'shortDescription' : formvalues.shortDescription,
				'materialCare'     : formvalues.materialCare,
				'description'      : formvalues.description,
				'price'            : parseFloat(formvalues.price),
				'discount'         : parseFloat(formvalues.discount),
				'category'         : formvalues.category,
	            "updatedAt"        : new Date(),
      } //End of set
    });  	
  },

});