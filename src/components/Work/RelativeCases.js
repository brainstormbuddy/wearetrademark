import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import WorkStyle from './Wrapper'

const RelativeCases = (props) => {
		
	const data = useStaticQuery(graphql`
		query RelCaseStudyQuery {
		  allWordpressWpCasestudy(limit: 3, sort: {order: ASC, fields: title}) {
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
	
	return (
		<WorkStyle>
		<div className="allcases hero" id="threeCases">
			<div className="columns is-centered">
			{data.allWordpressWpCasestudy.nodes.map((casestudy, i) => (
			  <div key={casestudy.slug} className="column is-one-quarter-desktop is-one-quarter-tablet is-full-mobile">
			      <div className=" has-text-centered">
			      	<cite>Client</cite>	
				  	<p className="heading hast-text-centered">{casestudy.title}</p>
			      </div>
			      <div className="is-200">
			      <Link to={`/casestudy/${casestudy.slug}`}>
			      {/*
			      <Img 
			      className="is-200"
			      imgStyle={{borderRadius: `290486px`}} 
			      fluid ={casestudy.featured_media.localFile.childImageSharp.fluid}
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
				  	<div className="circle-casestudy" style={{background:`${casestudy.acf.icon_color}`}}>{i+1}<span className="circle-casestudy-span" style={{borderRight:`30px solid ${casestudy.acf.icon_color}`}}></span></div>
				  </div>
				 </div>
				  
				  
			  </div>
			))} 
			 
			</div>
			
		</div>
	</WorkStyle>			
	)
}

export default RelativeCases