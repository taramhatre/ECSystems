import React      from 'react';
import { mount }  from 'react-mounter';

import DashboardLayout from '/imports/adminDashboard/dashboard/components/DashboardLayout.jsx';
import AdminContent from '/imports/adminDashboard/dashboard/components/AdminContent.jsx';
import AddNewProdutsContainer from '/imports/adminDashboard/products/components/AddNewProduts.jsx';
import ProductsList from '/imports/adminDashboard/products/components/ProductsList.jsx';
import FeaturedProducts from '/imports/adminDashboard/products/components/FeaturedProducts.jsx';
import BulkUploadProducts from '/imports/adminDashboard/products/components/BulkUploadProducts.jsx';
import AddNewCategoryContainer from '/imports/adminDashboard/category/components/AddNewCategory.jsx';

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

FlowRouter.route('/featuredProducts', {
    name: 'Featured Products',
    action: function() {
		mount(DashboardLayout,{
			main:(<FeaturedProducts />),
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