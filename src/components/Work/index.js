import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import { StaticQuery, useStaticQuery, Link, graphql } from 'gatsby'

import FilterSidebar from './Sidebar'

import AllCases from './AllCases'

import ModalVideo from './XModalVideo'

import FilterList from './img/Filter-list.svg'

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
		
	let sidebarOpened='is-third-desktop is-one-third-widescreen is-one-quarter-fullhd';	
	let sidebarClosed='is-one-quarter-desktop';	
	
		
	return (
		
		<StaticQuery
        	query={graphql`  
			{
				wordpressPage(slug: {eq: "work"}) {
			    acf {
			      heading_title_work
			      video_id_work
			    }
			  }
		    }
		`}
		
		render={data => {
        const wordpressWork = data.wordpressPage.acf;
		return(		
		<div>
			{this.state.sidebarVisible ? (
			<div>
				
				{/* Close icon on sidebar opened in tablet, mobile mode*/}
				<div className="close-filter has-text-right is-hidden-desktop is-hidden-widescreen is-hidden-fullhd" style={{position:`fixed`, right: `20px`, width: `14px`, height: `14px`, zIndex: `1`}}>
					<a onClick={() => this.onClose()}>
					<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="M12.524 0L7 5.524 1.476 0 0 1.476 5.524 7 0 12.524 1.476 14 7 8.476 12.524 14 14 12.524 8.476 7 14 1.476z" fillRule="evenodd"></path></svg>
					</a>
				</div>
				
				{/* sidebar opened */}
				<div className="sidebar hero" id="xSidebar">
					<div className="inner has-text-left">
						<FilterSidebar />
					</div>
				</div>
			
				<WorkStyle onClick={() => this.onClose()} className="is-fullheight indexCaseStudies sidebar-opened" style={{marginLeft: `300px`, backgroundColor: `rgba(0,0,0,0.2)`, width:`100%`, height: `100%`, cursor: `pointer`, overflow:`hidden`}}>
				<div className="container is-fluid is-marginless is-paddingless">
				<div className="columns hero-body is-paddingless " style={{marginBottom: `0.75rem`}}>
					<div className="column is-full-desktop is-full-mobile is-full-tablet hero latest-reel">
						<div className="columns hero-body is-vcentered" style={{padding: `3rem 0`}}>
							<div className="column is-full-mobile is-half-tablet is-12-desktop is-12-widescreen is-12-fullhd">
							<div className="columns is-vcentered">
								<div className="column is-1" style={{position:`relative`}}>
									<div className="hrline"></div>
								</div>
								<div className="column is-5-tablet is-3-desktop is-3-widescreen is-3-fullhd is-paddingless">
									<h2 className="has-text-left-desktop has-text-centered-mobile reelTxtSidebar">Our latest reel</h2>
								</div>
								<div className="column is-3-desktop is-full-mobile is-6-tablet is-3-widescreen modalVdo"><ModalVideo idVideo={wordpressWork.video_id_work} /></div>
							</div>
								
							</div>
							
						</div>
					</div>
				</div>
			</div>
			<div className="container is-fluid is-marginless is-paddingless" style={{minHeight: `900px`}}>
				<AllCases sidebarClassName = {sidebarOpened}/>
			</div>
		</WorkStyle>
		</div>		
				
			) :	
			
			<WorkStyle className="is-fullheight indexCaseStudies sidebar-closed">
			<div className="container is-fluid is-marginless is-paddingless">
				<div className="columns hero-body is-paddingless" style={{marginBottom: `0.75rem`, marginTop: `0`}}>
					<div className="column hero is-one-quarter-tablet">
						<div className="hero-body filter-box has-text-centered">
							<a onClick={() => this.onClick()}>Filter <img src={FilterList} alt=""/></a>
						</div>
					</div>
					<div className="column is-three-quarters-desktop is-full-mobile is-full-tablet hero latest-reel">
						<div className="columns hero-body is-vcentered" style={{padding: `3rem 1rem`}}>
							<div className="column is-full-mobile is-half-tablet is-12-desktop is-12-widescreen is-12-fullhd">
							<div className="columns is-vcentered">
								<div className="column is-1" style={{position:`relative`}}>
									<div className="hrline"></div>
								</div>
								<div className="column is-5-tablet is-3-desktop is-3-widescreen is-3-fullhd" style={{padding: `0`}}>
									<h2 className="has-text-left-desktop has-text-centered-mobile reelTxt">{wordpressWork.heading_title_work}</h2>
								</div>
								<div className="column is-3-desktop is-full-mobile is-6-tablet"><ModalVideo idVideo={wordpressWork.video_id_work} /></div>
							</div>	
								
							</div>
							
						</div>
					</div>
				</div>
			</div>
			<div className="container is-fluid is-marginless is-paddingless">
				<AllCases sidebarClassName = {sidebarClosed}/>
			</div>
		</WorkStyle>
		}
		
		</div>
					);
				}}
			/>
		);
	}
};

export default WorkPage