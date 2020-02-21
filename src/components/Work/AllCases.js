import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import WorkStyle from './Wrapper'

const AllCases = (props) => {
		
	const data = useStaticQuery(graphql`
		query CaseStudyQuery {
		  allWordpressWpCasestudy(sort: {order: ASC, fields: title}) {
		    totalCount
		      nodes {
		        content
		        slug
		        title
		        featured_media{
			        source_url
			    }
		        acf {
		          video_url
		          venue
		          project_event_name
		          location
		          client_name
		          icon_color
		          client_category {
			          value
			          label
			        }
		        }
		    }
		  }
		}	
	`)
	
	//const circleBefore = {
	//  backgroundImage: `url(${secondLandscapeImage})`,
  	//}
	
	
	return (
		<div className="allcases hero">
			<div className="columns is-multiline">
			{data.allWordpressWpCasestudy.nodes.map((casestudy, i) => (
			  <div key={i} className={"filterDiv show column is-one-quarter-tablet is-full-mobile" + " " + props.sidebarClassName + " " + casestudy.acf.location + " " + casestudy.acf.client_category.map((categoryName, n) => (categoryName.value))}>
			      <div className="titleHeading has-text-left">
				  	<div className="columns">
				  		<div className="column is-3-tablet is-3-desktop" style={{position:`relative`}}>
				  			<div className="allhrline"></div>
				  		</div>
				  		<div className="column">
				  			<p 
				  			className="heading hast-text-left-desktop has-text-centered-mobile" style={{padding: `0 10px 0 0`}}>
				  			<cite>Client</cite><br />
				  			{casestudy.title}
				  			</p>
				  		</div>
				  	</div>	
			      </div>
			      <div className="is-200">
			      <Link to={`/casestudy/${casestudy.slug}`}>
			      {/*
			      <Img 
			      className="is-200"
			      imgStyle={{borderRadius: `290486px`}} 
			      fluid ={casestudy.featured_media.localFile.childImageSharp.fluid}
			      </Link>
				  </div>
			      alt={casestudy.acf.client_name}/> */}
			      <img style={{borderRadius: `290486px`}} src={casestudy.featured_media.source_url} alt={casestudy.acf.client_name}/>
			      </Link>
			      </div>
			      
				 <div className="columns caseMetaParent"> 
				  <div className="column caseMeta has-text-right-desktop has-text-centered-mobile is-four-fifths">
				  	 <em>Project</em>
				  	 <h3>{casestudy.acf.project_event_name}</h3>
				  	 <p>
				  	 {casestudy.acf.client_category.map((categoryName, n) => (
				  	 	<span key={n}>{categoryName.value} </span>
				  	 ))}
				  	 </p>
				  </div>
				  <div className="column circle-casestudy-parent">
				  	<div className="circle-casestudy" style={{background:`${casestudy.acf.icon_color}`}}>{i+1}<span className="circle-casestudy-span" style={{borderRight:`30px solid ${casestudy.acf.icon_color}`}}></span>
				  	</div>
				  </div>
				</div> 
				  
				  
			  </div>
			))} 
			 
			</div>
			
		</div>
				
	)
}

export default AllCases