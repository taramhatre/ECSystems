export const Categories = new Mongo.Collection("categories");

if(Meteor.isServer){

  Meteor.publish("allCategories", function(){
    return Categories.find({});
  });

}


Meteor.methods({

  'addNewCategory' : function(formvalues) {
	var categoryId = Categories.insert({
								          "categoryName" : formvalues.categoryName,
								          "categoryImg"  : formvalues.categoryImg,
								          "createdAt"    : new Date(),
							          }); 	
  },

});
