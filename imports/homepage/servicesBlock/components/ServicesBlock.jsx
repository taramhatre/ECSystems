import React,{Component} from 'react';
import { render } from 'react-dom';
import TrackeReact from 'meteor/ultimatejs:tracker-react';
import { Services } from '/imports/adminDashboard/services/api/services.js';

export default class ServicesBlock extends TrackeReact(Component){

	constructor(){
		super();
		this.state={
			'subscription':{
				featuredServices : Meteor.subscribe('featuredServices'),
			}
		}
	}

	showTopServices(){
		return Services.find({"topService" : true});
	}

	render(){
		return(
			<div>
				<div className="col-lg-12
							col-md-12
							col-sm-12
							col-xs-12 homeTopProdWrap">
					<h4> TOP SERVICES </h4>
					<div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">

						{ this.showTopServices().map( (services,index)=>{
							return (
									<div key = {index} className="col-lg-3 col-md-3 col-sm-12 col-xs-12 tupProdOutWrap">
										<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 topProductWrap">
											<div className="productNM"> {services.serviceName} </div>
											<img src="/img/banner.png"/>
											<div className="productPrize"> <i className="fa fa-inr" aria-hidden="true"></i> {services.price}</div>
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
