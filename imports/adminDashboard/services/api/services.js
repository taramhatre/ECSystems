export const Services = new Mongo.Collection("services");

if(Meteor.isServer){

  Meteor.publish("allServices", function(){
    return Services.find({});
  });

  Meteor.publish("findService", function(productsId){
    return Services.find({"_id":productsId});
  });

  Meteor.publish("featuredServices", function(){
    return Services.find({"topService" : true});
  });

}

Meteor.methods({

  'addNewService' : function(formvalues) {
	var productsId = Services.insert({
										'serviceName'      : formvalues.serviceName,
										'shortDescription' : formvalues.shortDescription,
										'description'      : formvalues.description,
										'price'            : parseFloat(formvalues.price),
										'discount'         : parseFloat(formvalues.discount),
										'topService'       : false,
										"createdAt"        : new Date(),
							          }); 
	return productsId;						          	
  },

  'deleteService' : function(dltId) {
	 Services.remove({'_id': dltId}); 				          	
  },

  'updateService' : function(formvalues) {
    Services.update(
      { '_id': formvalues.serviceId },
      {
        $set:{
				'serviceName'      : formvalues.serviceName,
				'shortDescription' : formvalues.shortDescription,
				'description'      : formvalues.description,
				'price'            : parseFloat(formvalues.price),
				'discount'         : parseFloat(formvalues.discount),
	      "updatedAt"        : new Date(),
      } //End of set
    });  	
  },

  'featuredService' : function(serviceId, value) {
    Services.update(
      { '_id': serviceId },
      {
        $set:{
				'topService' : value,
      } //End of set
    });  	
  },

  'BulkServicesCSVUpload': function(data){

    console.log(data.length);
    check( data, Array);

    for ( var i = 0; i < data.length; i++ ){
      var uploadProduct    = data[i];
      var productName      = uploadProduct.productName;
      var brand            = uploadProduct.brand;
      var shortDescription = uploadProduct.shortDescription;
      var materialCare     = uploadProduct.materialCare;
      var description      = uploadProduct.description;
      var price            = uploadProduct.price;
      var discount         = uploadProduct.discount;
      var category         = uploadProduct.category;

      // console.log(Make,Model,Year);
      
      UserSession.set("allProgressbarSession",Meteor.userId()) ; 
      var productsId = Services.insert({ 
              'productName'      : productName,
              'brand'            : brand,
              'shortDescription' : shortDescription,                
              'materialCare'     : materialCare,                 
              'description'      : description,                 
              'price'            : price,                 
              'discount'         : discount,                 
              'category'         : category,                 
              'topProduct'       : false,  
              "createdAt"        : new Date(),               
        });
      UserSession.set("progressbarSession",Meteor.userId());

    }//end of for
  },

});