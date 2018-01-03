import React, {Component} from 'react';
import {render} from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {PropTypes} from 'prop-types';
export default class Header extends TrackerReact(Component){
	render(){
		return(
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 homeMenuWrap">
				<nav className="navbar navbar-inverse ECSNavbar">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span> 
				      </button>
				      <a className="navbar-brand" href="#">EC-Systems</a>
				    </div>
				    <div className="collapse navbar-collapse" id="myNavbar">
				      <ul className="nav navbar-nav">
				        <li className="active"><a href="#">HOME</a></li>
				        <li><a href="#">SUPPLY</a></li>
				        <li><a href="#">SERVICES</a></li> 
				        <li><a href="#">CONTACT</a></li> 
				      </ul>
				      <ul className="nav navbar-nav navbar-right">
				        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
				        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
				      </ul>
				    </div>
				  </div>
				</nav>
			</div>
			);
	}
}