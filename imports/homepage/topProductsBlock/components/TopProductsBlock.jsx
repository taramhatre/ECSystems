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
				allProducts : Meteor.subscribe('allProducts'),
			}
		}
	}

	showTopProducts(){
		return Products.find({"topProduct" : true});
	}

	allProducts(event){
		event.preventDefault();
		FlowRouter.go('/products');
	}

	buildRegExp(searchText) {
   // console.log('buildRegExp business');
	   var words = searchText.trim().split(/[ \-\:]+/);

	   var exps = _.map(words, function(word) {
	      return "(?=.*" + word + ")";
	   });

	   var fullExp = exps.join('') + ".+";
	   return new RegExp(fullExp, "i");
	}

	getTextValue(event){
		var bizValue= $('#product').val();
		var RegExpBuildValue = this.buildRegExp(bizValue);
		var businessData = Products.find({$or:[{'productName': RegExpBuildValue},
											   {'brand': RegExpBuildValue},
											   {'category':RegExpBuildValue}]}).fetch();
		if(businessData){
			var myBizArray = [];
			for(var i=0; i<businessData.length; i++){
				var _id     = businessData[i]._id;
				var bizName = businessData[i].category;
				myBizArray.push({_id, bizName});
			}
			Session.set('myBizArray',myBizArray);
			console.log(myBizArray);
			return myBizArray;
		}
	}

	render(){

		var bizNameArray = [];
		var bizArray = Session.get('myBizArray');
		if(bizArray){
			var bizArrayLen = bizArray.length;
			for(var i=0; i<bizArrayLen; i++){
				var bizId = bizArray[i].bizName;
				// console.log(bizId);
				bizNameArray.push(
					<div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 searchBizList" key={i}>
				        <div>
				        <ul className="searchBizUl">
							<a href={`/product/${bizId}`}>
								<li>
				            		{bizArray[i].bizName}
				           	 	</li>
				            </a>
				        </ul>
				        </div>
			        </div>
			        )
			}	
		}

		return(
			<div>
				<div className="col-lg-12
							col-md-12
							col-sm-12
							col-xs-12 homeTopProdWrap">
					<h4 > TOP PRODUCTS </h4>
					<div className="col-lg-3 search">
					  <input type="text" placeholder="Search Products.." name="search2" id="product" onInput={this.getTextValue.bind(this)}/>
					  <button type="submit" ><i className="fa fa-search"></i></button>
					  <div className="searcBizLi">{bizNameArray}</div>
					</div>

					<div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">

						{ this.showTopProducts().map( (products,index)=>{
							return (
										<div key = {index} className="col-lg-3 col-md-3 col-sm-12 col-xs-12 tupProdOutWrap">
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 topProductWrap">
												<div className="productNM"> {products.productName} </div>
												<img src={products.productImg}/>
												<div className="productPrize"> <i className="fa fa-inr" aria-hidden="true"></i> {products.price}</div>
											</div>
										</div>
								);
						  }) 
						}	
					</div>

					<div className="topProdShowMore col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<button className="btn btn-primary showMoreProd" onClick={this.allProducts.bind(this)}>SHOW MORE</button>
					</div>
				</div>
			</div>
		);
	}
}
