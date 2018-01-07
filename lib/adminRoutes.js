import React      from 'react';
import { mount }  from 'react-mounter';

import DashboardLayout from '/imports/adminDashboard/dashboard/components/DashboardLayout.jsx';
import AdminContent from '/imports/adminDashboard/dashboard/components/AdminContent.jsx';
import AddNewProdutsContainer from '/imports/adminDashboard/products/components/AddNewProduts.jsx';
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