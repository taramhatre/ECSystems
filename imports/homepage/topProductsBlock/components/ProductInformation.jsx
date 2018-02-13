import React,{Component} from 'react';
import { render } from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import TrackeReact from 'meteor/ultimatejs:tracker-react';
// import CategoryListPage from './CategoryListPage.jsx';
import { Products } from '/imports/adminDashboard/products/api/products.js';
import { Session } from 'meteor/session';
class ProductInformation extends TrackeReact(Component){

	constructor(){
		super();
	}

	render(){
		return(
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 productInformationPage">
				{this.props.post.productName}
			</div>
		);
	}
}
export default ShowProdutInfoContainer  = withTracker(props => {
  // Do all your reactive data access in this method.
  // Note that this subscription will get cleaned up when your component is unmounted

    var productid      = FlowRouter.getParam("productId");
    console.log(productid);
    const postHandle   = Meteor.subscribe('findProducts',productid);
    const post         = Products.findOne({'_id':productid})||{};
    console.log(post);
    const loading      = !postHandle.ready();

    return {
        loading,
        post,
    };
})(ProductInformation);

