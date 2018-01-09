import React,{Component} from 'react';
import { render } from 'react-dom';
import TrackeReact from 'meteor/ultimatejs:tracker-react';
// import CategoryListPage from './CategoryListPage.jsx';
import { Products } from '/imports/adminDashboard/products/api/products.js';

export default class TopProductsBlock extends TrackeReact(Component){

	constructor(){
		super();
		this.state={
			'subscription':{
				featuredProducts : Meteor.subscribe('featuredProducts'),
			}
		}
	}

	showTopProducts(){
		return Products.find({"topProduct" : true});
	}

	render(){
		return(
			<div>
				<div className="col-lg-12
							col-md-12
							col-sm-12
							col-xs-12 homeTopProdWrap">
					<h4> TOP PRODUCTS </h4>

					<div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">

						{ this.showTopProducts().map( (products,index)=>{
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

					<div className="topProdShowMore col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<button className="btn btn-primary showMoreProd">SHOW MORE</button>
					</div>
				</div>
			</div>
		);
	}
}
