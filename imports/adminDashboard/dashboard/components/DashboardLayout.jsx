import React from 'react';
import AdminHeader from './AdminHeader.jsx';
import DashboardSidebar from './DashboardSidebar.jsx';
import Adminfooter from './Adminfooter.jsx';
import Fraud from './Fraud.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

export default DashboardLayout = ({loggingIn, main})=>(

	<div className="adminDashboard hold-transition skin-blue fixed sidebar-mini">
		<div className="wrapper">	
			<AdminHeader />
			<DashboardSidebar />
			<div className="content-wrapper">
				{main}
			</div>
			<Adminfooter />
		</div>
	</div>	


); 


