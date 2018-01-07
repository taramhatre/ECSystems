import React      from 'react';
import { mount }  from 'react-mounter';

import DashboardLayout from '/imports/adminDashboard/dashboard/components/DashboardLayout.jsx';
import AdminContent from '/imports/adminDashboard/dashboard/components/AdminContent.jsx';

FlowRouter.route('/adminDashboard', {
    name: 'adminDashboard',
    action: function() {
		mount(DashboardLayout,{
			main:(<AdminContent />),
		})
    }
});