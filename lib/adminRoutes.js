import React      from 'react';
import { mount }  from 'react-mounter';

import DashboardLayout from '/imports/adminDashboard/dashboard/components/DashboardLayout.jsx';
import AdminContent from '/imports/adminDashboard/dashboard/components/AdminContent.jsx';
import AddNewProdutsContainer from '/imports/adminDashboard/products/components/AddNewProduts.jsx';
import AddNewServiceContainer from '/imports/adminDashboard/services/components/AddNewService.jsx';
import ServicesList from '/imports/adminDashboard/services/components/ServicesList.jsx';
import FeaturedServices from '/imports/adminDashboard/services/components/FeaturedServices.jsx';
import BulkServiceUpload from '/imports/adminDashboard/services/components/BulkServiceUpload.jsx';
import ProductsList from '/imports/adminDashboard/products/components/ProductsList.jsx';
import FeaturedProducts from '/imports/adminDashboard/products/components/FeaturedProducts.jsx';
import BulkUploadProducts from '/imports/adminDashboard/products/components/BulkUploadProducts.jsx';
import AddNewCategoryContainer from '/imports/adminDashboard/category/components/AddNewCategory.jsx';
import CompanySettingsContainer from '/imports/adminDashboard/companySettings/components/CompanySettings.jsx';

FlowRouter.route('/adminDashboard', {
    name: 'adminDashboard',
    action: function() {
		mount(DashboardLayout,{
			main:(<AdminContent />),
		})
    }
});

FlowRouter.route('/addNewProducts', {
    name: 'add new products',
    action: function() {
		mount(DashboardLayout,{
			main:(<AddNewProdutsContainer />),
		})
    }
});

FlowRouter.route('/addNewProducts/:productId', {
    name: 'update product',
    action: function() {
		mount(DashboardLayout,{
			main:(<AddNewProdutsContainer />),
		})
    }
});

FlowRouter.route('/addNewService', {
    name: 'add new Service',
    action: function() {
		mount(DashboardLayout,{
			main:(<AddNewServiceContainer />),
		})
    }
});

FlowRouter.route('/addNewService/:serviceId', {
    name: 'update Service',
    action: function() {
		mount(DashboardLayout,{
			main:(<AddNewServiceContainer />),
		})
    }
});

FlowRouter.route('/addNewProductCategory', {
    name: 'add new category',
    action: function() {
		mount(DashboardLayout,{
			main:(<AddNewCategoryContainer />),
		})
    }
});

FlowRouter.route('/addNewProductCategory/:categoryId', {
    name: 'add new category',
    action: function() {
		mount(DashboardLayout,{
			main:(<AddNewCategoryContainer />),
		})
    }
});

FlowRouter.route('/viewAllProducts', {
    name: 'view All Products',
    action: function() {
		mount(DashboardLayout,{
			main:(<ProductsList />),
		})
    }
});

FlowRouter.route('/viewAllServices', {
    name: 'view All Services',
    action: function() {
		mount(DashboardLayout,{
			main:(<ServicesList />),
		})
    }
});

FlowRouter.route('/featuredProducts', {
    name: 'Featured Products',
    action: function() {
		mount(DashboardLayout,{
			main:(<FeaturedProducts />),
		})
    }
});

FlowRouter.route('/featuredServices', {
    name: 'Featured Services',
    action: function() {
		mount(DashboardLayout,{
			main:(<FeaturedServices />),
		})
    }
});

FlowRouter.route('/BulkUploadProducts', {
    name: 'Bulk Upload Products',
    action: function() {
		mount(DashboardLayout,{
			main:(<BulkUploadProducts />),
		})
    }
});

FlowRouter.route('/BulkUploadServices', {
    name: 'Bulk Upload Services',
    action: function() {
		mount(DashboardLayout,{
			main:(<BulkServiceUpload />),
		})
    }
});

FlowRouter.route('/companySettings', {
    name: 'CompanySettings',
    action: function() {
		mount(DashboardLayout,{
			main:(<CompanySettingsContainer />),
		})
    }
});