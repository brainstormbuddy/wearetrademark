import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import { useStaticQuery, Link, graphql } from 'gatsby'

import FilterSidebar from './Sidebar'

import AllCases from './AllCases'

import ModalVideo from './XModalVideo'

import WorkStyle from './Wrapper'
import './CustomStyle.css'

import { filterSelection, w3AddClass, w3RemoveClass } from './Filter'

class WorkPage extends Component {
	
	constructor(props) {
	   	super(props);
	    this.state = {
	      sidebarVisible: false
	    }
	}
	
	onClick() {
    	this.setState({sidebarVisible: !this.state.sidebarVisible});
  	}
  	onClose() {
    	this.setState({sidebarVisible: false});
  	}
  	
  	componentDidMount() {
  		filterSelection('all');
	}

	
	render(){
		
	let sidebarOpened='is-half-desktop is-one-third-widescreen is-one-quarter-fullhd';	
	let sidebarClosed='is-one-quarter-desktop';	
	
	
	//var btnContainer = document.getElementById("myBtnContainer");
	//var btns = document.getElementsByClassName("btn");
//	var btns = 8;

//	for (var i = 0; i < btns.length; i++) {
//	  btns[i].addEventListener("click", function() {
//	    var current = document.getElementsByClassName("active");
//	    current[0].className = current[0].className.replace(" active", "");
//	    this.className += " active";
//	  });
//	}
		
	
	
	
	return (
		
		<div>
			{this.state.sidebarVisible ? (
			<div>
				
				{/* Close icon on sidebar opened in tablet, mobile mode*/}
				<div className="close-filter has-text-right is-hidden-desktop is-hidden-widescreen is-hidden-fullhd">
					<a onClick={() => this.onClose()} 
					style={{color:`#4E6F7B`, fontSize:`15px`, fontWeight:`700`,padding:`1rem`}}>
					X
					</a>
				</div>
				
				{/* sidebar opened */}
				<div className="sidebar hero" id="xSidebar" style={{width: `300px`, transform: `translateX(0px)`}}>
					<div className="inner has-text-left">
						<FilterSidebar />
					</div>
				</div>
			
				<WorkStyle onClick={() => this.onClose()} className="is-fullheight indexCaseStudies sidebar-opened" style={{marginLeft: `300px`, backgroundColor: `rgba(0,0,0,0.2)`, width:`100%`, height: `100%`, cursor: `pointer`, overflow:`hidden`}}>
				<div className="container is-fluid is-marginless">
				<div className="columns hero-body is-paddingless" style={{marginBottom: `0.75rem`}}>
					<div className="column is-full-desktop is-full-mobile is-full-tablet hero latest-reel">
						<div className="columns hero-body is-vcentered" style={{padding: `3rem 1rem`}}>
							<div className="column is-full-mobile is-half-tablet is-5-desktop is-4-widescreen is-3-fullhd">
							<div className="columns">
								<div className="column" style={{position:`relative`}}>
									<div className="hrline"></div>
								</div>
								<div classame="column">
									<h2 className="has-text-right-desktop has-text-centered-mobile reelTxtSidebar">Our latest reel</h2>
								</div>
							</div>
								
							</div>
							<div className="column is-3-desktop is-full-mobile is-half-tablet"><ModalVideo /></div>
						</div>
					</div>
				</div>
			</div>
			<div className="container is-fluid is-marginless" style={{minHeight: `100vh`}}>
				<AllCases sidebarClassName = {sidebarOpened}/>
			</div>
		</WorkStyle>
		</div>		
				
			) :			
			<WorkStyle className="is-fullheight indexCaseStudies sidebar-closed">
			<div className="container is-fluid is-marginless">
				<div className="columns hero-body is-paddingless" style={{marginBottom: `0.75rem`, marginTop: `0`}}>
					<div className="column hero">
						<div className="hero-body filter-box has-text-centered">
							<a onClick={() => this.onClick()}>Filter</a>
						</div>
					</div>
					<div className="column is-three-quarters-desktop is-full-mobile is-full-tablet hero latest-reel">
						<div className="columns hero-body is-vcentered" style={{padding: `3rem 1rem`}}>
							<div className="column is-full-mobile is-half-tablet is-6-desktop is-5-widescreen is-4-fullhd">
							<div className="columns">
								<div className="column" style={{position:`relative`}}>
									<div className="hrline"></div>
								</div>
								<div classame="column">
									<h2 className="has-text-right-desktop has-text-centered-mobile reelTxt">Our latest reel</h2>
								</div>
							</div>	
								
							</div>
							<div className="column is-3-desktop is-full-mobile is-half-tablet"><ModalVideo /></div>
						</div>
					</div>
				</div>
			</div>
			<div className="container is-fluid is-marginless">
				<AllCases sidebarClassName = {sidebarClosed}/>
			</div>
		</WorkStyle>			
		}
		
		</div>
	);
	
	}
};

export default WorkPage