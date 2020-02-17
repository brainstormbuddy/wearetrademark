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
				    localFile{
					    childImageSharp{
						    fluid(maxWidth: 267, quality: 100) {
			      				...GatsbyImageSharpFluid
			   				}
					    }
				    }
			    }
		        acf {
		          video_url
		          venue
		          project_event_name
		          location
		          client_name
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
		<div className="allcases hero">
			<div className="columns is-multiline">
			{data.allWordpressWpCasestudy.nodes.map((casestudy, i) => (
			  <div key={casestudy.slug} className={"column is-one-quarter-tablet is-full-mobile" + " " + props.sidebarClassName}>
			      <div className=" has-text-centered">
			      	<cite>Client</cite>	
				  	<p className="heading hast-text-centered">{casestudy.title}</p>
			      </div>
			      <Link to={`/casestudy/${casestudy.slug}`}>
			      <Img 
			      className="is-267"
			      imgStyle={{borderRadius: `290486px`}} 
			      fluid ={casestudy.featured_media.localFile.childImageSharp.fluid}
			      alt={casestudy.acf.client_name}/></Link>
				  
				  <div className="caseMeta has-text-right-desktop has-text-centered-mobile ">
				  	 <em>Project</em>
				  	 <h3>{casestudy.acf.project_event_name}</h3>
				  	 <p>
				  	 {casestudy.acf.client_category.map((categoryName, n) => (
				  	 	<span key={n}>{categoryName.value} </span>
				  	 ))}
				  	 </p>
				  </div>
			  </div>
			))} 
			 
			</div>
			
		</div>
				
	)
}

export default AllCases