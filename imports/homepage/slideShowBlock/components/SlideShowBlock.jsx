import React, {Component} from 'react';
import {render} from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {PropTypes} from 'prop-types';
import Header from '/imports/homepage/slideShowBlock/components/Header.jsx';
import CategoryPage from '/imports/homepage/categoryBlock/components/CategoryPage.jsx';
import TopProductsBlock from '/imports/homepage/topProductsBlock/components/TopProductsBlock.jsx';
import BrandsBlock from '/imports/homepage/brandsBlock/components/BrandsBlock.jsx';
import ServicesBlock from '/imports/homepage/servicesBlock/components/ServicesBlock.jsx';
import ContactUsBlockContainer from '/imports/homepage/contactUsBlock/components/ContactUsBlock.jsx';

export default class SlideShowBlock extends TrackerReact(Component){
	render(){
		return(
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ecEleHomeWrap">
					<Header/>
					<div id="myCarousel" className="carousel slide ECSlideShow" data-ride="carousel">
					  <ol className="carousel-indicators">
					    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
					    <li data-target="#myCarousel" data-slide-to="1"></li>
					    <li data-target="#myCarousel" data-slide-to="2"></li>
					  </ol>
					  <div className="carousel-inner">
					    <div className="item active">
					      <img src="/img/slide3.jpg" className="col-lg-12 col-sm-12 col-md-12 col-xs-12 bannerimg"/>
					      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 sliderTitles">
						      <div><h1> Latest Computer At Your Doorstep</h1></div>
						      <div><h4> Just in 2 hours or It's FREE</h4></div>
						      <div><h4> <b>Call Now </b></h4></div>
					      </div>
					    </div>

					    <div className="item">
					      <img src="/img/slide3.jpg" className="col-lg-12 col-sm-12 col-md-12 col-xs-12 bannerimg"/>
					      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 sliderTitles">
						      <div><h1> Latest Computer At Your Doorstep</h1></div>
						      <div><h4> Just in 2 hours or It's FREE</h4></div>
						      <div><h4> <b>Call Now </b></h4></div>
					      </div>
					    </div>

					    <div className="item">
					      <img src="/img/slide3.jpg" className="col-lg-12 col-sm-12 col-md-12 col-xs-12 bannerimg"/>
					      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 sliderTitles">
						      <div><h1> Latest Computer At Your Doorstep</h1></div>
						      <div><h4> Just in 2 hours or It's FREE</h4></div>
						      <div><h4> <b>Call Now </b></h4></div>
					      </div>
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
					<CategoryPage/>
					<TopProductsBlock/>
					<BrandsBlock/>
					<ServicesBlock/>
					<ContactUsBlockContainer/>
				</div>
			);
	}
}