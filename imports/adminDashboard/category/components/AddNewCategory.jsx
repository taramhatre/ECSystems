import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { render } from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Categories } from '../api/category.js';


class AddNewCategory extends TrackerReact(Component){

	constructor(props) {
	  super(props);

		  this.state = {
		    // description          : '',
			"subscription" : {
				"allCategories" : Meteor.subscribe("allCategories"),
			}

		  };	   	
		    this.handleInputChange = this.handleInputChange.bind(this);
	}

    componentWillReceiveProps(nextProps) {
		if(nextProps){
			if(nextProps.post){

		            this.setState({
		          		// description          : nextProps.post.gardenSpaceDetails.description,
		            })

		            
	    	}
    	}
    	this.handleInputChange = this.handleInputChange.bind(this);
    }



	handleInputChange(event) {
	    const target = event.target;
	    const value = target.type === 'checkbox' ? target.checked : target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });

	}

	allCategories(){
		return Categories.find({}).fetch()
	}

	updateCategoryInfo(event){
		event.preventDefault();

		var formvalues = {
							'categoryName' : this.refs.categoryName.value,
							// 'categoryImg'  : this.refs.categoryImg.value,
							'categoryImg'  : "../images/mouse.jpeg",
						}
		
	    Meteor.call('addNewCategory', formvalues, (error,result)=>{
	    	if(error){
	    		console.log("client error"+error);
	    		swal(error);
	    	}else{
	    		swal('Category added successfully!');
	    	}
	    });

	}


	render() {

		if(!this.props.loading){
		if(this.props.post){

	       return (
	       <section className="Content">
				<div className="row">
				<div className="col-lg-12 col-md-12 hidden-xs hidden-sm">

					<div className="box box-primary">
			            <div className="box-header with-border">
			            <h4 className="contentTitle">Add NEW CATEGORY</h4>
			            </div>
					
						<div className="box-body">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">


							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadLR">

								<form onSubmit={this.updateCategoryInfo.bind(this)}>


									<div className="col-lg-6 col-sm-12 col-xs-12 col-md-12">
										<label className="col-lg-6 col-sm-6 col-xs-3 col-md-6 allTimeLabel">Category Name</label>
										<div className="form-group col-lg-12 col-sm-12 col-xs-12 col-md-12">
									    <div className="inputEffect col-xs-12 input-group">
								        	<input className="effectAddress UMname form-control" type="text" ref="categoryName" name="categoryName"/>
						                      <span className="input-group-addon addons"><i className="fa fa-envelope"></i></span>
								              <span className="focusBorder">
								            	<i></i>
								              </span>
									    </div>
										</div>
									</div>

									<div className="col-lg-6 col-sm-12 col-xs-12 col-md-12">
										<label className="col-lg-6 col-sm-6 col-xs-3 col-md-6 allTimeLabel">Category Image</label>
										<div className="form-group col-lg-12 col-sm-12 col-xs-12 col-md-12">
									    <div className="inputEffect col-xs-12 input-group">
								        	<input className="effectAddress UMname form-control" type="text" ref="categoryImg" name="categoryImg"/>
						                      <span className="input-group-addon addons"><i className="fa fa-envelope"></i></span>
								              <span className="focusBorder">
								            	<i></i>
								              </span>
									    </div>
										</div>
									</div>


								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<input type="submit" className="btn btn-update-pro1 col-lg-3 col-md-3 col-sm-12 col-xs-12 btn-Btn1 pull-right" value="UPDATE"/>
								</div>
							</form>
							</div>


						<div className="table-responsive col-lg-12 categoryTable">
							<table className="table table-striped table-hover myTable table-bordered" id="example">
								<thead>
									<tr className="tableHeader">
										<th> Sr. </th>
										<th> Category Name </th>
										<th> Category Image </th>
										<th> Action </th>
									</tr>
								</thead>
								<tbody>
									{ this.allCategories().map( (categoryInfo,index)=>{
										return <tr key={index}>
													<td>{index+1}</td>
													<td>{categoryInfo.categoryName}</td>
													<td><img src={categoryInfo.categoryImg} className="img-responsive"/></td>
													<td>
														<i className="fa fa-trash col-lg-1" aria-hidden="true"></i>
														<i className="fa fa-pencil-square-o col-lg-1" aria-hidden="true"></i>
													</td>
											   </tr>
									  }) 
									}									
								</tbody>
							</table>
						</div>

						</div>
						</div>
					</div>	
				</div>
				</div>
			</section>
		    );

	   		}else{
	    		return (
	    			<div className="col-sm-12 col-xs-12 loadingImg"><img src="images/loading.gif" alt="loading"/></div>
	    		);
	    	}
	    }else{
	    	return (
            <div className="col-sm-12 col-xs-12 loadingImg"><img src="images/loading.gif" alt="loading"/></div>
	    	);
	    }


	} 

}

export default AddNewCategoryContainer  = withTracker(props => {
  // Do all your reactive data access in this method.
  // Note that this subscription will get cleaned up when your component is unmounted

    // var spaceid      = FlowRouter.getParam("spaceid");
    // const postHandle = Meteor.subscribe('ownerSpaceDetail',spaceid);
    // const post       = SpaceDetails.findOne({'_id':spaceid})||{};
    // const loading    = !postHandle.ready();

    const post = {};
    const loading = false;

    return {
        loading,
        post,
    };
})(AddNewCategory);


