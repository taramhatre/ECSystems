import React,{Component} from 'react';
import { render } from 'react-dom';
import TrackeReact from 'meteor/ultimatejs:tracker-react';
// import CategoryListPage from './CategoryListPage.jsx';

export default class ContactUsBlock extends TrackeReact(Component){

	constructor(){
		super();
		this.state={
			'subscription':{
				// productData : Meteor.subscribe('allProductData'),
			}
		}

	}
	render(){
		return(
			<div>
				<div className="col-lg-8 col-lg-offset-2
							    col-md-8 col-md-offset-2
							    col-sm-12
							    col-xs-12 homeConatctWrap">
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 contactInWrap">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<h5>EC Systems</h5>
								<div>Pimpri, Pune-410506</div>
								<div>8888433075</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 contactInWrap">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<h5>Timings</h5>
								<div>Mon-Sat 8AM - 8PM</div>
								<div>WE work an all Holidays</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 contactInWrap">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<h5>About Us</h5>
								<div>Supply</div>
								<div>SERVICES</div>
							</div>
						</div>
				</div>
			</div>
		);
	}
}
