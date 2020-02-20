import React, {Component} from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { filterSelection, w3AddClass, w3RemoveClass } from './Filter'

class Sidebar extends Component {
	
/*
	const dataMy = useStaticQuery(graphql`
		{
		  allWordpressWpCasestudy{
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
*/	
	
	
	
	render(){
			
	return(
	<div>
		<div className="filter-categories-parent">
			<div className="filter-categories">
				<em>Filter by: </em>
				
					<ul>
						<li className="btn yellow" onClick={() => filterSelection('Company Parties')}><a>Company Parties</a></li>
						
						<li className="btn red" onClick={() => filterSelection('Brand Activation')}><a>Brand Activation</a></li>
						
						<li className="btn sky" onClick={() => filterSelection('Roadshows')}><a>Roadshows</a></li>
						<li className="btn green" onClick={() => filterSelection('Tradeshows')}><a>Tradeshows</a></li>
						<li className="btn blue" onClick={() => filterSelection('Sales Meetings')}><a>Sales Meetings</a></li>
						<li className="btn orange" onClick={() => filterSelection('Special Events')}><a>Special Events</a></li>
						<li className="btn cyan" onClick={() => filterSelection('User Conference')}><a>User Conference</a></li>
					</ul>
			</div>
		</div>
		
		<div className="filter-location-parent">
			<div className="filter-location">
				<em>Location: </em>
					<ul>
						<li className="btn" onClick={() => filterSelection('San Francisco')}><a>San Francisco</a></li>
						<li className="btn" onClick={() => filterSelection('New Orleans')}><a>New Orleans</a></li>
						<li className="btn" onClick={() => filterSelection('Washington')}><a>Washington D.C.</a></li>
						
						<li className="btn" onClick={() => filterSelection('Orlando')}><a>Orlando</a></li>
						
						<li className="btn" onClick={() => filterSelection('Seattle')}><a>Seattle</a></li>
						<li className="btn" onClick={() => filterSelection('Hollywood')}><a>Hollywood</a></li>
						<li className="btn" onClick={() => filterSelection('London')}><a>London</a></li>
						<li className="btn" onClick={() => filterSelection('Sydney')}><a>Sydney</a></li>
						<li className="btn" onClick={() => filterSelection('Toronto')}><a>Toronto</a></li>
					</ul>
			</div>
		</div>
						
		<div className="filter-reset-parent">
			<div className="filter-reset">
				<ul>
				<li className="btn" onClick={() => filterSelection('all')}><a>Reset</a></li>
				</ul>
			</div>
		</div>
	</div>
	)
	
	}
}

export default Sidebar