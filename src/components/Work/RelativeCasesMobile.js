import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


import Vimeo from '@u-wave/react-vimeo'

import WorkStyle from './Wrapper'

const RelativeCasesMobile = (props) => {
		
	const data = useStaticQuery(graphql`
		query RelCaseStudyMobileQuery {
		  allWordpressWpCasestudy(limit: 3, sort: {order: ASC, fields: title}) {
		    totalCount
		      nodes {
		        content
		        slug
		        title
		        featured_media{
			      source_url
			      localFile {
			          childImageSharp {
			            fluid(quality: 100, maxWidth: 200) {
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
		<div className="allcases hero threeCasesMobile" id="threeCases">
			<div className="columns is-centered">
			<Carousel showIndicators={true} showThumbs={false} useKeyboardArrows={true} autoPlay={false} infiniteLoop={true} showStatus={false}>
			{data.allWordpressWpCasestudy.nodes.map((casestudy, i) => (
			  <div key={casestudy.slug} className="column is-one-quarter-desktop is-half-tablet is-half-mobile">
			      
			      <div className="titleHeading has-text-left">
				  	<div className="columns">
				  		<div className="column is-3-tablet is-3-desktop" style={{position:`relative`}}>
				  			<div className="allhrline"></div>
				  		</div>
				  		<div className="column">
				  			<p 
				  			className="heading hast-text-left-desktop has-text-centered-mobile" style={{padding: `0 10px 0 0`}}>
				  			<cite>Client</cite><br />
				  		<Link to={`/casestudy/${casestudy.slug}`}>{casestudy.title}</Link>
				  			</p>
				  		</div>
				  	</div>	
			      </div>
			      
			      
			      <div className="is-200">
			      
			      <Img 
			      imgStyle={{borderRadius: `290486px`}} 
			      fluid ={casestudy.featured_media.localFile.childImageSharp.fluid}
			      alt={casestudy.acf.client_name}/> 
			      {/*
			      <img style={{borderRadius: `290486px`}} src={casestudy.featured_media.source_url} alt={casestudy.acf.client_name}/>
			      */}
			      <div id="vimeoVideo"><span style={{position:`absolute`,top:`50%`,left: `0`,right:`0`,textAlign:`center`}}>Video is loading.<br />Please wait...</span>
			      	<Vimeo 
			      		video={casestudy.acf.video_url} 
				  		autoplay={true}
				  		muted 
				  		width={100} 
				  		height={100} 
				  		loop={true}
				  		controls={false}
			      	/>
			      </div>
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
			</Carousel> 
			</div>
			
		</div>
	</WorkStyle>			
	)
}

export default RelativeCasesMobile