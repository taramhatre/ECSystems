import React,{Component} from 'react';
import { render } from 'react-dom';
import TrackeReact from 'meteor/ultimatejs:tracker-react';
// import CategoryListPage from './CategoryListPage.jsx';

export default class BrandsBlock extends TrackeReact(Component){

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
				<div className="col-lg-12
								col-md-12
								col-sm-12
								col-xs-12 homeBrandsWrap">
					<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 brandLogoWrap">
						<img src="/img/banner.png"/>
					</div>
				</div>
			</div>
		);
	}
}
