import React,{Component} from 'react';
import { render } from 'react-dom';
import TrackeReact from 'meteor/ultimatejs:tracker-react';
// import CategoryListPage from './CategoryListPage.jsx';
import { Products } from '/imports/adminDashboard/products/api/products.js';
import { Session } from 'meteor/session';
export default class SearchProductPage extends TrackeReact(Component){

	constructor(){
		super();
		this.state={
			'subscription':{
				allProducts : Meteor.subscribe('allProducts'),
			}
		}
	}

	showAllProducts(){
		var curUrl     = location.pathname;
		var urlArray   = curUrl.split('/');
		var categoryNM = urlArray[2];
		Session.set('categoryNM',categoryNM);
		return Products.find({"category":categoryNM}).fetch();
	}

	render(){
		return(
			<div>
				<div className="col-lg-12
							col-md-12
							col-sm-12
							col-xs-12 homeTopProdWrap ">
					<h4> {Session.get("categoryNM")} PRODUCTS </h4>

					<div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">

						{ this.showAllProducts().map( (products,index)=>{
							return (
										<div key = {index} className="col-lg-3 col-md-3 col-sm-12 col-xs-12 tupProdOutWrap">
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 topProductWrap">
												<div className="productNM"> {products.productName} </div>
												<img src="/img/banner.png"/>
												<div className="productPrize"> <i className="fa fa-inr" aria-hidden="true"></i> {products.price}</div>
											</div>
										</div>
								);
						  }) 
						}	
					</div>
				</div>
			</div>
		);
	}
}
