import React, {Component} from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { filterSelection, w3AddClass, w3RemoveClass } from './Filter'

class Sidebar extends Component {	
	
	state = {
	    Categories: [
	      {
	        id: 1,
	        name: "Company Parties",
	        className: "btn yellow"
	      },
	      {
	        id: 2,
	        name: "Brand Activation",
	        className: "btn red"
	      },
	      {
	        id: 3,
	        name: "Roadshows",
	        className: "btn sky"
	      },
	      {
	        id: 4,
	        name: "Tradeshows",
	        className: "btn green"
	      },
	      {
	        id: 5,
	        name: "Sales Meetings",
	        className: "btn blue"
	      },
	      {
	        id: 6,
	        name: "Special Events",
	        className: "btn orange"
	      },
	      {
	        id: 7,
	        name: "User Conference",
	        className: "btn cyan"
	      }
	    ],
	    activeCatLink: null,
	    
		Location: [
	      {
	        id: 1,
	        name: "San Francisco",
	        className: "btn"
	      },
	      {
	        id: 2,
	        name: "New Orleans",
	        className: "btn"
	      },
	      {
	        id: 3,
	        name: "Washington",
	        className: "btn"
	      },
	      {
	        id: 4,
	        name: "Orlando",
	        className: "btn"
	      },
	      {
	        id: 5,
	        name: "Seattle",
	        className: "btn"
	      },
	      {
	        id: 6,
	        name: "Hollywood",
	        className: "btn"
	      },
	      {
	        id: 7,
	        name: "London",
	        className: "btn"
	      },
	      {
	        id: 8,
	        name: "Sydney",
	        className: "btn"
	      },
	      {
	        id: 9,
	        name: "Toronto",
	        className: "btn"
	      }
	    ],
	    activeLocLink: null
  };

  handleClick = id => {
    this.setState({ activeCatLink: id });
  };
  locationHandleClick = id => {
    this.setState({ activeLocLink: id });
  };
	
	
	render(){
		
	const { Categories, Location, activeCatLink, activeLocLink } = this.state;
    	
		
	return(
		
	<div>		
		
		<div className="filter-categories-parent">
			<div className="filter-categories">
				<em>Filter by: </em>
					
					<ul>
						{Categories.map(category => {
				          	return (
				                <li
				                  key={category.id}
				                  onClick={() =>{ this.handleClick(category.id), filterSelection(category.name)}}
				                  className={
				                    category.className +
				                    (category.id === activeCatLink ? " active_item" : "")
				                  }
				                >
				                  <a>{category.name}</a> 
				                </li>
							);
				        })}
				    </ul>
			</div>
		</div>
		
		<div className="filter-location-parent">
			<div className="filter-location">
				<em>Location: </em>
					
					<ul>
						{Location.map(location => {
				          	return (
				                <li
				                  key={location.id}
				                  onClick={() =>{ this.locationHandleClick(location.id), filterSelection(location.name)}}
				                  className={
				                    location.className +
				                    (location.id === activeLocLink ? " active_item" : "")
				                  }
				                >
				                  <a>{location.name}</a> 
				                </li>
							);
				        })}
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