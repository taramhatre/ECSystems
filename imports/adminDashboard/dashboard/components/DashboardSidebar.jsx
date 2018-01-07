import React, { Component } from 'react';
import { render } from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class DashboardSidebar extends TrackerReact(Component) {

	dashboardLogout(event){
		event.preventDefault();
		Meteor.logout();
		FlowRouter.go('/userlogin');
	}

	render() {

		return(
				<div>
					<aside className="main-sidebar">
						<section className="sidebar">
					      <div className="user-panel">
					        <div className="pull-left image">
					          <img src="/images/User.png" className="img-circle" alt="User Image" />
					        </div>
					        <div className="pull-left info">
					          <p className="adminName">Admin</p>
					        </div>
					      </div>
					      <br/>
					      
					      <ul className="sidebar-menu">
					        
					        <li className="treeview">
					          <a href="/adminDashboard">
					            <i className="fa fa-dashboard"></i> <span>Dashboard</span>
					          </a>
					        </li>
	
					        <li className="treeview">
					          <a href="/adminDashboard">
					            <i className="fa fa-dashboard"></i> <span>Reset Password</span>
					          </a>
					        </li>


					        <li className="treeview">
					          <a href="/addfaq">
					            <i className="fa fa-question-circle"></i>FAQ</a>
					        </li>


					        <li className="treeview">
					          <a href="">
					            <i className="fa fa-sign-out"></i> <span onClick={this.dashboardLogout.bind(this)}>Logout</span></a>
					        </li>					        
					      </ul>
					      <br/>
					      <br/>
					      <br/>
					    </section>
					</aside>
				</div>
			);
	}

}