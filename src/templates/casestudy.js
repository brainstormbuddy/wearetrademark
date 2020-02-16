import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'

import ModalVideo from '../components/Work/XModalVideo'

import FooterWrapper from '../components/Footer'
import userConfig from '../../config'

import CaseStudyStyle from './CasestudyStyle'
import './CasestudyStyle.css'

export default CaseStudy => {
	
	const singleCaseStudy = CaseStudy.data.wordpressWpCasestudy
	let firstImage, secondLandscapeImage = false
	
	if (singleCaseStudy.acf.first_image && singleCaseStudy.acf.first_image.source_url ) {
    	firstImage = singleCaseStudy.acf.first_image.source_url;
  	}
  	if (singleCaseStudy.acf.second_landscape_image && singleCaseStudy.acf.second_landscape_image.source_url ) {
    	secondLandscapeImage = singleCaseStudy.acf.second_landscape_image.source_url;
  	}
	
	return (
		<Layout>
	      	
		  	<Helmet title={`${singleCaseStudy.title} | ${userConfig.title}`}>
	        	<meta name="description" content={`${singleCaseStudy.content}`}/>
				<body className="single casestudy xtrademark" />
			</Helmet>
			<CaseStudyStyle>
		      	<div className="container-is-fluid hero is-fullheight">
		      		<div className="columns is-vcentered is-marginless">
						<div className="column hero is-7 is-paddingless">
							<div className="has-text-centered">
							{firstImage ? (
								<Img 
								fluid ={singleCaseStudy.acf.first_image.localFile.childImageSharp.fluid}
								alt={singleCaseStudy.acf.client_name}/>
							) :
								<img src="https://picsum.photos/1193/1220.jpg" alt="no image yet"/>
							}
							</div>
						</div>
						<div className="column is-4 has-text-left client-details">
							<h2 className="is-size-2 has-text-weight-bold" dangerouslySetInnerHTML={{ __html: singleCaseStudy.title}}/>
						  	
						  	<em>Project</em>
						  	<h3 className="event-name">{singleCaseStudy.acf.project_event_name}</h3>
						  	
						  	<p className="case-study-category">
						  	  {singleCaseStudy.acf.client_category.map((categoryName, n) => (
							  	<span key={n}>{categoryName.value} </span>
							  ))}
							</p>
						  	
						  	<div dangerouslySetInnerHTML={{ __html: singleCaseStudy.content }} />
					      
					  	 <div style={{paddingTop: `1.5rem`}}>
					  	 	<ModalVideo />
					  	 </div>
					  	 
					  	 
					  	 {/* Scroll for full case study*/}
					  	 
					  	 {/*
							<h3>{singleCaseStudy.acf.location}</h3>
							<h3>{singleCaseStudy.acf.venue}</h3>
							<h3>{singleCaseStudy.acf.video_url}</h3>	
						*/}
									
						</div>
					</div> {/*end columns */}
					
					<div className="has-text-centered">
						{secondLandscapeImage ? (
							<Img 
							fluid ={singleCaseStudy.acf.second_landscape_image.localFile.childImageSharp.fluid}
							alt={singleCaseStudy.acf.client_name}/>
						) :
							<img src="https://picsum.photos/1920/675.jpg" alt="no image yet"/>
						}
					</div>
					
						      	
				</div> {/*end container fluid*/}
			</CaseStudyStyle>
	      <FooterWrapper />
		</Layout>
	)
}

export const query = graphql`
	query ($slug: String) {
	  wordpressWpCasestudy(slug: { eq: $slug }) {
	    content
	    title
	    slug
	    acf {
	      client_name
	      location
	      venue
	      project_event_name
	      video_url
	      first_image{
		    alt_text
		    id
		    source_url  
		    localFile{
			    childImageSharp{
				    fluid(maxWidth: 1193, quality: 100) {
	      				...GatsbyImageSharpFluid
	   				}
			    }
		    }
	      }
	      second_landscape_image{
		    alt_text
		    id
		    source_url
		    localFile{
			    childImageSharp{
				    fluid(maxWidth: 1920, quality: 100) {
	      				...GatsbyImageSharpFluid
	   				}
			    }
		    }
	      }
	      client_category {
	        label
	        value
	      }
	    }
	  }
	}	
`;