import React,{Component} from 'react';
import { render } from 'react-dom';
import TrackeReact from 'meteor/ultimatejs:tracker-react';
import { Brands } from '/imports/adminDashboard/brands/api/brands.js';

export default class BrandsBlock extends TrackeReact(Component){

	constructor(){
		super();
		this.state={
			'subscription':{
				allBrands : Meteor.subscribe('allBrands'),
			}
		}
	}

	showBrands(){
		return Brands.find({}).fetch();
	}

	render(){
		return(
			<div>
				<div className="col-lg-12
								col-md-12
								col-sm-12
								col-xs-12 homeBrandsWrap">

						{ this.showBrands().map( (brands,index)=>{
							return (
										<div key={index} className="col-lg-2 col-md-2 col-sm-2 col-xs-2 brandLogoWrap">
											<img src={brands.brandImg}/>
										</div>
								);
						  }) 
						}
				</div>
			</div>
		);
	}
}
