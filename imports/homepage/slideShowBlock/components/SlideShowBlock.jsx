import React, {Component} from 'react';
import {render} from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {PropTypes} from 'prop-types';
import Header from '/imports/homepage/slideShowBlock/components/Header.jsx';
export default class SlideShowBlock extends TrackerReact(Component){
	render(){
		return(
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ecEleHomeWrap">
					<Header/>
					<div id="myCarousel" className="carousel slide" data-ride="carousel">
					  <ol className="carousel-indicators">
					    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
					    <li data-target="#myCarousel" data-slide-to="1"></li>
					    <li data-target="#myCarousel" data-slide-to="2"></li>
					  </ol>
					  <div className="carousel-inner">
					    <div className="item active">
					      Vikas
					    </div>

					    <div className="item">
					      Pilluuu
					    </div>

					    <div className="item">
					      Akash
					    </div>
					  </div>
					  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
					    <span className="glyphicon glyphicon-chevron-left"></span>
					    <span className="sr-only">Previous</span>
					  </a>
					  <a className="right carousel-control" href="#myCarousel" data-slide="next">
					    <span className="glyphicon glyphicon-chevron-right"></span>
					    <span className="sr-only">Next</span>
					  </a>
					</div>
				</div>
			);
	}
}