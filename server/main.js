import '/imports/adminDashboard/category/api/category.js';
import '/imports/adminDashboard/products/api/products.js';
import '/imports/adminDashboard/services/api/services.js';
import '/imports/adminDashboard/companySettings/api/companySettings.js';
import '/imports/adminDashboard/brands/api/brands.js';
import '/imports/adminDashboard/slideshow/api/slideshow.js';
import '/imports/adminDashboard/slideshow/api/tempLogoImage.js';

Meteor.startup(() => {
  // code to run on server at startup

    if ( !Meteor.users.findOne({roles : 'admin'})) {
    
    adminId = Accounts.createUser({
              username : 'ECSystemAdmin',
              email    : 'ecsystem@gmail.com',
              password : 'ecadmin@123',
          });

    Roles.addUsersToRoles(adminId, "admin");

    } // Create admin
});
