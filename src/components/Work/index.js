import React, {Component} from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import AllCases from './AllCases'

import ModalVideo from './XModalVideo'

import WorkStyle from './Wrapper'
import './CustomStyle.css'

class WorkPage extends Component {
	
	constructor(props) {
	   	super(props);
	    this.state = {
	      childVisible: false
	    }
	}
	
	onClick() {
    	this.setState({childVisible: !this.state.childVisible});
    	
  	}
  	onClose() {
    	this.setState({childVisible: !this.state.childVisible});
  	}

	
	render(){
		
	let sidebarOpened='is-half-desktop';	
	let sidebarClosed='is-one-quarter-desktop';	
	
{/*	
	const data = useStaticQuery(graphql`
		query AnotherQuery {
		  allWordpressWpCasestudy{
		    totalCount
		      nodes {
		        acf {
		          location
		          client_category {
			          value
			          label
			        }
		        }
		    }
		  }
		}	
	`)
*/}	
	
	
	
	
	return (
		
		<div>
			{this.state.childVisible ? (
			<div>
				<div className="sidebar hero" id="xSidebar" style={{width: `300px`}}>
					<div className="inner has-text-left">
						<div className="filter-categories-parent">
						<div className="filter-categories">
							<em>Filter by: </em>
							<ul>
								<li>COMPANY PARTIES</li>
								<li>Brand Activation</li>
								<li>Product Launch</li>
								<li>Roadshows</li>
								<li>Tradeshows</li>
								<li>Sales Meetings</li>
								<li>Special Events</li>
								<li>User Conference</li>
							</ul>
						</div>
						</div>
						<div className="filter-location-parent">
						<div className="filter-location">
							<em>Location: </em>
							<ul>
								<li>San Francisco</li>
								<li>Portland</li>
								<li>Atlanta</li>
								<li>New York City</li>
								<li>Washington D.C.</li>
								<li>Chicago</li>
								<li>Denver</li>
								<li>Orlando</li>
								<li>Detroit</li>
								<li>London</li>
							</ul>
						</div>
						</div>
					</div>
				</div>
			
				<WorkStyle onClick={() => this.onClick()} className="is-fullheight indexCaseStudies sidebar-opened" style={{marginLeft: `300px`, backgroundColor: `rgba(0,0,0,0.2)`, width:`100%`, height: `100%`, cursor: `pointer`}}>
				<div className="container-is-fluid">
				<div className="columns hero-body" style={{padding: `3rem 0`}}>
					<div className="column is-full-desktop is-full-mobile is-full-tablet hero latest-reel">
						<div className="columns hero-body is-vcentered">
							<div className="column is-half-desktop is-full-mobile is-half-tablet">
								<h2 className="has-text-centered">Our latest reel</h2>
							</div>
							<div className="column is-one-quarter-desktop is-full-mobile is-half-tablet"><ModalVideo /></div>
						</div>
					</div>
				</div>
			</div>
			<div className="container is-fluid">
				<AllCases sidebarClassName = {sidebarOpened}/>
			</div>
		</WorkStyle>
		</div>		
				
			) :
				
			<WorkStyle className="is-fullheight indexCaseStudies sidebar-closed">
			<div className="container-is-fluid">
				<div className="columns hero-body" style={{padding: `3rem 0`}}>
					<div className="column hero">
						<div className="hero-body filter-box has-text-centered">
							<a onClick={() => this.onClick()}>Filter -</a>
						</div>
					</div>
					<div className="column is-three-quarters-desktop is-full-mobile is-full-tablet hero latest-reel">
						<div className="columns hero-body is-vcentered">
							<div className="column is-half-desktop is-full-mobile is-half-tablet">
								<h2 className="has-text-centered">Our latest reel</h2>
							</div>
							<div className="column is-one-quarter-desktop is-full-mobile is-half-tablet"><ModalVideo /></div>
						</div>
					</div>
				</div>
			</div>
			<div className="container is-fluid">
				<AllCases sidebarClassName = {sidebarClosed}/>
			</div>
		</WorkStyle>
				
		}
		
		</div>
	);
	
	}
};

export default WorkPage