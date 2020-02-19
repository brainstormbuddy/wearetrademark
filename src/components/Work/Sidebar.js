import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { filterSelection, w3AddClass, w3RemoveClass } from './Filter'

const Sidebar = (props) => {
	
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
	
	
	return(
	<div>
		<div className="filter-categories-parent">
			<div className="filter-categories">
				<em>Filter by: </em>
					
					<ul>
						<li className="btn" onClick={() => filterSelection('Company Parties')}><a>Company Parties</a></li>
						<li className="btn" onClick={() => filterSelection('Brand Activation')}><a>Brand Activation</a></li>
						<li className="btn" onClick={() => filterSelection('Product Launch')}><a>Product Launch</a></li>
						<li className="btn" onClick={() => filterSelection('Roadshows')}><a>Roadshows</a></li>
						<li className="btn" onClick={() => filterSelection('Tradeshows')}><a>Tradeshows</a></li>
						<li className="btn" onClick={() => filterSelection('Sales Meetings')}><a>Sales Meetings</a></li>
						<li className="btn" onClick={() => filterSelection('Special Events')}><a>Special Events</a></li>
						<li className="btn" onClick={() => filterSelection('User Conference')}><a>User Conference</a></li>
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
						
		<div className="filter-location-parent">
			<div className="filter-location">
				<ul>
				<li className="btn" onClick={() => filterSelection('all')}><a>Reset</a></li>
				</ul>
			</div>
		</div>
	</div>
	)
}

export default Sidebar