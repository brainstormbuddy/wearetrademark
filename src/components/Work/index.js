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
							<div className="column is-full-mobile is-half-tablet is-half-desktop is-one-third-widescreen" style={{position: `relative`, padding: `0.75rem 0`}}>
								<h2 className="has-text-centered reelTxtSidebar">Our latest reel</h2>
							</div>
							<div className="column is-one-quarter-desktop is-full-mobile is-half-tablet"><ModalVideo /></div>
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
							<div className="column is-full-mobile is-half-tablet is-half-desktop is-half-widescreen" style={{position: `relative`, padding: `0.75rem 0`}}>
								<h2 className="has-text-centered reelTxt">Our latest reel</h2>
							</div>
							<div className="column is-one-quarter-desktop is-full-mobile is-half-tablet"><ModalVideo /></div>
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