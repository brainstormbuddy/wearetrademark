import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from './Wrapper'

const HomeAbout = () => {
	
	const data = useStaticQuery(graphql`
		query HomeAboutQuery {
		  wordpressPage {
		      acf {
		        descriptions_section_two
		        heading_section_two
		        text_in_right_side
		      }
		    }
		}	
	`)
	
	return (
		
		<Section className="section" id="goBoldly">
	    	<div className="hero-body">
		    	<div className="container">
		    		<div className="columns is-mobile is-centered">
						<div className="column is-half-desktop is-full-mobile is-full-tablet home-about">
						{data.wordpressPage.acf.heading_section_two ? (
							<h2 className="title has-text-white has-text-left">
								{data.wordpressPage.acf.heading_section_two}
							</h2>
						): null }
						{data.wordpressPage.acf.descriptions_section_two ? (
						<div dangerouslySetInnerHTML={{ __html: data.wordpressPage.acf.descriptions_section_two }}/>
						): null }
						{data.wordpressPage.acf.text_in_right_side ? (
						<div className="who-we-are">{data.wordpressPage.acf.text_in_right_side}</div>
						): null }
						</div>
					</div>
		    	</div>
	    	</div>
	    </Section>
	)
}

export default HomeAbout