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
	
					        <li class="treeview">
					          <a href="#">
					            <i class="fa fa-product-hunt" aria-hidden="true"></i>
					            <span>Products</span>
					            <span class="pull-right-container">
					              <i class="fa fa-angle-left pull-right"></i>
					            </span>
					          </a>
					          <ul class="treeview-menu">
					            <li><a href="/featuredexclusivetab"><i class="fa fa-circle-o"></i> Exclusive/Featured </a></li>
					            <li><a href="/categoryReqInfo"><i class="fa fa-circle-o"></i> All Categories</a></li>
					            <li><a href="/viewAllProducts"><i class="fa fa-circle-o"></i> Product List</a></li>
					            <li><a href="/newProductsInfo"><i class="fa fa-circle-o"></i>Add New Product</a></li>
					            <li><a href="/updatebulkProductDetails"><i class="fa fa-circle-o"></i>Update Bulk Product Details</a></li>
					            <li><a href="/productsCategory"><i class="fa fa-circle-o"></i>Add New Category</a></li>
					            
					          </ul>
					        </li>

					        <li class="treeview">
					          <a href="#">
					            <i class="fa fa-product-hunt" aria-hidden="true"></i>
					            <span>Services</span>
					            <span class="pull-right-container">
					              <i class="fa fa-angle-left pull-right"></i>
					            </span>
					          </a>
					          <ul class="treeview-menu">
					            <li><a href="/viewAllProducts"><i class="fa fa-circle-o"></i> Services List</a></li>
					            <li><a href="/newProductsInfo"><i class="fa fa-circle-o"></i>Add New Service</a></li>
					            
					          </ul>
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