import React from 'react'
import Section from './Wrapper'

const HomeHeading = () => {
	return(
		<Section className="section">
	        	<div className="container">
	        		<div className="columns">
	        			<div className="column">
	        				<h1 className="has-text-weight-normal has-text-grey-dark">Some of our <strong>Good Work</strong></h1>
	        			</div>
						<div className="column">
	        				<p className="has-text-black is-size-4">We have worked with hundreds of enterprises globally on a journey of over a decade. If you need more work samples, please let us know and we would be happy to provide them.</p>
							<div className="wp-block-button is-pulled-left"><a className="button is-link is-large" href="">Let’s Talk →</a></div>
							<div className="wp-block-button is-pulled-left is-style-black-outline"><a className="button is-large" href="">Our Solutions</a></div>
						</div>
					</div>
	        	</div>
		</Section>
	);
}

export default HomeHeading