import React from 'react'
import Section from './Wrapper'

const HomeAbout = () => {
	return (
		<Section className="section bg-yellow hero is-fullheight" id="goBoldly">
	    	<div className="hero-body">
		    	<div className="container">
		    		<div className="columns">
						<div className="column is-half is-offset-one-quarter home-about">
							<h2 className="title has-text-white has-text-left">Go boldly forth and leave your mark.</h2>
								<p className="has-text-white">It’s what we do every day. But leaving your mark—truly indelible marks—takes imagination, vision and hard work. Not to mention a complete disregard for following the status quo. There’s also the technical expertise and logistical wizardry. Plus a few (hundred) established partners who share your vision.
								</p>
								<p className="has-text-white">All of this is what makes up our DNA. And for over 20 years, we’ve stayed true to who we are: creating, producing and orchestrating unique, memorable marks for clients all over the globe. Are you ready to leave your mark? If so, we’re ready to go forth with you. </p>
						<div className="who-we-are">who we are</div>
						</div>
					</div>
		    	</div>
	    	</div>
	    </Section>
	)
}

export default HomeAbout