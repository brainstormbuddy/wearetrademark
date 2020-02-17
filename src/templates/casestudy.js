import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql, Link } from 'gatsby'
//import { Slide } from 'react-slideshow-image'
import Img from 'gatsby-image'
import Layout from '../components/Layout'

import ModalVideo from './CasestudyModalVideo'

import FooterWrapper from '../components/Footer'
import userConfig from '../../config'

import CaseStudyStyle from './CasestudyStyle'
import './CasestudyStyle.css'

export default CaseStudy => {
	
	const singleCaseStudy = CaseStudy.data.wordpressWpCasestudy
	
	let firstImage, secondLandscapeImage, caseStudyGallery = false
	
	if (singleCaseStudy.acf.first_image && singleCaseStudy.acf.first_image.source_url ) {
    	firstImage = singleCaseStudy.acf.first_image.source_url;
  	}
  	if (singleCaseStudy.acf.second_landscape_image && singleCaseStudy.acf.second_landscape_image.source_url ) {
    	secondLandscapeImage = singleCaseStudy.acf.second_landscape_image.source_url;
  	}
  	if (singleCaseStudy.acf.case_study_gallery ) {
    	caseStudyGallery = singleCaseStudy.acf.case_study_gallery;
  	}
  	
  	const parallaxStyle = {
	  backgroundImage: `url(${secondLandscapeImage})`,
	
	  height: `675px`,
	
	  backgroundAttachment: `fixed`,
	  backgroundPosition: `center`,
	  backgroundRepeat: `no-repeat`,
	  backgroundSize: `cover`
  	}
  	const noParallaxStyle = {
	  backgroundImage: `url('https://picsum.photos/1920/675.jpg')`,
	
	  height: `675px`,
	
	  backgroundAttachment: `fixed`,
	  backgroundPosition: `center`,
	  backgroundRepeat: `no-repeat`,
	  backgroundSize: `cover`
  	}
{/*
  	
  	let properties = {
	  autoplay: false,
	  duration: 5000,
	  transitionDuration: 500,
	  infinite: true,
	  indicators: true,
	  arrows: true,
	  onChange: (oldIndex, newIndex) => {
	    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
	  }
	}
*/}
  	
  	
  	
  		
	return (
		<Layout>
	      	
		  	<Helmet title={`${singleCaseStudy.title} | ${userConfig.title}`}>
	        	<meta name="description" content={`${singleCaseStudy.content}`}/>
				<body className="single casestudy xtrademark" />
			</Helmet>
			<CaseStudyStyle>
		      	<section className="hero is-fullheight">
		      		<div className="columns is-vcentered is-marginless casestudyHeader">
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
					  	 	<ModalVideo videoID = {singleCaseStudy.acf.video_url} />
					  	 </div>									
						
						</div> {/*end column */}
					</div> {/*end columns */}
				</section> {/*end section*/}
				
				{/* Scroll for full case study*/}
				<section className="scroller-section">
					<div className="columns" style={{marginBottom: `0`}}>
						<div className="column is-7"></div>
						<div className="column is-4 scroller-wrapper">
							<div className="scroller">Scroll for full case study</div>
						</div>
					</div>
				</section>
				
				
				<section className="has-background-none">	
					
						{secondLandscapeImage ? (
							<div className="parallax" style={parallaxStyle}></div>
						) :
							<div className="noParallax" style={noParallaxStyle}></div>
						}
				</section>{/*end section*/}
					
				<section className="has-background-green hero is-small">
					<div className="hero-body">
						<div className="container">
							<div className="columns is-multiline infographics">
								<div className="column is-2 has-border-left has-border-right">
									<em>Client:</em>
									<div>{singleCaseStudy.acf.client_name}</div>
								</div>
								<div className="column is-3 has-border-right">
									<em>Event:</em>
									<div>{singleCaseStudy.acf.project_event_name}</div>
								</div>
								<div className="column is-2 has-border-right">
									<em>Location:</em>
									<div>{singleCaseStudy.acf.location}</div>
								</div>
								<div className="column is-2 has-border-right">
									<em>Venue:</em>
									<div>{singleCaseStudy.acf.venue}</div>
								</div>
								<div className="column is-2"></div>
							</div>
								
							<div className="infographics-info">
								<img src="https://picsum.photos/1920/1937.jpg" alt="no image yet"/>
							</div>
						</div>
					</div>
				</section> {/*end section*/}
{/*
				
				<section className="has-background-white hero is-medium gallery">
					<div className="hero-body">
						<div className="container">
							{caseStudyGallery ? (						
								<div className="slide-container">
							        <Slide {...properties}>
							          {singleCaseStudy.acf.case_study_gallery.map((each, index)=> (
							            <img key={index} src={each.source_url} alt={singleCaseStudy.acf.client_name}/>
							          ))}
							        </Slide>
							    </div>
							    ) :
							    <section className="hero is-small is-warning is-bold">
							      <div className="hero-body">
							          <h2 className="title has-text-centered">No images are found!!</h2>
							          <p className="subtitle has-text-centered">Please upload images in case study gallery in WordPress dashboard.</p>
							      </div>
							    </section>
							}
						</div>
					</div>
				</section>
*/} {/*end section*/}
				
				<section className="has-background-yellow hero is-large">
					<div className="hero-body">
						<div className="container">
							<div className="related-article">
								
							</div>
						</div>
					</div>
				</section> {/*end section*/}
					
						      	
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
	      case_study_gallery{
		    source_url  
		    localFile{
			    childImageSharp{
				    fluid(maxWidth: 1416, quality: 100) {
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