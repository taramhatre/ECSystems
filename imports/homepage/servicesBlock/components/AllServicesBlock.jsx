import React,{Component} from 'react';
import { render } from 'react-dom';
import TrackeReact from 'meteor/ultimatejs:tracker-react';
import { Services } from '/imports/adminDashboard/services/api/services.js';

export default class AllServicesBlock extends TrackeReact(Component){

	constructor(){
		super();
		this.state={
			'subscription':{
				allServices : Meteor.subscribe('allServices'),
			}
		}
	}

	showAllServices(){
		return Services.find({});
	}

	render(){
		return(
			<div>
				<div className="col-lg-12
							col-md-12
							col-sm-12
							col-xs-12 homeTopProdWrap">
					<h4> ALL SERVICES </h4>
					<div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">

						{ this.showAllServices().map( (services,index)=>{
							return (
									<div key = {index} className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
										<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 tupProdOutWrap">
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 topProductWrap allServicesImg view view-first">
												<div className="productNM"> {services.serviceName} </div>
												<img src={services.serviceImg}/>
												<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mask">
							                        <h2>{services.brand}</h2>
							                        <p>{services.shortDescription}</p>
							                        <h3>Call - 8275453237</h3>
							                        <a href={`/serviceInfo/${services._id}`} className="info">
							                        	<button className="btn btn-danger productBtnReadMore"> Service Details </button>
							                        </a>
							                   	</div>

												<div className="productPrize"> <i className="fa fa-inr" aria-hidden="true"></i> {services.price}</div>
											</div>
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
