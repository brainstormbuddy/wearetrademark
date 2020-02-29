import React from 'react'
import ReactDOM from 'react-dom'
import { useStaticQuery, graphql } from 'gatsby'

import CaseStudyModal from './CaseStudyModal'

import { Slide } from 'react-slideshow-image'

import slack from './img/slack/art-bg.svg'
import adobe from './img/MaskAdobe.svg'
import charity from './img/MaskCharity.svg'

import XIcon from './img/Path.svg'

import CasestudyStyle from './Wrapper'


const Slideshow = () => {
    
    const data = useStaticQuery(graphql`
		query HomeCaseStudyQuery {
		  allWordpressWpCasestudy(limit: 3, sort: {order: ASC, fields: title}) {
		      nodes {
		        content
		        slug
		        path
		        title
		        acf {
		          project_event_name
		          video_url
				  # background_color_home_case_study
				  # background_image_home_case_study{
					#  source_url
				  #}
		        }
		    }
		  }
		}	
	`)
    
    
    let slideImages = [slack, adobe, charity];
    let slidebgcolor = ['#FF4274', '#95A84C', '#66BFF2'];

	let properties = {
	  autoplay: false,
	  duration: 5000,
	  transitionDuration: 500,
	  infinite: true,
	  indicators: false,
	  arrows: true,
	  onChange: (oldIndex, newIndex) => {
	    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
	  }
	}
	
	{/*backgroundColor: `${casestudy.acf.background_color_home_case_study}`*/}
	    
    return (
      <CasestudyStyle>
      <div className="slide-container">
        <Slide {...properties}>
          {data.allWordpressWpCasestudy.nodes.map((casestudy, i) => (
          <div key={i} className="each-slide" style={{backgroundImage: `url(${slideImages[i]})`, backgroundColor: `${slidebgcolor[i]}`}}>
            <div className="container">
          	  <div className="columns is-mobile is-centered">
				  <div className="column is-6-desktop is-two-thirds-tablet is-two-thirds-mobile x-icon" style={{position: `relative`}}>



<svg>
    <defs>
    <clipPath id="clip-01" clipPathUnits="objectBoundingBox" transform="scale(0.00061959, 0.00090)">
        <path d="M1076.42652,940.677286 C1049.27954,967.796939 1005.25972,967.796939 978.109323,940.677286 L810.967357,773.724593 L643.82881,940.677286 C616.678412,967.796939 572.658594,967.796939 545.508196,940.677286 C518.361217,913.554219 518.361217,869.587664 545.508196,842.471427 L712.650162,675.515318 L545.508196,508.562625 C518.361217,481.446388 518.361217,437.476418 545.508196,410.356765 C572.658594,383.237113 616.678412,383.237113 643.82881,410.356765 L810.967357,577.309459 L978.109323,410.356765 C1005.25972,383.237113 1049.27954,383.237113 1076.42652,410.356765 C1103.58033,437.476418 1103.58033,481.446388 1076.42652,508.562625 L909.28797,675.515318 L1076.42652,842.471427 C1103.58033,869.587664 1103.58033,913.554219 1076.42652,940.677286 L1076.42652,940.677286 Z" id="path-1"></path>
    </clipPath>
    </defs>
</svg>






{/*
<svg>
<clipPath id="clip-01" clipPathUnits="objectBoundingBox" transform="scale(0.0009999 0.000859999)">
<path d="M500,623.8L159.9,963.9c-34.6,34.6-90.1,34.7-124.3,0.5c-34.4-34.4-34-89.8,0.5-124.3L376.2,500L36.1,159.9C1.5,125.3,1.4,69.8,35.6,35.6c34.4-34.4,89.8-34,124.3,0.5L500,376.2L840.1,36.1c34.6-34.6,90.1-34.7,124.3-0.5c34.4,34.4,34,89.8-0.5,124.3L623.8,500l340.1,340.1c34.6,34.6,34.7,90.1,0.5,124.3c-34.4,34.4-89.8,34-124.3-0.5L500,623.8z"/>
</clipPath>
</svg>
*/}

				  		

		<div className="video-container">
			<video loop autoPlay muted playsInline>
				<source src="http://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4" type="video/mp4" />
			</video>  
		</div>

				
				  		<CaseStudyModal 
				  			idVideo={casestudy.acf.video_url}
				  			caseURL={`/casestudy/${casestudy.slug}`}
				  		/>
				  		
				  		<div className="x-icon-txt">whatmarkwillyouleave</div>
				  </div>
				</div>
				
				<div className="columns is-mobile is-centered">
				  <div className="column is-6-desktop is-two-thirds-tablet is-two-thirds-mobile x-icon" style={{position: `relative`}}>		
				  
				  
	              		<h2 className="title has-text-white">{casestudy.title}</h2>
	              		<h3 className="subtitle has-text-white">{casestudy.acf.project_event_name}</h3>
	              		<div dangerouslySetInnerHTML={{ __html: casestudy.content }}/>
	              		
	              </div>
	            </div>				  
            </div> 
          </div>
         ))} 
        </Slide>
        <div className="has-text-centered xx">Some of our clients</div>
      </div>
    </CasestudyStyle>
    )
}

export default Slideshow